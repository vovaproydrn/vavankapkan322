let links = document.querySelectorAll('.scroll');
let targetID; //переменная, в которую запишем id целевого элемента
links.forEach(function (element) {
    console.log(5);
    element.addEventListener('click', function (event) {
        event.preventDefault(); //отключить стандартное поведение
        targetID = element.getAttribute('href'); //получить id целевого элемента из атрибута href ссылки
        document.querySelector(targetID).scrollIntoView({ //метод для управления прокруткой
            behavior: 'smooth', //анимация прокрутки auto - резко, smooth - плавно
            block: 'start' //вертикальное выравнивание
        })
    })
})

function g(){
let a =  document.getElementById("p").alert('ты чего, в магадане живет только рома!')
document.getElementById("p").innerHTML = a;
}
