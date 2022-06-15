const main = document.querySelector("main");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  let input = document.getElementById("input").value;
  const firstname = input;
  fetch(`https://api.agify.io/?name=${firstname}`)
    .then((response) => response.json())
    .then((data) => {
      const div = document.createElement("div");
      div.innerHTML = ` Name: ${data.name} , Age: ${data.age} years old, count: ${data.count}`;
      main.appendChild(div);
    });
});
