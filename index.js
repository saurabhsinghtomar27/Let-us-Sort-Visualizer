var audio = new Audio("swipe.mp3");
var done = new Audio('Done.mp3');
let a1 = document.getElementById('array');
let inbut = document.getElementById('input')
// console.log((arr1.value)
let parentDiv = document.getElementsByName('parentDiv');
let btn = document.getElementsByClassName('startbtn');
let SelectionSort = document.getElementById("selction-sort");
let insertionSort = document.getElementById('insertion-sort');

// setting Height of Block using arr
let arr = [Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100,]
// let arr1 = []
// inbut.addEventListener('click', inp(arr,a1))
// function inp(arr) {
//     let a = a1.value.split(',')
//     for (let i = 0; i < a.length; i++) {
//         arr[i] = parseInt(a[i]);
//     }
// }
// function readarr(arr) {
    let i = 0;
    arr.forEach((e) => {
        let innerDiv = document.createElement('innerDiv');
        innerDiv.style.height = (e * 6 + 'px');
        innerDiv.innerHTML = Math.ceil(e);


        innerDiv.style.color = "white"
        innerDiv.style.width = ("55px")
        innerDiv.setAttribute('id', 'elem' + i);
        // console.log(`#` + ((1 << 24) * Math.random() | 1).toString(16))
        // innerDiv.style.backgroundColor = `#` + ((1 << 24) * Math.random() | 1).toString(16)
        innerDiv.style.backgroundColor = 'red'
        i++;
        innerDiv.classList.add("innerDiv")
        document.getElementById("pd").appendChild(innerDiv);

    });
// }


btn[0].addEventListener("click", () => bubbleSort(arr));
SelectionSort.addEventListener('click', () => selectionSort(arr));
const sleep = (time) => {
    return new Promise(resolve => setTimeout(resolve, time))
}

async function bubbleSort(arr) {
    // readarr(arr)
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                await sleep(300);
                swapNumber(arr, j, j + 1);
                swap(j, j + 1)


            }

        }
        let a = 'elem' + (arr.length - i - 1);
        let e1 = document.getElementById(a);
        e1.style.backgroundColor = 'green'
    }
    done.play()
}
// let arr1=[1,3,2,4,2]
async function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let ind = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[ind])
                ind = j;
        }
        await sleep(500);
        swapNumber(arr, i, ind)
        swap(i, ind)
        let a = 'elem' + i;
        let e1 = document.getElementById(a);
        e1.style.backgroundColor = 'green'

    }
    done.play()
}


function swapNumber(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

}
// swappig the block
function swap(i, j) {
    let a = 'elem' + i;
    let b = 'elem' + (j);
    let e1 = document.getElementById(a);
    let e2 = document.getElementById(b);
    let bg1 = e1.style.backgroundColor;
    let bg2 = e2.style.backgroundColor;
    let h1 = e1.clientHeight;
    let h2 = e2.clientHeight;

    let in1 = e1.innerHTML;
    let in2 = e2.innerHTML;
    e1.innerHTML = in2;
    e2.innerHTML = in1;
    // console.log(e1.innerHTML)
    e1.style.backgroundColor = bg2;
    e2.style.backgroundColor = bg1;
    // e2.style.backgroundColor = 'green'
    e1.style.height = h2 + "px";
    e2.style.height = h1 + "px";
    audio.play()
}