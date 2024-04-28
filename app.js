// practice work:
// task 1 

// var str = prompt("Enter some text");
//  var numChars = str.length;
//  for (var i = 0; i < numChars; i++) {
//  if (str.slice(i, i + 2) === "  " ) {
//  alert("double spaces");
//  break;

//  }
//  }

// task 2-a

// var text = `gg World War II gg`
 
// for (var i = 0; i < text.length; i++) {
// if (text.slice(i, i + 12) === "World War II") {
// text = text.slice(0, i) + `<b>the Second World War</b>` + text.slice(i + 12);
// }
// }
 
// document.write(text + "<br>");

// task 2-b

// var text = `The New Yorker magazine doesn't allow the phrase "World War II. " They say it should
// be "the Second World War." So let's search the following sentence for the banned characters
// and replace them with the phrase that the New Yorker prefers.
// It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien was
// writing the trilogy, which contains, with the weird applicability available only to poetry and
// myth, the essential notion that the good gray wizard can understand the evil magi precisely
// because he is just enough like them to grasp their minds and motives in ways that they cannot
// grasp his.`
 
// for (var i = 0; i < text.length; i++) {
// if (text.slice(i, i + 12) === "World War II") {
// text = text.slice(0, i) + `<b>the Second World War</b>` + text.slice(i + 12);
// }
// }
 
// document.write(text + "<br>");

// hum ne isme aik tayshuda hisse ko slice k method k zariyeh fix krdiya hai aur phir kaha hai k yeh hissa aggr World War II k brabar hojaye to uss hisse k pehle ka tamaam hissa aur uss tayshuda hisse k bd ka tammam hissa aur uss hisse ki jagah second world war ajaye text k variable me.

// task 3-a

// var text = `gg World War II gg`

// var firstChar = text.indexOf("World War II")

// if(firstChar !== -1){
//     text = text.slice(0, firstChar) + `<b>the Second World War</b>` + text.slice(firstChar + 12)
// }
//  document.write(text + "<br>");

// task 3-b

// var text = `The New Yorker magazine doesn't allow the phrase "World War II. " They say it should
// be "the Second World War." So let's search the following sentence for the banned characters
// and replace them with the phrase that the New Yorker prefers.
// It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien was
// writing the trilogy, which contains, with the weird applicability available only to poetry and
// myth, the essential notion that the good gray wizard can understand the evil magi precisely
// because he is just enough like them to grasp their minds and motives in ways that they cannot
// grasp his.`

// var firstChar = text.indexOf("World War II")
// if(firstChar !== -1){
//     text = text.slice(0, firstChar) + `<b>the Second World War</b>` + text.slice(firstChar + 12)
// }
//  document.write(text + "<br>");

// task 3-c (loop method chalaya hai)

// var text = `The New Yorker magazine doesn't allow the phrase "World War II. " They say it should
// be "the Second World War." So let's search the following sentence for the banned characters
// and replace them with the phrase that the New Yorker prefers.
// It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien was
// writing the trilogy, which contains, with the weird applicability available only to poetry and
// myth, the essential notion that the good gray wizard can understand the evil magi precisely
// because he is just enough like them to grasp their minds and motives in ways that they cannot
// grasp his.`

// var firstChar = text.indexOf("World War II")
// if (firstChar!== -1) {
//   for(var i = 0; i < text.length; i++){
//     if(firstChar!== -1){
//       text = text.slice(0, firstChar) + `<b>the Second World War</b>` + text.slice(firstChar + 12)
//       firstChar = text.indexOf("World War II", firstChar + 1)
//     }
//   }
// }

// document.write(text + "<br>");

  // Note: The indexOf method can only identify the character at a particular location. It can't
  // change the character at a location.

// task 3-d

// var text = `The New Yorker magazine doesn't allow the phrase "World War II. " They say it should
// be "the Second World War." So let's search the following sentence for the banned characters
// and replace them with the phrase that the New Yorker prefers.
// It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien was
// writing the trilogy, which contains, with the weird applicability available only to poetry and
// myth, the essential notion that the good gray wizard can understand the evil magi precisely
// because he is just enough like them to grasp their minds and motives in ways that they cannot
// grasp his.`

// var firstChar = text.indexOf("World War II")
// for(var i = 0; i < text.length; i++){
// if(firstChar !== -1){
//     text = text.slice(0, firstChar) + `<b>the Second World War</b>` + text.slice(firstChar + 12)
// }
// } 

//  document.write(text + "<br>");

// task 4

//  var text = "To be or not to be.";
//  var segIndex = text.lastIndexOf("be");
//   document.write(`<b>${segIndex}</b>`)

// task 5

