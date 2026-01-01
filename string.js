// String
// let fullName ="Sipalaya info Tech"
// console.log(fullName.length)
// console.log(fullName[0])
// console.log(fullName[1])
 
// for(let i = 0; i<fullName.length;i++){
//     console.log(fullName[i])
// }

// let firstName = "Virat"
// let lastName = "Kohli"
// console.log(firstName+" "+lastName)   //we can create space between 
// console.log(firstName.concat(" "+lastName))

// let fullName = "Sipalaya info tech"
// console.log(fullName.toLowerCase())
// console.log(fullName.toUpperCase())
// console.log(fullName.startsWith("S"))
// console.log(fullName.startsWith("Sipalaya"))
// console.log(fullName.endsWith("h"))
// console.log(fullName.endsWith("tech"))
// console.log(fullName.trim())

// let fullName = "Sipalaya info tech"
// console.log(fullName.replace("S","Y"))
// console.log(fullName.replace("Sipalaya","Z"))
// console.log(fullName.replace("a","o"))
// console.log(fullName.replaceAll("a","o"))

// console.log(fullName.slice(0,9))
// console.log(fullName.slice(9,13))

// console.log(fullName.charAt(1))


// let fullName = "Sipalaya info tech"
// console.log(fullName.split())
// console.log(fullName.split(''))
// console.log(fullName.split(' '))
// const chatArr=fullName.split(' ')
// console.log(chatArr[0])
// console.log(chatArr[1])
// console.log(chatArr[2])


// shorcut method
// console.log(fullName.split(' ')[0])



//                   to findout the last word of the given

// let token = 'hello weur0oweut09u0djgkjsdljjfj'
// console.log(token.split(" ")[1])




//                       Pallendrom
// let name = 'radar'
// let reversed = ''
// for(let i=name.length-1;i>=0;i--){
//     reversed=reversed+name[i]
// }
// console.log(reversed)
// if(reversed==name){
//     console.log("palendrom")
// }else{
//     console.log("Not")
// }


             // to make the print the nepal with N capital letter
// let country = 'nepal'
// console.log(country[0].toUpperCase()+country.slice(1))
 


// 1. Write a program that counts how many times the letter 'e' appears in the string `"Hello EveryOne"`. 
// let str = "Hello EveryOne";
// let total = 0;
// for(let i=0;i<str.length;i++){
//     if(str[i].toLowerCase()==="e"){
//          total++
//     }
// }
// console.log(total);


// 2. Create a program that checks if a string starts with the letter 'H' and ends with the letter 'e'. Use `if
// else` statements. 
// let str = 'Mello Everyone';

//     if(str.startsWith("H") && (str.endsWith("e"))){
//         console.log("Yes")
//     }else{
//         console.log("Not")
//     }



// 3. Write a program that loops through a string and prints only the uppercase letters. 
// let str = 'Hello EveryOne';
// for(let i=0; i<str.length;i++){
//     if(str[i]>="A"&& str[i]<="Z"){
//         console.log(str[i])
//     } 
    
// }

// Or
// str.split('').forEach(char =>{
//     if(char === char.toUpperCase() && char !== char.toLowerCase())
//            console.log(char)
    
// }
// )


// 4. Using a loop, write a program that replaces every occurrence of the word "Hello" with "Hi" in a given 
// string. 
// let str = 'Hello Everyone! Hello Gyus';
// let newstr = str.split(' ')
// for(let i=0;i<newstr.length;i++){
//     if(newstr[i]==="Hello"){
//        newstr[i]= newstr[i].replace("Hello","hi")
        
//     }
// }
// console.log(newstr.join(' '))

// 5. Create a program that counts the number of vowels (a, e, i, o, u) in the string `"Hello EveryOne"`. 
// let str = 'HelloEveryOne';
// let counts =0;
// for(let i=0;i<str.length;i++){
//     if(str[i].toLowerCase()=="a"|| str[i].toLowerCase()=="e"|| str[i].toLowerCase() =="i" || str[i].toLowerCase()=="o"|| str[i].toLowerCase()=="u"){
//         counts++;
//     }
// }
// console.log(counts)



// 6. Write a program that uses a loop to concatenate the first letter of each word in the string `"Hello 
// EveryOne"` to form a new string. 
// let str= 'Hello EveryOne';
//  let words = str.split(' ')
//  let newstr= ""
//  for(let i= 0; i<words.length; i++){
//     newstr+=words[i][0];
//  }
//  console.log(newstr)


