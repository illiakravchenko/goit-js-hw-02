function getShippingCost(country) {
    let cost;

    switch (country.toLowerCase()) {
        case "china":
            cost = 100;
            break;
        case "chile":
            cost = 250;
            break;
        case "australia":
            cost = 170;
            break;
        case "jamaica":
            cost = 120;
            break;
        default:
            return "Sorry, there is no delivery to your country";
    }

    return `Shipping to ${country} will cost ${cost} credits`;
}

getShippingCost("Australia")
getShippingCost("Germany")
getShippingCost("China")
getShippingCost("Chile")
getShippingCost("Jamaica")
getShippingCost("Sweden")

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
