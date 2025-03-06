<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>PHP LB_22</title>
</head>
<body>
    <h1>Лабораторная работа №22</h1>
    <h2>Вариант 15</h2>
    <?php
    // Вариант 15
    // Задание 2: Вычисление стоимости покупки (тетрадей)
    $notebooks_price = 2.50; // цена одной тетради
    $covers_price = 1.20; // цена одной обложки
    $quantity = 5; // количество тетрадей и обложек

    $total_cost = ($notebooks_price + $covers_price) * $quantity;
    echo "<h3>Итоговая стоимость покупки: $total_cost руб.</h3>";

    // Задание 3: Вывод фамилии и имени 11 раз
    $full_name = "Дунай Маргарита";
    echo "<h3>Фамилия и Имя:</h3>";
    for ($i = 0; $i < 11; $i++) {
        echo "$full_name<br>";
    }

    // Задание 4: Ассоциативный массив Студент и стипендий
    $students = array(
        "Иванов" => 200,
        "Петров" => 330,
        "Сидоров" => 800
    );
    echo "<h3>Стипендии студентов:</h3>";
    $total_scholarship = 0;
    foreach ($students as $name => $scholarship) {
        echo "$name: $scholarship руб.<br>";
        $total_scholarship += $scholarship;
    }
    echo "Суммарная величина начисленной стипендии: $total_scholarship руб.<br>";

    include "php\\string.php"
?>
    
</body>
</html>