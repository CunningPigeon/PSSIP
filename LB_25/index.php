<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php'; 


$mail = new PHPMailer(true);
    
    try {
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com'; 
        $mail->SMTPAuth   = true;
        $mail->Username   = 'margaritik.d@gmail.com'; 
        $mail->Password   = 'riea jdhk jsyq otrf'; 
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;
        $mail->CharSet    = 'UTF-8';

        $email ='margaritik.d@gmail.com';
        $message = "текстовое сообщение";

        $mail->setFrom('margaritik.d@gmail.com', 'Пользователь');
        $mail->addAddress($email); 

        $mail->Subject = 'Новое сообщение от пользователя!';
        $mail->Body    = "Тексовое сообщение";

        $mail->send();
        echo json_encode(["status" => "success", "message" => "Ваше сообщение отправлено!"]);
    } catch (Exception $e) {
        echo json_encode(["status" => "error", "message" => "Ошибка отправки: " . $mail->ErrorInfo]);
    }

?>