// Ищем ноду для вставки результата запроса
const resultNode = document.querySelector('.j-result');
// Ищем кнопку, по нажатии на которую будет запрос
const btnNode = document.querySelector('.j-btn-request');
// проверяем LocalStorage
let localString = localStorage.getItem('myKey');
if (localString) {
  displayResult(JSON.parse(localString))
}
// рисуем ошибку
function printErr(numErr) {
  switch (numErr) {
    case 1:
      resultNode.innerHTML = `<p>Номер страницы и лимит вне диапазона от 1 до 10</p>`;
      break;
    case 2:
      resultNode.innerHTML = `<p>Номер страницы вне диапазона от 1 до 10</p>`;
      break;
    case 3:
      resultNode.innerHTML = `<p>Лимит вне диапазона от 1 до 10</p>`;
      break;
    default:
      resultNode.innerHTML = `<p>Unknown error</p>`;
  }
}
// валидация инпутов
function validInput(inputNum, inputLimit) {
  if ((inputNum < 1 || inputNum > 10) && (inputLimit < 1 || inputLimit > 10)) printErr(1)
  else if (inputNum < 1 || inputNum > 10) printErr(2)
  else if (inputLimit < 1 || inputLimit > 10) printErr(3)
  else return 0;
  return 1;
}
// отрисова карточек
function displayResult(apiData) {
  let cards = '';
  
  apiData.forEach(item => {
    const cardBlock = `
      <div class="card">
        <img
          src="${item.download_url}"
          class="card-image"
        />
        <p>${item.author}</p>
      </div>
    `;
    cards = cards + cardBlock;
  });
    
  resultNode.innerHTML = cards;
}
// Вешаем обработчик на кнопку для запроса
btnNode.addEventListener('click', () => {
  resultNode.innerHTML = '';
  let imgNumber = document.querySelector('.number').value;
  let imgLimit = document.querySelector('.limit').value;
  let errValid = validInput(imgNumber, imgLimit);
    if (!errValid) {
      let resUrl = ` https://picsum.photos/v2/list?page=${imgNumber}&limit=${imgLimit}`;
      fetch(resUrl)
        .then(response => response.json())
        .then((data) => {
          displayResult(data);
          localStorage.setItem('myKey', JSON.stringify(data))
        })
      .catch(() => {console.log('Error')})
    }   
})
