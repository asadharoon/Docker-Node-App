const { Kafka } = require("kafkajs");
const RegisterTopics = require('./registerTopics');
const Producer = require('./producer');
const Consumer = require('./consumer');

module.exports = {
    bootstrap: async () => {
        const kafka = helper.getKafkaObject()
        await RegisterTopics.registerTopics(kafka);
        await Producer.connectProducer(kafka);
        await Consumer.consume(kafka);
        let i = 0;
        setInterval(async () => {
            await Producer.publish("topic-product-add", `Hi Message ${i}`);
            i++;
        }, 3000)
    }
};