// var text =`The sun rose over the horizon, casting a warm glow on the dew-kissed grass. Birds chirped in harmony, celebrating the new day!
// In the bustling city, people hurried to catch trains, their footsteps echoing through the crowded streets!
// At the local cafe, the barista skillfully crafted a latte, the milk swirling into delicate patterns! 
// Children laughed and played in the park, their giggles filling the air!
// The orchestra tuned their instruments, anticipation building for the grand performance!
// In the kitchen, the chef seasoned the dish with a flourish, creating a masterpiece!
// Friends gathered around a bonfire, sharing stories and marshmallows!
// The rollercoaster climbed to its peak, hearts racing as it plummeted down! 
// In the library, the pages whispered secrets, waiting to be discovered!
// And as the day turned into night, the stars twinkled, winking at the world !
// ` ;

// for (var i = 0; i < text.length; i++) {
// if (text.charAt(i) === "!") {
//   text =`<h1>` + text.slice(0, i) + ` ? ` + text.slice(i + 1) + `</h1>`; 
// }
// }

// document.write(text + "<br>");

// task 6

// var text = `The New Yorker magazine doesn't allow the phrase "World War II. " They say it should
// be "the Second World War." So let's search the following sentence for the banned characters
// and replace them with the phrase that the New Yorker prefers.
// It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien was
// writing the trilogy, which contains, with the weird applicability available only to poetry and
// myth, the essential notion that the good gray wizard can understand the evil magi precisely
// because he is just enough like them to grasp their minds and motives in ways that they cannot
// grasp his.`
// var newText = text.replace(/World War II/g, "the Second World War");
// document.write( `<h1>` + newText + `</h1>` + "<br>" );

// task 7
// var num = 1.5555
// var str = num.toString();
// if (str.charAt(str.length - 1) === "5") {
// str = str.slice(0, str.length - 1) + "6";
// }
// num = Number(str);
// prettyNum = num.toFixed(2);
// document.write(prettyNum)

//  var prom = "123";
//  prom += "456"
//  var reverse = "" ;
//  for(var i = prom.length - 1; i >= 0; i-- ){
//     reverse += prom[i]
//  }
//  document.write(reverse)

// practice work:
// task 1 

// var str = prompt("Enter some text");
//  var numChars = str.length;
//  for (var i = 0; i < numChars; i++) {
//  if (str.slice(i, i + 2) === "  " ) {
//  alert("double spaces");
//  break;
//  }
//  }

// task 2-a

// var text = "gh World War II gh"
 
// for (var i = 0; i < text.length; i++) {
// if (text.slice(i, i + 12) === "World War II") {
// text = text.slice(0, i) + <b>the Second World War</b> + text.slice(i + 12);
// }
// }
 
// document.write(text + "<br>");

// task 2-b

// var text = `The New Yorker magazine doesn't allow the phrase "World War II. " They say it should
// be "the Second World War." So let's search the following sentence for the banned characters
// and replace them with the phrase that the New Yorker prefers.
// It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien was
// writing the trilogy, which contains, with the weird World War II applicability available only to poetry and
// myth, the essential notion World War II that the good gray World War II wizard can understand the evil magi precisely
// because he is just World War II enough like them to grasp their minds and motives in ways that they cannot
// grasp his.`
 
// for (var i = 0; i < text.length; i++) {
// if (text.slice(i, i + 12) === "World War II") {
// text = text.slice(0, i) + <b>the Second World War</b> + text.slice(i + 12);
// }
// // if (text.slice(i, i + 12) === "World War II") {
// //     text = text.slice(0, i) + <b>the Second World War</b> + text.slice(i + 12);
// //     }
// //     if (text.slice(i, i + 12) === "World War II") {
// //         text = text.slice(0, i) + <b>the Second World War</b> + text.slice(i + 12);
// //         }
// }
 
// document.write(text + "<br>");

// hum ne isme aik tayshuda hisse ko slice k method k zariyeh fix krdiya hai aur phir kaha hai k yeh hissa aggr World War II k brabar hojaye to uss hisse k pehle ka tamaam hissa aur uss tayshuda hisse k bd ka tammam hissa aur uss hisse ki jagah second world war ajaye text k variable me.

// task 3-a

// var text = gg World War II gg;

// var firstChar = text.indexOf("World War II")

// if(firstChar !== -1){
//     text = text.slice(0, firstChar) + <b>the Second World War</b> + text.slice(firstChar + 12)
// }
//  document.write(text + "<br>");

// task 3-b

// var text = `The New Yorker magazine doesn't allow the phrase "World War II. " They say it should
// be "the Second World War." So let's search the following sentence for the banned characters
// and replace them with the phrase that the New Yorker prefers.
// It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien was
// writing the trilogy, which contains, with the weird applicability available only to poetry and
// myth, the essential notion that the good gray wizard can understand the evil magi precisely
// because he is just enough like them to grasp their minds and motives in ways that they cannot
// grasp his.`

