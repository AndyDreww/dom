let w = Math.round(document.body.clientWidth / 255 );
let h = Math.round(document.body.clientHeight / 255 );

const colours = ['red', 'skyblue', 'teal', 'yellow', 'pink','green', 'purple', 'orange'];

window.addEventListener('mousemove', function(e) {
    [1, 2].forEach(function(i) {
        let colourNumber = Math.floor(Math.random() * colours.length);
        let pageX = Math.round(e.pageX / w) ;
        let pageY = Math.round(e.pageY / h);
        let elem = document.createElement('div');
        elem.style.position = 'fixed';
        elem.style.top = e.pageY + Math.round(Math.random() * 10) + 'px';
        elem.style.left = e.pageX + 10 + 'px';
        elem.className = 'trail';
        elem.style.pointerEvents = 'none';
        elem.style.opacity = Math.random();
        elem.style.backgroundColor = colours[colourNumber];
        let size = Math.floor(Math.random() * 100);
        elem.style.borderRadius = Math.floor(Math.random() * 100) + '%';
        elem.style.width = size + 'px';
        elem.style.height = size + 'px';

        document.body.appendChild(elem);
        window.setTimeout(function() {
            document.body.removeChild(elem);
        }, Math.random() * 700);
    });
}, false);

let header = document.querySelector('h1');


header.addEventListener('mousemove', e => {
    let colourNumber = Math.floor(Math.random() * colours.length);
    header.style.borderBottom = '20px dashed ' + colours[colourNumber];
    document.body.style.color = colours[colourNumber];
    

})
