# Sorting algorythm visualization
Kaled Brahmi

Sorting algorythm visualization website created as the final project for the CS50 course.

The algorythms are 'bubble sort', 'insertion sort' and 'selection sort'.

The default number of elements is 100 but can be changed by changing the variable 'array_leangth' at line 12.

## Usage:
You can visit the live version of the website [here](https://kaledi03.github.io/sorting-algorithm-visualization-CS50-final-project/) or you can download the source code and manipulate it as you like.

## Languages used:
*HTML
*CSS
*JavaScript

## Explanation of 'script.js':
*Global ariable declaration:
    *array_leangth is the constant that rappresents the number of elements that will be added to the array
    *array is the array that is used
*Call to the 'shuffle' function (ln.17) populates the array with n random numbers in the range 0-100 where n is rappresented by 'array_leangth at the start of the code. The 'shuffle' function will be called during execution when the 'Generate' button will be presed.
*Function 'sort' called by the 'Sort' button:
    *Firt of all when the function is called the two buttons ('Generate' and 'Sort') are disabled in order to prevent interractions with the code during execution.
    *Next the function stores in 'getSelectedValue' which button of the radio button was selected, if this value is different from null, the function via an if steatment will call the appropriate function for each algorithm (rappresented by the id of the element).
    *At the end of the sorting there is a call to 'drawArray' that is explained later.
*Functions 'bubbleSort', 'selectionSort' and 'insertionSort':
    *Each function sorts the array according to the algorithm chosed in a recursive way and beetween each recursive call the function draws the array and via 'setTimeout' it allows the DOM to be redrawn(the program uses a recursive approach to the sorting function in order to have a good visualization).
    *When the array is sorted, before returning the function reactivates the buttons.
*Function 'swap':
    *This function takes two parameters('element1' and 'element2'), those parameters rappresent the index of the two elements of the array that have to be swapped.
*Function 'drawArray':
    *First of all the function clears the screen from all the collumns(elements of the array) by removing anything from the div with id 'main_space'.
    *Next the function iterates over all the elements of the array and creates a div for each element which height is equal to the value of the element in percentage; the width is 100 divided by n minus 0.1 times n, where 100 is the total percentage, n is the number of elements and 0.1 is the distance beetween each column. The index of the element is equal to the id of the 'div' created.

##Final consideration:
I'm aware that there are different possible improvements expecially for the UI because of time reasons and because of my inexperience with CSS.

If you have some suggestions feel free to contact me or improve the code by yourself.
 

