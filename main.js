const bubble1 = document.getElementById('bubble1');
const bubble2 = document.getElementById('bubble2');
const left = document.getElementById('left');
const right = document.getElementById('right');
const msg = document.getElementById('msg');

bubble1.width = 100;
bubble2.width = 100;  


let alienSound = new Audio('https://res.cloudinary.com/arikxl/video/upload/v1737820443/Ella2023/eh9uvugme7efpd19zzwe.wav')
let orkSound = new Audio('https://res.cloudinary.com/arikxl/video/upload/v1737820945/Ella2023/vi7dpae9x5yzsl2363ec.wav')


let isGameOn = true;
let timer;


function blow1() {
    bubble1.width += 1; 


}

function blow2() {
    let imgWidth = parseInt(bubble2.width, 10);
    // console.log(imgWidth);
    bubble2.width = imgWidth + 1;
}




window.addEventListener('keydown', (e) => {
    // console.log(e)
    if (e.keyCode === 32) {
        if (!isGameOn)return
        blow1()
        isBoom1 = Math.random() > 0.99;
        if (isBoom1) {
            bubble1.style.display = 'none'
            msg.style.display = 'block';
            left.style.filter = 'blur(20px)'
            orkSound.play()
            isGameOn=false
        }
    }
})



window.addEventListener('mousedown', (e) => {
    timer = setInterval(() => {
        if (!isGameOn) return

        blow2();
        isBoom2 = Math.random() > 0.99;
        if (isBoom2) {
            bubble1.style.display = 'none'
            msg.style.display = 'block';
            msg.style.color = 'deepskyblue';
            right.style.filter = 'blur(20px)'
            alienSound.play()
            isGameOn = false

        }
    }, 50);
})

window.addEventListener('mouseup', (e) => {
    clearInterval(timer);
});