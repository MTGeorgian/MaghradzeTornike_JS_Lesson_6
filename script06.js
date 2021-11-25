'use strict';

// 1. XMLHttpRequest

function getInfo() {

    function render(){
        let getData = this.responseText;
        let convertData = JSON.parse(getData);
        let ul = document.createElement('ul');
        ul.setAttribute('class', 'ul-style');

        convertData.data.forEach( element => {
            let li =document.createElement('li');
            li.classList.add('li-style');
            li.textContent = element.email;

            ul.appendChild(li);

        });

        document.getElementById('ajax').appendChild(ul);

        console.log(convertData);
    }
    function loaderror(){
        let span = document.createElement('span');
        span.setAttribute('id', 'span-style');
        span.textContent = "Error"

        let img = document.createElement('img');
        img.setAttribute('src', 'https://www.freeiconspng.com/uploads/sign-red-error-icon-1.png');

        document.getElementById('ajax').appendChild(span);
        document.getElementById('ajax').appendChild(img);
    }

    let xmlrequest = new XMLHttpRequest();

    xmlrequest.addEventListener('load', render);
    xmlrequest.addEventListener('error', loaderror);

    xmlrequest.open('GET', 'https://reqres.in/api/users?page=1');
    xmlrequest.send();
}

 getInfo();   