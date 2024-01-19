let hasil = document.querySelector('.hasil');
let intro = document.querySelector('.intro');

let a = prompt('berapa nilai kamu? (1-100)');
if (a >= 1 && a < 101) {
    intro.style.display = 'block';
    if (a <= 20) {
        hasil.innerHTML = ('E');
    } else if (a <= 40 && a > 20) {
        hasil.innerHTML = ('D');
    } else if (a <= 60 && a > 40) {
        hasil.innerHTML = ('C');
    } else if (a <= 80 && a > 60) {
        hasil.innerHTML = ('B');
    } else if (a <= 100 && a > 80) {
        hasil.innerHTML = ('A');
    }
} else {
    alert ('Maaf, nilai yang kamu masukkan salah')
}