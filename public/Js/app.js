const socket = io.connect("http://localhost:3000/")

const sender = document.getElementById("sender")
const message = document.getElementById("message")
const btn = document.getElementById("gonderBtn")
const output = document.getElementById("output")
const feedback = document.getElementById("feedback")

btn.addEventListener("click",()=>{
    socket.emit("chat",{
        massage: message.value,
        sender: sender.value
    })
    
})

socket.on("chat",data=>{
    output.innerHTML += "<p><strong>"+data.sender+": </strong> " + data.massage + "</p>"
    message.value = "";
})

message.addEventListener("keypress", ()=>{
    socket.emit("isType",sender.value)
})

