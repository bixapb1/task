// Задания 1
const array = [
  { attribute_id: 4, name: "test1", text: "111" },
  { attribute_id: 5, name: "test2", text: "222" },
  { attribute_id: 6, name: "test3", text: "333" },
  { attribute_id: 7, name: "test4", text: "444" },
  { attribute_id: 8, name: "test5", text: "555" },
];

const root1 = document.getElementById("root1");

array.forEach((user) => {
  const row = document.createElement("div");
  row.classList.add("row");
  const col1 = document.createElement("div");
  const col2 = document.createElement("div");
  col1.innerHTML = user.name;
  col2.innerHTML = user.text;
  row.append(col1, col2);
  root1.append(row);
});

// Задания 2
const arrayImg = [
  {
    option_image_popup: "./assets/1.jpg",
    option_image_thumb: "./assets/1.jpg",
  },
  {
    option_image_popup: "./assets/2.jpg",
    option_image_thumb: "./assets/2.jpg",
  },
  {
    option_image_popup: "./assets/3.jpg",
    option_image_thumb: "./assets/3.jpg",
  },
  {
    option_image_popup: "./assets/4.jpg",
    option_image_thumb: "./assets/4.jpg",
  },
];
let count = 0;
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const img = document.querySelector(".img");

btn1.addEventListener("click", () => {
  if (count == 0) {
    btn1.setAttribute("disabled", "true");
    btn2.disabled = false;
  } else img.src = arrayImg[--count].option_image_popup;
});

btn2.addEventListener("click", () => {
  if (count == arrayImg.length - 1) {
    btn1.disabled = false;
    btn2.setAttribute("disabled", "true");
  } else img.src = arrayImg[++count].option_image_popup;
});
