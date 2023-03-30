let buttonCalc = document.getElementById("calculate")


buttonCalc.addEventListener("click", () =>{
    let ratingEl= document.getElementById("rating").value
    let mealCharge = document.getElementById("billamt").value
    let numberofPeople = document.getElementById("peopleamt").value
    
    if (ratingEl === "0" || mealCharge=== ""){
        alert("please enter values")
        return
    } 
    
    if (numberofPeople === "" || Number(numberofPeople) <= 1 ){
        numberofPeople = 1
        document.getElementById("Each").style.display = "none"
        
    }else{
        document.getElementById("Each").style.display = "block"
        
    }
    

    let total = (Number(mealCharge) * Number(ratingEl))/ Number(numberofPeople)
    document.getElementById("totalTip").style.display="block"
    document.getElementById("tip").innerHTML = total.toFixed(2)
    
})

document.getElementById("totalTip").style.display="none"
document.getElementById("Each").style.display = "none"















// function calculateReward(){
//     let ratingEl= document.getElementById("rating").value.trim()
//     let mealCharge = document.getElementById("billamt").value.trim()
//     let numberofPeople = document.getElementById("peopleamt").value.trim()
    
//     console.log(ratingEl, mealCharge,numberofPeople)
//     console.log("blablabla")
// }
// buttonCalc.addEventListener("click", calculateReward())