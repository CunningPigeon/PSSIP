document.addEventListener("DOMContentLoaded", function () {
    const forms = document.forms;
    setTimeout(() => {
        console.log("Forms on page:", forms);
        alert("Количество: " + forms.length);
    }, 5000);

    const element2 = document.getElementById("element-2");
    const element3 = document.getElementById("element-3");

    element2.addEventListener("click", function () {
        const parent = element2.parentNode;

        parent.insertBefore(element3, element2);
    });
});