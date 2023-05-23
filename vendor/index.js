Для того чтобы добавить фоновое видео на HTML-блок с помощью JavaScript, можно использовать следующий код:
```html
<div id="my-video-block" class="my-block"></div>
```
В CSS добавьте стили для блока:
```css
.my-block {
width: 300px;
height: 200px;
background-size: cover;
overflow: hidden;
}
```
Теперь напишем JavaScript-код:
```javascript
// Получаем ссылку на видео
const videoSrc = "https://www.w3schools.com/html/mov_bbb.mp4";
// Создаем видеоэлемент и добавляем его в блок
const videoElement = document.createElement("video");
videoElement.src = videoSrc;
videoElement.muted = true; // Отключаем звук
videoElement.loop = true; // Зацикливаем видео
document.querySelector(".my-block").appendChild(videoElement);
// Добавляем обработчик события onplay, чтобы сделать плавное появление видео
videoElement.onplay = () => {
setTimeout(() => {
// Добавляем класс "video-playing" для плавного появления видео
document.querySelector("#my-video-block.my-block")
.classList.add("video-playing");
}, 2000);
};
```
Обратите внимание, что в коде используется задержка в 2 секунды для плавного появления фонового видео. Вы можете изменить значение задержки в соответствии с вашими потребностями.
Также не забудьте добавить стили для класса "video-playing", чтобы указать, как будет выглядеть блок с фоновым видео.
