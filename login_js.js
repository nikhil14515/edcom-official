let ele=document.getElementById('ham')
let im=document.getElementById('clickable')

let errmsg=document.getElementById('login-error')
function visible(){
  if (ele.style.display=='none'){
    ele.style.display='inline'
    im.src='icons/close-icon.png'
  }
  else{
    ele.style.display='none'
      im.src='icons/menu-icon.png'
  }
}

function loginerr(){
  if (errmsg.style.display=='none'){
    errmsg.style.display='inline'
  }
  else{
    errmsg.style.display='none'
  }
}