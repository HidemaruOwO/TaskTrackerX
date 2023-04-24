import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';
import { getThemeColor } from '../functions';
import { SlashCommand } from '../types';

const command: SlashCommand = {
  command: new SlashCommandBuilder()
    .setName('todo')
    .setDescription('Show help for the ToDo command')
    .addSubcommand((subcommand) =>
      subcommand
        .setName('add')
        .setDescription('Create ToDo')
        .addStringOption((option) =>
          option
            .setName('title')
            .setDescription('Title of ToDo')
            .setRequired(true),
        )
        .addStringOption((option) =>
          option
            .setName('value')
            .setDescription('Contents of ToDo')
            .setRequired(true),
        ),
    )
    .addSubcommand((subcommand) =>
      subcommand.setName('delete').setDescription('Delete ToDo'),
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName('list')
        .setDescription('Show ToDo')
        .addBooleanOption((option) =>
          option
            .setName('isshowdone')
            .setDescription('Do you want to view completed tasks ?')
            .setRequired(true),
        ),
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName('setchannel')
        .setDescription('Set a channel to notify you that you have set a ToDo')
        .addChannelOption((option) =>
          option
            .setName('channel')
            .setDescription('Please select a channel for notification')
            .setRequired(true),
        ),
    ),

  execute: (interaction) => {
    const commands: string[] = [
      '`/todo add <title> <value>`: Create ToDo',
      '`/todo done`: Assigns a Done label to the ToDo',
      '`/todo delete`: Delete ToDo',
      '`/todo list <isShowDone>`: Show ToDo list',
      '`/todo setchannel <channel>`: Set the channel to be notified of ToDo',
    ];

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
