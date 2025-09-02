// Находим элементы
const btn = document.getElementById("btn");
const title = document.getElementById("title");

// Делаем действие при клике
btn.addEventListener("click", () => {
    title.textContent = "Ты гей";
    title.style.color = "red";
});
