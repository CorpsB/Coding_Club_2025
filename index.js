/*
** EPITECH PROJECT, 2025
** PokeBot
** File description:
** index
*/

const { Client, GatewayIntentBits, SlashCommandBuilder, ActionRowBuilder, ButtonBuilder,
    ButtonStyle, EmbedBuilder } = require('discord.js'); // => Importation de ressources de discord.js

/**
 * Création du bot avec les permissions pour gérer : les serveurs, les messages et la modération.
 * Pour respecter les conventions de la documentation discord.js, la variable "client" fait référence au bot.
 */
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildModeration,
    ]
});

client.login("VOTRE_TOKEN"); // => Permet de se connecter, et donc de lancer le bot.

client.on("ready", () => { // => Action qui s'exécute quand le bot est connecté
    console.log("Carapuce est dans la place!\n");
});

client.on('interactionCreate', async interaction => {
    try {
        if (interaction.isCommand()) {
            if (interaction.commandName === 'ping') {
                await interaction.reply('Carapong !');
            }
            // Vos autres commandes ici
        }
    } catch (error) {
        console.error(`[ERREUR] - ${interaction.customId} non trouvé ! Erreur : ${error}`);
        await interaction.reply({ content: 'Erreur lors de l\'exécution de l\'interaction.', flags: EPHEMERAL });
    }
});
