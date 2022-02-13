//String to Num
let str = '7.5';
let new_Num = parseInt(str);
console.log(typeof new_Num);

let new_Num2 = parseFloat(str);
console.log(typeof new_Num2);

let new_Num3 = str*1
console.log(typeof new_Num3);

let new_Num4 = Math.floor(str);
console.log(typeof new_Num4);

// Num -- String

let num = 12.56;
let new_str = num.toString();
console.log(typeof new_str);

let new_str2 = num +'';
console.log(typeof new_str2);

//Bool to number
let bool = true;
let num1= bool*1;
console.log(typeof num1);

let num2=parseInt(bool)
console.log(num2);

//Num to Bool

let number =0;
let bool1 = Boolean(number);
console.log(bool1);

//String to Bool
let str10 ='';
let bool2 = Boolean(str10);
console.log(bool2);

//Bool to String
let bool10=true;
let str12=bool10.toString();
console.log(str12);