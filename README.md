# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Shriya Vaagdevi Chikati

Time spent: 6 hours spent in total

Link to project: https://glitch.com/edit/#!/accessible-simplistic-singer?path=index.html%3A30%3A30

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [ ] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Displaying the number of mistakes the player can make in the form of emojis

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![3chances](https://user-images.githubusercontent.com/95562069/161200488-fb8b236e-8952-46b8-a087-032304746d3e.gif)
![reducedTime](https://user-images.githubusercontent.com/95562069/161200713-2d3f9d5a-7b9e-4301-8245-7d683e97fd1c.gif)
![differentPattern](https://user-images.githubusercontent.com/95562069/161202194-cfae3706-1566-43b9-8ae0-1c7a8bdfa410.gif)
![gameWon](https://user-images.githubusercontent.com/95562069/161203715-f712a256-7192-4250-ae05-a7ab05e6b6ea.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
https://developer.mozilla.org/en-US/docs/Web/CSS/color_value 
https://stackoverflow.com/questions/5836833/create-an-array-with-random-values 
https://www.w3schools.com/jsref/prop_html_innerhtml.asp 
https://www.w3schools.com/jsref/met_loc_reload.asp 


2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
I faced some small barriers while trying to get the project to work the way I intended it to, like, some of the buttons not lighting up when pressed, or displaying a "Game Over. You lost" message after the second guess, even though the right buttons were pressed. I tried to solve them by looking over the part of the code that was responsible for such errors and making changes that were minor like adding the right number to the button that was not lighting up, putting braces in the proper places, or comparing the logic of the flow chart with the one I wrote. Another challenge was implementing the optional feature, generating a random secret pattern. I knew that the ‘Math.random()’ function would generate a random number, but I was not sure how. So, with the help of the internet, I figured out the right function to use. Then, to implement generating a random number into an array, it hit me that I had to use a loop to generate the number of random integers required. I put the function into the loop but was not sure how to declare an array in javascript without initializing it. I tried putting braces with nothing inside of them, which worked. Also, one challenge that took me the longest to solve while creating the project was formatting the ‘Chances remaining:’ part. I wanted to format it, along with the three emojis representing the chances left, to the rightmost side of the start/stop button so that they lie in the same line. I managed to format it to the immediate right of the start/stop button by changing the numbers in the tags of the text but could not somehow get it to the rightmost side.


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
 

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
[YOUR ANSWER HERE]



## Interview Recording URL Link

[My 5-minute Interview Recording](your-link-here)


## License

    Copyright [YOUR NAME]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
