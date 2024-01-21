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
let bt1 = document.querySelector('.button1');
function oneclick(){
    let p1 = document.querySelector('.magadan');
    p1.innerHTML ='ты чего!? в магадане живет только роман';
    
}
bt1.addEventListener('click', oneclick);



let bt2 = document.querySelector('.button2');
function oneclick1(){
    let p1 = document.querySelector('.fact1');
    p1.innerHTML ='я крут';
    
}
bt2.addEventListener('click', oneclick1);


let bt3 = document.querySelector('.button7');
function oneclick2(){
    let p1 = document.querySelector('.fact2');
    p1.innerHTML ='не придумал';
    
}
bt3.addEventListener('click', oneclick2);
