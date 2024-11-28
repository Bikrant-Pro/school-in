const quotes = [
    { quote: "The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela" },
    { quote: "The way to get started is to quit talking and begin doing. -Walt Disney" },
    { quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. -Steve Jobs" },
    { quote: "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.— Ralph Waldo Emerson" },
    { quote: "Life isn’t about waiting for the storm to pass, it’s about learning to dance in the rain.— Vivian Greene" },
    { quote: "You don't have to be rich to live well. Life's value is not measured by material possessions but by the depth of experience and relationships-Unknown" },
    { quote: "In three words I can sum up everything I've learned about life: it goes on.— Robert Frost" }
];

const quoteElement = document.getElementById("quote");
const newQuoteBtn = document.getElementById("newQuoteBtn");

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    quoteElement.textContent = randomQuote.quote;
}

newQuoteBtn.addEventListener("click", generateQuote);
