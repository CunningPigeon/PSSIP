<?php
session_start(); // Начинаем сессию

if (isset($_SESSION['name']) && isset($_SESSION['email'])) {
    // Получаем данные из сессии
    $name = $_SESSION['name'];
    $email = $_SESSION['email'];
    $session_id = session_id(); // Получаем идентификатор сессии

    // Выводим данные
    echo "<h2>Данные пользователя:</h2>";
    echo "Телефон: " . $name . "<br>";
    echo "Электронная почта: " . $email . "<br>";
    echo "Идентификатор сессии: " . $session_id . "<br>";
} else {
    echo "Сессионные данные отсутствуют.";
}
?>
