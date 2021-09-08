import express from 'express';

const PORT = 4000;

async function main() {
  const app = express();

  app.get('/healthz', (req, res) => {
    res.send('ok');
  });

  app.get('*', (req, res) => {
    res.send({message: `You trying to find ${req.url} url`});
  });

  app.listen(PORT);
}

main().then(() => {
  console.log(`Running on http://127.0.0.1:${PORT}`);
});
