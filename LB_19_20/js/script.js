// Валидация с помощью JavaScript
document.getElementById('formHTML5').addEventListener('submit', function(event) {
    event.preventDefault(); // Отменяем стандартное поведение формы

    const jsname = document.getElementById('name').value;
    const jsemail = document.getElementById('email').value;
    const jsage = document.getElementById('age').value;

    if (!jsname) {
        alert('Имя не может быть пустым!');
        return;
    }

    if (!jsemail.includes('@')) {
        alert('Введите корректный email!');
        return;
    }

    if (jsage < 1 || jsage > 100) {
        alert('Возраст должен быть от 1 до 100!');
        return;
    }

    alert('Форма успешно отправлена!');
});


// Валидация с использованием регулярных выражений

document.getElementById('formHTML5').addEventListener('submit', function(event) {
    event.preventDefault(); // Отменяем стандартное поведение формы

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;

    // Регулярное выражение для проверки имени (только буквы)
    const namePattern = /^[a-zA-Zа-яА-ЯёЁs]+$/;
    // Регулярное выражение для проверки email
    const emailPattern = /^[^s@]+@[^s@]+.[^s@]+$/;

    if (!name || !namePattern.test(name)) {
        alert('Введите корректное имя (только буквы)!');
        return;
    }

    if (!email || !emailPattern.test(email)) {
        alert('Введите корректный email!');
        return;
    }

    if (age < 1 || age > 100) {
        alert('Возраст должен быть от 1 до 100!');
        return;
    }

    alert('Форма успешно отправлена!');
});
