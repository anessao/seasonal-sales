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
		deptString += `<div id='${categories.name}'></div>`;
		deptString += `</div></div></div>`;	
	};
	container.innerHTML = deptString;
}

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
			apparelString += productInfo.name + productInfo.price;
		} else if (productInfo.category_id === 2) {
			furnitureString += productInfo.name + productInfo.price;
		} else if (productInfo.category_id === 3) {
			householdString += productInfo.name + productInfo.price;
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
	
}
seasonSelect.addEventListener("change", setDiscount);












