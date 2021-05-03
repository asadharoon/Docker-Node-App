const { Kafka } = require("kafkajs");
let producer;

module.exports = {
    connectProducer: async (kafka) => {
        try {

            if (!kafka) {

                kafka = helper.getKafkaObject()
            }

            producer = kafka.producer();

            console.log("Connecting producer.....")
            await producer.connect()
            console.log("producer Connected!")

        } catch (ex) {
            console.error(`Something bad happened with producer ${ex}`)
        }
    },

    publish: async (topic, data, partition) => {
        partition = partition || 0;

        let payload = {
            "topic": topic,
            "messages": [
                {
                    "value": data,
                    "partition": partition
                }
            ]
        };

        const result = await producer.send(payload);

        console.log(`Send Successfully! ${JSON.stringify(result)}`)
    }
};
