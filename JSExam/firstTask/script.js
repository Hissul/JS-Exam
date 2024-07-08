// Реалтзовать скарипт таким образом, чтобы:
    // 1) На странице в блоке "numbers" ренрилось произвольное число кнопок, но не менее 5ти.
    // 2) Содержимое кнопки долно быть в формате: "Кнопка №*номер номпи в порядке рендринга*"
    // 3) При нажатии на каждую кнопу в блоке "result"  текст должен меняться на "`Ты нажал на кнопку с цифрой *номер кнопки*"
    // 4) В блоке коунтер должен весить подсчет количества нажатий.


const numbers = document.querySelector(".numbers");
const result = document.querySelector(".result");
const counter = document.querySelector('.counter');

let clickCounter = 0 ;

const btnCount = Math.floor(Math.random() * (25 - 5 + 1)) + 5;

for(let i = 0 ; i < btnCount ; ++i){
    let button = document.createElement("button");
    button.textContent = `Кнопка №*${i + 1}`;
    button.value = i + 1;
    numbers.append(button);

    button.addEventListener("click", (i) => {
        
        ++clickCounter;
        
        counter.textContent = `Количество нажатий : ${clickCounter}`

        result.textContent = `Ты нажал на кнопку с цифрой ${i.target.value}`;
    })
}