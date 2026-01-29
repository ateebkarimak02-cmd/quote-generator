let btn = document.querySelector('.btn');
let quote = document.querySelector('.quote-container p');
let person = document.querySelector('.author');
let arr = [{
    quote: `“Believe you can and you’re halfway there.”`,
    person: `Theodore Roosevelt`
},{
    quote: `“Success is not final, failure is not fatal: it is the courage to continue that counts.”`,
    person: `Winston Churchill`
},{
    quote: `“The future belongs to those who believe in the beauty of their dreams.”`,
    person: `Eleanor Roosevelt`
},{
    quote: `“Do what you can, with what you have, where you are.”`,
    person: `Theodore Roosevelt`
},{
    quote: `“In the middle of difficulty lies opportunity.”`,
    person: `Albert Einstein`
},{
    quote: `“It always seems impossible until it’s done.”`,
    person: `Nelson Mandela`
},{
    quote: `“If you want to shine like the sun, first burn like the sun.”`,
    person: `A. P. J. Abdul Kalam`
},{
    quote: `“Dream big and dare to fail.”`,
    person: `Norman Voughan`
},{
    quote: `"Happiness depend upon ourself"`,
    person: `Aristotle`
},{
    quote: `“Don’t watch the clock; do what it does. Keep going.”`,
    person: `Sam Levenson`
}];

btn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * arr.length);
    quote.innerText = arr[random].quote;
    person.innerText = arr[random].person; 
});
btn.addEventListener('mousedown', () => {
    btn.style.backgroundColor = "rgba(0,0,0,0.9)";
});
btn.addEventListener('mouseup', () => {
    btn.style.backgroundColor = "";
});