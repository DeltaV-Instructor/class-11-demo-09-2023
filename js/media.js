'use strict';
console.log('media file is connected');


//want a global and I need an id from my html

const levees = document.getElementById('levees');

const randomizer = document.getElementById('randomizer');
console.log(levees,randomizer);

// randomizer.addEventListener('click', nameFunction);

randomizer.addEventListener('click', function(){
  //      key on the audio object
  levees.volume = Math.random();
  console.log('random volume', levees.volume);
  // levees.autoplay = true;

});
