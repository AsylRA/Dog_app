const button = document.querySelector(".btn");
const image = document.querySelector(".img");
const url = "https://dog.ceo/api/breeds/image/random";


// Асинхронная операция запроса на сервер для получение изображения собак
async function fetchRandomDogImage () {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }


        const data = await response.json();
        //console.log(response);
        const imageUrl = data.message;
        // const filename = imageUrl.substring(imageUrl.lastIndexOf('/') + 1);
        const folderName = imageUrl.substring(imageUrl.indexOf('breeds/') + 'breeds/'.length, imageUrl.lastIndexOf('/'));
        console.log('folderName:', folderName);
        image.src = imageUrl;
        const folderNameElement = document.getElementById("folder-name");
        const capitalizedFolderName = folderName.charAt(0).toUpperCase() + folderName.slice(1);


        //image.src = data.message;  // Получение URL изображения
        folderNameElement.textContent = ` ${capitalizedFolderName}`;
    } catch (error) {
        console.error('Error fetching random dog image:', error); // Обработка ошибки
        console.log(error)
    }
}
// Обработчик события клика на кнопку.
 button.addEventListener("click", () => {
    fetchRandomDogImage();
 })

