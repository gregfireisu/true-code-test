document.addEventListener('DOMContentLoaded', function(){

    let line = document.getElementById('vertical-line');
    let title = document.getElementById('title');
    let buy = document.getElementById('button-buy');
    let tickets = document.getElementById('tickets');
    let close = document.getElementById('close-button');

    let start = Date.now();

    buy.onclick = function (){
        tickets.style.top = '0';
    }
    close.onclick = function (){
        tickets.style.top = '-100%';
    }

    let timer = setInterval(function() {
        let timePassed = Date.now() - start;

        if (timePassed >= 1000) {
            clearInterval(timer);
            document.getElementById('main-text').classList.add("text-visible");
            return;
        }
        draw(timePassed);

    }, 20);

    function draw(timePassed) {
        line.style.height = timePassed / 10 + '%';
        title.style.opacity = timePassed / 10 + '%';
    }

})

let bg = document.querySelector('.bg-moving');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    bg.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
});