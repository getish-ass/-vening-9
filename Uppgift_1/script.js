const nameText = document.querySelector('#inputTxt');
const btnEnter = document.querySelector('#btn');
const disTxtArea = document.querySelector('#showHere');

const getApi = () => {
   
    let urlAdd = 'https://www.swapi.tech/api/people/?name=';
    urlAdd  = urlAdd.concat(nameText.value);
    fetch(urlAdd, {
        method : 'GET',
        header : {
            'Accept' : 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => {
        console.log(data.result[0].properties);     
        disTxtArea.innerHTML = ` name: ${data.result[0].properties.name}\n birth date: ${data.result[0].properties.birth_year}\n eye color: ${data.result[0].properties.eye_color}\n gender: ${data.result[0].properties.gender}\n hair color: ${data.result[0].properties.hair_color}\n height: ${data.result[0].properties.height}\n weight: ${data.result[0].properties.mass}`

    }).catch(err => disTxtArea.innerHTML = `${err}`)
   nameText.value = ''; 
}

btnEnter.addEventListener('click', getApi);