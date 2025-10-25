# Supabase Setup Guide

## Connection Status
Your game is now connected to Supabase!

**Project URL:** https://guqcojsrmjndjgzdmcza.supabase.co

## Database Setup

To enable score saving, you need to create a table in your Supabase database:

1. Go to https://supabase.com and open your project
2. Click on **SQL Editor** in the left sidebar
3. Click **New Query**
4. Paste this SQL code:

```sql
-- Create scores table
CREATE TABLE scores (
  id BIGSERIAL PRIMARY KEY,
  player_name TEXT NOT NULL,
  score INTEGER NOT NULL,
  coins_collected INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (recommended)
ALTER TABLE scores ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert scores
CREATE POLICY "Anyone can insert scores"
  ON scores
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create policy to allow anyone to read scores
CREATE POLICY "Anyone can read scores"
  ON scores
  FOR SELECT
  TO anon
  USING (true);
```

5. Click **Run** to execute the query

## How It Works

- **Score Tracking:** Each coin collected adds 10 points
- **Auto-Save:** When all 12 coins are collected, the score is automatically saved to Supabase
- **Leaderboard Ready:** You can fetch top scores using `SupabaseHelper.getTopScores()`

## Testing the Connection

1. Open your game in a browser
2. Open the browser console (F12)
3. You should see "Supabase connected!" message
4. Collect all 12 coins
5. Check your Supabase dashboard → Table Editor → scores table to see the saved score

## Customization

You can customize the integration in `js/supabase.js`:
- Change player names
- Adjust score values
- Add additional data fields
- Create leaderboard displays

Enjoy your Supabase-powered game!
