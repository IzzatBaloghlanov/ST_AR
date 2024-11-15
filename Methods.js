
//? String Methods
// 1.Convert Uppercase
let pet ="golden retriever"; 
let result = pet.toUpperCase();// burda pet adini boyudub string metodu olan toUppercase-ile menimsedirik result-a
console.log("Uppercase_Result", result); //ekrana cixarir - Uppercase_Result  GOLDEN RETRIEVER 

// 2.FIND the Legth of a String
let question = "Can you solve this problem?";
let lengthResult = question.length; //  question-da yazilan cumledeki sozlerin uzunlugunu - lengthResult-a menimsedir
console.log("Length_Result", lengthResult); // ekrana cixarir - Length_Result 27

// 3. Replace Strings
let activity = "This game is boring";
let resultReplace = activity.replace("boring", "exciting"); // burda activity-deki cumle de boring sozunu deyisdirib exciting edir.
console.log("Replace_Result", resultReplace); // ekrana cixarir - Replace_Result This game is exciting

// 4. SubString
let headline = "Choose Your Adventure";
let resultIndex = headline.indexOf("A"); // bize adventure sozu lazim olduguna gore cumledeki hemin sozu tapmaq ucun indexOf ile "A" qoyaraq birinci indeksin tapir ve resultIndekse menimsedir.
let resultSubs = headline.substring(resultIndex);// daha sonra substring metodu ile onu ayiririq
console.log("Subs_Result", resultSubs); // ekrana cixarir - Subs_Result Adventure 
  
//? Part 2 - Array Methods
// 1. Add an item to an Array
let desserts = ["Ice Cream", "Pie", "Pudding"];
desserts.push("Cake"); // desserts-e yeni bir dessert elave edir.
console.log("After Push", desserts); // ekrana cixarir - After Push ['Ice Cream', 'Pie', 'Pudding', 'Cake']

// 2. Includes an item
let cities = ["London", "New York", "Tokyo"];
let incResult = cities.includes("Paris"); // cities-de inklud metodu ile yoxlayir ki Paris sozu var yoxsa yox
console.log("Inc_Result", incResult); // ekrana cixarir - Inc_Result false ,  listde ele bir sey olmadigina gore netice bize false dondurur.

// 3. Combine Two Arrays
let cars = ["Sedan", "Coupe"];
let trucks =["Pickup", "SUV"];
let allCars = cars.concat(trucks); // concat metodu ile array-leri bir deyerde birlesdiririk.
console.log("All_Cars", allCars); // ekrana cixarir - All_Cars ["Sedan", "Coupe", "Pickup", "SUV"] 

// 4 FIND THE INDEX
let desserts2 = ["Ice Cream", "Pie", "Pudding"];
let indexResult = desserts2.indexOf("Pie"); // indexOf metodu ile axtarilan sozu yaziriq("Pie") ve deyere indexResult-a menimsedirik
console.log("Index_Result", indexResult); // ekrana cixarir - Index_Result 1,  listde Pie-nin indexi 1-dir.


//! Bonus Task
// Reverse String
let word ="Technology";
let reversedWord = word.split("").reverse().join(""); // word.split("") metodu stringi hər bir simvola görə ayırır və onu array-a çevirir.
//"Technology" -> ["T", "e", "c", "h", "n", "o", "l", "o", "g", "y"]

//.reverse() metodu arraydeki elementləri tərsinə çevirir.
//["T", "e", "c", "h", "n", "o", "l", "o", "g", "y"] -> ["y", "g", "o", "l", "o", "n", "h", "c", "e", "T"]

//.join("") metodu arraydəki bütün elementləri yenidən birləşdirir və stringə çevirir.
//["y", "g", "o", "l", "o", "n", "h", "c", "e", "T"] -> "ygolonhceT"
console.log("Reversed_Word", reversedWord); // ekrana cixarir - Reversed_Word ygolonhceT