// const Turn_ON = document.querySelector('#btn1')
// const Turn_OFF = document.querySelector('#btn2')
// const img = document.querySelector('#img')


// Turn_ON.addEventListener('click',function(){
// img.src = './bulb-ON.gif'
// })

// Turn_OFF.addEventListener('click',function(){
// img.src = './bulb-off.gif'
// })

const bulbSwitch = document.querySelector('#bulbSwitch')
const bulb = document.querySelector('#bulb')

bulbSwitch.addEventListener('click',function(){
    console.log(bulb.src);
    if(bulb.src.match('off'))
    {
        bulb.src = './bulb-ON.gif'
        bulbSwitch.innerHTML = 'Turn OFF'
    }
    else{
        bulb.src = './bulb-off.gif'
        bulbSwitch.innerHTML = 'Turn ON'
    }
})