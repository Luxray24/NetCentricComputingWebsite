var classifications;
var elements;

function onLoad(){
	getClassifications(false);
	getElements(false);
}

function insertElement(){
	var ClassificationID, Element, AtomicMass;
	ClassificationID = JSON.stringify($('#Classifications option:selected').val());
	Element = JSON.stringify($('#Element').val());
	AtomicMass = JSON.stringify($('#AtomicMass').val());
	ajax = ajaxinsertElement("insertElement", ClassificationID, Element, AtomicMass);
	ajax.done(insertElementCallback);
	ajax.fail(function(){
		alert("Failure");
	});
}

function ajaxinsertElement(method, ClassificationID, Element, AtomicMass){
	return $.ajax({
		url: 'dbInsert.php',
		type: 'POST',
		data: {
			method: method,
			ClassificationID: ClassificationID,
			Element: Element,
			AtomicMass: AtomicMass
		}
	});
}

function insertElementCallback(response_in){
	response = JSON.parse(response_in);
	
	if(!response['success']){
		$("#results").html("");
		alert("Insert failed on query:" + '\n' + response['querystring']);
	} else{
		$("results").html(
			response['querystring'] + '<br>' +
			response['success'] + '<br>'
		);
		getElements(false);
		getClassifications(false);
	}
}

function showElements(){
	var elementList = "";
	{
		$.each(elements, function(key, value){
			var itemString = "";
			$.each(value, function(key, item){
				itemString+= item + ""
			});
			elementList += itemString + '<br>';
		});
		$("#elements").html(elementList);
	}
}

function getElements(){
	ajax = ajaxgetElements("getElements", async);
	ajax.done(getElementsCallback);
	ajax.fail(function () {
		alert("Failure");
	});
}

function ajaxgetElements(method, async){
	return $.ajax({
		url: 'dbInsert.php',
		type: 'POST',
		async: async,
		data: {method: method}
	});
}

function getElementsCallback(response_in){
	var response = JSON.parse(response_in);
	elements = response["Elements"];
	if(!response['success']){
		$("#results").html("getElements() failed");
	}
}

function getClassifications(async){
	ajax = ajaxgetClassifications("getClassifications", async);
	ajax.done(getClassificationsCallback);
	ajax.fail(function () {
		alert("Failure");
	});
}

function ajaxgetClassifications(method, async){
	return $.ajax({
		url: 'dbInsert.php',
		type: 'POST',
		async: async,
		data: {method: method}
	});
}

function getClassificationsCallback(response_in){
	var response = JSON.parse(response_in);
	classifications = response["Classifications"];
	if(!response['success']){
		$("#results").html("getClassifications failed");
	} else{
		$("#Classifications").find('option').remove();
		$.each(classifications,
			function(key, columns){
				$("#Classifications")
				.append($('<option>',
				{
					value: columns[0].toString(),
					text: columns[1].toString()
				}));
			});
	}
}
