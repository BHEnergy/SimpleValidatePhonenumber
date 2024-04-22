document.addEventListener("DOMContentLoaded", () => {
    //Инициализируем кнопку и область для сообщения / Initialize Form
    const openFormBtn = document.querySelector('.openFormBtn')
    const formMessage = document.querySelector('#formMessage')
    
    let phoneFlag = false;
    //Input телефона и ошибка о неправильном вводе / Input for Phinenumber and error message
    const openFormPhone = document.getElementById('openFormPhone')
    const errorPhone = document.querySelector('.errorPhone')

    //Слушатель события / Event Listener
    openFormPhone.addEventListener("keyup", function() {

    const regex = /^8\s[\(\s]\d{3}[\)\s]\s\d{3}[\-\s]\d{2}[\-\s]\d{2}$/
        //Проверка инпута / Check Input
        if(!this.value) {
            errorPhone.textContent = "Поле не должно быть пустым.";
            openFormBtn.disabled = true;
            phoneFlag = false;
        }
        else if(!regex.test(this.value)) {
            errorPhone.textContent = "Некорректный формат номера.";
            openFormBtn.disabled = true;
            phoneFlag = false;
        } else {
            errorPhone.display = 'none';
            openFormBtn.disabled = false;
            phoneFlag = true;
        }
    })
    //
    openFormBtn.addEventListener("click", function(e) {
        if(!phoneFlag) {
            e.preventDefault()
            formMessage.textContent = 'Не все поля заполнены!'
            openFormBtn.disabled = true;
        }
    })