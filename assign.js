// task 1
// var firstName = prompt("enter your first name")
// var lastName = prompt("enter your last name")
// var fullName = firstName.concat(" ",lastName);
// alert("Hi " + fullName);

// task 2
// var prom = prompt("enter your fav mobile phone model")
// var leng = prom.length;
// alert(prom  + leng);

// task 3
// var text = Pakistani
// text = text.indexOf('n');
// console.log(text)

// task 4

// var text = "hello world"
// var last = text.lastIndexOf("l")
// console.log(last);

// task 5

// var text = "pakistani"
// var final = text.charAt(3)
// console.log(final)

// task 6

// var firstName = prompt("enter your first name")
// var lastName = prompt("enter your last name")
// var fullName = firstName.concat(" ",lastName);
// alert("Hi " + fullName);

// // task 7

// var city = "hyderabad";
// var cityArray = city.split(''); // Convert the string to an array
// cityArray.splice(0, 5, "islam"); // Perform the splice operation on the array
// var city1 = cityArray.join(''); // Convert the array back to a string
// console.log(city1); // Log the result

// var city = "hyderabad"
// var city1 = city.replace("hyder","islam")
// console.log(city1)

// var city = "this is beatiful city hyderabad"
// for(var i = 0;i < city.length;i++){
//     if(city.slice(i, i + 5) === "hyder"){
//        var text = city.slice(0,i) + "islam" + city.slice(i + 5)
//     }
// }
// console.log(text);

// // task 8

// var message = `Ali and Sami are best friends. They play cricket and
// football together.`;
// var final = message.replace(/and/g,"&");
// console.log(final);

// // task 9

// var str = "245"
// var num = Number(str)
// console.log(num +" is "+ typeof num)
// console.log(str + " is "+ typeof str)

// // task 10

// var prom = prompt("enter any name")
// var final = prom.toUpperCase();
// alert(final)


// // task 11

// var prom = prompt("enter any name")
// var firstName = prom.slice(0,1).toUpperCase()
// var lastName = prom.slice(1).toLowerCase()
// var final = firstName + lastName;
// alert(final)

// // task 12

// var num = 22.23;
// var dot = num * 100
// var str = dot.toFixed()
// console.log(typeof str)


// var num = 10.1
// var final = Math.ceil(num)   {(notice : .round .floor)}
// alert(final)

// var ran = Math.random() ;
// var final = ran * 100;
// console.log(final)

// // task 13

// var prom = prompt("enter a username");
// var match = false
// for(var i = 0;i < prom.length;i++){
//     if(prom[i] === "@" || prom[i] === "!" || prom[i] === "," || prom[i] === "."){
//         alert("its not a valid username")
//         match = true;
//     }
// }
// if (!match){
//     alert("its a correct user name")
// }


// // task 14

// let username = prompt("Enter your username:");

// Check if the username contains any special symbols document.write("Username: " + username);
// if (/[@.,!]/.test(username)) {
//   alert("Username contains special symbols. Please enter a valid username.");
//   username = prompt("Enter your username:");
// }
// else{alert("ok ki report")}
// document.write("Username: " + username);

// // task 15

// var dess = ['Cake', 'Apple pie', 'Cookie', 'Chips', 'Catties']
// var prom = prompt("enter any food as you want")
// var firstName = prom.slice(0,1).toUpperCase()
// var lastName = prom.slice(1).toLowerCase()
// var final = firstName + lastName;
// var match = false

// for(var i = 0;i < dess.length;i++){
//     if(final === dess[i]){
//         var index = dess.indexOf(final)
//         alert(final  + " is available" + " on index of "+index )
//         match = true
        
        
//     }
// }
// if(!match){
//     alert(final + " is not availabe")
// }

// // task 16

// var university = "University of Karachi";
// var convert = university.split("");

// for(var i = 0; i < university.length;i++){
// console.log(convert[i])
    
// }

// // task 17

// var prom = prompt("enter any name")
// var final = prom.length - 1;
// var val = prom.charAt(final) 
// alert(val);

// // task 18

// var text = "The quick brown fox jumps over the lazy dog the the the "
// var text = text.toLowerCase(); 
// var match = 0
// for(var i = 0; i < text.length;i++){
//     if(text.slice(i,i + 3) === "the"){
//         match += 1
//         if(match == 3){
//             text = text.slice(0,i) + "shoukat" + text.slice(i + 3)
//         }
//     }
// }
// console.log(text)
// console.log(match + " times the word 'The' is repeated ")

// // task 19

// var text = "noman noman noman noman noman noman noman";
// text = text.toLowerCase()
// var match = 0;
// for(var i = 0; i < text.length;i++){
//     if(text.slice(i,i + 5) === "noman"){
//         match += 1
//         if(match === 4){
//           text = text.slice(0,i) + "shoukat" + text.slice(i+5)
//         }
//     }
// }
// console.log(text);