// var firstChar = text.indexOf("World War II")
// if(firstChar !== -1){
//     text = text.slice(0, firstChar) + <b>the Second World War</b> + text.slice(firstChar + 12)
// }
//  document.write(text + "<br>");

// task 3-c (loop method chalaya hai)

// var text = `The New Yorker magazine doesn't allow the phrase "World War II. " They say it should
// be "the Second World War." So let's search the following sentence for the banned characters
// and replace them with the phrase that the New Yorker prefers.
// It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien was
// writing the trilogy, which contains, with the weird applicability available only to poetry and
// myth, the essential notion that the good gray wizard can understand the evil magi precisely
// because he is just enough like them to grasp their minds and motives in ways that they cannot
// grasp his.`

// var firstChar = text.indexOf("World War II")
// if (firstChar!== -1) {
//   for(var i = 0; i < text.length; i++){
//     if(firstChar!== -1){
//       text = text.slice(0, firstChar) + <b>the Second World War</b> + text.slice(firstChar + 12)
//       firstChar = text.indexOf("World War II", firstChar + 1)
//     }
//   }
// }

// document.write(text + "<br>");

  // Note: The indexOf method can only identify the character at a particular location. It can't
  // change the character at a location.

// task 3-d

// var text = `The New Yorker magazine doesn't allow the phrase "World War II. " They say it should
// be "the Second World War." So let's search the following sentence for the banned characters
// and replace them with the phrase that the New Yorker prefers.
// It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien was
// writing the trilogy, which contains, with the weird applicability available only to poetry and
// myth, the essential notion that the good gray wizard can understand the evil magi precisely
// because he is just enough like them to grasp their minds and motives in ways that they cannot
// grasp his.`

// var firstChar = text.indexOf("World War II")
// for(var i = 0; i < text.length; i++){
// if(firstChar !== -1){
//     text = text.slice(0, firstChar) + <b>the Second World War</b> + text.slice(firstChar + 12)
// }
// } 

//  document.write(text + "<br>");

// task 4

//  var text = "To be or not to be.";
//  var segIndex = text.lastIndexOf("be");
//   document.write(<b>${segIndex}</b>)

// task 5

// var text =`The sun rose over the horizon, casting a warm glow on the dew-kissed grass. Birds chirped in harmony, celebrating the new day!
// In the bustling city, people hurried to catch trains, their footsteps echoing through the crowded streets!
// At the local cafe, the barista skillfully crafted a latte, the milk swirling into delicate patterns! 
// Children laughed and played in the park, their giggles filling the air!
// The orchestra tuned their instruments, anticipation building for the grand performance!
// In the kitchen, the chef seasoned the dish with a flourish, creating a masterpiece!
// Friends gathered around a bonfire, sharing stories and marshmallows!
// The rollercoaster climbed to its peak, hearts racing as it plummeted down! 
// In the library, the pages whispered secrets, waiting to be discovered!
// And as the day turned into night, the stars twinkled, winking at the world !
// ` ;

// for (var i = 0; i < text.length; i++) {
// if (text.charAt(i) === "!") {
//   text =<h1> ` + text.slice(0, i) + ` ? ` + text.slice(i + 1) + `</h1>; 
// }
// }

// document.write(text + "<br>");

// task 7
// var text = `The New Yorker magazine doesn't allow the phrase "World War II. " They say it should
// be "the Second World War." So let's search the following sentence for the banned characters
// and replace them with the phrase that the New Yorker prefers.
// It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien was
// writing the trilogy, which contains, with the weird World War II applicability available only to poetry and
// myth, the essential notion World War II that the good gray World War II wizard can understand the evil magi precisely
// because he is just World War II enough like them to grasp their minds and motives in ways that they cannot
// grasp his.`
// var newText = text.replace(/World War II/g, "shoukat");
// document.write(newText + "<br>");

// do values aik hi jagah pr gayab ho to 
// array ke andr index  plus ya minus hota he or array ka bahr value plus minus hoti he   
// i me index vaklue store hoti hai
                                            //  i = 1 (index value)
// var arr = [51,52,55,60];
// for (var i = 0; i < arr.length;i++){
//     var diff = arr[i + 1] - arr[i];
//     if(diff > 1){
//         for(var j = 1;j < diff;j++){
//             console.log(arr[i] + j )
//         }
//     }
// }
    
// array k under index valu e di jaati hai .
// do values alg alg jagah pr gayab ho to 
// var arr = [50,51,52,53,55];
// for (var i = 0; i < arr.length; i++){
//     if(arr[i + 1] - arr [i] === 2){
//             console.log(arr[i] + 1)
//     }
// }

// var text = Pakistani
// text = text.indexOf('n');
// console.log(text)