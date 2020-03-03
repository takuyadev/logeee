function Page2() {
    document.querySelector("#page1Content").style.display = "none";
    document.querySelector("#page2Content").style.display = "flex";
}

function Page3() {
    document.querySelector("#page2Content").style.display = "none";
    document.querySelector("#page3Content").style.display = "flex";
}

function Page4() {
    document.querySelector("#page3Content").style.display = "none";
    document.querySelector("#page4").style.display = "block";
}

function inductiveTab() {
    document.querySelector("#inductTab").style.padding = "10px 20px 35px";
    document.querySelector("#inductTab").style.backgroundColor = "#F46969";
    document.querySelector("#inductTab").style.textDecoration = "white underline";
    document.querySelector("#inductTab").style.height = "25 px";
    document.querySelector("#inductTab").style.marginTop = "22px";
    document.querySelector("#inductTab").style.transition = "0.4s";
    document.querySelector("#deductTab").style.padding = "5px 20px 15px";
    document.querySelector("#deductTab").style.backgroundColor = "#AF6262"
    document.querySelector("#deductTab").style.textDecoration = "none"
    document.querySelector("#deductTab").style.height = "20px";
    document.querySelector("#deductTab").style.marginTop = "45px";
    document.querySelector("#Page3Heading").innerHTML = "Inductive Reasoning";
    document.querySelector("#Page3SubHeading").innerHTML = "Opinions over Facts";
    document.querySelector("#Page3Body").innerHTML = "Inductive Reasoning favours arguing opinions over facts. Instead of arguing with proven facts, you attempt to convince another person of your beleifs by providing a strong argument";
    document.querySelector(".buttonGray").style.backgroundColor = "#4098D7";
   
}

function deductiveTab() {
    document.querySelector("#inductTab").style.padding = "5px 20px 15px";
    document.querySelector("#inductTab").style.backgroundColor = "#AF6262";
    document.querySelector("#inductTab").style.height = "20 px";
    document.querySelector("#inductTab").style.marginTop = "45px";
    document.querySelector("#inductTab").style.textDecoration = "none";
    document.querySelector("#deductTab").style.padding = "10px 20px 30px";
    document.querySelector("#deductTab").style.backgroundColor = "#F46969"
    document.querySelector("#deductTab").style.textDecoration = "white underline"
    document.querySelector("#deductTab").style.height = "25px";
    document.querySelector("#deductTab").style.marginTop = "22px";
    document.querySelector("#deductTab").style.transition = "0.4s";
    document.querySelector("#Page3Heading").innerHTML = "Deductive Reasoning";
    document.querySelector("#Page3SubHeading").innerHTML = "Facts over Opinions";
    document.querySelector("#Page3Body").innerHTML = "Deductive reasoning is when a person makes an arguement or decsion that is based on true facts. It is based on the idea that if the facts are true, then the conclusion must also be true"
}
