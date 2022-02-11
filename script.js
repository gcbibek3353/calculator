var screen = document.querySelector('.screen');
var buttons = document.querySelectorAll('.button1');
var screenvalue='';

for(item of buttons){
    item.addEventListener('click', function(e){
         buttontext = e.target.innerText;
         
        if(buttontext=='='){
            screen.innerText=eval(screenvalue);
            screenvalue='';
        }
        else if(buttontext=='AC'){
            location.reload();
        }
        else{
            screenvalue += buttontext;
            screen.innerText = screenvalue;
        }
    })
}