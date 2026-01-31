const textBox = document.querySelector("#user-input")
const outputBox = document.querySelector("#quiz-outputs")
const statusBox = document.querySelector("#status")

console.log(textBox, outputBox, statusBox);

let score = 0
let pluto = false

const checkAnswer = () => {
  const currentAnswer = textBox.value
  if (currentAnswer === "Mercury") {
    outputBox.innerHTML += `<h3>Mercury</h3><p> Mercury is the closest planet to the Sun and the smallest planet in our solar system.</p>`
    score += 1
  } else if (currentAnswer === "Venus") {
    outputBox.innerHTML += `<h3>Venus</h3><p> Venus is the second planet from the Sun and is known for its thick, toxic atmosphere.</p>`
    score += 1
  } else if (currentAnswer === "Earth") {
    outputBox.innerHTML += `<h3>Earth</h3><p> Earth is the third planet from the Sun and the only known planet to support life.</p>`
    score += 1
  } else if (currentAnswer === "Mars") {
    outputBox.innerHTML += `<h3>Mars</h3><p> Mars is the fourth planet from the Sun and is often called the "Red Planet" due to its reddish appearance.</p>`
    score += 1
  } else if (currentAnswer === "Jupiter") {
    outputBox.innerHTML += `<h3>Jupiter</h3><p> Jupiter is the fifth planet from the Sun and the largest planet in our solar system.</p>`
    score += 1
  } else if (currentAnswer === "Saturn") {
    outputBox.innerHTML += `<h3>Saturn</h3><p> Saturn is the sixth planet from the Sun and is famous for its stunning ring system.</p>`
    score += 1
  } else if (currentAnswer === "Uranus") {
    outputBox.innerHTML += `<h3>Uranus</h3><p> Uranus is the seventh planet from the Sun and is known for its unique sideways rotation.</p>`
    score += 1
  } else if (currentAnswer === "Neptune") {
    outputBox.innerHTML += `<h3>Neptune</h3><p> Neptune is the eighth planet from the Sun and is known for its deep blue color and strong winds.</p>`
    score += 1
  } else if (currentAnswer === "Pluto") {
    outputBox.innerHTML += `<h3>Pluto</h3><p> Pluto was reclassified as a dwarf planet in 2006.</p>`;
    pluto = true
  } else {

    statusBox.innerHTML = `${currentAnswer} is not a correct planet. Please try entering the name with correct capitalization.`
  }
  checkScore();

  textBox.value = "";
};

const checkScore = () => {
    if (score === 8 && pluto) {
    statusBox.innerHTML = "Congratulations! You found every planet!"
    textBox.disabled = true
  }
  else if (score === 8) {
   statusBox.innerHTML = "You almost found all the planets! Can you find the bonus one?"
  }

};

textBox.addEventListener("change", checkAnswer)