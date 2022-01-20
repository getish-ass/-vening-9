btnShow = document.querySelector('#btn');
dShowMe = document.querySelector('#showMe');

const getCardApi = () => {
   
    
    fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=1', {
        method : 'GET',
        header : {
            'Accept' : 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => {
        console.log(data.cards[0].image);
        let cardImg = document.createElement('img');   
        cardImg.src = data.cards[0].image;
        dShowMe.appendChild(cardImg);
    }).catch(err => console.log(err))
  
}

btnShow.addEventListener('click', getCardApi);