// // task 20

// var match1 = 0, match2 = 0, match3 = 0, matchO = false;
// var prom = prompt("enter your password");
// var len = prom.length;
// var alpha = "abcdefghijklmnopqrstuvwxyz", capAlpha = alpha.toUpperCase(), num = "123456789";
// for(var i = 0; i < prom.length; i++){

//     for(var j = 0; j < alpha.length; j++){
//     if(prom[i] == alpha[j]){
//         match1 += 1
//         }
//     }
//     for(var k = 0; k < capAlpha.length; k++){
//         if(prom[i] == capAlpha[k]){
//             match2 += 1
//                       }
//                 }
                
//     for(var l = 0; l < num.length; l++){
//                     if(prom[i] == num[l] && prom[0] !== num[l]){
//                         match3 += 1
//                                    }
//                             }

//     if(match1 == len || match2 == len || match3 == len || match1 + match2 == len || match2 + match3 == len || match3 + match1 == len || match2 + match3 + match1 == len && (len >= 6)){
//                   alert("valid password")
//                    matchO = true
//                }
// } 

//  if(!matchO){
//     alert("invalid password")
//  }

// // task 21
// var prom = +prompt("insert a positive number")
// var round = Math.round(prom)
// alert(round);

// var prom = +prompt("insert a positive number")
// var round = Math.floor(prom)
// alert(round);

// var prom = +prompt("insert a positive number")
// var round = Math.ceil(prom)
// alert(round);

// task 22

// var prom = +prompt("insert a negative number")
// var round = Math.round(prom)
// alert(round);

// var prom = +prompt("insert a positive number")
// var round = Math.floor(prom)
// alert(round);

// var prom = +prompt("insert a positive number")
// var round = Math.ceil(prom)
// alert(round);

// task 23

// var prom = +prompt("enter any single number");
// var prom1 = Math.abs(prom);
// alert(prom1);

// task 24

// var ran = Math.random()
// var mul = ran * 6;
// var dice = Math.ceil(mul)
// document.write(dice);

// task 25

// var prom = prompt("azam babar")
// prom = prom.toLowerCase()
// var prom1 = prompt("kohli virat")
// prom1 = prom1.toLowerCase()
// var ran = Math.random()
// var mul = ran * 2;
// var ceel = Math.ceil(mul)
// // document.write(ceel)
// if(ceel == 1 && (prom == "heads" && prom1 == "tails") || (prom1 == "heads" && prom == "tails")){
// alert("babar azam wins")
    
// }
// else if(ceel == 2 && (prom == "heads" && prom1 == "tails") || (prom1 == "heads" && prom == "tails")){
// alert("kohli wins")
// }
// else{
//     document.write("incorrect")
// }


// task 26

// var num = Math.random(num)
// var mul = num * 100;
// var ceel = Math.ceil(mul)
// document.write(ceel);

// task 27

// var num = "0123456789"
// var prom = prompt("enter your weight")
// var par = "";
// var match0 = false
// for(var i = 0; i < prom.length; i++){
//    if(prom[i] == "."){
//        match0 = true
//        var firstStore = prom.slice(0,i)
//        var lastStore = prom.slice(i + 1);
//        for(var j = 0; j < lastStore.length; j++){
//             for(var k = 0; k < num.length; k++){
//                 if(lastStore[j] == num[k]){
//                        par += lastStore.match(num[k])
//                 }
//             }
//        }
//        var store = `${firstStore}.${par} kilogram`
//    }
// }

// if (!match0){
//   for(var a = 0; a < prom.length; a++){
//     for(var b = 0; b < num.length; b++){
//         if(prom[a] == num[b]){
//             par += prom.match(num[b])
//         }
//     }
// }
//     var store = `${par} kilogram`
// }

// alert(store);

// task 28

// var user = +prompt(`enter the secret number..! (hint: 1 to 9)`)
// var num = Math.random();
// num = num * 10;
// num = Math.ceil(num);
// if(user == num){
//     alert(`congratulates you find the secret number`)
// }
// else{
//     alert(`sorry to say but ${user} is not the secret number whilst ${num} is the secret number`)
// }

// task 29

// var arr = [1,5,7,8,9,10,16,17,18,20,21,25]
// for(var i = 0; i < arr.length; i++){
// var diff = arr[i + 1] - arr[i];
// if(diff > 1){
//     for(var j = 1; j < diff; j++){
//         arr.splice(i+j, 0, arr[i] + j)
//     }
// }
// }
// document.write(arr)

// task 30

// var text = prompt("enter any text")
// var text = text.split(" ")
// var str = []
// for(var i = 0; i < text.length; i++){
//     var firstChar = text[i].slice(0,1).toUpperCase() 
//     var lastChar = text[i].slice(1).toLowerCase()
//     str [i + 1]= firstChar + lastChar
// }
// str = str.join(" ")
// console.log(str)   

// task 31

