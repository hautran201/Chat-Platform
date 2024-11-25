const app = require("./src/app");

const {
  app: { port },
} = require("./src/configs/config.mongodb");

app.listen(port, (error) => {
  console.log(`WSV Chat-Platform start with ${port}`);
  if (error) {
    process.exit(0);
  }
});
