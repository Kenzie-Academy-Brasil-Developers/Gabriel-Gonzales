/*----------MODAL----------*/

function card(array) {
  array.forEach(element => {
    const valuesList = document.querySelector(".values__list")
    const valuesLi = document.createElement("li")
    const valuesP = document.createElement("p")
    const btnValues = document.createElement("div")
    const btnType = document.createElement("button")
    const figure = document.createElement("figure")
    const imgTrash = document.createElement("img")

    valuesLi.classList.add("values__li")
    btnValues.classList.add("btn__values")
    btnType.classList.add("btn__type")
    figure.classList.add("figure__trash")
    imgTrash.classList.add("btn__trash")
    valuesP.innerText = `R$ ${element.value.toFixed(2)}`.replace(".", ",")
    imgTrash.src = "../../assets/trash.png"

    if (element.categoryID == 0) {
      btnType.innerText = "Entrada"
    }
    else {
      btnType.innerText = "Saída"
    }

    valuesList.appendChild(valuesLi)
    valuesLi.append(valuesP, btnValues)
    btnValues.append(btnType, figure)
    figure.appendChild(imgTrash)
  });
}
card(insertedValues)

/*----------SOMA----------*/

const sumValuesDiv = document.querySelector(".sum__values")

function sumValues(array, callback) {
  sumValuesDiv.innerHTML = " "
  let sum = 0
  array.forEach(element => {
    if (element.categoryID == 0) {
      sum += element.value
    }
    else {
      sum -= element.value
    }
  })
  callback(sum)
}

/*----------RENDER-SOMA----------*/

function showSum(value) {
  const sumValues = document.querySelector(".sum__values")
  const sumValuesText = document.createElement("div")
  const sumText = document.createElement("p")
  const sumValue = document.createElement("p")

  sumValuesText.classList.add("sum__values__text")
  sumText.classList.add("sum__text")
  sumValue.classList.add("sum__value")

  sumText.innerText = "Soma dos valores"
  sumValue.innerText = `R$ ${value.toFixed(2)}`.replace("-", "").replace(".", ",")

  sumValues.appendChild(sumValuesText)
  sumValuesText.append(sumText, sumValue)
}
sumValues(insertedValues, showSum)

/*----------FILTER----------*/

const btnEntries = document.getElementById("entries")
const btnOutflow = document.getElementById("outflow")
const btnAll = document.getElementById("all")

let insertedValuesfiltered = []

btnEntries.addEventListener("click", () => {
  const valuesList = document.querySelector(".values__list")
  valuesList.innerHTML = " "
  insertedValuesfiltered = insertedValues.filter(element => {
    if (element.categoryID == 0) {
      return element
    }
  })
  card(insertedValuesfiltered)
  sumValues(insertedValuesfiltered, showSum)
})

btnOutflow.addEventListener("click", () => {
  const valuesList = document.querySelector(".values__list")
  valuesList.innerHTML = ""
  insertedValuesfiltered = insertedValues.filter(element => {
    if (element.categoryID == 1) {
      return element
    }
  })
  card(insertedValuesfiltered)
  sumValues(insertedValuesfiltered, showSum)
})

function showSumBtn() {
  btnAll.addEventListener("click", () => {
    const valuesList = document.querySelector(".values__list")
    valuesList.innerHTML = ""
    card(insertedValues)
    sumValues(insertedValues, showSum)
  })
}
showSumBtn()