// var num = [1,2];
// var newNum = [];
// for (var i = 0; i < 11; i++){
//     newNum = num[i] + num[i + 1];
//     num[i + 2] = newNum
// };
// console.log(num);

// // task 32

// var text = "theres ones was a ship that put to sea and the name of the sea was the billy of tea the wind blew high and gather and the kingdom was that it blows"
// var text = prompt("enter any text")
// var text = text.split(" ");
// var str = "";
// var arr = [];
// var store  = [];
// for(var i = 0; i < text.length; i++){
//       arr[i] = text[i].length
// }
// str = arr[0]
// for(var j = 0; j < arr.length; j++){
//     if(arr[j] > str){
//         str = arr[j]
//     }
//     if(text[j].length == str){
//         store[j] = text[j]
// }
// }
// store = store.join(" , ")
// document.write(store)

// var num = [1,2];
// var newNum = [];
// for(var i = 0;i < 11;i++){
//     newNum = num[i] + num[i + 1];
//     num[i + 2] = newNum 
// };
// console.log(num);

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date().getDay();
// var nameOfToday = dayNames[now];
// console.log(nameOfToday)

// var time = new Date()
// console.log(time)
// var mon = ["jan","feb","march","april"]
// var time = new Date().getMonth();
// var final = mon[time];
// console.log(final)

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date().getDay();
// var nameOfToday = dayNames[now];
// // alert(nameOfToday)

// var now = new Date().getDay()
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var final = dayNames[now];
// if(final == "Sun" || final == "Sat"){
//    alert(it's a fun day ${final})

// }
// else{
//    alert(it's a working day ${final})
// }

// var time = new Date().getDate();
// if(time < 16){
//     alert("First fifteen days of the month")
// }
// else{
//     alert("Last days of the month.")
// }

// var time = new Date()
// var min = time.getTime()
// var daty = min/ (1000 * 60 * 60 * 24)
// console.log(time)
// console.log(min)
// console.log(daty)

// var time = new Date()
// var what = time.getHours();
// if(what < 12 ){
//     alert("its Am")
// }
// else{
//     alert("its Pm")
// }

// var laterDate = new Date("september 19, 2024")
// console.log(laterDate)

//  var msDiff = new Date("June 30, 2035").getTime() - new Date().getTime();
//  var daysTillDoom = Math.floor(msDiff / (1000 * 60 * 60 * 24));
//  console.log(daysTillDoom)

// const startDate = new Date("march 10, 2024").getTime();
// const currentDate = new Date().getTime();
// const millisecondsPerDay = 1000 * 60 * 60 * 24;
// const daysPast = Math.floor((currentDate - startDate) / millisecondsPerDay);
// alert(Number of days past since the first day of Ramadan: ${daysPast});


// new date(jo din date chahye he).getTime()
// new date().getTime()
// millisecondsPerDay = 1000 * 60 * 60 * 24;
// Math.floor((currentDate - startDate) / millisecondsPerDay)


// const startDate = new Date("january 1,2015").getTime();
// const currentDate = new Date("january 1,2024").getTime();
// const millisecondsPerDay = 1000;
// const daysPast = Math.floor((currentDate - startDate) / millisecondsPerDay);
// alert(` ${daysPast}`);

// const currentDate = new Date();

// const hours = currentDate.getHours();

// currentDate.setHours(hours - 1);

// console.log(currentDate);
// const currentDate = new Date();

// const years = currentDate.getFullYear()

// currentDate.setFullYear(years - 100);

// console.log(currentDate);

// var prom = +prompt("enter your age");

// const currentDate = new Date();

// const years = currentDate.getFullYear()

// var birth = (years - prom);

// console.log(birth);

// var prom = prompt("enter your name")
// var prom1 = prompt("enter your month")
// var prom2 = prompt("enter your number of units")
// var prom3 = 16
// var net = prom2 * prom3
// var late = 400
// var gross =  net + late
// document.write(`name : ${prom} <br> month: ${prom1} <br> number of units: ${prom2} <br> charges per unit: ${prom3} <br> net fee: ${net} <br> due date charges: ${late} <br> net fee after due date: ${gross} `)

// var str = "hello world"
// console.log(str.slice(str.length - 5));

// task 32

// let text = "this is my string and i am learning javascripte"
// text = text.split(" ") 
// let largest = text[0]
// for (let i = 0; i < text.length ; i++) {
//     if(text[i].length > largest.length){
//         largest = text[i]
//     }
// }
// console.log(largest)

// task 33

// var text = "ABCDEFGHIJKMNOPRSTUVWXYZabcdeghijklmnopqrstuvwxyz1234567890!@#$%^&*()_-"
// // var userInp = prompt("enter the length of your password to be generated")
// var store = "";
// for (let i = 0; i < 11; i++) {
//     var random = Math.floor(Math.random()*text.length)
//      store += text[random];
// }
// document.write(store)