let number;

process.stdout.write('Write a number: ');   // write in console, it can also with 'console.log()' method.

process.stdin.on('data', (data) => {        // event to catch a data by console.
    number = data.toString().trim();        // it's assigned the data converted into string and remove the spaces at the beginning and at the end
    let number_backwards = '';

    for(let i=(number.length-1); i>=0; i--){    // 'loop for' inverted.
        number_backwards += number[i];          // the value is assigned at position 'i' from back to front
    }

    parseInt(number_backwards, 10)  // convert string to int to base 10.
    
    process.stdout.write(`Your number backwards is: ${number_backwards}`);
    process.exit(); // finalize the process.
})