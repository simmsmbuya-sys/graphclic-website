# Live Chatbot Setup Guide

This website supports both **Drift** and **Intercom** live chat widgets. Follow the instructions below to configure your preferred chatbot service.

## 🔧 Configuration

### Option 1: Using Drift (Recommended)

1. **Sign up for Drift**
   - Visit https://www.drift.com and create an account
   - Complete the setup wizard

2. **Get your Drift ID**
   - Log into your Drift account
   - Go to Settings → Setup
   - Copy your Drift ID (it looks like: `abc123xyz456`)

3. **Configure Environment Variable**
   - Create a `.env.local` file in the root of your project (if it doesn't exist)
   - Add the following:
   ```env
   NEXT_PUBLIC_CHATBOT_TYPE=drift
   NEXT_PUBLIC_DRIFT_ID=your_drift_id_here
   ```
   - Replace `your_drift_id_here` with your actual Drift ID

4. **Restart your development server**
   ```bash
   npm run dev
   ```

### Option 2: Using Intercom

1. **Sign up for Intercom**
   - Visit https://www.intercom.com and create an account
   - Complete the setup wizard

2. **Get your Intercom App ID**
   - Log into your Intercom account
   - Go to Settings → Apps → App Settings → Web
   - Copy your App ID (it looks like: `abc1234`)

3. **Configure Environment Variable**
   - Create a `.env.local` file in the root of your project (if it doesn't exist)
   - Add the following:
   ```env
   NEXT_PUBLIC_CHATBOT_TYPE=intercom
   NEXT_PUBLIC_INTERCOM_APP_ID=your_intercom_app_id_here
   ```
   - Replace `your_intercom_app_id_here` with your actual Intercom App ID

4. **Restart your development server**
   ```bash
   npm run dev
   ```

## 🎨 Customization

### Drift Customization

Once Drift is installed, you can customize it through the Drift dashboard:
- **Appearance**: Settings → Appearance → Widget
- **Welcome Message**: Settings → Conversations → Widget Settings
- **Operating Hours**: Settings → Conversations → Operating Hours
- **Team Members**: Settings → Team
- **Chatbot Rules**: Settings → Conversational AI → Playbooks

### Intercom Customization

Customize Intercom through the Intercom dashboard:
- **Messenger Design**: Settings → Customize → Messenger
- **Welcome Messages**: Settings → Messages → Welcome messages
- **Operating Hours**: Settings → Inbox → Operating hours
- **Team Members**: Settings → Team → People
- **Bots**: Settings → Bots

## 🚀 Deployment

### For Production Deployment:

1. **Add environment variables to your hosting platform:**

   **Vercel:**
   - Go to your project settings
   - Navigate to Environment Variables
   - Add `NEXT_PUBLIC_CHATBOT_TYPE` and either `NEXT_PUBLIC_DRIFT_ID` or `NEXT_PUBLIC_INTERCOM_APP_ID`
   - Redeploy your application

   **Other Platforms (Netlify, WP Engine, Kinsta, etc.):**
   - Add environment variables in your platform's settings
   - Redeploy your application

2. **Verify the chatbot appears on your live site**
   - The chatbot widget should appear in the bottom-right corner
   - Test sending a message

## 🧪 Testing

1. **Test in Development:**
   ```bash
   npm run dev
   ```
   - Visit http://localhost:3000
   - Check the browser console for any errors
   - Look for the chat widget in the bottom-right corner

2. **Test on Production:**
   - Visit your live website
   - Ensure the chatbot loads correctly
   - Test sending messages
   - Verify notifications work

## 🔍 Troubleshooting

### Chatbot not appearing?

1. **Check environment variables:**
   - Ensure `.env.local` exists and has the correct variables
   - Variable names must start with `NEXT_PUBLIC_` to be accessible in the browser
   - Restart your development server after adding/changing variables

2. **Check browser console:**
   - Open browser DevTools (F12)
   - Look for errors in the Console tab
   - Common issues:
     - Invalid ID format
     - Network errors loading the chatbot script
     - CORS issues (rare)

3. **Verify your ID is correct:**
   - Double-check the ID in your chatbot service dashboard
   - Make sure there are no extra spaces or characters

4. **Clear browser cache:**
   - Hard refresh: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
   - Or clear browser cache entirely

### Switching between Drift and Intercom

1. Update `NEXT_PUBLIC_CHATBOT_TYPE` in `.env.local`
2. Update the corresponding ID variable
3. Restart your development server
4. Clear browser cache

### Disable chatbot temporarily

To disable the chatbot without removing the code:

1. Comment out or remove the chatbot ID variables from `.env.local`
2. Or set `NEXT_PUBLIC_CHATBOT_TYPE` to an invalid value

## 📊 Features

Both Drift and Intercom offer:
- ✅ Live chat with team members
- ✅ Automated chatbot responses
- ✅ Visitor identification
- ✅ Conversation history
- ✅ Mobile-responsive chat widget
- ✅ Email notifications for new conversations
- ✅ Team inbox for managing conversations
- ✅ Analytics and reporting

## 💰 Pricing

- **Drift**: Starting at $0/month (Free tier available), paid plans from $50/month
- **Intercom**: Starting at $74/month, 14-day free trial

## 📚 Resources

- **Drift Documentation**: https://devdocs.drift.com/
- **Intercom Documentation**: https://developers.intercom.com/
- **Drift Setup Guide**: https://help.drift.com/setup/
- **Intercom Setup Guide**: https://www.intercom.com/help/en/articles/2151-using-intercom-in-your-product-or-website

## 🆘 Support

If you need help setting up the chatbot:
1. Check the troubleshooting section above
2. Refer to your chatbot service's documentation
3. Contact Drift/Intercom support directly
4. Check the browser console for specific error messages

---

**Note**: The chatbot script is loaded client-side and won't affect SEO or server-side rendering performance.
