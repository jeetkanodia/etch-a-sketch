
var no = parseInt(window.prompt("Enter the number of squares per side:" , '16'));


for(let i=0;i<no;i++)
{
    var line = document.createElement("div");
    line.setAttribute("class","line");
    for(let j=0;j<no;j++)
    {
        var height = Math.floor(580/no);
        console.log(height);
        var inside = document.createElement("div");
        inside.setAttribute("class" , "baby" );
        inside.setAttribute("onmouseover","add(this);");
        inside.style.height = height+"px";
        inside.style.width = height+"px";
        console.log(inside);
        line.appendChild(inside);
        
    }
    var maindiv = document.getElementById("container");
    
    maindiv.appendChild(line);
    console.log("made");
}

function add(div){
    div.setAttribute("class" , "baby hover");
}

function remove(){
    var divs = document.getElementsByClassName("hover");
    Array.from(divs).forEach(element => {
        element.setAttribute("class" , "baby");
        element.setAttribute("onmouseover","add(this);");
    });
}