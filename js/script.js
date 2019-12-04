window.addEventListener("DOMContentLoaded", function () {

    "use strict";

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i=a;i<tabContent.length;i++){
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide')
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
       if (tabContent[b].classList.contains('hide')){
           tabContent[b].classList.remove('hide');
           tabContent[b].classList.add('show')
       }
    }

    info.addEventListener('click',function (event) {
        let target =event.target;
        if (target && target.classList.contains('info-header-tab')){
            for (let i = 0; i< tab.length;i++){
                if (target == tab[i]){
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }

    });


    // timer

    let deadline = '2019-12-05';

    function getTimeRemaining(endTime) {
               let t = Date.parse(endTime) - Date.parse(new Date()),
                   seconds = Math.floor((t/1000)%60),
                   minutes = Math.floor((t/1000/60)%60),
                   hours = Math.floor((t/(1000*60*60)));

               return {
                   'total':t,
                   'hours':hours,
                   'minutes':minutes,
                   'seconds':seconds
               };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timerInterval = setInterval(updateClock,1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);


            if (t.hours<0&&t.minutes<0&&t.seconds<0){
                hours.textContent = "00";
                minutes.textContent = "00";
                seconds.textContent = "00";
            }
            else {
                if (t.hours<10){
                    hours.textContent = "0"+t.hours;
                }
                else{
                    hours.textContent = t.hours;
                }

                if (t.minutes<10){
                    minutes.textContent = "0"+t.minutes;
                }
                else{
                    minutes.textContent = t.minutes;
                }

                if (t.seconds<10){
                    seconds.textContent = "0"+t.seconds;
                }
                else{
                    seconds.textContent = t.seconds;
                }
            }


            if (t.total<=0){
                clearInterval(timerInterval);
            }
        }
    }

    setClock('timer',deadline);

    // modal

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    more.addEventListener('click',function () {
       overlay.style.display = 'block';
       this.classList.add('more-splash');
       document.body.style.overflow='hidden';
    });

    close.addEventListener('click',function () {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow='';
    });
});

class Options {
    constructor(height, width, bg, fontSize, textAlign,text,elementClass,tag){
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
        this.text = text;
        this.elementClass = elementClass;
        this.tag = tag;
    }
    createDiv(){

        let newElement = document.querySelector('.'+this.elementClass);
        console.log(newElement);
        let div = document.createElement(this.tag);
        div.style.height=this.height+'px';
        div.style.width=this.width+'px';
        div.style.background=this.bg;
        div.style.fontSize=this.fontSize+'px';
        div.style.textAlign=this.textAlign;
        newElement.appendChild(div);
        div.textContent = this.text;
    }
}

let blackDiv = new Options(50,100,'lime',25,'center',"Новый тексат",'main-block-title',"p");
let button = new Options(50,100,'lime',25,'center',"Новый тексат",'main-block-link',"button");
blackDiv.createDiv();
button.createDiv();