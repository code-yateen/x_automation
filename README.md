# X (Twitter) Posting Bot

A Node.js backend application that allows you to post tweets on X (formerly Twitter) using the Twitter API v2.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory with your Twitter API credentials:
```
TWITTER_API_KEY=your_api_key_here
TWITTER_API_SECRET=your_api_secret_here
TWITTER_ACCESS_TOKEN=your_access_token_here
TWITTER_ACCESS_SECRET=your_access_secret_here
TWITTER_BEARER_TOKEN=your_bearer_token_here
```

To get these credentials:
1. Go to the [Twitter Developer Portal](https://developer.twitter.com/en/portal/dashboard)
2. Create a new project and app
3. Generate the necessary API keys and tokens
4. Make sure your app has write permissions

## Running the Application

Start the server:
```bash
npm start
```

The server will run on port 3000 by default.

## API Endpoints

### 1. Post a Custom Tweet
```
POST /post-tweet
Content-Type: application/json

{
    "tweetText": "Your tweet text here"
}
```

### 2. Post a Random Tweet from Sample Data
```
POST /post-random-tweet
```

## Error Handling

The API will return appropriate error messages if:
- Required credentials are missing
- Tweet text is not provided
- Twitter API returns an error
- Rate limits are exceeded

## Security Notes

- Never commit your `.env` file to version control
- Keep your API credentials secure
- Monitor your API usage to stay within Twitter's rate limits 