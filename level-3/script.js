document.getElementById('testiframe').addEventListener('load', loaded);

function loaded() {
  setTimeout(function () {
    document.getElementById('loader').style.display = 'none';
    document.querySelector('.main').style.display = 'block';
  }, 1000);
}

let highScores = localStorage.getItem('theMONEY') || '2500';
console.log(highScores);
document.querySelector('.money').innerHTML = 'Your have: ' + highScores + ' kr';

let nextLink = document.querySelector('.next-link');


if (highScores >= 4000) {
  nextLink.innerHTML = 'Congratulations you keep your kidney !!!'
  nextLink.style.display = 'block';
} else if (highScores <= 0) {
  nextLink.style.display = 'block';
  nextLink.innerHTML = 'Hmm yeah you probably have to sell your kidney..'
} else{
  nextLink.innerHTML ='Reach 4000 kr...'
}

