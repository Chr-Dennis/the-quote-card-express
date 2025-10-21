"use strict"

async function getRandomImage() {
    const endpoint = "http://localhost:5500/api/v1/getRandomImage";
    try {
        const response = await fetch(endpoint);
        const returnedData = await response.json();
        const receivedPhotoUrl = returnedData.data;

        const imgDiv = document.querySelector(".background-img");
        imgDiv.style.backgroundImage = `url("${receivedPhotoUrl}")`;
    } catch (error) {
        console.error(error)
    }
}

getRandomImage();

// const elements = {
//     quote: document.getElementById("quote"),
//     author: document.getElementById("author")
// }

// const quotes = [
//     {
//         quote: "All hands! Abandon ship!",
//         author: "Captain Picard",
//     },

//     {
//         quote: "Doh!",
//         author: "Homer Simpson",
//     },

    
//     {
//         quote: "The most important one... is this: 'Hear, O Israel: The Lord our God, the Lord is one. Love the Lord your God with all you heart and with all your soul and with all your mind and with all your strength.' The second is this: 'Love your neighbor as yourself.' There is no commandment greater than these.",
//         author: "Christ Jesus of Nazareth",
//     },
    
//     {
//         quote: "Therefore, if anyone is in Christ, he is a new creation. The old has passed away; behold, the new has come.",
//         author: "The Apostle Paul",
//     },
    
//     {
//         quote: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God",
//         author: "The Apostle Paul",
//     },
    
//     {
//         quote: "Submit yourselves, then, to God. Resist the devil, and he will flee from you.",
//         author: "The Apostle James",
//     },
    
//     {
//         quote: "The Internet is the first thing that humanity has built that humanity dosn't understand, the largest experiment in anarchy we have ever had.",
//         author: "Eric Schmidt",
//     }
// ]

// function loopThroughQuotes() {
//     let quoteIndex = 0;
//     setInterval(() => {
//         if (quoteIndex < quotes.length) {
//             elements.quote.textContent = quotes[quoteIndex].quote;
//             elements.author.textContent = quotes[quoteIndex].author;
//             quoteIndex++;
//         } else {
//             quoteIndex = 0;
//         }
//     }, 3000);
// }

// setTimeout(loopThroughQuotes, 3000);