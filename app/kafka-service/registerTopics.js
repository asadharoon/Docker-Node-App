const { Kafka } = require("kafkajs");
const TOPICS = require("../../config/appConfig").TOPICS

module.exports = {
    registerTopics: async (kafka) => {

        try {
            if (!kafka) {

                kafka = helper.getKafkaObject()
            }

            const admin = kafka.admin();
            console.log("Connecting.....")
            await admin.connect()
            console.log("Connected!")
            //A-M, N-Z
            await admin.createTopics({
                "topics": TOPICS
            })
            console.log("Created Successfully!")
            console.log(await admin.listTopics());
            await admin.disconnect();
        } catch (ex) {
            console.error(`Something bad happened ${ex}`)
        }
    }
};