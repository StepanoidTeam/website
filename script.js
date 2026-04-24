const batman = document.querySelector('.batman');
const speechBubble = document.querySelector('.speech-bubble');

batman.addEventListener('click', ()=>{
  speechBubble.classList.toggle('hidden');
});