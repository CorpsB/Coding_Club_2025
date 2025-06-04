/*
** EPITECH PROJECT, 2025
** PokeBot
** File description:
** deploy-command
*/

const { REST, Routes, SlashCommandBuilder } = require('discord.js'); // => Importation de ressources de discord.js

const commands = [ // => Tableau qui contient toutes les commandes de votre Bot.
    new SlashCommandBuilder()
      .setName('ping')
      .setDescription('Répond Pong!') // => Lors de l'ajout de commande, ajoutez une virgule ici !
    // Vos autres /commande ici
].map(command => command.toJSON());

/**
 * Partie obscure du programme qui ne necessite pas une compréhension approfondie.
 * Retenez simplement qu'elle sert à déclarer les commandes du tableau ci-dessus à l'API de Discord
 * pour qu'elle puisse appeller directement notre bot en cas d'interaction. (ex: /commande)
*/
const rest = new REST({ version: '10' }).setToken("VOTRE_TOKEN");

(async () => {
    try {
        console.log('Déploiement des commandes slash...');
        await rest.put(
            Routes.applicationCommands("VOTRE_APPLICATION_ID"),
            { body: commands },
        );
        console.log('[DEBUG] - Commandes déployées avec succès !');
    } catch (error) {
        console.error('[ERREUR] - Erreur de déploiement des commandes :', error);
    }
})();
