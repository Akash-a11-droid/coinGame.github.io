let score = 0;
const scoreCard = document.querySelector('#scoreCard');

const avatar = document.querySelector('#player');
const coin = document.querySelector('#coin');

//Setting Initial position of the avatar
avatar.style.top = avatar.style.top || '0px';
avatar.style.left = avatar.style.left || '0px';
//Converting the top and left values of the avatar to integer
let avatarTopInteger = parseInt(avatar.style.top, 10);
let avatarLeftInteger = parseInt(avatar.style.left, 10);

//Setting Initial position of the coin
coin.style.top = `${Math.floor(Math.random() * window.innerHeight)}px`;
coin.style.left = `${Math.floor(Math.random() * window.innerWidth)}px`;

let avatarMoved = false;

window.addEventListener('keydown', function(e) {
    avatarMoved = false;
    switch(e.key){
        case 'ArrowDown':
            moveAvatarDown();
            avatarMoved = true;
            break;
        case 'ArrowUp':
            moveAvatarUp();
            avatarMoved = true;
            break;
        case 'ArrowLeft':
            moveAvatarLeft();
            avatarMoved = true;
            break;  
        case 'ArrowRight':
            moveAvatarRight();
            avatarMoved = true;
            break;
    }
    if (avatarMoved && isTouching(avatar, coin)) {
        scoreUpdate();
        moveCoin(Math.floor(Math.random() * 4));
    }

});

function moveAvatarDown() {
    if(avatarTopInteger + 50 < window.innerHeight) {
        avatarTopInteger += 50;
        avatar.style.top = `${avatarTopInteger}px`;
    }
}

function moveAvatarUp() {
    if(avatarTopInteger - 50 >= 0) {
        avatarTopInteger -= 50;
        avatar.style.top = `${avatarTopInteger}px`;
    }
}

function moveAvatarLeft() { 
    if(avatarLeftInteger - 50 >= 0) {
        avatarLeftInteger -= 50;
        avatar.style.left = `${avatarLeftInteger}px`;
    }
}

function moveAvatarRight() {
    if(avatarLeftInteger + 50 < window.innerWidth) {
        avatarLeftInteger += 50;
        avatar.style.left = `${avatarLeftInteger}px`;
    }
}

function isTouching(a, b) {
    const aRect = a.getBoundingClientRect();   // aRect -> DOMRect object of a
    const bRect = b.getBoundingClientRect();   // bRect -> DOMRect object of b

    return !(
        aRect.top + aRect.height < bRect.top ||   //aRect is above the bRect
        bRect.top + bRect.height < aRect.top ||   //bRect is above the aRect
        aRect.left + aRect.width < bRect.left ||  //aRect is at the left side of bRect
        bRect.left + bRect.width < aRect.left   //bRect is at the left side of aRect

        //This method 'isTouching' will return true only if all the above four conditions are false (or) not satisfied
    );  
}

function scoreUpdate (){
    score++;
    scoreCard.innerText = `Score: ${score}`;
}

function moveCoin(randomVal) {
    let rHorizontal;
    let rVertical;
    switch(randomVal) {
        case 0:
            //Moves the coin downwards
            rHorizontal = Math.floor(Math.random() * window.innerHeight);
            coin.style.top = `${rHorizontal}px`;
            break;
        case 1:
            //Moves the coin rightwards
            rVertical = Math.floor(Math.random() * window.innerWidth);   
            coin.style.left = `${rVertical}px`;
            break;
        case 2:
            //Moves the coin upwards
            rHorizontal = Math.floor(Math.random() * window.innerHeight);
            coin.style.top = `${rHorizontal}px`;
            break;
        case 3:
            //Moves the coin leftwards
            rVertical = Math.floor(Math.random() * window.innerWidth);   
            coin.style.left = `${rVertical}px`;
            break;
    }
}