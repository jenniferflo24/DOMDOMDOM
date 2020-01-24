document.addEventListener('DOMContentLoaded', function () {
    let button = document.createElement('button');
    let buttonTxt = document.createTextNode('Add Square');
    let div = document.createElement('div');
    div.classList.add('container');

    sqrCounter = 0


    button.appendChild(buttonTxt);
    document.body.appendChild(button);
    document.body.appendChild(div);

    button.addEventListener('click', function () {
        addSquare()
    });
    function addSquare() {
        let square = document.createElement('div');
        squareId = document.createTextNode(sqrCounter)
        square.classList.add('square');
        square.id= sqrCounter
        square.appendChild(squareId);
        div.appendChild(square);
        sqrCounter++

        square.addEventListener('click', function (){
            let colors = ['white', "blue", 'yellow']
            square.style.backgroundColor = colors[Math.floor(Math.random() * colors.length )]; 
        })

    }
});










//     paragraph.style.color = 'red';
//     paragraph.style.textTransform = 'uppercase';
//     paragraph.className = 'some-pargrahp'

//     paragraph.appendChild(text);
//     document.body.appendChild(paragraph);

//     let button = document.createElement('button');
//     let btnText = document.createTextNode('Click Me');
//     button.appendChild(btnText);
//     document.body.appendChild(button);

//     button.addEventListener('click', function(){
//         let h1 = document.createElement('h1');
//         let h1Text = document.createTextNode('Ive been clicked');
//         h1.appendChild(h1Text);
//         document.body.appendChild(h1)
//     })

// })


