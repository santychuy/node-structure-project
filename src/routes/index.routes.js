import { Router } from 'express'
const router = Router();

router.get('/easter/fuckin/egg', (req, res) => {
    res.send('Node project structure');
});

export default router;