import chalk from "chalk";
const log = console.log;

console.log(chalk.blue("Hello World"))

log(chalk.green(
	'I am a green line ' +
	chalk.blue.underline.bold('with a blue substring') +
	' that becomes green again!'
));

log(`
    CPU: ${chalk.red('90%')}
    RAM: ${chalk.green('40%')}
    DISK: ${chalk.yellow('70%')}
`);

const name = 'Sindre';
console.log(chalk.green('Hello %s'), name);

console.log(chalk.bgGreen.bold(" Hello "))