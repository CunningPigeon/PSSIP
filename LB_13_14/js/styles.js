// Функция для применения стилей
function applyStyles() {
    // Для класса "name"
    var nameStyle = document.createElement('style');
    nameStyle.innerHTML = ".name { color: blue; font-size: 16px; }";
    document.head.appendChild(nameStyle);
  
    // Для класса "mylink"
    var mylinkStyle = document.createElement('style');
    mylinkStyle.innerHTML = ".mylink { text-decoration: none; color: #FF0000; }";
    document.head.appendChild(mylinkStyle);
  
    // Для класса "myimage"
    var myimageStyle = document.createElement('style');
    myimageStyle.innerHTML = ".myimage { width: 100px; height: 100px; }";
    document.head.appendChild(myimageStyle);
  }
  
  // Обработчик события клика на кнопку
  document.getElementById('applyStylesButton').addEventListener('click', applyStyles);