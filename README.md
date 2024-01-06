# RandomPassword-Generator

## Description
This is a password generator that will generate a random password based on the criteria selected by the user. The user will be prompted to select the length of the password (between 8 and 128) and whether or not to include lowercase letters, uppercase letters, numbers, and/or special characters. The user will then be presented with a password that meets the criteria they selected.

Threre are three functions in this application:

1. getPasswordOptions()
2. getRandom()
3. generatePassword()
4. writePassword() (This fucntion is already provided in the starter code)


![Screenshots
](https://github.com/Lotusniro/RandomPassword-Generator/blob/main/screenshots/Screenshot%202024-01-06%20at%2013.05.35.png)

```
1. getPasswordOptions()
    - prompt the user to select the length of the password
    - parseInt() to convert the input to integer
    - three possible error cases:
        - if the input is not a number
        - if the input is less than 8
        - if the input is greater than 128
    - alert the user with if statement met these error cases and  return nothing using return null
   - confirm the user to include lowercase letters, uppercase letters, numbers, and/or special characters
   - if the user select ok it will be true and if the user select cancel it will be false
    - if the user select cancel for all four options, alert the user to select at least one option and return nothing using return null
    - store the user input in an object to return as group of options
    - return the object to the function when the function is called
 ```
![Screenshots](https://github.com/Lotusniro/RandomPassword-Generator/blob/main/screenshots/Screenshot%202024-01-06%20at%2013.06.00.png)
```
 2. getRandom(arr)
   - this function will get the random element from an array which is passed as an argument
   - here the argument array is the array of characters which is selected by the user
   - Math.floor() and Math.random() are used to get the random element from the array
   - arr[randomIndex] is used to get the random element from the array and return it to the function when the function is called

```
![screenshots
](https://github.com/Lotusniro/RandomPassword-Generator/blob/main/screenshots/Screenshot%202024-01-06%20at%2013.06.20.png)
![screenshots](https://github.com/Lotusniro/RandomPassword-Generator/blob/main/screenshots/Screenshot%202024-01-06%20at%2013.06.42.png)
```
3. generatePassword()
   - this function will generate the password based on the user selected criteria
   - getPasswordOptions() is called to get the user selected criteria
   - in users selected criteria, if the user select ok for lowercase letters, uppercase letters, numbers, and/or special characters, then the characters will be added to the possible array
   - concat() is used to add the characters to the possible array
   - this possible array is passed as an argument to getRandom() function to get the random element from the array 
- for loop is used to get the random element according to the length of the password from the possible array
- result will be pushed to the result array
- result array is converted to string using join() and returned to the function when the function is called
```
![screenshots
](https://github.com/Lotusniro/RandomPassword-Generator/blob/main/screenshots/Screenshot%202024-01-06%20at%2013.06.49.png)
```
4. writePassword()
   - this function is already provided in the starter code
   - generatePassword() is called to get the password
   - passwordText is used to get the password id from the html
   - passwordText.value is used to display the password in the html
```

## Usage
This application can be used to generate a random password based on the criteria selected by the user.

## Credits
I would like to thank my tutor, my instructor, and my TA's for helping me with this project.

## License
MIT License

## Badges
n/a

## Features
n/a

## Contributing
n/a

## Tests
n/a

## Questions
If you have any questions, please contact me at the email below. Check out my Github portfolio for more of my projects!

- Github Username: Lotusniro
- Github Link for this project: ![githublink
](https://lotusniro.github.io/RandomPassword-Generator/)https://lotusniro.github.io/RandomPassword-Generator/



