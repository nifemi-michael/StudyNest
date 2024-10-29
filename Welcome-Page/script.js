let guest = document.querySelector('.guest')
let user = document.querySelector('input')
let btn = document.querySelector('button')

btn.addEventListener('click', function(){
    guest.textContent = user.value
})