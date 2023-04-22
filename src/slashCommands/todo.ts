import {
  SlashCommandBuilder,
  EmbedBuilder,
} from 'discord.js';
import { getThemeColor } from '../functions';
import { SlashCommand } from '../types';

const command: SlashCommand = {
  command: new SlashCommandBuilder()
    .setName('todo')
    .setDescription("Show help for the ToDo command"),
  execute: (interaction) => {
    const commands: string[] = [
      '`/todo add <title> <value>`: Create ToDo',
      '`/todo done`: Assigns a Done label to the ToDo',
      '`/todo delete`: Delete ToDo',
      '`/todo list <isShowDone>`: Show ToDo list',
      '`/todo setchannel <channel>`: Set the channel to be notified of ToDo',
    ]

    interaction.reply({
      embeds: [
        new EmbedBuilder()
          .setAuthor({ name: 'ToDo Command' })
          .setDescription(commands.join('\n'))
          .setColor(getThemeColor('text')),
      ],
    });
  },
  cooldown: 10,
};

export default command;
