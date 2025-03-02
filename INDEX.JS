console.log('Welcome to Tic Tac Toe!');
const bgm = new Audio('bgm.mp3');
bgm.pause();
const click = new Audio('pop.mp3');
let turn = "X";
bgm.loop = true;
let gameover = false;
const changeTurn = () => {
    return turn === "X" ? "O" : "X";
}


let x = 1
document.querySelector('.mute').addEventListener('click', () => {
    x++;

    x % 2 ? bgm.play() : bgm.pause();



    document.querySelector('.mute').innerHTML = (x % 2)
        ? '<img src="unmute.png" alt="Unmute">'

        : '<img src="mute.png" alt="Mute">';
})






let a = 0;
let b = 0;


const checkWin = () => {
    if (gameover) return; 
    const boxtext = document.getElementsByClassName('boxtext');
    let win = [
        [0, 1, 2, 21.8, -15, 90],
        [3, 4, 5, 21.8, 0, 90],
        [6, 7, 8, 21.8, 15, 90],
        [0, 3, 6, 6.8, 0, 0],
        [1, 4, 7, 21.8, 0, 0],
        [2, 5, 8, 36.8, 0, 0],
        [0, 4, 8, 21.8, 0, -45],
        [2, 4, 6, 21.8, 0, 45]
    ];
    let filledBoxes = 0;
    win.forEach(e => {
        if (boxtext[e[0]].innerText === boxtext[e[1]].innerText && boxtext[e[2]].innerText === boxtext[e[0]].innerText && boxtext[e[0]].innerText !== "") {
            document.querySelector('.info1').innerText = boxtext[e[0]].innerText + " won";
            boxtext[e[0]].innerText === "X" ? a++ : b++;
            let pd1 = document.querySelector('.pd1');
            let pd2 = document.querySelector('.pd2');

            pd1.innerText = a;
            pd2.innerText = b;
            console.log(a, b);
            
            gameover = turn
            
            document.getElementsByClassName('img')[0].style.width = "60%";
            document.querySelector('.line').style.transform = `translate(${e[3]}vh, ${e[4]}vh) rotate(${e[5]}deg)`; 
            document.querySelector('.line').style.height = "45vh";

            document.querySelector('.reset2').addEventListener('click', () => {
                a = 0;
                b = 0;
                pd1.innerText = a;
                pd2.innerText = b;
                gameover = false; 

            });

      
        };
    
    });
    Array.from(boxtext).forEach(box => {
        if (box.innerText !== "") filledBoxes++;
    });

    if (filledBoxes === boxtext.length && !gameover) {
        document.querySelector('.info1').innerText = "DRAW";
        gameover = true;
    }
};





if (!gameover) {
    let boxes = document.getElementsByClassName('box');
    Array.from(boxes).forEach((element) => {
        let boxText = element.querySelector('.boxtext');
        element.addEventListener('click', (e) => {
            if (!gameover) {
                click.play();
                if (boxText.innerText === "") {
                    boxText.innerText = turn;
                    turn = changeTurn();
                    checkWin();
                    if (!gameover) {
                        document.getElementsByClassName('info1')[0].innerText = "turn for " + turn;
                    }
                }
             
            }
        })


    });
}


const reset = document.querySelector('#reset');
reset.addEventListener('click', () => {
    let boxtext = document.getElementsByClassName('boxtext');
    Array.from(boxtext).forEach(element => {
        element.innerText = "";
    });
    turn = "X";
    document.getElementsByClassName('img')[0].style.width = "0vw"
    gameover = false;
    if (!gameover) {
        document.getElementsByClassName('info1')[0].innerText = "turn for " + turn;
    }
    document.querySelector('.line').style.height = "0vh";



});


// const asign=()=>{
//     setTimeout(()=>{
//         let a = 0
//         let b = 0 

//         let pd1 = document.querySelector('.pd1')
//         let pd2 = document.querySelector('.pd2')
//         // pd1.innerHTML= <div class="pd1 br">`${a}`</div>
//         // pd2.innerHTML= <div class="pd2 br">`${b}`</div>
//         pd1.innerText= a
//         pd2.innerText= b 
        
//     },3000)
//  };
 
// console.log(a, b)

// const asign=()=>{
    // let a = 0
    // let b = 0
    

//         let pd1 = document.querySelector('.pd1')
//         let pd2 = document.querySelector('.pd2')
        // pd1.innerText= `${a}`
        // pd2.innerText= b
        
   
//  };
 
//  console.log(a, b)