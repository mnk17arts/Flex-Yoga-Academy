<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');

include 'DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();


$method = $_SERVER['REQUEST_METHOD'];
switch($method) {
    case "POST":
        $user = json_decode( file_get_contents('php://input') ); 
        $sql = "INSERT INTO user_info (user_id, user_name, user_email, user_age, date_of_registration, payment_status, batch) VALUES (NULL, :user_name, :user_email, :user_age, current_timestamp(), :payment_status, :batch)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':user_name', $user->name);
        $stmt->bindParam(':user_email', $user->email);
        $stmt->bindParam(':user_age', $user->age);
        $stmt->bindParam(':payment_status', $user->payment);
        $stmt->bindParam(':batch', $user->batch);
        if($stmt->execute()) {
            $response = [
                'status' => 1,
                'message' => 'Registered Successfully'
            ];
        } else {
            $response = [
                'status' => 0,
                'message' => 'Registration Failed'
            ];
        }
        echo json_encode($response);
        break;

}

var_dump($conn);