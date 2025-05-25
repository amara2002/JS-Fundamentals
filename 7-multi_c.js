    const args = process.argv.slice(2);
    const x = parseInt(args[0], 10);

    if (isNaN(x)) {
    console.log("Missing number of occurrences");
    } else if (x > 0) {
    let i = 0;
    while (i < x) {
        console.log("C is fun");
        i++;
    }
    }
    // else for x <= 0 (like -3), print nothing
