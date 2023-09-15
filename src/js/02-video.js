import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
// import VimeoPlayer from '@vimeo/player';

const player = new Player('vimeo-player', {
  id: 236203659,
  width: 640,
});

const saveCurrentTimeThrottled = throttle(function (currentTime) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(currentTime));
}, 1000);

player.on('timeupdate', function (event) {
  const currentPlayerTime = event.seconds;
  saveCurrentTimeThrottled(currentPlayerTime);
});

window.addEventListener('DOMContentLoaded', async () => {
  const currentTime = localStorage.getItem('videoplayer-current-time');
  if (currentTime) {
    try {
      await player.setCurrentTime(parseFloat(currentTime));
    } catch (error) {
      console.error('Помилка при встановленні часу відтворення:', error);
    }
  }
});
