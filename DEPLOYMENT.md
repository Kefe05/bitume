# Deployment Instructions

## Environment Variables

Your app requires the following environment variable to work:

```
NEXT_PUBLIC_NEWS_API_KEY=144c38e2155d4a7c94c1e4382d3068e7
```

## Deployment Platforms

### Vercel
1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add: `NEXT_PUBLIC_NEWS_API_KEY` with value `144c38e2155d4a7c94c1e4382d3068e7`
4. Redeploy your application

### Netlify
1. Go to Site settings > Environment variables
2. Add: `NEXT_PUBLIC_NEWS_API_KEY` with value `144c38e2155d4a7c94c1e4382d3068e7`
3. Trigger a new deploy

### Other Platforms
Make sure to set the environment variable `NEXT_PUBLIC_NEWS_API_KEY` in your hosting platform's environment variables section.

## Important Notes

1. **NEXT_PUBLIC_ prefix**: This prefix is required for environment variables that need to be accessible in the browser
2. **Rebuild required**: After adding environment variables, you must rebuild/redeploy your application
3. **API Key**: The News API key is included in the code as a fallback, but it's better to set it as an environment variable

## CORS Solution

News API's free Developer plan blocks browser requests (CORS). This app solves this by:
- Using Next.js API routes (`/app/api/news/*`) as a proxy
- All News API calls go through the server-side API routes
- This bypasses CORS restrictions since server-to-server calls are allowed

## Troubleshooting

If data is not loading in production:

1. Check browser console for errors
2. Verify the environment variable is set correctly
3. Check if the API key is valid at https://newsapi.org
4. Ensure you haven't exceeded the API rate limits (News API free tier has limits)
5. Verify API routes are deployed correctly (`/api/news/top-headlines`, `/api/news/sources`, `/api/news/search`)

## API Rate Limits

News API free tier limits:
- 100 requests per day
- Development use only
- For production, upgrade to a paid plan at https://newsapi.org/pricing
