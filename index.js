console.log ("Loading Froyo app... Loaded! ");

const userInput = prompt (
    "Please enter your froyo flavors 😏😋 separated by commas (ex: vanilla, strawberry, strawberry):",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"

);

console.log("Nice! 😏 you entered : 👀", userInput);

function parseFlavors(input)
{
return input
.split (",")
.map((flavor) => flavor.trim().toLowerCase())
.filter((flavor) => flavor !== "");

}

const flavors = parseFlavors(userInput);
console.log("Parsed flavors array:", flavors);

function countFlavors(flavorArray){
    const counts = {};

    for(const flavor of flavorArray)
    {
        if (counts[flavor] === undefined) 
        {
            counts[flavor] = 1;
        }
        else {
            counts[flavor] +=1;
        }
    }
    return counts;
}

const flavorCounts = countFlavors(flavors);

console.log("flavor counts object:", flavorCounts)
console.log("🍦 Froyo Order Summary");
console.log("=====================");
console.table(flavorCounts);
