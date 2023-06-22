const token = localStorage.getItem("token");

// Se token não tiver valor...
if (!token) {
  window.location.href = "login.html";
}
// Separar ações em objetos

// Separar ações em objetos

var tags = [
  { name: "cadeira", color: "primary" },
  { name: "dado", color: "info" },
];

const colorTags = [
  "black",
  "dark",
  "light",
  "white",
  "primary",
  "link",
  "info",
  "success",
  "warning",
  "danger",
];

updateTags();

function mountTag(tag) {
  return (
    `<span id="tag-${tag.name}" class="tag is-${tag.color} is-medium">${tag.name}` +
    `<button onClick="deleteTag('${tag.name}')" class="delete is-small"></button>` +
    "</span>"
  );
}

function writeTag(tags) {
  document.getElementById("tags").innerHTML = tags;
}

function updateTags() {
  let elements = "";

  order();

  tags.forEach((tag) => {
    elements += mountTag(tag);
  });

  writeTag(elements);
}

window.add = () => {
  const input = document.getElementById("value");

  tags.push({
    name: input.value,
    color: randomColor(),
  });

  updateTags();
  input.value = "";
};
console.log(tags);

function deleteTag(tagName) {
  const index = tags.findIndex((tag) => {
    return tag.name === tagName;
  });

  if (index > -1) {
    tags.splice(index, 1);
  }

  document.getElementById(`tag-${tagName}`).remove();
}

function order() {
  tags.sort((a, b) => {
    return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
  });
}

function randomColor() {
  const randomColorIndex = Math.floor(Math.random() * colorTags.length);
  return colorTags[randomColorIndex];
}
