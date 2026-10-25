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



// 4b. Call the function at least 3 times

// calling the printFoodRecommendation function with different food names to demonstrate its functionality



console.log("\n#5:");
// Here's a list of 50 friends' favorite foods:
let friendFavorites = [
    "Pizza", "Sushi", "Pasta", "Falafel", "Burgers", "Ramen", "Pad Thai", "Curry", "Pho", "Nachos", "Gnocchi", "Donuts", "Steak", "Lasagna", "Biryani", "Tacos", "Croissant", "Churros", "Fried Rice", "Shawarma", "Miso Soup", "BBQ Ribs", "Hotpot", "Enchiladas", "Baklava", "Gyros", "Hummus", "Empanadas", "Pancakes", "Muffins", "Samosas", "Macarons", "Quiche", "Pierogi", "Arepas", "Okonomiyaki", "Ceviche", "Brisket", "Bao Buns", "Poutine", "Clam Chowder", "Fajitas", "Canelé", "Kimchi", "Tamales", "Omelette", "Biscuits", "Tempura", "Spring Rolls", "Crepes"
  ];
// 5. Print out only foods that have an "a" in the name. For example, "Pizza" would not be included, but "Donuts" would be.





console.log("\n#6:");
// 6. Store the result in an array called foodsWithA. Print out the array.



// printing the array
console.log("The foods with A array: " + foodsWithA);



// 7. Create a new array longFoodNames for foods with names longer than 6 characters.





// 8. Create another array shortFoodNames for foods 6 characters or shorter.





console.log("\n#9:");
// 9. Print both arrays and compare:
// "There are more long-named foods." OR "There are more short-named foods."




console.log("\n#10:");
// 10. STRETCH: Find the longest food name and print:
// "The longest food name in the list is ______ with ___ characters."

