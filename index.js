var user=document.getElementById("namein");
var em=document.getElementById("emailin");
var notvalid=document.getElementById("notvalid");
var submit=document.getElementById("submitbut");
var deleled=document.getElementById("del");

document.getElementById("inputs").style.display="none";

function add(){
    var div=document.createElement("div");
    div.setAttribute("id","con");
    div.innerHTML=` <div class="a">
    <p>${user.value}</p>
    <p>${em.value}</p>
</div>
<div class="b">
    <button id="del">Delete</button>
</div>`
    inputs.append(div);
    document.getElementById("inputs").style.display="block";
localStorage.setItem("usernames",user.value);
localStorage.setItem("emails",em.value);
    
}

deleted.onclick=function(){
    document.getElementById("con").remove();

    

}

