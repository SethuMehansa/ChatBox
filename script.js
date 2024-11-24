let sender=""
let chatlist=[]
let currenttime=new Date()
let texts=document.getElementById("textinput").value
function drop(){
  document.getElementById("sender").classList.toggle("show")
  document.getElementById("printsender").innerHTML=sender
  console.log(currenttime.toLocaleTimeString());
  
}


function select(send){
  sender=send;
  console.log(sender);
  
}

function send(){
 texts=document.getElementById("textinput").value
chatlist.push(texts)

  let chatbubble=""

  if (sender=='Sender01'){
chatbubble+=`<h3 class="text-end sender1"><i class="bi bi-person"></i><br>${texts}<br><h5 class="time text-end">${currenttime.toLocaleTimeString()}</h5></h3>
`
document.getElementById("chatbox").innerHTML+=chatbubble
  
}else if(sender=='Sender02'){
chatbubble+=`<h3 class="text-start sender2"><i class="bi bi-person-fill"></i><br>${texts}<br><h5 class="time text-start">${currenttime.toLocaleTimeString()}</h5></h3>
    `
    document.getElementById("chatbox").innerHTML+=chatbubble
  }
}
