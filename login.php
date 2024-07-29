<?php
$servername = "localhost:3306";
$username = "root";
$password = "Low@@2004";
$dbname = "mycommunity";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get POST data
$phone = $_POST['phone'];
$password = $_POST['password'];

// Prepare and bind
$stmt = $conn->prepare("SELECT * FROM users WHERE phone = ? AND password = ?");
$stmt->bind_param("ss", $phone, $password);

// Execute statement
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    // User found
    echo json_encode(["success" => true]);
} else {
    // User not found
    echo json_encode(["success" => false]);
}

$stmt->close();
$conn->close();
?>
