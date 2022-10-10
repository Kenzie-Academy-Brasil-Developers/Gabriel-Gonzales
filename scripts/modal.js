function modal() {
    const main = document.querySelector('main')
    const modal = document.createElement("form")
    const modalItens = document.createElement('div')
    const modalTitle = document.createElement('div')
    const modalText = document.createElement('div')
    const title3 = document.createElement('h2')
    const buttonClose = document.createElement('div')
    const btnClose = document.createElement('button')
    const modalDescription = document.createElement('div')
    const descriptionValue = document.createElement('p')
    const modalValues = document.createElement('div')
    const modalValuesP = document.createElement('p')
    const input = document.createElement('input')
    const buttonType = document.createElement('div')
    const buttonTypeP = document.createElement('p')
    const btnEnter = document.createElement('button')
    const btnExit = document.createElement('button')
    const modalButton = document.createElement('div')
    const btnCancel = document.createElement('button')
    const btnInsert = document.createElement('button')

    modal.classList.add('modal')
    modalItens.classList.add('modal__itens')
    modalTitle.classList.add('modal__title')
    modalText.classList.add('modal__text')
    title3.classList.add('title__3')
    buttonClose.classList.add('button__close')
    btnClose.classList.add('btn__close')
    modalDescription.classList.add('modal__description')
    modalValues.classList.add('modal__values')
    input.classList.add('input__value')
    buttonType.classList.add('button__type__value')
    btnEnter.classList.add('btn__type__value')
    btnExit.classList.add('btn__type__value')
    modalButton.classList.add('modal__button')
    btnCancel.classList.add('btn__cancel')
    btnInsert.classList.add('btn__insert')

    modal.type = "submit"
    title3.innerText = 'Registro de valor'
    btnClose.innerText = 'X'
    descriptionValue.innerText = 'Digite o valor e em seguida aperte no botão referente ao tipo do valor'
    modalValuesP.innerText = 'Valor'
    input.placeholder = 'R$ 0,00'
    input.type = "text"
    buttonTypeP.innerText = 'Tipo de valor'
    btnEnter.innerText = 'Entrada'
    btnExit.innerText = 'Saída'
    btnCancel.innerText = 'Cancelar'
    btnInsert.innerText = 'Inserir valor'

    main.appendChild(modal)
    modal.appendChild(modalItens)
    modalItens.appendChild(modalTitle)
    modalTitle.append(modalText, modalDescription, modalValues, buttonType, modalButton)
    modalText.append(title3, buttonClose)
    buttonClose.appendChild(btnClose)
    modalDescription.appendChild(descriptionValue)
    modalValues.append(modalValuesP, input)
    buttonType.append(buttonTypeP, btnEnter, btnExit)
    modalButton.append(btnCancel, btnInsert)

    modal.addEventListener("submit", (event) => {
        event.preventDefault()

        const formSubmit = [event.target]
        let valueInput = Number(input.value)
        formSubmit.forEach((event) => {
            console.log(event.type)

            if (event.type == "submit") {
                const newValue = {
                    id: insertedValues.length + 1,
                    value: valueInput,
                    categoryID: 0,
                }
                insertedValues.push(newValue)
            }
        })
    })
}

function showModal() {
    const btnModal = document.querySelector(".register");

    btnModal.addEventListener("click", () => {
        const button = modal();
        closeModal()
        cancelModal()
    });
}
showModal()

function closeModal() {
    const closeButton = document.querySelector('.button__close')
    const modalContainer = document.querySelector('.modal')

    closeButton.addEventListener('click', () => {
        modalContainer.remove()
    })
}

function cancelModal() {
    const modalContainer = document.querySelector('.modal')
    const cancelButton = document.querySelector(".btn__cancel")

    cancelButton.addEventListener('click', () => {
        modalContainer.remove()
    })
}
