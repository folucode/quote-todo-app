export default async ({ req, res, log, error }) => {
  try {
    const motivationalQuotes = [
      {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill"
      },
      {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
      },
      {
        quote: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson"
      },
      {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
      },
      {
        quote: "Success usually comes to those who are too busy to be looking for it.",
        author: "Henry David Thoreau"
      },
      {
        quote: "The road to success and the road to failure are almost exactly the same.",
        author: "Colin R. Davis"
      },
      {
        quote: "Opportunities don't happen. You create them.",
        author: "Chris Grosser"
      },
      {
        quote: "The only limit to our realization of tomorrow will be our doubts of today.",
        author: "Franklin D. Roosevelt"
      },
      {
        quote: "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
        author: "Jordan Belfort"
      },
      {
        quote: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
        author: "Christian D. Larson"
      },
      {
        quote: "Success is not in what you have, but who you are.",
        author: "Bo Bennett"
      },
      {
        quote: "Your time is limited, don't waste it living someone else's life.",
        author: "Steve Jobs"
      },
      {
        quote: "The only person you are destined to become is the person you decide to be.",
        author: "Ralph Waldo Emerson"
      },
      {
        quote: "The best revenge is massive success.",
        author: "Frank Sinatra"
      },
      {
        quote: "Don't be afraid to give up the good to go for the great.",
        author: "John D. Rockefeller"
      },
      {
        quote: "Hardships often prepare ordinary people for an extraordinary destiny.",
        author: "C.S. Lewis"
      },
      {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
      },
      {
        quote: "You are never too old to set another goal or to dream a new dream.",
        author: "C.S. Lewis"
      },
      {
        quote: "In the middle of every difficulty lies opportunity.",
        author: "Albert Einstein"
      },
      {
        quote: "The harder you work for something, the greater you'll feel when you achieve it.",
        author: "Unknown"
      },
      {
        quote: "Your attitude, not your aptitude, will determine your altitude.",
        author: "Zig Ziglar"
      },
      {
        quote: "The only place where success comes before work is in the dictionary.",
        author: "Vidal Sassoon"
      },
      {
        quote: "Success is walking from failure to failure with no loss of enthusiasm.",
        author: "Winston Churchill"
      },
      {
        quote: "It always seems impossible until it's done.",
        author: "Nelson Mandela"
      },
      {
        quote: "The secret of getting ahead is getting started.",
        author: "Mark Twain"
      }
    ];
  
    const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
    const randomQuote = motivationalQuotes[randomIndex];

    log({ quote: randomQuote.quote, author: randomQuote.author })

    return res.json({
      statusCode: 200,
      body: JSON.stringify({ quote: randomQuote.quote, author: randomQuote.author }),
    });
    
  } catch (error) {
    return res.json({
      statusCode: 200,
      body: JSON.stringify({ error: 'An error occurred while fetching the quote.' }),
    });
  }
};
