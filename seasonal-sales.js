var container = document.getElementById("container");
var seasonSelect = document.getElementById('season');

/********************************
INITIAL DOM WRITE FOR DEPT XHR DATA
********************************/
function departmentsDOM(xhrData){
	deptString = '';
	for (var a = 0; a < xhrData.categories.length; a++) {
		categories = xhrData.categories[a];
		deptString += `<div class="col-sm-4 col-md-4 departments" id="${categories.season_discount}">`;
		deptString += `<div class="thumbnail">`;
		deptString += `<div class="caption">`;
		deptString += `<h3>${categories.name}</h3>`;
		deptString += `<div class="row" id='${categories.name}'></div>`;
		deptString += `</div></div></div>`;	
	};
	container.innerHTML = deptString;
}

/********************************
INITIAL DOM WRITE FOR PRODUCTS XHR DATA
********************************/
function productsDOM (xhrData) {
	var apparel = document.getElementById("Apparel");
	var furniture = document.getElementById("Furniture");
	var household = document.getElementById("Household");
	
	var apparelString = ''
	var furnitureString = ''
	var householdString = ''
	for (var b = 0; b < xhrData.products.length; b++){
		var productInfo = xhrData.products[b];
		if (productInfo.category_id === 1) {
			apparelString += `<div class="col-sm-12 col-md-6">`
			apparelString += `<div class="thumbnail">`
			apparelString += `<img src="..." alt="...">`
			apparelString += `<div class="caption"><h5>${productInfo.name}</h5>`
			apparelString += `<div class="price"><h6>Price: ${productInfo.price}</h6>`
			apparelString += `</div></div></div></div>`
		} else if (productInfo.category_id === 2) {
			furnitureString += `<div class="col-sm-12 col-md-6">`
			furnitureString += `<div class="thumbnail">`
			furnitureString += `<img src="..." alt="...">`
			furnitureString += `<div class="caption"><h5>${productInfo.name}</h5>`
			furnitureString += `<div class="price"><h6>Price: ${productInfo.price}</h6>`
			furnitureString += `</div></div></div></div>`
		} else if (productInfo.category_id === 3) {
			householdString += `<div class="col-sm-12 col-md-6">`
			householdString += `<div class="thumbnail">`
			householdString += `<img src="..." alt="...">`
			householdString += `<div class="caption"><h5>${productInfo.name}</h5>`
			householdString += `<div class="price"><h6>Price: ${productInfo.price}</h6>`
			householdString += `</div></div></div></div>`
		}
	}
	apparel.innerHTML = apparelString;
	furniture.innerHTML = furnitureString;
	household.innerHTML = householdString;
}

/********************************
XHR DEPARTMENT FUNCTION EXECUTIONS
********************************/
function departments(){
	var data = JSON.parse(this.responseText);
	departmentsDOM(data);
}

/********************************
XHR PRODUCTS FUNCTION EXECUTIONS
********************************/
function products(){
	var data = JSON.parse(this.responseText);
	productsDOM(data);
	discountPrices(data);
}

function loadFail(){
	container.innerHTML = "There are currently no departments or products available"
}
/********************************
XMLH REQUEST FOR DEPARTMENTS AND FUNCTION EXECUTIONS
********************************/
var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", departments);
myRequest.addEventListener("error", loadFail);
myRequest.open("GET", "departments.json");
myRequest.send();

/********************************
XMLH REQUEST FOR PRODUCTS AND FUNCTION EXECUTIONS
********************************/
var myRequest2 = new XMLHttpRequest();
myRequest2.addEventListener("load", products);
myRequest2.addEventListener("error", loadFail);
myRequest2.open("GET", "products.json");
myRequest2.send();

/********************************
DISCOUNT CATEGORIES
********************************/
function setDiscount(){
	var winterEl = document.getElementById("Winter");
	var autumnEl = document.getElementById("Autumn");
	var springEl = document.getElementById("Spring");
	var setClass = seasonSelect.value;
	if (setClass === "Winter") {
		autumnEl.classList.remove("discount");
		springEl.classList.remove("discount");
		winterEl.classList.add("discount");
	} else if (setClass === "Autumn") {
		winterEl.classList.remove("discount");
		springEl.classList.remove("discount");
		autumnEl.classList.add("discount");
	} else if (setClass === "Spring") {
		winterEl.classList.remove("discount");
		autumnEl.classList.remove("discount");
		springEl.classList.add("discount");
	}

var discountedItems = document.getElementsByClassName("discount");
console.log(discountedItems);
}
seasonSelect.addEventListener("change", setDiscount);










