import { Router } from 'express';
import * as activityCtrl from './controllers/activity';

const router = Router();
router.get('/activities', activityCtrl.getAll);
router.post('/activities', activityCtrl.create);
router.post('/activities/stop/:id', activityCtrl.stop);

export default router;
