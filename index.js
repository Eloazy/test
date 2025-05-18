const { Client, GatewayIntentBits } = require('discord.js')

const client = new Client({intents: [GatewayIntentBits.MessageContent]})

client.on("ready", () => {})

client.login('MTMzNTM0NzY5MjM2ODU2MDE2OA.GFxXO6.0yHol6dOQOX_yuxQ8z41VQjhX-7RVjNdCwQLx0')
