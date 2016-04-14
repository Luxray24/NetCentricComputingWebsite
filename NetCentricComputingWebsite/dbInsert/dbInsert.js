var classifications;
var elements;

function onLoad() {
    //alert("In onLoad()");
    getClassifications(false);
    getElements(false);
}

function insertElement() {
    var AtomicNumber, classificationID, Element, AtomicMass; 
    AtomicNumber = JSON.stringify($('#AtomicNumber').val());
    ClassificationID = JSON.stringify($('#Classifications option:selected').val());
    Element = JSON.stringify($('#Element').val());
    AtomicMass = JSON.stringify($('#AtomicMass').val());
    ajax = ajaxinsertElement("insertElement", AtomicNumber, ClassificationID, Element, AtomicMass);
    ajax.done(insertElementCallback);
    ajax.fail(function () {
        alert("Failure");
    });
}

function ajaxinsertElement(method, AtomicNumber, ClassificationID, Element, AtomicMass) {
    return $.ajax({
        url: 'dbInsert.php',
        type: 'POST',
        data: {
            method: method,
            AtomicNumber: AtomicNumber,
            ClassificationID: ClassificationID,
            Element: Element,
            AtomicMass: AtomicMass
        }
    });
}

function insertElementCallback(response_in) {
    response = JSON.parse(response_in);

    if (!response['success']) {
        $("#results").html("");
        alert("Insert failed on query:" + '\n' + response['querystring']);
    } else {
        $("results").html(
                response['querystring'] + '<br>' +
                response['success'] + '<br>'
                );
        getElements(false);
        getClassifications(false);
    }
}

function showElements(elements) {
    //alert("In showELements()");
    //alert(elements);
    var elementList = "";
    $.each(elements, function (key, value) {
        var itemString = "";
        $.each(value, function (key, item) {
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
    ajax.fail(function () {
        alert("Failure");
    });
}

function ajaxgetElements(method) {
    //alert("In ajaxgetElements()");
    return $.ajax({
        url: 'dbInsert.php',
        type: 'POST',
        data: {method: method}
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
    ajax.fail(function () {
        alert("Failure");
    });
}

function ajaxgetClassifications(method) {
    //alert("In ajaxgetClassifications()");
    return $.ajax({
        url: 'dbInsert.php',
        type: 'POST',
        data: {method: method}
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
        $.each($classifications,
                function (key, columns) {
                    $("#Classifications")
                            .append($('<option>',
                                    {
                                        value: columns[0].toString(),
                                        text: columns[1].toString()
                                    }));
                });
    }
}
