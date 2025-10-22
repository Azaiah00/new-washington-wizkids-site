# 🏀 NBA API Setup Guide

## Get REAL NBA Data for Your Stats Lab!

This guide will help you get a **free NBA API key** to display real, live Washington Wizards player statistics.

---

## 🚀 **Step 1: Sign Up for RapidAPI**

1. **Go to RapidAPI**: https://rapidapi.com/api-sports/api/api-nba
2. **Click "Subscribe to Test"** (it's FREE!)
3. **Sign up** with your email or Google account
4. **Choose the "Basic" plan** (100 requests/day - FREE)

---

## 🔑 **Step 2: Get Your API Key**

1. **After subscribing**, you'll see your API key
2. **Copy the key** (it looks like: `abc123def456ghi789`)

---

## ⚙️ **Step 3: Add Key to Your Project**

1. **Open your `.env.local` file**
2. **Add your API key**:
   ```bash
   NEXT_PUBLIC_RAPIDAPI_KEY=your_actual_api_key_here
   ```
3. **Save the file**
4. **Restart your dev server**: `npm run dev`

---

## 🎯 **Step 4: Test Real NBA Data**

1. **Refresh your browser** (Ctrl+F5)
2. **Go to Stats Lab section**
3. **Click "Refresh Data"**
4. **Check the console** - you should see:
   - `🏀 Fetching Wizards roster (Real NBA API)`
   - `✅ Successfully fetched REAL Wizards data`

---

## 🏆 **What You'll Get**

With real NBA data, you'll see:
- ✅ **Real Wizards roster** (current players)
- ✅ **Actual season stats** (points, assists, rebounds)
- ✅ **Real recent game performance**
- ✅ **Live data updates** (when games are played)

---

## 🔧 **Troubleshooting**

**If you see "Sample Data" instead of "LIVE NBA Data":**

1. **Check your API key** in `.env.local`
2. **Restart the dev server** (`npm run dev`)
3. **Check the console** for error messages
4. **Make sure you're subscribed** to the API on RapidAPI

**If you get rate limit errors:**
- The free tier allows 100 requests/day
- Each page load uses ~5-10 requests
- You can upgrade to a paid plan for more requests

---

## 💡 **Pro Tips**

- **Free tier is perfect** for development and testing
- **Real data updates** automatically when games are played
- **Fallback to sample data** if API is unavailable
- **Console logs** show exactly what's happening

---

## 🎉 **You're Done!**

Once set up, your Stats Lab will show **real, live NBA data** from the Washington Wizards!

The data will update automatically as the season progresses, giving your users the most current and accurate player statistics.
