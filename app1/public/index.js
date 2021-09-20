async function loadAnimals() {
  const response = await axios.get("http://localhost:8000/animals");
  const animals = response.data;
  const list = document.getElementById("animals-list");
  list.innerHTML = "";
  animals.forEach((animal) => {
    const item = document.createElement("li");
    console.log(animal);
    const linha = `${animal.name} - Age: ${animal.age} - Color: ${animal.color}`;
    item.innerText = linha;
    list.appendChild(item);
  });
}

function create() {
  const form_animal = document.getElementById("form-animal");
  const input_name = document.getElementById("name");
  const input_age = document.getElementById("age");
  const input_sex = document.getElementById("sex");
  const input_color = document.getElementById("color");
  form_animal.onsubmit = async (event) => {
    event.preventDefault();
    const animalName = String(input_name.value);
    const animalAge = parseInt(input_age.value);
    const animalSex = String(input_sex.value);
    const animalColor = String(input_color.value);
    let objt = {
      name: animalName,
      age: animalAge,
      sex: animalSex,
      color: animalColor,
    };
    console.log(objt);
    await axios.post("http://localhost:8000/animals", objt);
    loadAnimals();
    alert("Registered Animal");
  };
}

function app() {
  loadAnimals();
  console.log("App Start");
  create();
}

app();
