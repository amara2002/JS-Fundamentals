    const args = process.argv.slice(2);

    if (args[0] === undefined) {
    console.log("No argument");
    } else if (args[1] === undefined) {
    console.log(`one argument "${args[0]}"`);
    } else if (args[2] === undefined) {
    console.log(`2 arguments: "${args[0]} ${args[1]}"`);
    } else {
    console.log("Arguments found");
    }

