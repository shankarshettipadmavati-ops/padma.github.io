// DARK MODE

const toggle=document.getElementById("darkToggle")

toggle.addEventListener("click",()=>{

document.body.classList.toggle("dark")

})



// MENU FILTER

const filterButtons=document.querySelectorAll(".menu-filters button")

const menuItems=document.querySelectorAll(".menu-item")

filterButtons.forEach(button=>{

button.addEventListener("click",()=>{

let filter=button.dataset.filter

menuItems.forEach(item=>{

if(filter==="all" || item.classList.contains(filter))
{
item.style.display="block"
}
else
{
item.style.display="none"
}

})

})

})



// REVIEW SLIDER

let reviews=document.querySelectorAll(".review")

let index=0

function showReview(){

reviews.forEach(r=>r.classList.remove("active"))

reviews[index].classList.add("active")

index++

if(index>=reviews.length) index=0

}

setInterval(showReview,4000)



// RESERVATION FORM VALIDATION

const form=document.getElementById("reservationForm")

const msg=document.getElementById("formMessage")

form.addEventListener("submit",function(e){

e.preventDefault()

const name=document.getElementById("name").value
const email=document.getElementById("email").value
const phone=document.getElementById("phone").value

if(name.length<3){

msg.innerText="Name must be at least 3 characters"
msg.style.color="red"
return

}

if(!email.includes("@")){

msg.innerText="Enter valid email"
msg.style.color="red"
return

}

if(phone.length<10){

msg.innerText="Enter valid phone"
msg.style.color="red"
return

}

msg.innerText="Reservation submitted successfully!"
msg.style.color="green"

form.reset()

})
