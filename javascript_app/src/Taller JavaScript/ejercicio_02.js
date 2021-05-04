let number;

process.stdout.write('Write a number: ');   // write in console, it can also with 'console.log()' method.

process.stdin.on('data', (data) => {        // event to catch a data by console.
    number = data.toString().trim();        // it's assigned the data converted into string and remove the spaces at the beginning and at the end
    let sum = 0;

    for(let i=0; i<number.length; i++){
        sum += parseInt(number[i], 10);    // the value converted to int is add to sum
    }
    
    process.stdout.write(`The sum is: ${sum}`);
    process.exit(); // finalize the process.
})