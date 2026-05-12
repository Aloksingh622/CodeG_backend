

import { createClient } from 'redis';

const client = createClient({
    username: 'default',
    password: 'GlOZXMdwJZqHl6zigBNDDtKqMXdOr4DT',
    socket: {
        host: 'redis-19323.crce263.ap-south-1-1.ec2.cloud.redislabs.com',
        port: 19323
    }
});
module.exports=redisclient;
