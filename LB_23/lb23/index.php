<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>PHP LB_23</title>
</head>
<body>
    <h1>Лабораторная работа №23</h1>
    <?php
    // Пример 1: Создание файла и запись в него
$file = 'example.txt';
$file2 = 'example2.txt';
$content = "Это пример записи в файл.</br>";

file_put_contents($file, $content);
file_put_contents($file2, $content);
echo "Файл '$file' успешно создан и записан.</br>";

// Пример 2: Чтение содержимого файла
$file = 'example.txt';

if (file_exists($file)) {
    $content = file_get_contents($file);
    echo "Содержимое файла '$file':</br>$content";
} else {
    echo "Файл '$file' не существует.</br>";
}

// Пример 3: Переименование файла
$oldFile = 'example2.txt';
$newFile = 'renamed_example.txt';
$oldFile2 = 'example.txt';
$newFile2 = 'renamed_example2.txt';
rename($oldFile2, $newFile2);
if (rename($oldFile, $newFile)) {
    echo "Файл '$oldFile' успешно переименован в '$newFile'.</br>";
} else {
    echo "Ошибка при переименовании файла.</br>";
}

// Пример 4: Удаление файла
$file = 'renamed_example.txt';

if (file_exists($file) && unlink($file)) {
    echo "Файл '$file' успешно удален.</br>";
} else {
    echo "Ошибка при удалении файла или файл не существует.</br>";
}

// Задание №2: Работа с датой и временем
// 1. Вывод текущей даты и времени
// Текущая дата и время
$date = date('j. n. Y'); // Краткий формат даты
$time = date('H:i:s');    // Время
$dayOfWeek = date('l');   // День недели

echo "$date\n$time\n$dayOfWeek\n";

// Функция для получения дня недели на русском языке
function getRussianWeekday($date) {
    $weekday = date('D', strtotime($date));
    switch ($weekday) {
        case 'Mon':
            return "понедельник";
        case 'Tue':
            return "вторник";
        case 'Wed':
            return "среда";
        case 'Thu':
            return "четверг";
        case 'Fri':
            return "пятница";
        case 'Sat':
            return "суббота";
        case 'Sun':
            return "воскресенье";
        default:
            return "неизвестный день";
    }
}

// Проверка функции для текущей даты
$currentDate = date('Y-m-d');
echo "Сегодня: " . getRussianWeekday($currentDate) . "</br>";

// HTML-форма для отображения дня недели
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $today = date('Y-m-d');
    echo "Сегодня: " . getRussianWeekday($today) . "</br>";
} else {
    echo '<form method="post">
            <button type="submit">Показать день недели</button>
          </form>';
}

?>
    
</body>
</html>