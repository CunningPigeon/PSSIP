document.addEventListener("DOMContentLoaded", function () {

    // Задание 2: Обработка события щелчка по элементу №2 и обмен местами с элементом №3
    const element2 = document.getElementById("element-2");
    const element3 = document.getElementById("element-3");

    element2.addEventListener("click", function () {
        // Получение родительского элемента
        const parent = element2.parentNode;

        // Обмен элементами 2 и 3
        parent.insertBefore(element3, element2);
    });

    // Задание 3: Оформить элемент №1 по нажатию на кнопку
    const element1 = document.getElementById("element-1");
    var changeStylesButton = document.getElementById("changeStylesButton");

    changeStylesButton.addEventListener("click", function () {
        document.body.classList.add("new-style");
    });
});

