//点击右上角X时，当前显示框消失

//select element
var close1 = document.querySelector('.close1')

var close2 = document.querySelector('.close2')

var close3 = document.querySelector('.close3')

var close4 = document.querySelector('.close4')



//handle element
close1.addEventListener("click",function(){
    this.parentNode.setAttribute("style","display:none")
    console.log(1)
})
close2.addEventListener("click",function(){
    this.parentNode.setAttribute("style","display:none")
    console.log(2)
})
close3.addEventListener("click",function(){
    this.parentNode.setAttribute("style","display:none")
    console.log(3)
})
close4.addEventListener("click",function(){
    this.parentNode.setAttribute("style","display:none")
    console.log(4)
})



