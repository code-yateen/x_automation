/*

require('dotenv').config();
const express = require('express');
const { TwitterApi } = require('twitter-api-v2');
const tweets = require('./tweets');
const app = express();

app.use(express.json());

// Setup Twitter client with OAuth 1.0a User Context
const twitterClient = new TwitterApi({
  appKey: process.env.TWITTER_APP_KEY,
  appSecret: process.env.TWITTER_APP_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessSecret: process.env.TWITTER_ACCESS_SECRET
});

// Function to post a tweet
async function postTweet(tweetText) {
  try {
    const { data } = await twitterClient.v2.tweet(tweetText);
    console.log('Tweet posted successfully:', data);
    return data;
  } catch (error) {
    console.error('Error posting tweet:', error);
    throw error;
  }
}

// Endpoint to post a tweet
app.post('/post-tweet', async (req, res) => {
  try {
    const { tweetText } = req.body;
    if (!tweetText) {
      return res.status(400).json({ error: 'Tweet text is required' });
    }

    const tweet = await postTweet(tweetText);
    res.json({ success: true, tweet });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint to post a random tweet from the sample data
app.post('/post-random-tweet', async (req, res) => {
  try {
    const randomTweet = tweets[Math.floor(Math.random() * tweets.length)];
    const tweet = await postTweet(randomTweet.caption);
    res.json({ success: true, tweet, originalData: randomTweet });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

*/

require('dotenv').config();
const express = require('express');
const { TwitterApi } = require('twitter-api-v2');
const tweets = require('./tweets');
const app = express();

app.use(express.json());

// Setup Twitter client with OAuth 1.0a User Context
const twitterClient = new TwitterApi({
  appKey: process.env.TWITTER_APP_KEY,
  appSecret: process.env.TWITTER_APP_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessSecret: process.env.TWITTER_ACCESS_SECRET
});

// Function to post a tweet
async function postTweet(tweetText) {
  try {
    const { data } = await twitterClient.v2.tweet(tweetText);
    console.log('Tweet posted successfully:', data);
    return data;
  } catch (error) {
    console.error('Error posting tweet:', error);
    throw error;
  }
}

// Automatically post a random tweet when script runs
(async () => {
  try {
    const randomTweet = tweets[Math.floor(Math.random() * tweets.length)];
    await postTweet(randomTweet.caption);
  } catch (err) {
    console.error('Failed to post auto tweet:', err.message);
  }
})();

// Endpoint to post a tweet
app.post('/post-tweet', async (req, res) => {
  try {
    const { tweetText } = req.body;
    if (!tweetText) {
      return res.status(400).json({ error: 'Tweet text is required' });
    }

    const tweet = await postTweet(tweetText);
    res.json({ success: true, tweet });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint to post a random tweet from the sample data
app.post('/post-random-tweet', async (req, res) => {
  try {
    const randomTweet = tweets[Math.floor(Math.random() * tweets.length)];
    const tweet = await postTweet(randomTweet.caption);
    res.json({ success: true, tweet, originalData: randomTweet });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
