fetch("document.txt")
  .then((response) => response.text())
  .then((text) => {
    const p = document.createElement("p");
    p.textContent = text;

    document.body.appendChild(text);
  })
  .catch((error) => {
    console.log("There was an error!", error);
  });

document.getElementById("btn").addEventListener("click", () => {
  fetch("becode.json")
    .then((response) => response.text())
    .then((text) => {
      const ul = document.createElement("ul");
      for (const item of JSON.parse(text)) {
        const li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
      }

      document.body.appendChild(ul);
    })
    .catch((error) => {
      console.log("There was an error!", error);
    });
});

// document.getElementById("btn").addEventListener("click", () => {
//   fetch("becode.json")
//     .then((response) => response.json())
//     .then((data) => {
//       const ul = document.createElement("ul");
//       document.body.appendChild(ul);
//       for (const item of data) {
//         const li = document.createElement("li");
//         li.textContent = item;
//         ul.appendChild(li);
//       }
//     })
//     .catch((error) => {
//       console.log("There are no rules at Becode", error);
//     });
// }); le "parse"de Json transforme un objet en array dans JS.
