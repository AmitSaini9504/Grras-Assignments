var prompt = require('prompt-sync')();
let height = (prompt("Enter Height: "));


if (height <= 1) {
    console.log("Animal is short.... ");

    let Squeak = prompt("If Animal cannot Squeak : Press 1 If Squek Press 2");

    if (Squeak == 1) {
        console.log("Might be a Squirrel");
    }
    if (Squeak == 2) {
        console.log("Might be rat");
    }

}
else if (height >= 2) {
    console.log("Animal is tall");
    let neck = prompt("if Animal has short neck press 1 if long neck press 2  :-");

    if (neck == 1) {
        let nose = prompt("Short Nose press 1 Long Nose press 2  :-");

        if (nose == 1) {
            let land = prompt("On Land press 1 In Water press 2  :-");

            if (land == 1) {
                console.log("Might be rhinoceros");
            }
            if (land == 2) {
                console.log("Might be a hippo");
            }
        }

        else if (nose == 2) {
            console.log("Might be an elephant")
        }



    }

    if (neck == 2) {
        console.log("Might be a giraffe")
    }

}


