// server/config.php
<?php
// Database configuration
$host = 'localhost';
$username = 'root';
$password = 'password';
$database = 'cab_system_db';

// Establish a database connection
$conn = mysqli_connect($host, $username, $password, $database);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
?>
