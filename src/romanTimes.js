var numbersLookupList =  [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000, 4000, 5000, 9000, 10000, 40000, 50000, 90000, 100000, 400000, 500000, 900000, 1000000];
var numeralsLookupList = ["I", "IV", "V", "IX", "X", "XL", "L", "LC", "C", "CD", "D", "DM", "M", "MṼ", "Ṽ", "ṼẌ", "Ẍ", "ẌĹ", "Ĺ", "ĹĈ", "Ĉ", "ĈĎ", "Ď", "ĎṀ", "Ṁ"];

export function convertToRoman(number) {
  var numeral = '';
  for (let i = numbersLookupList.length - 1; i >= 0; i--) {
    while (number >= numbersLookupList[i]) {
      number -= numbersLookupList[i];
      numeral += numeralsLookupList[i];
    }
  }
  return numeral;
}



// function convertToArabic(string) {
//   var number = "";
//   var addedNumber = true;
//   for (let i = 0; i < string.length; i++) {
//     while(addedNumber) {
//       addedNumber = false;
//       for (let n = numeralsLookupList.length - 1; n >= 0; n--) {
//         if (string[i] + string[i + 1] === numeralsLookupList[n]) {
//           //console.log(string[i] + string[i + 1]);
//           number += numbersLookupList[n];
//           i += 2;
//           addedNumber = true;
//         } else if (string[i] === numeralsLookupList[n]){
//           number += numbersLookupList[n];
//           i++
//           addedNumber = true;
//         }
//       }
//     }
//   }
//   return number;
// }

// function convertToArabic(string) {
//   var numeralArray = string.split('');
//   var number = 0;
//   for (let i = 0; i <= numeralArray.length - 1; i++) {
//     var sub = numeralArray.slice(i, i + 1).join('');
//     console.log(sub);
//     for (let j = 0; j <= numeralsLookupList.length - 1; j++) {
//       if (sub === numeralArray[j]) {
//       }
//     }
//   }
//   return number;
// }