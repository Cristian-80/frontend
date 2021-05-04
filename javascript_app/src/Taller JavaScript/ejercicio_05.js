let number;

process.stdout.write('Write a number: ');   // write in console, it can also with 'console.log()' method.

process.stdin.on('data', (data) => {        // event to catch a data by console.
    number = data.toString().trim();        // it's assigned the data converted into string and remove the spaces at the beginning and at the end
    let higher = 0;                         // higher number

    for(let i=0; i<number.length; i++){
        higher = (higher < number[i]) ? number[i] : higher; //operador ternario
    }
    
    process.stdout.write(`The higher number is: ${higher}`);
    process.exit(); // finalize the process.
})