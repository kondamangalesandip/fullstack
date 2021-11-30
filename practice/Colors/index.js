const colorBtn=document.querySelector(".colorbtn");
const bodyBcg=document.querySelector('body');

const colors=['yellow','red','blue','green',"#3b5998"];

colorBtn.addEventListener("click",changeColor);

function changeColor(){
    // bodyBcg.style.backgroundColor=colors[3];
    let random=Math.floor(Math.random()*colors.length);
    bodyBcg.style.backgroundColor=colors[random];
}