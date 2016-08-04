# Hello!

Welcome to the OMDB-search application. I've detailed my technical approach below. A demo is available at https://omdb-searching.herokuapp.com.


## Running the code

You can launch the code by opening the index.html file in the browser.


## Approach

I was advised that this should take between 4 and 6 hours, and with this in mind I have made some compromises.

As the functionality was essentially there in the starter-code, I decided to build on the jQuery-based approach rather than start again from scratch with AngularJS or similar. 

This enabled me to concentrate on getting the content correct (eg the right movie type) and the styling and responsivity as good as possible, as well as fine-tuning the functionality – eg making use of the submit button on the form and sorting the results with buttons rather than with radio buttons.

The sizing/spacing is an approximation and I feel the responsivity is a bit crude. I would have liked to spend more time refining both.


## With more time...

I would have liked to have separated the JS code to become object-oriented (I started this with the Content object).

As the brief mentioned scalability, I considered using AngularJS to display the results area, render the cards and operate the sort function. Again, time was a factor here, so I decided to work with the jQuery-based functionality rather than start again from scratch. I also had a question in my mind about how scalable this app is, given that it already makes use of all the data available. So I would ideally want to know more about this before deciding whether to use AngularJS or not. 

Although working with HTML in the JS files is not ideal, I felt that it was a relatively simple and lightweight solution to the brief as it stands. With more info/time, using AngularJS would have provided a more flexible and powerful solution.


## One small point

The brief recommended that users should be able to click on the film info that was initially displayed to see more detail. Given that the design included all the available data except the IMDB ID, I felt it wasn't worth asking the user to perform an additional action for this small benefit. So I included the IMDB ID on the card with the other data from the start.

