import express from 'express';
import router from './routes';

const app = express();
app.use(express.json());
app.use('/api', router);

const PORT = process.env.PORT ?? 3001;
app.listen(PORT, () => {
  console.log(`🚀 Backend listening on http://localhost:${PORT}/api/activities`);
});
