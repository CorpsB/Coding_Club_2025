# Poké-Bot

**Poké-Bot** is a beginner-friendly Discord bot project developed for a summer programming workshop. The scenario involves building a fun and interactive bot, themed around the Pokémon Squirtle, to help a fictional campsite director in Lumiose City entertain guests during a heatwave.

This project introduces JavaScript and Discord bot development through hands-on learning and creativity.

## Project Goals

- Teach the fundamentals of Discord bot development using JavaScript and the discord.js library
- Encourage collaboration and peer learning
- Empower participants to create interactive tools with real-world applications

## Prerequisites

To build and run the bot, you will need the following:

- Node.js (the latest stable version is recommended)
- A code editor such as Visual Studio Code
- A Discord account
- Access to the Discord Developer Portal

## Setup Instructions

1. Create a new folder for your bot project.
2. Open a terminal in that folder and run the command to install discord.js using npm.
3. Create two files in the project folder:
   - `start.bat` which should run the main bot file (node index.js)
   - `update.bat` which should register slash commands with Discord (node deploy-command.js)
4. Open the Discord Developer Portal, create a new application, and set it up as a bot.
5. Retrieve and safely store the following credentials:
   - Bot Token
   - Application ID
   - Public Key
6. Enable the required intents (Presence, Server Members, and Message Content) in the bot settings.
7. Generate an OAuth2 invite link with the necessary permissions and add the bot to your server.

## Project Structure

You will work with the following main files:

- `index.js` – Main bot logic and behavior
- `deploy-command.js` – Registers slash commands with Discord
- `start.bat` – Starts the bot
- `update.bat` – Deploys new commands

Make sure to replace placeholder values in the files (such as YOUR_TOKEN) with your actual credentials.

## Key Concepts and Activities

Throughout the project, you will learn to:

- Create and manage slash commands
- React to user messages (e.g., respond to greetings)
- Use embeds to format messages neatly
- Create interactive elements like buttons
- Load questions or data from external files
- Secure your bot by moving sensitive data into environment variables

## Good Practices

- Never share your bot token with others
- Use an `.env` file to store credentials securely
- Validate user roles and permissions before executing sensitive commands
- Restart the bot after changing or adding commands

## Next Steps and Extensions

Once the basic bot is functional, you are encouraged to expand its capabilities by exploring:

- Buttons and select menus for interaction
- Modals for user input
- Reaction-based events
- Autocomplete features for command arguments
- Integration with databases for persistent storage

## Resources

- discord.js documentation: https://discord.js.org/docs/packages/discord.js
- Discord Developer Portal: https://discord.com/developers/applications
- Node.js official website: https://nodejs.org/

## License

This project is provided for educational purposes. Redistribution, modification, or reuse of the content without written permission from the author is strictly prohibited. All rights reserved.