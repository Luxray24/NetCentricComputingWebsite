var classifications;
var elements;
var color1;
var color2;
var borderColor;
var borderStyle;
var borderRadius;
var borderWidth;
var font;
var fontSize;
var fontWeight;
var dcolor1;
var dcolor2;
var dborderColor;
var dborderStyle;
var dborderRadius;
var dborderWidth;
var dfont;
var dfontSize;
var dfontWeight;

function initChangeStyles() {
	dcolor1 = $('#Color1').val();
	dcolor2 = $('#Color2').val();
	dborderColor = $('#BorderColor').val();
	dborderStyle = $('#BorderStyle option:selected').val();
	dborderRadius = [$('#BorderTopLeftRadius').val(), $('#BorderTopRightRadius').val(), $('#BorderBottomLeftRadius').val() , $('#BorderBottomRightRadius').val()];
	dborderWidth = $('#BorderWidth').val();
	dfont = $('#Font').val();
	dfontSize = $('#FontSize').val();
	dfontWeight = $('#FontWeight option:selected').val();
	
	color1 = "#" + dcolor1;
	color2 = "#" + dcolor2;
	borderColor = "#" + dborderColor;
	borderStyle = dborderStyle;
	borderRadius = [dborderRadius[0] + "px", dborderRadius[1] + "px", dborderRadius[2] + "px", dborderRadius[3] + "px"];
	borderWidth = dborderWidth + "px";
	font = dfont;
	fontSize = dfontSize + "px";
	fontWeight = dfontWeight;

	$(document).ready(changeStyles(color1, color2, borderColor, borderStyle, borderRadius, borderWidth, font, fontSize, fontWeight));
}

function initialStyles() {
	dcolor1 = "000710";
	dcolor2 = "FB4E12";
	dborderColor = "000710";
	dborderStyle = "double";
	dborderRadius = ["5", "5", "5", "5"];
	dborderWidth = "5";
	dfont = "Arial";
	dfontSize = "18.67";
	dfontWeight = "bold";
	
	color1 = "#" + dcolor1;
	color2 = "#" + dcolor2;
	borderColor = "#" + dborderColor;
	borderStyle = dborderStyle;
	borderRadius = [dborderRadius[0] + "px", dborderRadius[1] + "px", dborderRadius[2] + "px", dborderRadius[3] + "px"];
	borderWidth = dborderWidth + "px";
	font = dfont;
	fontSize = dfontSize + "px";
	fontWeight = dfontWeight;

	$(document).ready(changeStyles(color1, color2, borderColor, borderStyle, borderRadius, borderWidth, font, fontSize, fontWeight));
}

function changeStyles(color1, color2, borderColor, borderStyle, borderRadius, borderWidth, font, fontSize, fontWeight) {
	$("body").css({
		"background-color" : color1,
		"color" : color2,
		"font-family" : font,
		"font-size" : fontSize,
		"font-weight" : fontWeight
	});
	$("input").css({
		"background-color" : color2,
		"color" : color1,
		"border-color" : borderColor,
		"border-style" : borderStyle,
		"border-top-left-radius" : borderRadius[0],
		"border-top-right-radius" : borderRadius[1],
		"border-bottom-left-radius" : borderRadius[2],
		"border-bottom-right-radius" : borderRadius[3],
		"border-width" : borderWidth,
		"font-family" : font,
		"font-size" : fontSize,
		"font-weight" : fontWeight
	});
	$("select").css({
		"background-color" : color2,
		"color" : color1,
		"border-color" : borderColor,
		"border-style" : borderStyle,
		"border-top-left-radius" : borderRadius[0],
		"border-top-right-radius" : borderRadius[1],
		"border-bottom-left-radius" : borderRadius[2],
		"border-bottom-right-radius" : borderRadius[3],
		"border-width" : borderWidth,
		"font-family" : font,
		"font-size" : fontSize,
		"font-weight" : fontWeight
	});
	$("option").css({
		"background-color" : color2,
		"color" : color1,
		"border-color" : borderColor,
		"border-left-style" : borderStyle,
		"border-right-style" : borderStyle,
		"border-top-style" : "none",
		"border-bottom-style" : "none",
		"border-width" : borderWidth,
		"font-family" : font,
		"font-size" : fontSize,
		"font-weight" : fontWeight
	});
	$("option:first-child").css({
		"background-color" : color2,
		"color" : color1,
		"border-color" : borderColor,
		"border-left-style" : borderStyle,
		"border-right-style" : borderStyle,
		"border-top-style" : borderStyle,
		"border-bottom-style" : "none",
		"border-width" : borderWidth,
		"font-family" : font,
		"font-size" : fontSize,
		"font-weight" : fontWeight
	});
	$("option:last-child").css({
		"background-color" : color2,
		"color" : color1,
		"border-color" : borderColor,
		"border-left-style" : borderStyle,
		"border-right-style" : borderStyle,
		"border-top-style" : "none",
		"border-bottom-style" : borderStyle,
		"border-width" : borderWidth,
		"font-family" : font,
		"font-size" : fontSize,
		"font-weight" : fontWeight
	});
	$("button").css({
		"background-color" : color2,
		"color" : color1,
		"border-color" : borderColor,
		"border-style" : borderStyle,
		"border-top-left-radius" : borderRadius[0],
		"border-top-right-radius" : borderRadius[1],
		"border-bottom-left-radius" : borderRadius[2],
		"border-bottom-right-radius" : borderRadius[3],
		"border-width" : borderWidth,
		"font-family" : font,
		"font-size" : fontSize,
		"font-weight" : fontWeight
	});
	$("a").css({
		"color" : color2,
		"font-family" : font,
		"font-size" : fontSize,
		"font-weight" : fontWeight
	});
}

