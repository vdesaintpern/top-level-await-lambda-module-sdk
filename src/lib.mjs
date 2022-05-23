import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);

const AWS = require('aws-sdk');

var client = new AWS.SecretsManager();

export async function getSecret() {

    console.log("getting secret");

    let secretName = 'secretname-you-choose';

    return client.getSecretValue({SecretId: secretName}, function(err, data) {
        if (err) {
            throw err;
        }
        else {
            if ('SecretString' in data) {
                let secret = data.SecretString;
                return secret;
            } else {
                let buff = new Buffer(data.SecretBinary, 'base64');
                decodedBinarySecret = buff.toString('ascii');
                return decodedBinarySecret;
            }
        }

    }).promise();

}
