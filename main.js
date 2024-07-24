// завдання 1
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn");
  const text = document.getElementById("text");

  btn.addEventListener("click", () => {
    const newText = text.value;
    btn.textContent = newText;
  });
});

// завдання 2
document.addEventListener("DOMContentLoaded", () => {
  const img = document.getElementById("img");
  img.src = "https://fakty.ua/photos/article/29/47/294772w540zc0.jpg?v=134510";
});

// завдання 3
const link = document.getElementById("link");

link.href = "https://pixso.net";

const image = document.getElementById("image");

image.alt = "tree";

// завдання 4
const list = document.getElementById("list");

const firstItem = list.getElementsByTagName("li")[0];

firstItem.textContent = "Новый текст";