function onLoad() {
	//alert("In onLoad()");
	$('#StyleDiv').css({
		"display" : "none"
	});
	getClassifications(false);
	getElements(false);
	initialStyles();
}

function styles() {
	$('#dbInsert').css({
		"display" : "none"
	});
	$('#StyleDiv').css({
		"display" : "inline"
	});
	initPopulate();
}

function insertData() {
	$('#dbInsert').css({
		"display" : "inline"
	});
	$('#StyleDiv').css({
		"display" : "none"
	});
}

function initPopulate() {
	$(document).ready(populate());
}

function populate() {
	document.getElementsByTagName("INPUT")[3].setAttribute("value", dcolor1);
	document.getElementsByTagName("INPUT")[4].setAttribute("value", dcolor2);
	document.getElementsByTagName("INPUT")[5].setAttribute("value", dborderColor);
	document.getElementsByTagName("INPUT")[6].setAttribute("value", dborderRadius[0]);
	document.getElementsByTagName("INPUT")[7].setAttribute("value", dborderRadius[1]);
	document.getElementsByTagName("INPUT")[8].setAttribute("value", dborderRadius[2]);
	document.getElementsByTagName("INPUT")[9].setAttribute("value", dborderRadius[3]);
	document.getElementsByTagName("INPUT")[10].setAttribute("value", dborderWidth);
	document.getElementsByTagName("INPUT")[11].setAttribute("value", dfont);
	document.getElementsByTagName("INPUT")[12].setAttribute("value", dfontSize);
}

function insertElement() {
	var AtomicNumber,
	    classificationID,
	    Element,
	    AtomicMass;
	AtomicNumber = JSON.stringify($('#AtomicNumber').val());
	ClassificationID = JSON.stringify($('#Classifications option:selected').val());
	Element = JSON.stringify($('#Element').val());
	AtomicMass = JSON.stringify($('#AtomicMass').val());
	ajax = ajaxinsertElement("insertElement", AtomicNumber, ClassificationID, Element, AtomicMass);
	ajax.done(insertElementCallback);
	ajax.fail(function() {
		alert("Failure");
	});
}

function ajaxinsertElement(method, AtomicNumber, ClassificationID, Element, AtomicMass) {
	return $.ajax({
		url : 'dbInsert.php',
		type : 'POST',
		data : {
			method : method,
			AtomicNumber : AtomicNumber,
			ClassificationID : ClassificationID,
			Element : Element,
			AtomicMass : AtomicMass
		}
	});
}

function insertElementCallback(response_in) {
	response = JSON.parse(response_in);

	if (!response['success']) {
		$("#results").html("");
		alert("Insert failed on query:" + '\n' + response['querystring']);
		getElements(false);
		getClassifications(false);
	} else {
		$("results").html(response['querystring'] + '<br>' + response['success'] + '<br>');
		getElements(false);
		getClassifications(false);
	}
}

function showElements(elements) {
	//alert("In showELements()");
	//alert(elements);
	var elementList = "";
	$.each(elements, function(key, value) {
		var itemString = "";
		$.each(value, function(key, item) {
			itemString += item + "\t \t";
		});
		elementList += itemString + '<br>';
	});
	$("#results").html(elementList);
}

function getElements() {
	//alert("In getElements()");
	ajax = ajaxgetElements("getElements");
	ajax.done(getElementsCallback);
	ajax.fail(function() {
		alert("Failure");
	});
}

function ajaxgetElements(method) {
	//alert("In ajaxgetElements()");
	return $.ajax({
		url : 'dbInsert.php',
		type : 'POST',
		data : {
			method : method
		}
	});
}

function getElementsCallback(response_in) {
	//alert(response_in);
	var response = JSON.parse(response_in);
	elements = response["elements"];
	if (!response['success']) {
		$("#results").html("getElements() failed");
	} else {
		showElements(elements);
	}
}

function getClassifications() {
	//alert("In getClassifications()");
	ajax = ajaxgetClassifications("getClassifications");
	ajax.done(getClassificationsCallback);
	ajax.fail(function() {
		alert("Failure");
	});
}

function ajaxgetClassifications(method) {
	//alert("In ajaxgetClassifications()");
	return $.ajax({
		url : 'dbInsert.php',
		type : 'POST',
		data : {
			method : method
		}
	});
}

function getClassificationsCallback(response_in) {
	//alert("In getClassificationsCallback()");
	//alert(response_in);
	response = JSON.parse(response_in);
	$classifications = response["classifications"];
	//alert($classifications);
	if (!response['success']) {
		alert('Failed in getClassificationCallback');
		$("#results").html("getClassifications failed");
	} else {
		$('#Classifications').find('option').remove();
		//alert($classifications);
		$.each($classifications, function(key, columns) {
			$("#Classifications").append($('<option>', {
				value : columns[0].toString(),
				text : columns[1].toString()
			}));
		});
	}
}
