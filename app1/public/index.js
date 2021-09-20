async function loadAnimals() {
  const response = await axios.get("http://localhost:8000/animals");
  const animals = response.data;
  const list = document.getElementById("animals-list");
  list.innerHTML = "";
  animals.forEach((animal) => {
    const item = document.createElement("li");
    item.innerText = animal.name;
    list.appendChild(item);
  });
}

function create() {
  let form_animal = document.getElementById("form-animal");
  let input_name = document.getElementById("name");
  let input_age = document.getElementById("age");
  console.log(typeof input_age);
  let input_sex = document.getElementById("sex");
  let input_color = document.getElementById("color");
  form_animal.onsubmit = async (event) => {
    event.preventDefault();
    let animalName = input_name.value;
    let animalAge = input_age.value;
    let animalSex = input_sex.value;
    let animaColor = input_color.value;
    await axios.post("http://localhost:8000/animals", {
      nome: animalName,
      age: animalAge,
      sex: animalSex,
      color: animaColor,
    });
  };
}

function app() {
  loadAnimals();
  console.log("App Start");
  create();
}

app();
