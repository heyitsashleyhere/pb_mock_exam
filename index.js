// Add answers here 

// Double Vowels //////////////////////////////////////////////
function hasDoubleVowels(str){
    let newStr = str.toLowerCase();
    let vowel = ['aa', 'ee', 'ii', 'oo', 'uu'];
    for (i=0; i<vowel.length; i++){
        if (newStr.includes(vowel[i])){
            return str
        } 
    }  
    return "The input has no double vowels"     
}
// Double Vowels: group solution ==============================
function hasDoubleVowels2(str){
    
    if (str.toLowerCase().includes('aa') || str.toLowerCase().includes('ee') || str.toLowerCase().includes('ii') || str.toLowerCase().includes('oo') || str.toLowerCase().includes('uu')) {
        return str
    } else {
        return "The input has no double vowels"  
    }
}

// Multiples of 9 /////////////////////////////////////////////////////
const isMultipleOfNine = (num) => num%9 === 0;


//  Polygon //////////////////////////////////////////////////////////
function polygonType (...input){
    if (input.length === 3) {
        if (input[0] == input [1] && input[1] == input[2] ){
            return 'equilateral triangle'
        }else {
            return 'triangle'
        }
    } else if (input.length === 4){
            if (input[0] == input [1] && input[1] == input[2] && input[2] == input[3]){
                return 'square'
            }
            else {
              return  'quadrilateral'
            }
        } else if (input.length === 5){
            if (input[0] == input [1] && input[1] == input[2] && input[2] == input[3] && input[3] == input[4] && input[4] == input[5]){
                return 'regular pentagon'
            }
            else {
              return  'pentagon'
            }
        } else if (input.length === 6){
            if (input[0] == input [1] && input[1] == input[2] && input[2] == input[3] && input[3] == input[4] && input[4] == input[5] && input[5] == input[6]){
                return 'regular hexagon'
            }
            else {
              return  'hexagon'
            }
        } else {
            return "unexpected number of sides"
        }
}


function polygonType2(...sides){
    const count = sides.length;
    const regular = (Math.max(...sides) === Math.min(...sides))

    if (regular) {
        switch(count){
            case 3: return "equilateral triangle"
            case 4: return "square"
            case 5: return "regular pentagon"
            case 6: return "regular hexagon"
            default: return "unexpected number of sides"
        }
    } else {
        switch(count){
            case 3: return "triangle"
            case 4: return "quadrilateral"
            case 5: return "pentagon"
            case 6: return "hexagon"
            default: return "unexpected number of sides"
        }
    }
}

// Rock and Roll //////////////////////////////////////////////////
const rockAndRoll = emoji => emoji === "🎸" ? 'rock' :
'roll';

//  Looping ///////////////////////////////////////////////////////
function powerOutput() {
    let str = [];
    for (let i = 1; i<=6; i++){
        str.push([i]**[i])
    }
    return str.join(' ')
}

// using trim
function powerOutput2() {
    let str = '';
    for (let i = 1; i<=6; i++){
        str += ' '+(i**i)
    }
    return str.trim();
}

//  Problem solving ///////////////////////////////////////////////////////
function secretSanta(str){
    let array = str.toLowerCase().split(' ');
    let count = 0;
    for(let i=0; i<array.length; i++){
        if(array[i].includes('ho')){
            count ++
        }
    }
    return count
}

function secretSanta2(str){
    str = str.toLowerCase()
    let hoCount = (str.split('ho')).length-1
    return hoCount
}

//to understand what split method returns:
console.log("hello henrik".split('he'));

// const object = [1,2,3,4,5]
// object.sum = function (){
//     let result =0 
//     for(let i = 0; i < this.length; i++){
//     result += this[i]}
//     return result
//   }
  
//   for (const charKey in object) {
//     console.log(`${charKey}: ${object[charKey]}`);
//   }
  
//   console.log(object.sum())
  
//   console.log(object.length)

// DO NOT EDIT below this line - This will result in an automatic fail
module.exports = {hasDoubleVowels, isMultipleOfNine, polygonType, rockAndRoll, powerOutput, secretSanta};
