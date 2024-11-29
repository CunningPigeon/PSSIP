
const user = {
    name: "Tom",
    married: false,
    age: 39
};
// сериализация
const serializedUser = JSON.stringify(user);
// десериализация
const tomUser = JSON.parse(serializedUser);
console.log(tomUser.name); // Tom


async function fetchUsers() {
    fetch('js/personal.json')
    // .then(res => res.json())  // Преобразуем ответ в JSO
    .then(date => JSON.stringify(user))
    .catch(err => console.error('Ошибка:', err));  // В случае ошибки выводим её

    const tomUser = JSON.parse(serializedUser);
    console.log(tomUser.name); // Tom

}
function displayUsers(users) {
    const personContainer = document.getElementById('personContainer');
    
    users.forEach(user => {
        const personDiv = document.createElement('div');
        personDiv.className = 'person';
        personDiv.innerHTML = 
            "<strong>ID:</strong>" + user.id + "<br>"
            "<strong>Имя:</strong>" + user.name + "<br>"
            "<strong>Email:</strong>" + user.email + "<br>"
            "<strong>Телефон:</strong>" + user.phone + "<br>"
            "<strong>Возраст:</strong>" + user.age
        ;
        personContainer.appendChild(personDiv);
    });
}

// Вызов функции для загрузки пользователей
fetchUsers();




// async function fetchUsers() {
//     fetch('js/personal.json')
//     .then(res=> res.json())
//     .then(data => console.log(data))
//     try {
//         const response = await fetch('personal.json');
//         if (!response.ok) {
//             throw new Error('Сеть не отвечает');
//         }
//         const users = await response.json();
//         displayUsers(users);
//     } catch (error) {
//         console.error('Ошибка при загрузке данных:', error);
//     }
// }
// function displayUsers(users) {
//     const personContainer = document.getElementById('personContainer');
    
//     users.forEach(user => {
//         const personDiv = document.createElement('div');
//         personDiv.className = 'person';
//         personDiv.innerHTML = 
//             "<strong>ID:</strong>" + user.id + "<br>"
//             "<strong>Имя:</strong>" + user.name + "<br>"
//             "<strong>Email:</strong>" + user.email + "<br>"
//             "<strong>Телефон:</strong>" + user.phone + "<br>"
//             "<strong>Возраст:</strong>" + user.age
//         ;
//         personContainer.appendChild(personDiv);
//     });
// }

// // Вызов функции для загрузки пользователей
// fetchUsers();


// let jsonData = {"foo":"bar","id":42};
// let formattedJson = JSON.stringify(jsonData, null, 4);
// document.body.innerHTML += "<pre>${formattedJson}</pre>";
