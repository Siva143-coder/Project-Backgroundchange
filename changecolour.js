
var spancontrol=document.querySelector('.colour');
var buttoncontrol=document.getElementById("btn1")

// function change(){
//     var input=document.getElementById("in1").value;
//     document.body.style.backgroundColor=input;
//     spancontrol.textContent=input;
// }

buttoncontrol.addEventListener('click',()=>{
    var input=document.getElementById("in1").value;
    document.body.style.backgroundColor=input;
    spancontrol.textContent=input;
})