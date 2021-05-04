let number;
let prime;

process.stdout.write('Write a number: ');   // write in console, it can also with 'console.log()' method.

process.stdin.on('data', (data) => {        // event to catch a data by console.
    number = data.toString().trim();        // it's assigned the data converted into string and remove the spaces at the beginning and at the end
    let aux = 0;

    for(let i=1; i<=parseInt(number); i++){
        if(parseInt(number)%i == 0) aux++;
        prime = (aux==2) ? `${number} it's a prime number` : `${number} it's not a prime number`; // '1' isn't considered a prime number
    }
    
    console.log(prime);
    process.exit(); // finalize the process.
})