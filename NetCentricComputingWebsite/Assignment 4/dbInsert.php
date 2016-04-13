<?php

require("creds.php");

echo $_POST["method"]();

function sanitize($str, $quotes = ENT_NOQUOTES) {
    $str = htmlspecialchars($str, $quotes);
    return $str;
}

function getElements() {
    alert("In getElements()");
    $dbConn = mysqli_connect(server(), username(), password(), db());

    $query = "SELECT * FROM Elements";
    $result = $dbConn->query($query);
    if ($dbConn->connect_error) {
        alert("connect_error");
        $return->connect_error = "Connection failed: " . $dbConn->connect_error;
        $return->success = false;
        return json_encode($return);
    }

    $elements = array();

    if ($result) {
        while ($row = $result->fetch_array()) {
            $allColumns = array();
            for ($i = 0; $i < 4; $i++) {
                array_push($allColumns, $row[$i]);
            }
            array_push($elements, $allColumns);
        }
    }

    $return = new StdClass();
    $return->success = true;
    $return->elements = $elements;
    $return->querystring = $query;
    $return->credentials = username() .
            password() .
            db() .
            " on " .
            server();
    return json_encode($return);
}

function getClassifications() {
    echo "<script type='text/javascript'>alert('In getClassifications() PHP');</script>";
    $dbConn = mysqli_connect(server(), username(), password(), db());

    $query = "SELECT * FROM Classifications";
    $result = $dbConn->query($query);
    if ($dbConn->connect_error) {
        alert("connect_error");
        $return->connect_error = "Connection failed: " . $dbConn->connect_error;
        $return->success = false;
        return json_encode($return);
    }

    $classifications = array();

    if ($result) {
        while ($row = $result->fetch_array()) {
            $allColumns = array();
            for ($i = 0; $i < 4; $i++) {
                array_push($allColumns, $row[$i]);
            }
            array_push($classifications, $allColumns);
        }
    }

    $return = new StdClass();
    $return->success = true;
    $return->classifications = $classifications;
    $return->querystring = $query;
    $return->credentials = username() .
            password() .
            db() .
            " on " .
            server();
    return json_encode($return);
}

function insertElement() {
    if (isset($_POST['ClassificationID'])) {
        $ClassificationID = json_decode(sanitize($_POST['ClassificationID']));
    }

    if (isset($_POST['Element'])) {
        $Element = json_decode(sanitize($_POST['Element']));
    }

    if (isset($_POST['AtomicMass'])) {
        $AtomicMass = json_decode(sanitize($_POST['AtomicMass']));
    }

    $dbConn = mysqli_connect(server(), username(), password(), db("Elements"));

    if ($dbConn->connect_error) {
        die("Connection failed: " . $dbConn->connect_error);
    }

    $query = "INSERT INTO Elements ( ClassificationID, Element, AtomicMass ) " .
            "VALUES ( " .
            "" . $ClassificationID . ", " .
            "'" . $Element . "', " .
            "" . $AtomicMass . " );";
    $result = $dbConn->query($query);
    $return = new stdClass;
    $return->querystring = (string) $query;
    if ($result) {
        $return->success = true;
    } else {
        $return->success = false;
    }
    return json_encode($return);
}
