import express from 'express';
import { useExpressApp } from './useApp';
import dataSource from './database/typeorm';

export const app = express();

export function server() {
  useExpressApp(app);
  dataSource
    .initialize()
    .then(() => {
      app.listen(80, () => {
        console.log('servidor rodando');
      });
    })
    .catch((error) => {
      console.error(error);
    });
}
