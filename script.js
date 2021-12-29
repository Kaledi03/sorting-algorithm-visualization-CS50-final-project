/**
 * Kaled Brahmi 12/28/2021
 * 
 * NB. in order to be able to visualize in real time the sorting, all the sorting
 * algorythms are written recursively so they may not be the best, most elegant or
 * more efficent version but in this scoop they are ok.
 * 
 * GitHub:github.com/kaledi03
 */

//number of elements in the array
const array_leangth = 100;
//'array' is the global variable that will store the value to be sorted
let array = [];

//at the start of the programm the call to 'shuffle' generates the first array
shuffle();

/*
'shuffle' fills the global variable 'array' with n random values
ranging from 0 to 100 (where n is equal to 'array_length')
*/
function shuffle() {
    for (let i=0; i<array_leangth; i++) {
        array[i] = Math.floor(Math.random() * 100);
    }
    drawArray();
}

/*
function called by the 'sort' button that by checking the radio buttons 
calls one of the functions for each algorythm
*/
function sort() {
    document.getElementById("generate").disabled = true;
    document.getElementById("sort").disabled = true;
    //by reading the value of the radio button the function chose which algorythm to use
    var getSelectedValue = document.querySelector('input[name="algo"]:checked');
    if(getSelectedValue != null){
        if(getSelectedValue.id === "selection"){
            selectionSort(0);
        } else if (getSelectedValue.id === "insertion") {
            insertionSort(1);
        } else {
            bubbleSort();
        }
    }

    //at the end of the sorting the programm redraws the array sorted
    drawArray();
}


function bubbleSort(){
    let swapped = false;
    for (let i=0; i<array_leangth-1; i++) {
        if (array[i] > array[i+1]) {
            //swap of the two values to their correct (for now) position
            swap(i, i+1);
            swapped = true;
        }
    }
    if (swapped == false){
        document.getElementById("generate").disabled = false;
        document.getElementById("sort").disabled = false;
        return;
    }
    /*
    between the two calls of the recursive function there is a small time
    that lets the browser display the array drawn by the 'drawArray' function
    */
    drawArray();
    setTimeout(bubbleSort, 0.5);

}

function selectionSort(i) {
    /*
    loop through all the sub arrays looking for the lowest value that 
    will go to the start of the sub array
    */
    let lowest = i;
    for (let j=i; j<array_leangth; j++) {
        if(array[j]<array[lowest]){
                lowest = j;
        }
    }
    /*
    swap between the lowest value so far an the first value of the subarray
    in other words, the lowest value of the subarray goes in first position
    */
    swap(lowest, i);
    

    if (i+1 > array_leangth-1){
        document.getElementById("generate").disabled = false;
        document.getElementById("sort").disabled = false;
        return;
    }
    /*
    between the two calls of the recursive function there is a small time
    that lets the browser display the array drawn by the 'drawArray' function
    */
    drawArray();
    setTimeout(function(){
        selectionSort(i+1)
    },0.5);
}

function insertionSort(i) {
    let x = i;
    /*
    repeat until the number will be in the right place
    in the ordered part of the array
    */
    while (array[x] < array[x-1]) {
        swap(x, x-1)
        if (x > 1) {
            x--
        } else {
            break;
        }
    }

    if (i+1 > array_leangth) {
        document.getElementById("generate").disabled = false;
        document.getElementById("sort").disabled = false;
        return;
    }
    /*
    between the two calls of the recursive function there is a small time
    that lets the browser display the array drawn by the 'drawArray' function
    */
    drawArray();
    setTimeout(function(){
        insertionSort(i+1)
    },0.5);
}


/*
function used by different others functions to swap two elements of the array
'element1' is the index of the element in the array that will be swapped
with the value at index 'element2'
*/
function swap(element1, element2) {
    //TODO - VISUALIZATION OF THE SWAP
    let temp = array[element1];
    array[element1] = array[element2];
    array[element2] = temp;
}

 

/*
function that by adding some html elements inside a 'div' element is able to 
display the array

the function loops through each value of the array and creates a 'div' element
that is wide 100(the total, 100%) divided by the number of elements minus the 
space beetween each column (100/(array_leangth - 0.1*array_leangth))
*/
function drawArray(){
    document.getElementById("main_space").innerHTML = "";
    for (let i=0; i<array_leangth; i++) {
        document.getElementById("main_space").innerHTML += 
        "<div id='"+ i +"' class='array_element' style='width:" + (100/(array_leangth - 0.1*array_leangth)) + "%; height:" + array[i] + "%' ></div>"
    }
}