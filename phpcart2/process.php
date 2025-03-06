<?php
session_start(); // Начинаем сессию

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Получаем данные из формы
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    
    // Сохраняем данные в сессионные переменные
    $_SESSION['name'] = $name;
    $_SESSION['email'] = $email;

    // Перенаправляем на страницу 2.php
    header("Location: 2.php");
    exit();
} else {
    echo "Данные не были отправлены.";
}
?>