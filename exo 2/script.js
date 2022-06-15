// const main = document.querySelector("main");
// const button = document.querySelector("button");

// button.addEventListener("click", () => {
//   let input = document.getElementById("input").value;
//   const firstname = input;
//   fetch(`https://api.agify.io/?name=${firstname}`)
//     .then((response) => response.json())
//     .then((data) => {
//       const div = document.createElement("div");
//       div.innerHTML = ` Name: ${data.name} , Age: ${data.age} years old, count: ${data.count}`;
//       main.appendChild(div);
//     });
// });

// const button = document.getElementById("button");

// button.addEventListener("click", async () => {
//   try {
//     let input = document.getElementById("input").value;
//     let response = await fetch(`https://api.agify.io?name=${input}`);
//     let data = await response.json();

//     const div = document.createElement("div");
//     div.innerHTML = `Name: ${data.name} , Age: ${data.age} years old, count: ${data.count}`;
//     document.querySelector("main").appendChild(div);
//   } catch (e) {
//     console.log(e);
//   }
// }); Code Robin pour explication pour cours personnalisé

const body = document.querySelector("body");
const button = document.getElementById("btn");

button.addEventListener("click", () => {
  const firstname = document.getElementById("firstname").value;
  const country = document.getElementById("country").value;

  fetch(`https://api.agify.io?name=${firstname}&country_id=${country}`)
    .then((response) => response.json())
    .then((data) => {
      const div = document.createElement("div");
      div.innerHTML = `Name: ${data.name} , Age: ${data.age} years old, count: ${data.count}, country: ${data.country_id}`;
      body.appendChild(div);
    });
});
