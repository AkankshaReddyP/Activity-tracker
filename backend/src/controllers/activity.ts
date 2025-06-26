import { Request, Response } from 'express';
import * as svc from '../services/activity';

export async function getAll(_req: Request, res: Response) {
  const list = await svc.listActivities();
  res.json(list);
}

export async function create(req: Request, res: Response) {
  const { description } = req.body;
  const act = await svc.startActivity(description);
  res.status(201).json(act);
}

export async function stop(req: Request, res: Response) {
  const id = Number(req.params.id);
  const act = await svc.stopActivity(id);
  res.json(act);
}
