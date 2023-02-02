function isTouching(a,b) 
{   
    const aRect = a.getBoundingClientRect();
    const bRect = b.getBoundingClientRect();
    return !(
        aRect.top + aRect.height < bRect.top ||
        aRect.top > bRect.top + bRect.height ||
        aRect.left + aRect.width < bRect.left ||
        aRect.left > bRect.left + bRect.width
    );
}

const player = document.getElementById("player");
const coin = document.getElementById("coin");
const count = document.getElementById("counterUpdate");

window.addEventListener('keydown', function(e)
{
        switch (e.key) {
            case "ArrowDown":
              const currTop = extractPos(player.style.top) + 50;
              if (currTop + player.clientHeight < window.innerHeight) {
                player.style.top = `${currTop}px`;
                break;
              }
            case "ArrowRight":
              const currLeft = extractPos(player.style.left) + 50;
              if (currLeft + player.clientWidth < window.innerWidth) {
                player.style.left = `${currLeft}px`;
                player.style.transform = "scale(1, 1)";
                break;
              }
            case "ArrowUp":
              const currDown = extractPos(player.style.top) - 50;
              if (currDown >= 0) {
                player.style.top = `${currDown}px`;
                break;
              }
            case "ArrowLeft":
              const currRight = extractPos(player.style.left) - 50;
              if (currRight >= 0) {
                player.style.left = `${currRight}px`;
                player.style.transform = "scale(-1, 1)";
                break;
              }
          }

        if(isTouching(player,coin))
        {
            moveCoin();
            let iter = Number(count.innerText);
            iter++;
            count.innerText = iter.toString()
        }
})

//function to change the string into number to change the position

const extractPos = (pos) => {

    if(!pos) return 0;
    return parseInt(pos.slice(0,-2)); 
}

function moveCoin() {
    const x = Math.floor(Math.random() * (window.innerWidth - coin.clientWidth));
    const y = Math.floor(Math.random() * (window.innerHeight - coin.clientHeight));
    coin.style.top = `${y}px`;
    coin.style.left = `${x}px`;
}

moveCoin();

