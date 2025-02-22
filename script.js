function convertToRoman(num) {
    const obj = {
        0:['M',1000], 
        1:['D', 500], 
        2:['C', 100], 
        3:['L', 50], 
        4:['X', 10], 
        5:['V', 5], 
        6:['I', 1]
    };

    let roman = '';
    // Iterate over each element in obj
    obj.forEach((item)=>{
        // For each element, while num is greater than or equal to the value of the element
        while(num >= item[1]){
            // Subtract the value from num
            num -= item[1];
            // Add the Roman numeral to roman
            roman += item[0];
        }
    })
    // End of loop
    return roman;
}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line
 console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
