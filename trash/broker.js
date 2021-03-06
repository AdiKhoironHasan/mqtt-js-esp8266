// MQTT broker
const mosca = require('mosca')
const settings = { port: 1234 }
const broker = new mosca.Server(settings)

broker.on('ready', () => {
    console.log('Broker is ready!')
})

broker.on('published', (packet) => {
    message = packet.payload.toString()
    console.log(message)
})
