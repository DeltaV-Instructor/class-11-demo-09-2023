'use strict';
console.log('app file is connected');

/*
  Practice domain modeling by planning out an app  that allows users to choose their favorite between two pizzas


  App Flow:
  - Randomly put 2 pizzas on the screen
    - Random number generator
    - a function to display pizzas
  - A user clicks on a pizza
    - event listener needs to be on the image to fire the event handler
    - the event handler fires
      - ? check if total clicks is 5 ?
        - stop letting the user click
        - display the clicks
      -? If not ?
        - track which pizza was clicked on
        - update click images count of how many times it has been clicked on
        - update both images'count of times shown
        - Randomly Pick 2 pizzas, run the same code that put them on the screen to begin with

  HTML
    - have a left and right image container in the html
    - Give them id's so we can select them// in demo today we are grab DOM elements differently.
    - let the user know what they are supposed to do
      - instructions

  More javascript details
  We need Objects with all the image properties
  const Image = function ()
  {
    name : 'Chicago Pizza',
    clicks: 0,
    timesShown: 0,
    url : 'chicagoPizza.jpeg'
  };

  We need an Array to hold all image Objects

  function to randomly pick an image{
    Prevent last picked pizzas from being picked
      - STRETCH pick all pizzas evenly as possible
    Math.floor  Math.random() * array.length()
    make sure left and right image are unique
  }

  click on an image, targetted by id
  add event listener('click', function(){
    keep track of the image that is clicked
    prevent all currently displayed images from being re clicked {
    }
  })

  function to display all the clicks at the end () {
    generate a table or ul list
    populate the data - adds to the inner html of an existing element (table or list)
    divide object's times clicked by total shown
  }

*/
//global vars....
let pizzaContainer = document.querySelector('section');
let resultButton = document.querySelector('section + div');
let image1 = document.querySelector('section img:first-child');
let image2 = document.querySelector('section img:nth-child(2)');
console.log({pizzaContainer,resultButton,image1,image2});

let clicks = 0;
let maxAttemptAllowed = 10;
console.log(clicks, maxAttemptAllowed);
Pizza.allPizzasArray = [];


//this function will create our pizza objects.
function Pizza(name, src){
  this.name = name;
  this.src = src;
  this.views = 0;
  //tracking individual image clicks
  this.click = 0;
  //As we create new instances of our pizza objects we can push those into array using the 'this' and the array.push()
  //built in array method
  Pizza.allPizzasArray.push(this);

}

// create a random number to use to display random images
function getRandomNumber(){
  return Math.round(Math.random() * Pizza.allPizzasArray.length);
}

//create function to render the pizzas/add logic to display different images
function renderPizzas(){
  let pizza1 = getRandomNumber();
  let pizza2 = getRandomNumber();
  console.log(pizza1,pizza2);

  //dont want to show same image twice
  while(pizza1 === pizza2){
    pizza2 = getRandomNumber();
  }
  //capture some data about images so we can show them and track them
  //update the 'src' for the new images.
 
  //html element
  image1.src = Pizza.allPizzasArray[pizza1].src;
  image2.src = Pizza.allPizzasArray[pizza2].src;
  console.log(image1,image2);

}
//add event handler for when we click on the images/ then remove event listener

//render the results of the clicking/voting totals




console.log(Pizza.allPizzasArray);

new Pizza('Brick Oven Pizza', 'assets/images/brickOvenPizza.jpg');
new Pizza('Calzone', 'assets/images/calzonePizza.jpg');
new Pizza('Chicago Deep Dish', 'assets/images/chicagoPizza.jpg');
new Pizza('Chicago Pizza and Oven Grinder', 'assets/images/cpoGinderPizza.jpg');
new Pizza('Detroit Style', 'assets/images/detroitPizza.jpg');
new Pizza('Papa Vito\'s Thin', 'assets/images/mwDeluxePizzaThinCrust.jpg');
new Pizza('New York Thin', 'assets/images/newYorkPizza.jpg');
new Pizza('Shot Gun Dans Pizza', 'assets/images/sgDansHtossedMeatLovPizza.jpg');
