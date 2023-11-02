# BeatsBot - Your Music Bot

BeatsBot is a music bot for Discord made in Node.js with TypeScript, using the Discord.js and Distube libraries. With BeatsBot, you can enjoy seamless music playback in your Discord server.

## Installation

To install BeatsBot, follow these simple steps:

1. Clone the repository from GitHub:

   ```sh
   git clone https://github.com/TrishCX/BeatsBot.git
   ```

2. Navigate to the project directory:

   ```sh
   cd BeatsBot
   ```

3. Install the dependencies using npm:

   ```sh
   npm install
   ```

4. Set up your Discord bot token and other configurations in a `.env` file:

   ```sh
   botToken=YOUR_DISCORD_BOT_TOKEN
   guildiD=YOUR_GUILD_ID
   ```

   Replace `botToken` with your actual Discord bot token and `guildiD` with the server id in which you want to use the bot.

5. Compile TypeScript files to JavaScript (if necessary):

   ```sh
   npm run watch
   ```

6. Start the bot:

   ```sh
   npm run start:prod
   ```

Now, BeatsBot should be up and running in your Discord server, ready to play your favorite tunes!
