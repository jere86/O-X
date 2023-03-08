let polja = document.querySelectorAll('.polja');
let rezultatO = document.querySelector(".O");
let rezultatX = document.querySelector(".X");
let nerijesen = document.querySelector(".nerijesen");
let crta = document.querySelector(".crta");
let red = document.querySelectorAll(".red");
red[0].style.backgroundColor = "lightgreen";

polja.forEach(polje => polje.addEventListener('click', play));
polja.forEach(polje => polje.addEventListener('click', otkazi));
polja.forEach(polje => polje.onmouseover = (event) => {
    if (!clicked) {
        event.target.classList.add('kruzic');
        event.target.style.opacity = "0.2";
    } else {
        event.target.classList.add('krizic');
        event.target.style.opacity = "0.2";
    }
});
polja.forEach(polje => polje.onmouseout = (event) => {
    if (!clicked) {
        event.target.classList.remove('kruzic');
    } else {
        event.target.classList.remove('krizic');
    }
});

let a = [];
let b = [];

let test = [[1, 2, 3], [1, 5, 9], [1, 4, 7], [2, 5, 8], [3, 5, 7], [3, 6, 9], [4, 5, 6], [8, 7, 9]];

let tester = (arr1, arr2) => arr2?.every(elem => arr1.includes(elem));

let reset = () => {
    polja.forEach(polje => (polje.classList.remove('kruzic')) & (polje.classList.remove('krizic')));
    polja.forEach(polje => polje.addEventListener('click', play));
    polja.forEach(polje => polje.onmouseover = (event) => {
        if (!clicked) {
            event.target.classList.add('kruzic');
            event.target.style.opacity = "0.2";
        } else {
            event.target.classList.add('krizic');
            event.target.style.opacity = "0.2";
        }
    });
    polja.forEach(polje => polje.onmouseout = (event) => {
        if (!clicked) {
            event.target.classList.remove('kruzic');
        } else {
            event.target.classList.remove('krizic');
        }
    });
    a = [];
    b = [];
    crta.style = "";
}

let clicked = false;
let counter = 0;
let scoreX = 0;
let scoreO = 0;
let scoreDraw = 0;

function play() {
    if (!clicked) {
        clicked = true;
        red[0].style.backgroundColor = "";
        red[1].style.backgroundColor = "lightgreen";
        this.classList.add('kruzic');
        this.style.opacity = "1";
        this.removeEventListener('click', play);
        a.push(+(this.classList[1]));
        counter++;

        for (let i = 0; i <= test.length; i++) {
            if (tester(a, test[i]) == true) {
                clicked = false;
                counter = 0;
                scoreO++;
                red[0].style.backgroundColor = "lightgreen";
                red[1].style.backgroundColor = "";
                if (test[i] == test[2]) {
                    crta.style.display = "block";
                    crta.style.left = "100px";
                }else if(test[i] == test[3]) {
                    crta.style.display = "block";
                    crta.style.left = "300px";
                }else if(test[i] == test[5]) {
                    crta.style.display = "block";
                    crta.style.left = "500px";
                }else if(test[i] == test[0]) {
                    crta.style.display = "block";
                    crta.style.top = "-175px";
                    crta.style.left = "300px";
                    crta.style.rotate = "90deg";
                }else if(test[i] == test[6]) {
                    crta.style.display = "block";
                    crta.style.top = "25px";
                    crta.style.left = "300px";
                    crta.style.rotate = "90deg";
                }else if(test[i] == test[7]) {
                    crta.style.display = "block";
                    crta.style.top = "225px";
                    crta.style.left = "300px";
                    crta.style.rotate = "90deg";
                }else if(test[i] == test[1]) {
                    crta.style.display = "block";
                    crta.style.top = "-50px";
                    crta.style.right = "290px";
                    crta.style.height = "700px";
                    crta.style.rotate = "-45deg";
                }else if(test[i] == test[4]) {
                    crta.style.display = "block";
                    crta.style.top = "-50px";
                    crta.style.right = "290px";
                    crta.style.height = "700px";
                    crta.style.rotate = "45deg";
                }
                setTimeout(() => {
                    reset();
                }, 1000);
                rezultatO.innerText = scoreO.toString();
                setTimeout(() => {
                    if (scoreO == 5) {
                        scoreO = 0;
                        scoreX = 0;
                        rezultatO.innerText = "0";
                        rezultatX.innerText = "0";
                        nerijesen.innerText = "0";
                        alert("O je pobjednik!!!");
                    }
                }, 100);
            }
        }
        for (let i = 0; i < test.length; i++) {
            if ((tester(a, test[i]) == false) && (counter == 9)){
                counter = 0;
                scoreDraw++;
                setTimeout(() => {
                    nerijesen.innerText = scoreDraw.toString();
                    reset();
                }, 500);
            }
        }
    } 
    
    else {
        clicked = false;
        red[0].style.backgroundColor = "lightgreen";
        red[1].style.backgroundColor = "";
        this.classList.add('krizic');
        this.style.opacity = "1";
        this.removeEventListener('click', play);
        b.push(+(this.classList[1]));
        counter++;

        for (let i = 0; i <= test.length; i++) {
            if (tester(b, test[i]) == true) {
                clicked = true;
                counter = 0;
                scoreX++;
                red[0].style.backgroundColor = "";
                red[1].style.backgroundColor = "lightgreen";
                if (test[i] == test[2]) {
                    crta.style.display = "block";
                    crta.style.left = "100px";
                }else if(test[i] == test[3]) {
                    crta.style.display = "block";
                    crta.style.left = "300px";
                }else if(test[i] == test[5]) {
                    crta.style.display = "block";
                    crta.style.left = "500px";
                }else if(test[i] == test[0]) {
                    crta.style.display = "block";
                    crta.style.top = "-175px";
                    crta.style.left = "300px";
                    crta.style.rotate = "90deg";
                }else if(test[i] == test[6]) {
                    crta.style.display = "block";
                    crta.style.top = "25px";
                    crta.style.left = "300px";
                    crta.style.rotate = "90deg";
                }else if(test[i] == test[7]) {
                    crta.style.display = "block";
                    crta.style.top = "225px";
                    crta.style.left = "300px";
                    crta.style.rotate = "90deg";
                }else if(test[i] == test[1]) {
                    crta.style.display = "block";
                    crta.style.top = "-50px";
                    crta.style.right = "290px";
                    crta.style.height = "700px";
                    crta.style.rotate = "-45deg";
                }else if(test[i] == test[4]) {
                    crta.style.display = "block";
                    crta.style.top = "-50px";
                    crta.style.right = "290px";
                    crta.style.height = "700px";
                    crta.style.rotate = "45deg";
                }
                setTimeout(() => {
                    reset();
                }, 1000);
                rezultatX.innerText = scoreX.toString();
                setTimeout(() => {
                    if (scoreX == 5) {
                        scoreO = 0;
                        scoreX = 0;
                        rezultatO.innerText = "0";
                        rezultatX.innerText = "0";
                        nerijesen.innerText = "0";
                        alert("X je pobjednik!!!");
                    }
                }, 100);
            }
        }
        for (let i = 0; i < test.length; i++) {
            if ((tester(b, test[i]) == false) && (counter == 9)){
                counter = 0;
                scoreDraw++;
                setTimeout(() => {
                    nerijesen.innerText = scoreDraw.toString();
                    reset();
                }, 500);
            }
        }
    }
}

function otkazi(event) {
    event.target.onmouseover = "";
    event.target.onmouseout = "";
}