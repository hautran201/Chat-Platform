const app = require("./src/app");

const PORT = 3000;

app.listen(PORT, (error) => {
  console.log(`Server listening on Port ${PORT}`);
  if (error) {
    process.exit(0);
  }
});
