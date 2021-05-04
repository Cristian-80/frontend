let number;

process.stdout.write('Write a number: ');   // write in console, it can also with 'console.log()' method.

process.stdin.on('data', (data) => {        // event to catch a data by console.
    number = data.toString().trim();        // it's assigned the data converted into string and remove the spaces at the beginning and at the end
    let left = 0;                           // to validate on the left
    let right = number.length -1;           // to validate on the right
    let half = parseInt(right /2);          // to find the middle

    while(number[left] == number[right]){   
        if(half == left){
             console.log("it's capicúa")
             break;
        }
        right--;
        left++;
    }
    if(half != left)
    console.log("it's not capicúa")

    process.exit(); // finalize the process.
})