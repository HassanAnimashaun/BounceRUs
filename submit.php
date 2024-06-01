<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phonenumber = $_POST["telephone"];
    $date = $_POST["date"];
    $timeframe = $_POST["timeframe"];
    $starttime = $_POST["start"];
    $endtime = $_POST["end"];

    // Define the email details
    $to = "bouncerus910@gmail.com";
    $subject = "Reservation Request";
    $header = "From: $email\n";

    // User email details
    $user = $email;
    $usersubject = "Thank You!";
    $userheader = "From: bouncerus910@gmail.com\n";

    // Function definitions
    function daily($name, $date, $phonenumber) {
        $dailymessage = "Hello, this is $name reserving a bounce house on $date.\nYou can contact me at $phonenumber.";
        return $dailymessage;
    }

    function hourly($name, $date, $phonenumber, $starttime, $endtime) {
        $hourlymessage = "Hello, this is $name reserving a bounce house on $date starting from $starttime to $endtime.\nYou can contact me at $phonenumber.";
        return $hourlymessage;
    }

    function userdaily() {
        $usermessage = "Thank you for choosing BounceRUs. We will be in contact with you shortly regarding your daily reservation.";
        return $usermessage;
    }

    function userhourly() {
        $usermessage = "Thank you for choosing BounceRUs. We will be in contact with you shortly regarding your hourly reservation.";
        return $usermessage;
    }

    // Determine the message based on the timeframe
    if ($timeframe === "daily") {
        $message = daily($name, $date, $phonenumber);
        $usermessage = userdaily();
    } else {
        $message = hourly($name, $date, $phonenumber, $starttime, $endtime);
        $usermessage = userhourly();
    }

    // Send emails
    mail($to, $subject, $message, $header);
    mail($user, $usersubject, $usermessage, $userheader);
} else {
    echo "Invalid request method.";
}
?>