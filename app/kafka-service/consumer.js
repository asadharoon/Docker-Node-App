const { Kafka } = require("kafkajs");
module.exports = {
    consume: async (kafka) => {

        try {
            if (!kafka) {

                kafka = helper.getKafkaObject()
            }

            const consumer = kafka.consumer({ groupId: "product" });
            console.log("Connecting consumer.....");
            await consumer.connect();
            console.log("Consumer Connected!");

            await consumer.subscribe({
                topic: "topic-product-add",
                fromBeginning: true,
            });


            await consumer.run({
                eachMessage: async (result) => {
                    console.log("result is in consumer: ", result.message.value.toString())
                },
            });
        } catch (ex) {
            console.error(`Something bad happened with Consumer ${ex}`);
        }
    },
};
