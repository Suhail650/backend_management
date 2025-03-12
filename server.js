const app = require('./app');

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
  console.log('\x1b[96m%s\x1b[0m',`🚀 Server is running at:http://localhost:${PORT}`);
});