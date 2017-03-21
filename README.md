# SEASONAL SALES | NSS ASSIGNMENT
#### [ORIGINAL ASSIGNMENT](https://github.com/nashville-software-school/front-end-milestones/blob/master/3-single-page-applications/exercises/SP_JS_XHR_SEASONAL_SALES.md)

##### Working with JSON files, printing to the DOM dynamically using javascript and implementing bootstrap styling.
##### Focus on functionality -> styling requirements: getting familiar with Bootstrap

#### ASSIGNMENT PARAMETERS:
1. Create an index.html [BOILERPLATE AND SAMPLE CODE WAS PROVIDED FOR THIS ASSIGNMENT]
1. Create and link a JavaScript and CSS file
1. Create and link multiple JSON files [BOILERPLATE AND SAMPLE CODE WAS PROVIDED FOR THIS ASSIGNMENT]
1. Build a webpage that does the following:
	- lists all of the products, the name of the department it's in, and the price
	- `<select>` element for users to chose the seasonal discount
		- Following code snippet for event listener on the select field:
			```
			seasonSelect.addEventListener("change", setDiscount);
			```
	- As soon as you select one of the seasons, all prices on the page should immediately be discounted by the corresponding percentage.
		- Following code snippet for adding a class to style and show the special sale
		```
		if (setClass === "Spring") {
			var hiddenSpring = springEl.getElementsByClassName("hidden");
			springEl.classList.add("discount");
			for (var n = 0; n <= hiddenSpring.length + 2; n++) {
				hiddenSpring[0].classList.remove("hidden");
		}
		```
	- load both file via XHRs and store the contents in two different JavaScript variables in your code.

#### HOW TO RUN CODE
```
1. git clone https://github.com/nss-evening-cohort-05/iife-translator-codemonkeys
2. cd iife-translator-codemonkeys
3. npm install http-server -g
4. http-server -p 8080
```

#### SCREENSHOT
![Screenshot]()

#### TECHNOLOGIES USED
- JavaScript
- HTML
- CSS
- JSON
- BOOTSTRAP

