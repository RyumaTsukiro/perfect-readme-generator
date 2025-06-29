export const questions = [
  {
    type: 'input',
    name: 'githubUsername',
    message: 'What is your GitHub username?',
    default: 'RyumaTsukiro',
  },
  {
    type: 'input',
    name: 'repoName',
    message: 'What is the name of your repository?',
    default: 'my-cool-project',
  },
  {
    type: 'input',
    name: 'projectTitle',
    message: 'What is the title of your project?',
    default: 'My Cool Project',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a short description of your project:',
  },
  {
    type: 'input',
    name: 'liveUrl',
    message: '(Optional) Enter the URL of the deployed application:',
  },
  {
    type: 'input',
    name: 'features',
    message: 'List the key features of your project (comma-separated):',
    filter: (input) => input.split(',').map(item => item.trim()),
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What command should be run to install dependencies?',
    default: 'npm install',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What command should be run to use the application?',
    default: 'npm start',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'Apache_2.0', 'GPLv3', 'BSD_3-Clause', 'None'],
  },
  {
    type: 'confirm',
    name: 'contributing',
    message: 'Would you like to include contribution guidelines?',
    default: true,
  },
  {
    type: 'input',
    name: 'author',
    message: 'What is your name for the author credit?',
    default: 'RyumaTsukiro',
  }
];