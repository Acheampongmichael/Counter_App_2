let decreaseBtn = document.querySelector("#decrease_btn")
let increaseBtn = document.querySelector("#increase_btn")
let count = document.querySelector("#count")
let resetBtn = document.querySelector("#reset_btn")

decreaseBtn.addEventListener("click", function(){
    count.innerHTML = parseInt(count.innerHTML)
    if (count.innerHTML >= 1)
    {
        count.innerHTML = parseInt(count.innerHTML) - 1
    }
})

increaseBtn.addEventListener("click", function(){
    count.innerHTML = parseInt(count.innerHTML) + 1
    
})


resetBtn.addEventListener("click", function(){
    count.innerHTML = 0  
})

