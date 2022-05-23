console.log("lambda start");

import { getSecret } from './lib.mjs';

var secret = null;

// This is the top level await
// grabbing the secret
await getSecret().then(
    function(data) {
        secret = data;
    },
    function(error) {      
        console.log(error);
    }
);

// done with getting the secret
console.log(secret);

export async function handler(event, context) {

    console.log("handler");
    console.log(secret);
    
}   