

var icons=document.getElementsByTagName('i')

for(i=0;i<icons.length;i++){
    icons[i].addEventListener('click',function(e){
        var answer=this.parentElement.nextElementSibling;
        answer.classList.toggle('showanswer')
        setTimeout(()=>{
            
            answer.classList.toggle('visuallyhere')
           
            
        },10)
        
        if(answer.classList.contains('showanswer')){
            this.classList.remove('fa-plus')
            this.classList.add('fa-x')
        }
        else{
            this.classList.remove('fa-x')
            this.classList.add('fa-plus')
        }

        
    },false)
}

function update() {
  var select = document.getElementById('lang');
  var option = select.options[select.selectedIndex];

  document.getElementById('value').value = option.value;
  document.getElementById('text').value = option.text;
}



var enjoysection=document.getElementById('enjoy')
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      console.log(elementTop)
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
function head (){
    if(window.screenY>30){
        var head=document.getElementById('head')
        head.style.zIndex('-2')
    }
}

window.addEventListener('scroll',reveal)
window.addEventListener('scroll',head)
