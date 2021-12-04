let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

// Splits string into an array of individual words
let storyWords = story.split(' ');


// filters out any items in the unnnecessaryWords array from the storyWords array
let betterWords = storyWords.filter(function(word) {
  return !unnecessaryWords.includes(word) 
});


// Counts the number of unnecessary words from the storyWords array
let unnecessaryWordsCount = 0;

let unnecessaryWordsCounter = storyWords.filter(function(word) {
  return unnecessaryWords.includes(word) 
});

for (word of unnecessaryWordsCounter) {
  unnecessaryWordsCount += 1;
};


// Counts and tally's every time an item from the overusedWords aarray appears in the storyWords array
let reallyCount = 0;
let veryCount = 0;
let basicallyCount = 0;

for (word of storyWords) {
  if (word === 'really') {
    reallyCount +=1
  } else if (word === 'very') {
    veryCount += 1
  } else if (word === 'basically') {
    basicallyCount += 1
  }
}


// Count and tally's the number of sentences in the story string
let sentencesCount = 0;

storyWords.forEach(word => {
  if (word[word.length-1] === '.' || word[word.length-1] === '!') {
    sentencesCount += 1;
  }
})



// stores and logs the results from the above tasks FAIL!!
/*const logInfo = (storyWords, sentenceCount, unnecessaryWordsCount) => {
  console.log('Word count: ' + storyWords);
  console.log('Sentence count: ' + sentenceCount);
  console.log('Unnecessary word count: ' + unnecessaryWordsCount);
}; */

  console.log('Word count: ' + storyWords.length);
  console.log('Sentence count: ' + sentencesCount);
  console.log('Unnecessary word count: ' + unnecessaryWordsCount)

betterWords = betterWords.join(' ');
console.log(' ');
console.log(betterWords);



/* Extra Task

Congratulations! You’ve improved the original paragraph and given the user some important information about his or her work. Think about ways in which you can extend this project, potentially by using other JavaScript knowledge you have.

Here are some ideas:

For the overused words, remove it every other time it appears.

Write a function that finds the word that appears the greatest number of times.

Replaced overused words with something else. */
