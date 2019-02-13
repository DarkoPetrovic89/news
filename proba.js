/**
 * Created by user on 2/13/2019.
 */

const dare = document.querySelector('header .dare');

async function prvo() {
   const wes = aweit dare.textContent+= 'test prvi,';
}
function drugo() {
    dare.textContent+= ' test drugi,';
}
function trece() {
    dare.textContent+= ' test treci';
}

setTimeout(prvo , 1500);
setTimeout(drugo , 500);
setTimeout(trece , 2000);