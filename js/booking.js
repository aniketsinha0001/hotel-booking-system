
document.getElementById("bookingForm").addEventListener("submit",function(e){

e.preventDefault()

let name=document.getElementById("name").value
let checkin=document.getElementById("checkin").value
let checkout=document.getElementById("checkout").value
let room=document.getElementById("room").value

let message=`Hello Hotel Garv Residencia,%0AI want to book a room.%0AName: ${name}%0ARoom: ${room}%0ACheckin: ${checkin}%0ACheckout: ${checkout}`

let url=`https://wa.me/918548880026?text=${message}`

window.open(url,'_blank')

})
