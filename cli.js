#!/usr/bin/env node

import inquirer from 'inquirer';
import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import figlet from 'figlet';
import { questions } from './questions.js';
import { generateMarkdown } from './utils/generateMarkdown.js';

// Fungsi untuk menampilkan header yang menarik
const showWelcomeMessage = () => {
  console.log(
    chalk.yellow(
      figlet.textSync('Perfect README', {
        horizontalLayout: 'full',
      })
    )
  );
  console.log(chalk.cyan('✨ Welcome! Answer a few questions to generate your perfect README.md file. ✨'));
  console.log(chalk.gray('Developed by @RyumaTsukiro\n'));
};

const main = async () => {
  showWelcomeMessage();

  try {
    // Ajukan pertanyaan kepada pengguna
    const answers = await inquirer.prompt(questions);

    // Hasilkan konten markdown berdasarkan jawaban
    console.log(chalk.blue('\nGenerating your README...'));
    const markdownContent = generateMarkdown(answers);

    // Tulis konten ke file README.md
    const outputPath = path.join(process.cwd(), 'GENERATED_README.md');
    fs.writeFileSync(outputPath, markdownContent);

    console.log(chalk.green.bold(`\n✅ Success! Your README has been generated at ${outputPath}`));
    console.log(chalk.yellow('Remember to rename it to README.md and move it to your project root.'));

  } catch (error)
  {
    console.error(chalk.red.bold('\n❌ An error occurred:'));
    console.error(chalk.red(error));
  }
};

main();