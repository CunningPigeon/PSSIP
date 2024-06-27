document.addEventListener("DOMContentLoaded", function () {

    // ������� 2: ��������� ������� ������ �� �������� �2 � ����� ������� � ��������� �3
    const element2 = document.getElementById("element-2");
    const element3 = document.getElementById("element-3");

    element2.addEventListener("click", function () {
        // ��������� ������������� ��������
        const parent = element2.parentNode;

        // ����� ���������� 2 � 3
        parent.insertBefore(element3, element2);
    });

    // ������� 3: �������� ������� �1 �� ������� �� ������
    const element1 = document.getElementById("element-1");
    var changeStylesButton = document.getElementById("changeStylesButton");

    changeStylesButton.addEventListener("click", function () {
        document.body.classList.add("new-style");
    });
});

