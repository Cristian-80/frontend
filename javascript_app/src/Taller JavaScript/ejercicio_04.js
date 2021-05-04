let questions = ['Write a number: ', 'find a digit: '];
let numbers = [];
let result

const Questions = (i)  => {
    process.stdout.write(questions[i]);     // write in console, it can also with 'console.log()' method.
}

process.stdin.on('data', (data) => {        // event to catch a data by console.
    numbers.push(data.toString().trim())    // it's assigned the data converted into string and remove the spaces at the beginning and at the end
    if(numbers.length < questions.length){
        Questions(numbers.length)
    }
    else {
        find_character(numbers[0], numbers[1]);
        process.exit();                    // finalize the process.
    }
})

const find_character = (num, find) => {
    result = num.indexOf(find)              // method indexOf to find a character into the string
    if(result != -1){
        console.log(`The digit it's at ${result} position`);
    }
    else console.log('not found :(');
}

Questions(0);