document.addEventListener("DOMContentLoaded", function () {
    const usersList = document.getElementById("usersList");

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => {
            users.forEach(user => {
                const userCard = document.createElement("div");
                userCard.classList.add("user-card");


                userCard.innerHTML = `
                <h2>${user.name}</h2>
                <p><strong>@${user.username}</strong></p>
                <p>📧 <a href="mailto:${user.email}">${user.email}</a></p>
                <p>📞 ${user.phone}</p>
                <p>🌍 <a href="http://${user.website}" target="_blank">${user.website}</a></p>
                <p>🏢 ${user.company.name}</p>
                `;

                usersList.appendChild(userCard)
            });
        })
        .catch(error => console.error("Xatolik yuz berdi !.", error))
});