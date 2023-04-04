// Ищем ноду для вставки результата запроса
const resultNode = document.querySelector('.j-result');
// Ищем кнопку, по нажатии на которую будет запрос
const btnNode = document.querySelector('.j-btn-request');

function setErr() {
    resultNode.innerHTML = `<p>одно из чисел вне диапазона от 100 до 300</p>`
}
function displayResult(apiData) {
    resultNode.innerHTML = `
      <div class="card">
        <img
          src="${apiData}"
          class="card-image"
        />
      </div>
    `;
}

// Вешаем обработчик на кнопку для запроса
btnNode.addEventListener('click', () => {
    let imgWidth = document.querySelector('.width').value;
    let imgHeight = document.querySelector('.height').value;
    if ((imgWidth >= 100 && imgWidth <= 300) && (imgHeight >= 100 && imgHeight <= 300)) {
        let resUrl = `https://picsum.photos/${imgWidth}/${imgHeight}`;
        fetch(resUrl)
            .then((response) => {
                imgUrl = response.url;
                displayResult(imgUrl)
            })
            .catch(() => {console.log('Error')})
    } else setErr();   
})