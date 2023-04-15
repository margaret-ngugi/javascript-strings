//Strings 
// In JavaScript, a string is a data type representing a sequence of characters that may 
//consist of letters, numbers, symbols, words, or sentence
//eg
var words = "pen,book,ruler,chalk" // string containing words
var numbers = "1,2,3,4,5,6"//string containing numbers
var letters = "a,b,c,d"  //string containing letters
var sentence = "This is my book"  //string containing sentence

//Strings methods

//string length        //returns the length of a string
let y ="Margaret Ngugi"
let x = y.length
console.log(x);

//ways of exatracting strings parts
//1.slice()
 //the methods takes two operators(start position,end position)
 //extracts a part of a string and returns the extracted part in a new string.
 //If you omit the second parameters it slices out the rest of the string

let names = "Mary,Faith,Marion,John"
let p = names.slice(3,7)
console.log(p); //the methods takes two operators(start position,end position)

//2.substring()
// extracts parts of a string and returns the extracted parts in a new string.
let fruits = "mango,oranges,melon,apple"
let z = fruits.substring(4,6);
console.log(z);

//3.substr()
//extracts parts of a string, beginning at the character at the specified position, 
//and returns the specified number of characters

// the second parameter specifies the length of the extracted part.
let fruit = "mango,oranges,melon,apple"
let m = fruit.substr(3,5);
console.log(m);

//replacing the string content we use replace()
// method replaces a specified value with another value in a string
let text = "I am going to the market"
let newtext = text.replace("market","school");
console.log(newtext);

//Converting strings to toUpperCase and toLowerCase
let a = "Good Morning"
let b = a.toLocaleUpperCase();
console.log(b);

let c = "Good Morning"
let d = c.toLowerCase();
console.log(d);
//Removing whitespace from a string
//1.trim() //method removes whitespace from both sides of a string
var e = " Hello Faith "
var f = e.trim();
console.log(f);

//2.trimStart()  //removes whitespace only from the start of a string
let g = " Hello Faith "
let h = g.trimStart();
console.log(h);

//3.trimEnd()   //removes whitespace only from the end of a string.
let k = " Hello Faith "
let l = k.trimEnd();
console.log(l);

//string searching method
//string indexOf() // method returns the index (position) the first occurrence of a string in a string
let fruitss = "apple,mango,melon,mango"
let fruitss2 = fruitss.indexOf("mango");
console.log(fruitss2);//returns -1 if search is not found

//string lastIndexOf() //method returns the index of the last occurrence of a specified text in a string
let n = "apple,mango,melon,mango"
let v = n.lastIndexOf("mango",7);
console.log(v); //returns -1 if the search is not found

//string search() // method searches a string for a string  and returns the position of the match
var text2 = "apple,mango,melon,mango,oranges"
var text3= text2.search("mango");
console.log(text3);

// N/B The difference between indexOf(),and search()is that indexOf()accepts two parameters
// where search does not

//String match() // method returns an array containing the results of matching a string globaly
let sentence = "The rain rains heavily on the plains"
let sentence2 =sentence.match(/ain/g);
console.log(sentence2); //it is case sensetive

//strings include()  //method returns true if a string contains a specified value
let value = "Hello,I like travelling"
let value2 = value.includes("like");
console.log(value2);//It is case sensetitive

//strings startsWith()  //method returns true if a string ends with a specified value
let schools = "Kio,Lariak,Sipili,Ndurumo"
let school = schools.startsWith("Lariak");
console.log(school);

//strings endsWith()    //method returns true if a string ends with a specified value
let place = "Nairobi,Nakuru,Nyahururu,Naivasha"
let places = place.endsWith("Naivasha");
console.log(places);

//QUIZ
//Q1.
//Extract the first four characters from the string below;
"beautiful"
let t = "beautiful"
let s = t.substring(0,4);
console.log(s);
//2.

//Q2.
//Insert the following string at the tenth index of the below variable:
"eat"
const food = "I did not have appetite today"
console.log(`I did not ${food[10]}eat appetite today`);

//Q3.
//Count how many times the following string appears in the string variable:
//1. "the"
//2."s"

const story= "She sells sea shells at the sea shore"
const story1 = (story.match(/the/g)).length;
console.log(story1);
const story3 = (story.match(/s/g)).length;
console.log(story3);


//Q4.
//Convert the following strings into the specified format:
//1. UpperCase: "CONfidant"
const r = "CONfidant"
const w = r.toUpperCase();
console.log(w);

//Q5.
//Using JavaScript, find the following words from the following strings:
//const string1 = "The lady went to the market with her sister";
//"market"
const string1 = "The lady went to the market with her sister"
const string2 = string1.search("market");
console.log(string2);

//what I have understood
//1.I have learned the different javascript strings methods and how they are  used.
//2.we can be able to extract,replace ,search and also convert a string to different cases.
//3.strings may contain letters,symbols,words,sentence,numbers





