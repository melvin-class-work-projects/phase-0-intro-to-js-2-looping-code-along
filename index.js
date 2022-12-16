// Code your solutions in this file
const gifts = [];
function writeCards(gifts, surprise) {
    for (let i = 0; i < gifts.length; i++) {
        gifts[i] = `Thank you, ${gifts[i]}, for the wonderful ${surprise} gift!`;
    }
    return gifts;
}
function countDown(number) {
    while (number >= 0) {
        console.log(number--);
        debugger;
    }
}
countDown(4)