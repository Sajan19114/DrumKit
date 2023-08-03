var numberOfDrumButtons=document.querySelectorAll(".drum").length;
for(var i=0;i<numberOfDrumButtons;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        // alert("i got clicked!");
        var Typeofit=this.innerHTML;
        myfun(Typeofit);
        ButonEffect(Typeofit);
        
        // var audio=new Audio('sounds/tom-1.mp3');
        // audio.play();
    })
}

document.addEventListener("keydown",function(event){

    myfun(event.key);
    ButonEffect(event.key);
    // alert(event.key);
})


function myfun(key)
{
    switch(key)
        {
            case "w":
                var tom1=new Audio('sounds/tom-1.mp3');
                tom1.play();
                break;
            case "a":
                var tom2=new Audio('sounds/tom-2.mp3');
                tom2.play();
                break;
            case "s":
                    var tom2=new Audio('sounds/tom-3.mp3');
                    tom2.play();
                    break;
            case "d":
                        var tom2=new Audio('sounds/tom-4.mp3');
                        tom2.play();
                        break;
            case "j":
                            var tom2=new Audio('sounds/snare.mp3');
                            tom2.play();
                            break;
            case "k":
                                var tom2=new Audio('sounds/crash.mp3');
                                tom2.play();
                                break;
            case "l":
                                    var tom2=new Audio('sounds/kick-bass.mp3');
                                    tom2.play();
                                break;
                default:
                    console.log("no input as required");


        }
}
function ButonEffect(keyvalue)
{
    var ActivateKey=document.querySelector("."+keyvalue);
    ActivateKey.classList.add("pressed");
    setTimeout(function()
    {
        ActivateKey.classList.remove("pressed");
    },100);

}