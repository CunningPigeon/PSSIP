<?php
// Указываем путь к файлу
$filename = '1.txt';

// Проверяем, существует ли файл
if (file_exists($filename)) {
    // Открываем файл для чтения
    $file = fopen($filename, 'r');

    // Читаем и выводим первые две строки
    for ($i = 0; $i < 2; $i++) {
        $line = fgets($file); // Читаем строку
        if ($line !== false) {
            echo htmlspecialchars($line) . "<br>"; // Выводим строку
        } else {
            break; // Прерываем цикл, если строка не найдена
        }
    }

    // Закрываем файл
    fclose($file);
} else {
    echo "Файл не найден.";
}
?>
