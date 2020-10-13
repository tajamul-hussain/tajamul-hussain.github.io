var numsquares=6;
var colors=generateRandomcolor(numsquares);
var squares=document.querySelectorAll(".square");
var pickedcolor=pickcolor();
var colorDisplay=document.querySelector("#colorDisplay");
colorDisplay.textContent=pickedcolor;
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetbutton=document.querySelector("#reset");
var easybtn=document.querySelector("#easy-btn");
var hardbtn=document.querySelector("#hard-btn");
easybtn.addEventListener("click",function()
{
    hardbtn.classList.remove("selected");
    easybtn.classList.add("selected");
    numsquares=3;
    colors=generateRandomcolor(numsquares);
    pickedcolor=pickcolor();
    colorDisplay.textContent=pickedcolor;
    for (var i=0;i<squares.length;i++)
    {
        if (colors[i])
        {
            squares[i].style.backgroundColor=colors[i];
        }
        else{
            squares[i].style.display="none";
        }
    }

})
hardbtn.addEventListener("click",function()
{
    easybtn.classList.remove("selected");
    hardbtn.classList.add("selected");
    numsquares=6;
    colors=generateRandomcolor(numsquares);
    pickedcolor=pickcolor();
    colorDisplay.textContent=pickedcolor;
    for (var i=0;i<squares.length;i++)
    {
        squares[i].style.backgroundColor=colors[i];
        squares[i].style.display="block";
    }
})
resetbutton.addEventListener("click",function(){
    colors=generateRandomcolor(numsquares);
    pickedcolor=pickcolor();
    colorDisplay.textContent=pickedcolor;
    for(var i=0;i<squares.length;i++)
{
    squares[i].style.backgroundColor=colors[i];
}
h1.style.backgroundColor="steelblue";
messageDisplay.textContent="";

})
for(var i=0;i<squares.length;i++)
{
    squares[i].style.backgroundColor=colors[i];
    squares[i].addEventListener("click",function() { 
        var clickedColor=this.style.backgroundColor;
        if(clickedColor===pickedcolor)
        {
            messageDisplay.textContent="CORRECT!!";
            changecolors(pickedcolor);
            h1.style.backgroundColor=clickedColor;
            resetbutton.textContent="Play Again!";
        }
        else
        {
            this.style.backgroundColor="#232323";
            messageDisplay.textContent="TRY AGAIN!!";
        }
        

     } )
    
}
function changecolors(color)
{
    for(var i=0;i<squares.length;i++)
    {
        squares[i].style.backgroundColor=color;
    }
}
function pickcolor()
{
    var random=Math.floor(Math.random()*colors.length);
    return colors[random];
}
function generateRandomcolor(num)
{
    var arr=[];
    for(var i=0;i<num;i++)
    {
        arr.push(randomColor());


    }
    return arr;
}
function randomColor()
{
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return "rgb("+ r+", "+ g+", "+ b+")";
    
    
}