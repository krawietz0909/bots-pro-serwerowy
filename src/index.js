const { Client } = require("discord.js")
const chalk = require("chalk")

const { token } = require("./config/config.js")

const client = new Client()

const commandHandler = require("./handlers/command.handler")

const log = console.log

// Initialize Comamnd Manager
commandHandler(client)

client.on("ready", () => {
  log(chalk.cyanBright(`Załadowano poprawnie wszystkie komendy!`))
  log(chalk.grey(`ładowanie uprawnień administratora`))
  log(chalk.grey(`ładowanie uprawnień administratora`))
  log(chalk.redBright(`załadowano uprawnienia administratora!`))
  log(chalk.cyanBright(`ŁADOWANIE PLIKÓW BOTA...`))
  log(chalk.cyanBright(`pliki bota załadowane!`))
  log(chalk.cyanBright(`Wszystko zostało poprawnie załadowane`))
  log(chalk.blueBright(`logowanie do www.discord.gg/botspro ...`))
  log(chalk.green(`Zalogowano do www.discord.gg/botspro`))
  log(chalk.magentaBright(`Zalogowano jako ${client.user.tag}!`))
})

// Connect with Discord
client.login(token)

// Error handler - omit crashed
client.on("debug", () => {})
client.on("warn", () => {})
client.on("error", () => {})