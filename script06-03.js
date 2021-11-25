// 3. load more

let defaultPage = 1;

function loadPage(page){
 fetch('https://reqres.in/api/users?page=' + page,{
     method: 'GET'
     })
     .then(function(getinfo) {
         if(getinfo.status != 200){
             throw getinfo.status;
         }
         return getinfo.json();
     })
     .then(function(render){
         console.log(render);
         let ul = document.createElement('ul');
         ul.setAttribute('class', 'ul-style');
         let fragment = document.createDocumentFragment();
         
         render.data.forEach( element => {
             let li = document.createElement('li');
             li.setAttribute('class', 'li-style');
             li.textContent = element.last_name;
 
             fragment.appendChild(li);
         });
         ul.appendChild(fragment);
         document.getElementById('ajax').appendChild(ul);
     })
     .catch(function(error) {
         if(error == 404){
             let span = document.createElement('span');
             span.setAttribute('id', 'span-style');
             span.textContent = "Server Error";
 
             document.getElementById('ajax').appendChild(span);
         }else{
             let img = document.createElement('img');
             img.setAttribute('src', 'https://www.freeiconspng.com/uploads/sign-red-error-icon-1.png');
 
             document.getElementById('ajax').appendChild(img);
         }
     });
}
document.getElementById('btn-load').addEventListener('click', function(){

    defaultPage += 1;
    loadPage(defaultPage);
});
loadPage(defaultPage);