var totalbuttons=document.querySelectorAll(".drum").length;
for(var i=0;i<totalbuttons;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function (){
//this.style.color="white";
  var n=this.textContent;
  addanimation(n);
  switch (n) {
    case "w":
    var audio=new Audio("sounds/tom-1.mp3");
    audio.play();
      break;

      case "a":
      var audio=new Audio("sounds/snare.mp3");
      audio.play();
        break;

        case "s":
        var audio=new Audio("sounds/tom-2.mp3");
        audio.play();
          break;

          case "d":
          var audio=new Audio("sounds/tom-3.mp3");
          audio.play();
            break;

            case "j":
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play();
              break;

              case "k":
              var audio=new Audio("sounds/crash.mp3");
              audio.play();
                break;

                case "l":
                var audio=new Audio("sounds/kick-bass.mp3");
                audio.play();
                  break;


  }
  });


}
document.addEventListener("keypress",function(event){
  var n=event.key;
  addanimation(n);
  switch(n){
    case "w":
    var audio=new Audio("sounds/tom-1.mp3");
    audio.play();
    break;
    case "a":
    var audio=new Audio("sounds/snare.mp3");
    audio.play();
      break;

      case "s":
      var audio=new Audio("sounds/tom-2.mp3");
      audio.play();
        break;

        case "d":
        var audio=new Audio("sounds/tom-3.mp3");
        audio.play();
          break;

          case "j":
          var audio=new Audio("sounds/tom-4.mp3");
          audio.play();
            break;

            case "k":
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
              break;

              case "l":
              var audio=new Audio("sounds/kick-bass.mp3");
              audio.play();
                break;

  }
});
function addanimation(n){
  var a=document.querySelector("."+n);
  a.classList.add("pressed");
  setTimeout(function(){
    a.classList.remove("pressed");
  },100)
};
