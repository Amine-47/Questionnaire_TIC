// Initialize the agent at application startup.
let visitorId;
const fpPromise = import('https://openfpcdn.io/fingerprintjs/v3')
    .then(FingerprintJS => FingerprintJS.load())
fpPromise
    .then(fp => fp.get())
    .then(result => {
        visitorId = result.visitorId
    })
