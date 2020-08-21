# My Roboger's Neighborhood

#### This application takes a user inputted number (and optional name) and outputs an array of string and numbers following various rules, 2020

#### By David McCaslin

## Description

This application intakes user input through a form and calculates an output in the form of an array containing numbers and strings. The output is displayed via a list in a human readable html format. The core logic of this application involves creating an output array with a range of numbers that is then converted based on various specs outlined in this README. 

## Specs

* <strong>Spec:</strong> The program returns a range of numbers from 0 to the inputted number
    * <strong>Input:</strong> 5
    * <strong>Output:</strong> 0, 1, 2, 3, 4, 5
* <strong>Spec:</strong> Numbers that contain a "1" will have all digits replaced with <em>"Beep!"</em>
    * <strong>Input:</strong> 3
    * <strong>Output:</strong> 0, "Beep!", 2, 3
* <strong>Spec:</strong> Numbers that contain a "2" will have all digits replaced with <em>"Boop!"</em>
    * <strong>Input:</strong> 3
    * <strong>Output:</strong> 0, 1, "Boop!", 3
* <strong>Spec:</strong> Numbers that contain a "3" will have all digits replaced with "Won't you be my neighbor?"
    * <strong>Input:</strong> 3
    * <strong>Output:</strong> 0, 1, 2, "Won't you be my neighbor?"
* <strong>Spec:</strong> The number 13 should be replaced with "Won't you be my neighbor?"
    * <strong>Input:</strong> 15
    * <strong>Output:</strong> 0, 1, 2 ... 11, 12, "Won't you be my neighbor?", 14, 15
* <strong>Spec: </strong> The number 21 should be replaced with "Boop". The rule takes precent over the previous rule.
    * <strong>Input:</strong> 25
    * <strong>Output:</strong> 0, 1, 2 ... 19, 20, "Boop", 22, 23, 24, 25
* <strong>Spec: </strong> The number 32 should be replaced with "Won't you be my neighbor?"
    * <strong>Input:</strong> 35
    * <strong>Output:</strong> 0, 1, 2 ... 30, 31, "Won't you be my neighbor?", 33, 34, 35
* <strong>Spec: </strong> In the case of numbers with 3 digits or more, the converted numbers must continue to follow the above rules based on precedents specified. Rules 2 through 7 above take precedent over each other in <strong>reverse</strong> order.
    * <strong>Input:</strong> 1321
    * <strong>Output:</strong> .... "Boop" ...

## Tests

* Please see Specs section above for tests

## Setup/Installation Requirements

* Find repository on GitHub or otherwise obtain repo link
* Clone, fork, or otherwise download the project
* Run the project through a local server, live server, directly in the browser, or any method of your choosing
* The recommended editor for viewing the application is Visual Studio Code


## Known Bugs

There are no known bugs. The application is optimzed for a desktop and is not guaranteed to be fully viewable on all devices.

## Support and contact details

Contact: davidmccaslin94@gmail.com

## Technologies Used

* Languages: HTML, CSS, JavaScript
* Libraries: Bootstrap, jQuery
* Development Tools: Visual Studio Code, Git, GitHub

### License

MIT Open Source

Copyright (c) 2020 David McCaslin