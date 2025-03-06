<?php
// Настройки подключения к базе данных
$servername = "localhost";
$username = "root"; // Замените на ваше имя пользователя
$password = ""; // Замените на ваш пароль

// Создание подключения
$conn = new mysqli($servername, $username, $password);

// Проверка подключения
if ($conn->connect_error) {
    die("Ошибка подключения: " . $conn->connect_error);
}

// Выбор базы данных
$conn->select_db("policlinika");

// Отображение содержимого таблицы
$sql = "SELECT * FROM vrach";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "<table border='1'><tr><th>id</th><th>Фамилия</th><th>Имя</th><th>Отчетчество</th><th>Дата рождения</th><th>Должность</th><th>Специализация</th></tr>";
    while($row = $result->fetch_assoc()) {
        echo "<tr><td>" . $row["id"]. "</td><td>" . $row["surname"]. "</td><td>" . $row["name"]. "</td><td>" . $row["patron"]. "</td><td>" . $row["date_bird"]. "</td><td>" . $row["dolg"]. "</td><td>" . $row["spez"]. "</td></tr>";
    }
    echo "</table>";
} else {
    echo "0 результатов";
}

// Редактирование данных
$sql = "UPDATE vrach SET spez = 'Невролог' WHERE spez = 'Невропатолог'";
if ($conn->query($sql) === TRUE) {
    echo "Данные успешно отредактированы<br>";
} else {
    echo "Ошибка редактирования данных: " . $conn->error . "<br>";
}

// Отображение содержимого таблицы
$sql = "SELECT * FROM vrach";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "<table border='1'><tr><th>id</th><th>Фамилия</th><th>Имя</th><th>Отчетчество</th><th>Дата рождения</th><th>Должность</th><th>Специализация</th></tr>";
    while($row = $result->fetch_assoc()) {
        echo "<tr><td>" . $row["id"]. "</td><td>" . $row["surname"]. "</td><td>" . $row["name"]. "</td><td>" . $row["patron"]. "</td><td>" . $row["date_bird"]. "</td><td>" . $row["dolg"]. "</td><td>" . $row["spez"]. "</td></tr>";
    }
    echo "</table>";
} else {
    echo "0 результатов";
}

// Закрытие подключения
$conn->close();
?>
