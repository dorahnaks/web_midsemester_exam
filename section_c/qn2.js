function sum_of_even_numbers(){
    let sum = 0;
    for (const num of arguments) {
        if (num % 2 === 0) {
            sum += num;
        }
    }
    return sum;
}
x= [1, 2, 3, 4, 5, 6]
console.log(sum_of_even_numbers(...x));