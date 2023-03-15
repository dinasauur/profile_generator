const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`What's your name? Nicknames are also acceptable =) `, (answer1) => {
  console.log(`Hello, ${answer1}!`);
  rl.question(`What's an activity you like doing? `, (answer2) => {
    console.log(`I see, that sounds fun!`);
    rl.question(`Do you do anything while you ${answer2}? `, (answer3) => {
      console.log(`${answer3} must feel nice.`);
      rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.) `, (answer4) => {
        console.log(`Oh, ${answer4} is my favourite too!`);
        rl.question(`What's your favourite thing to eat for that meal? `, (answer5) => {
          console.log(`That sounds yummy ~`);
          rl.question(`Which sport is your absolute favourite? `, (answer6) => {
            console.log(`Wow, you must be great at ${answer6}`);
              rl.question(`What is your superpower? In a few words, tell us what you are amazing at!`, (answer7) => {
                console.log(`That sounds wonderful!`);
                console.log(`---`);
                console.log(`Thank you for your valuable feedback, here is your profile bio generated just for you: ${answer1} loves to ${answer3} while ${answer2}, devouring ${answer5} for ${answer4}, prefers ${answer6} over any other sport, and is amazing at ${answer7}.`);
          
                rl.close();
              });
            });
          });
        });
      });
    });
  });
