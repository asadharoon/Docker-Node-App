const { Kafka } = require("kafkajs");
module.exports = () => {
    const broker = process.env.KAKFA_BROKER_HOST;
    return new Kafka({
        "clientId": "mytest-service",
        "brokers": [broker]
    });
}