// 7. Create a program that checks if a string is a palindrome (reads the same backward as forward). Use `if
// else` statements. 
// let str ='radar'
// let newstr = ''
// for(let i=str.length-1;i>=0; i--){
//     newstr += str[i];
// }
//     if(newstr==str){
//         console.log("palindrome")
//     }
//     else{
//         console.log("Not")
//     }


// 8. Write a program that trims any extra spaces at the beginning and end of a string and then checks if the 
// string is empty. 

// let str = '   helo  '
// console.log(str.trim())


// 9. Using a loop, write a program that converts every letter in a string to lowercase if it’s uppercase, and 
// to uppercase if it’s lowercase. 
// let str = "Hello EveryOne";
// let newstr=''
//  for(let i = 0; i<str.length; i++){
//     if(str[i]=="A" || str[i] =="Z"){
//         newstr+=str[i].toLowerCase()
//     }else(
//         newstr+=str[i].toUpperCase()
//     )
//  }
//  console.log(newstr)

// 10. Write a program that slices the first 5 characters of a string and checks if this substring is equal to 
// `"Hello"`. 
// let str= "Hello EveryOne";
// let substr= str.slice(0,5)
// if(substr=="Hello"){
//     console.log("Yes its Match")
// }else{
//     console.log("No its not matches")
// }



// 11. Create a program that replaces every vowel in a string with an asterisk (*) using a loop. 
// let str = 'Hello EveryOne'
// let vowels = 'aeiou'
// let newstr=''
// for(let char of str){
//     if(vowels.includes(char.toLowerCase())){
//         newstr+="*"
//     }else{
//         newstr+=char
//     }
// }
// console.log(newstr)


// 12. Write a program that checks if a string contains the word `"Hello"` using `if-else` statements. If it 
// does, replace it with `"Hi"`. 
// let str = 'Hello EveryOne';
// let words = str.split(" ")
// let newstr=''
// for(let i = 0; i<words.length; i++){
//     if(words[i]==="Hello"){
//       newstr+="Hi"+" "

//     }else{
//         newstr+=words[i]
//     }
// }
// console.log(newstr)


// 13. Using a loop, write a program that counts the number of spaces in the string `"Hello EveryOne"`. 
// let str="Hello Everyone"
// let count=0;
// for(let i =0; i<str.length;i++){
//     if(str[i]===" "){
//         count++;
//         break;
//     }
// } 
// console.log(count)



// 14. Write a program that checks if the length of a string is greater than 10. If it is, print the string in 
// uppercase; otherwise, print it in lowercase. 
// let str = 'Hello Everyone'
// let newstr=''
// if(str.length>10){
//     newstr+=str.toUpperCase()
// }else{
//     newstr+=str.toLowerCase()
// }
// console.log(newstr)


// 15. Create a program that loops through a string and prints the index of each letter 'o' in the string 
// `"Hello EveryOne"`. 
// let str="Hello EveryOne";
// for(let i=0;i<str.length;i++){
//     if(str[i].toLowerCase()==="o"){
//         console.log(i)
//     }
// }



// 16. Write a program that trims a string, then checks if its length is even or odd using `if-else` statements. 
// let str='Hello EveryOne';
// let newstr= str.trim()
// // console.log(newstr)
// if(newstr.length%2==0){
//     console.log("length of string is even = "+newstr.length)
// }else{
//     console.log("length of string is odd = "+newstr.length)
// }



// 17. Using a loop, write a program that checks if the first and last characters of a string are the same. Use 
// `if-else` statements to print the result. 
// let str="Hello EveryOne";
//     if(str[0]===str[str.length-1])
//     {
//         console.log("char are equal")
//     }else{
//         console.log("char are not equal")
//     }



// 18. Write a program that replaces the first 3 characters of a string with "ABC" using slicing and `if-else` 
// statements. 
// let str= 'Hello EveryOne';
// if(str.length>=3){
//     console.log("ABC"+str.slice(3))
// }else{
//     console.log("string length is less than 3")
// }



// 19. Create a program that uses a loop to reverse a string and print the reversed string. 
// let str="Hello EveryOne";
// for(let i=str.length-1;i>=0;i--){
//     console.log(str[i])
// }