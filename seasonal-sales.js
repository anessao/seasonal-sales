var container = document.getElementById("container");
var seasonSelect = document.getElementById('season');
var categoryDiscounts = [];
var productData = [];

/********************************
INITIAL DOM WRITE FOR DEPT XHR DATA
********************************/
function departmentsDOM(xhrData){
	deptString = '';
	for (var a = 0; a < xhrData.categories.length; a++) {
		categories = xhrData.categories[a];
		deptString += `<div class="col-sm-4 col-md-4 departments" id="${categories.season_discount}">`;
		deptString += `<h3>${categories.name}</h3>`;
		deptString += `<div class="row" id='${categories.name}'></div>`;
		deptString += `</div>`;
		categoryDiscounts.push(categories.discount);
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
			var reducedX = productInfo.price - (productInfo.price * categoryDiscounts[0])
			apparelString += `<div class="col-sm-12 col-md-6">`
			apparelString += `<h5>${productInfo.name}</h5>`
			apparelString += `<div class="original-price"><h6>Price: ${productInfo.price}</h6></div>`
			apparelString += `<div class="sale-price hidden"><h6>Price: ${reducedX.toFixed(2)}</h6></div>`
			apparelString += `</div>`

		} else if (productInfo.category_id === 2) {
			var reducedY = productInfo.price - (productInfo.price * categoryDiscounts[1])
			furnitureString += `<div class="col-sm-12 col-md-6">`
			furnitureString += `<h5>${productInfo.name}</h5>`
			furnitureString += `<div class="original-price"><h6>Price: ${productInfo.price}</h6></div>`
			furnitureString += `<div class="sale-price hidden"><h6>Price: ${reducedY.toFixed(2)}</h6></div>`
			furnitureString += `</div>`
		} else if (productInfo.category_id === 3) {
			var reducedZ = productInfo.price - (productInfo.price * categoryDiscounts[0])
			householdString += `<div class="col-sm-12 col-md-6">`
			householdString += `<h5>${productInfo.name}</h5>`
			householdString += `<div class="original-price"><h6>Price: ${productInfo.price}</h6></div>`
			householdString += `<div class="sale-price hidden"><h6>Price: ${reducedZ.toFixed(2)}</h6></div>`
			householdString += `</div>`
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
function resetHidden(){
	var salePrices = document.getElementsByClassName("sale-price");
	for (var v = 0; v < salePrices.length; v++) {
		salePrices[v].classList.add("hidden");
	}
}

function setDiscount(){
	var winterEl = document.getElementById("Winter");
	var autumnEl = document.getElementById("Autumn");
	var springEl = document.getElementById("Spring");
	var setClass = seasonSelect.value;
	resetHidden();
	if (setClass === "Winter") {
		var hiddenWinter = winterEl.getElementsByClassName("hidden");
		autumnEl.classList.remove("discount");
		springEl.classList.remove("discount");
		winterEl.classList.add("discount");
		for (var j = 0; j <= hiddenWinter.length + 1; j++) {
			hiddenWinter[0].classList.remove("hidden");
		}
	} else if (setClass === "Autumn") {
		var hiddenAutumn = autumnEl.getElementsByClassName("hidden");
		winterEl.classList.remove("discount");
		springEl.classList.remove("discount");
		autumnEl.classList.add("discount");
		for (var m = 0; m <= hiddenAutumn.length + 1; m++) {
			hiddenAutumn[0].classList.remove("hidden");
		}
	} else if (setClass === "Spring") {
		var hiddenSpring = springEl.getElementsByClassName("hidden");
		winterEl.classList.remove("discount");
		autumnEl.classList.remove("discount");
		springEl.classList.add("discount");
		for (var n = 0; n <= hiddenSpring.length + 2; n++) {
			hiddenSpring[0].classList.remove("hidden");
		}
	}
}

seasonSelect.addEventListener("change", setDiscount);






