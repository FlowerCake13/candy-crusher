# candy-crusher

Crush, I mean, grab those candy pieces and avoid coal, socks, and other meh items.

![Example](https://github.com/junior-devleague/candy-crusher/blob/master/candycrush.gif)

## Objective

Use **setInterval**, **appendChild**, **Functions** and more to create a candy grab game.

## Prerequisites

To complete this project, students should have the following:
* Intermediate understanding of HTML elements (divs, images, attributes, structures)
* Intermediate understanding of CSS (Keyframe animations, positioning)
* Intermediate understanding of JS (Appending children, DOM, functions, setInterval)

## Your Challenge

### Part I

To complete Part I, fulfill the following requirements:

1. Set up your file structure through the command line:
 * index.html
 * styles.css
 * app.js
2. Link your CSS file to your index.html file.

### Part II HTML

To complete Part II, fulfill the following requirements:
1. Create a ```div``` with an id of "container".

### Part III CSS

To complete Part III, fulfill the following requirements:
1. Create a keyframe animation called "moveRight with the following:
  * from
    * ```transform: rotate(0deg);```
    * ```transform-origin: 50% 40%;```
  * to
    * ```left: 2000px;```
    * ```transform: rotate(360deg);```
    * ```transform-origin: 10% 10%;```
2. Target the class of "item".
  * Set the position to absolute
  * Set the width to 100px
  * Set the left to -100px
  * Set the animation name to moveRight
  * Set the animation-duration to 8s
  * Set the animation-iteration-count to 1

### Part IV JS

To complete Part IV, fulfill the following requirements:
1. Store the container element in a variable.
2. Create 4 objects in varirables named item1, item2, item3, item4 with the following two properties:
  * type: 'good' | 'bad',
  * imgSrc: 'pathToImage'

This should look as follows:
``` javascript
var item1 = {
  type: 'good',
  imgSrc: 'imgs/candycane.png'
}
```

The type can be good or bad depending on your preference for the item.

3. Create an array to store all of your objects.

4. Create a setInterval that will run a function called ```addItem``` every 1000 milliseconds.

5. Create a function called randomNum(min, max) that will return a random number between the min and max.

6. Create a function called addItem that will do the following:
  * Create an image
  * Set the src of this new image to a random imgSrc (from your objects)
  * Set the top style of the image to a random pixel value between 0 and 1000.
  * Add the class of "item" to the image.
  * Create a click function for the image that will check if the item is "good" or "bad". If the item is "good", make the item disappear. If the item is bad, print "boo" to the console.
  * Append the image to the container.
  * Create an if statement to check if there are more than 5 items in the container. If so, remove the first item.

## Stretch Goals
1. Add sounds and points! If the image clicked is "good", add a crushing sound and give the player points on a scoreboard. If the image clicked is "bad", deduct points.
2. Add more objects to your game. 
