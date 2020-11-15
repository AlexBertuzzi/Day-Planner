# Day-Planner
In this project I created a simple day planner by modifying a starter html and css page and utilizing javascript, jquery and moment.js to set the date and current hour.
The current hour is utilized to set conditional formating for the time blocks. If the time block is
in the past it will appear grey, if in the present will appear red, and if in the future will appear
green.
I utilized on click events to load tasks into local storage so that when the page is refreshed previously
saved events will populate thier corresponding textareas.
I used a set interval function to call the conditional format function every five seconds so that the 
conditional format would stay current with the time period.
I used bootsrap row and collum formating along with a save icon from the bootsrap icon library.
