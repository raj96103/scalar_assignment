// server/routes.php
<?php
include 'db.php';

// Define API endpoints and actions
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Handle POST requests
    $data = json_decode(file_get_contents('php://input'), true);
    
    if (isset($data['action'])) {
        $action = $data['action'];
        
        switch ($action) {
            case 'bookCab':
                // Extract data and call the booking function
                $source = $data['source'];
                $destination = $data['destination'];
                $email = $data['email'];
                $cabType = $data['cabType'];
                $result = bookCab($source, $destination, $email, $cabType);
                echo json_encode($result);
                break;
            // Add more API endpoints for other actions
        }
    }
}
?>
