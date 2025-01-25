const bubble1 = document.getElementById('bubble1');
const bubble2 = document.getElementById('bubble2');

bubble1.width = '100'  
bubble2.width = '100'  



let clicks = 0;
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
    if (e.keyCode === 32) blow1()
})

window.addEventListener('mousedown', (e) => {
    timer = setInterval(() => {
        blow2();
    }, 50);
})

window.addEventListener('mouseup', (e) => {
    clearTimeout(timer);
});