async function makeNoise() {
  console.log("Hello from", process.env.BALENA_SERVICE_NAME);
  // Sleep up to 3 seconds
  setTimeout(makeNoise, Math.floor(Math.random() * Math.floor(3000)));
}

makeNoise();
