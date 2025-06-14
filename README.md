# X (Twitter) Auto Posting Bot

A Node.js application that automatically posts tweets to X (formerly Twitter) using the Twitter API v2. The bot can post both custom tweets and randomly selected tweets from a predefined collection.

## Features

- Automatic tweet posting on startup
- REST API endpoints for manual tweet posting
- Random tweet selection from a curated collection
- OAuth 1.0a authentication for secure API access
- Environment-based configuration

## Prerequisites

- Node.js (v14 or higher)
- Twitter Developer Account with API access
- Twitter API credentials (OAuth 1.0a)

## Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd x-posting-bot
```

2. Install dependencies:
```bash
npm install
```

3. Create your environment file:
```bash
cp .env.example .env
```

4. Configure your Twitter API credentials in `.env`:
```
TWITTER_APP_KEY=your_app_key_here
TWITTER_APP_SECRET=your_app_secret_here
TWITTER_ACCESS_TOKEN=your_access_token_here
TWITTER_ACCESS_SECRET=your_access_secret_here
```

To get your Twitter API credentials:
1. Go to the [Twitter Developer Portal](https://developer.twitter.com/en/portal/dashboard)
2. Create a new project and app
3. Enable OAuth 1.0a
4. Generate your API keys and tokens
5. Ensure your app has write permissions

## Usage

### Starting the Bot

```bash
npm start
```

The bot will:
1. Start the server on port 3000
2. Automatically post a random tweet from the collection
3. Listen for API requests

### API Endpoints

#### 1. Post a Custom Tweet
```bash
curl -X POST http://localhost:3000/post-tweet \
  -H "Content-Type: application/json" \
  -d '{"tweetText": "Your tweet text here"}'
```

#### 2. Post a Random Tweet
```bash
curl -X POST http://localhost:3000/post-random-tweet
```

### Tweet Collection

The bot includes a curated collection of tweets in `tweets.js`. Each tweet has:
- Caption: The tweet text
- Author: Original author's handle
- Date: Posting date
- Notes: Engagement strategy notes

## Error Handling

The application includes error handling for:
- Missing API credentials
- Invalid tweet text
- API rate limits
- Network issues
- Authentication failures

## Security Notes

- Never commit your `.env` file
- Keep your API credentials secure
- Monitor your API usage
- Regularly rotate your API keys
- Use environment variables for sensitive data

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 