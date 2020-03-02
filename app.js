var Slide_state = 1;



function Slidebar(n){
    Slide_state = n;
    if (Slide_state===1){

        document.querySelector("#navbar_bar").style.left = "3%";
    }
   else if (Slide_state ===2){
    document.querySelector("#navbar_bar").style.left = "33%";
    }


   else if (Slide_state ===3){
    document.querySelector("#navbar_bar").style.left = "66%";
}
   
}