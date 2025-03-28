function checking_similar_num(num_1, num_2) {
    num_1 = Number(prompt("Enter the first number: "));
    num_2 = Number(prompt("Enter the second number: "));

    if (num_1 === num_2){
        const output = num_1 * num_2;
        return output;
    }
    else {
        const output = num_1 + num_2;
        return output;
    }
    
}

document.getElementById("number3").innerHTML = checking_similar_num(1, 2);
