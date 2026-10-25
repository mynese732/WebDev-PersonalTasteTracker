console.log("Hello World!");
// 1. Create an array called favoriteFoods with at least 6 foods you love.
let favoriteFoods = ["Chicken Alfredo", "Chicken/queso/rice combo", "Pepperoni Pizza", "Blue Ras Italian Shaved Ice", "All Beef Hot Dogs", "Pineapple"]



console.log("\n#2:");
// 2. Loop through the list and print: "One of my favorite foods is ______."

// looping through each item in the favoriteFoods array (based on array length) and printing a message for each food
for (let i = 0; i < favoriteFoods.length; ++i){
  console.log("One of my favorite foods is", favoriteFoods[i])
} 



console.log("\n#3:");
// 3. Print out the rating for each food with a ranking like:
// "My #1 favorite food is Ramen" (copy/paste for all items)
// "My #2 favorite food is Sushi"
// ...etc.

// Looking through the favoriteFoods array again and printing a ranking message for each food based on its index in the array
for (let i = 0; i < favoriteFoods.length; ++i){
  console.log("My #" + (i + 1) + " favorite food is " + favoriteFoods[i])
} 



console.log("\n#4:");
// 4a. Create a function printFoodRecommendation(foodName) that prints out the following for the foodName provided
    // "Have you ever tried ____?"
    // "I always recommend ____ to friends."
    // "Trust me — ____ is delicious."

// the printFoodRecommendation function that takes a food name as an argument and prints out three recommendation statements about that food
function printFoodRecommendation(foodName) {
  console.log("Have you ever tried " + foodName + "?");
  console.log("I always recommend " + foodName + " to friends.");
  console.log("Trust me — " + foodName + " is delicious.");
}

// 4b. Call the function at least 3 times

// calling the printFoodRecommendation function with different food names to demonstrate its functionality
printFoodRecommendation("Chicken Alfredo");
printFoodRecommendation("Pepperoni Pizza");
printFoodRecommendation("Blue Ras Italian Shaved Ice");



console.log("\n#5:");
// Here's a list of 50 friends' favorite foods:
let friendFavorites = [
    "Pizza", "Sushi", "Pasta", "Falafel", "Burgers", "Ramen", "Pad Thai", "Curry", "Pho", "Nachos", "Gnocchi", "Donuts", "Steak", "Lasagna", "Biryani", "Tacos", "Croissant", "Churros", "Fried Rice", "Shawarma", "Miso Soup", "BBQ Ribs", "Hotpot", "Enchiladas", "Baklava", "Gyros", "Hummus", "Empanadas", "Pancakes", "Muffins", "Samosas", "Macarons", "Quiche", "Pierogi", "Arepas", "Okonomiyaki", "Ceviche", "Brisket", "Bao Buns", "Poutine", "Clam Chowder", "Fajitas", "Canelé", "Kimchi", "Tamales", "Omelette", "Biscuits", "Tempura", "Spring Rolls", "Crepes"
  ];
// 5. Print out only foods that have an "a" in the name. For example, "Pizza" would not be included, but "Donuts" would be.

// Personal note: The instructions and example contridict, but the next step says to store them 
// in an array called foodsWithA, so for this, I will just print foods with an "a" in the name

// loops through the friendFavorites array and checks if each food name contains the letter "a". If it does, then it prints it
// The toLowerCase() method is used to make the check case-insensitive, so it will catch both "a" and "A"
for (let i = 0; i < friendFavorites.length; ++i){
  if (friendFavorites[i].toLowerCase().includes("a")) { 
    console.log(friendFavorites[i]);
  }
}



console.log("\n#6:");
// 6. Store the result in an array called foodsWithA. Print out the array.
// the array to hold the food names with an "a" in them
let foodsWithA = [];

// a reiteration of the previous loop, but this time instead of printing the food names with an "a", it adds them to a new array called foodsWithA
for (let i = 0; i < friendFavorites.length; ++i){
  if (friendFavorites[i].toLowerCase().includes("a")) {
    foodsWithA.push(friendFavorites[i])
  }
}

// printing the array
console.log("The foods with A array: " + foodsWithA);



// 7. Create a new array longFoodNames for foods with names longer than 6 characters.
// the array to hold the food names longer than 6 characters and the minimum length for a food name to be considered long
let longFoodNames = [];
let foodLengthMin = 7;

// loops through the friendFavorites array and checks if each food name is longer than 6 characters. If it is, then it adds it to a new array called longFoodNames
for (let i = 0; i < friendFavorites.length; ++i){
  if (friendFavorites[i].length >= foodLengthMin) {
    longFoodNames.push(friendFavorites[i])
  }
} 



// 8. Create another array shortFoodNames for foods 6 characters or shorter.

// the array to hold the food names 6 characters or shorter and the maximum length for a food name to be considered short
let shortFoodNames = [];
let foodLengthMax = 6;

// loops through the friendFavorites array and checks if each food name is 6 characters or shorter. If it is, then it adds it to a new array called shortFoodNames
for (let i = 0; i < friendFavorites.length; ++i){
  if (friendFavorites[i].length <= foodLengthMax) {
    shortFoodNames.push(friendFavorites[i])
  }
}


console.log("\n#9:");
// 9. Print both arrays and compare:
// "There are more long-named foods." OR "There are more short-named foods."

// the two arrays
console.log("The foods with names longer than 6 characters: " + longFoodNames);
console.log("The foods with names 6 characters or shorter: " + shortFoodNames);

// comparing the to arrays and printing a message to indicate which one has more items
console.log("There are more long-named foods: " + (longFoodNames.length > shortFoodNames.length));


console.log("\n#10:");
// 10. STRETCH: Find the longest food name and print:
// "The longest food name in the list is ______ with ___ characters."

// default variables to hold the longest food names and its length (will be updated in the loop below)
let longestFoodNameLength = 0;
let longestFoodNamesArray = [];

// loops through every food in the friendFavorites array. If the length of the arrray food in the loop is longer than the current longestFoodNameLength, 
// then it updates the longestFoodName and longestFoodNameLength variables to hold the new longest food name and its length. 
// If the length is not longer, but is equal, then it is added to the longestFoodArray (in case there are multiple foods with the same longest length (there are I tested))
for (let i = 0; i < friendFavorites.length; ++i){
  let nameLength = friendFavorites[i].replaceAll(" ", "").length;

  if (nameLength > longestFoodNameLength) {
    longestFoodNameLength = nameLength;
    longestFoodNamesArray = [friendFavorites[i]]; // resets the array to only hold the new longest food name
  }
  else if (nameLength === longestFoodNameLength) {
    longestFoodNamesArray.push(friendFavorites[i]);
  }
}

// printing out the longest food name and its length
console.log("There are three foods with the longest name in the list if not including spaces.");
console.log("The foods with the longest name in the list are " + longestFoodNamesArray + " with " + longestFoodNameLength + " characters.");
// it would just be clam chowder and spring rolls with 12 characters if you do count spaces