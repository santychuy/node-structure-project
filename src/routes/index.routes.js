import { Router } from 'express'
const router = Router();

router.get('/', (req, res) => {
    res.send('Hello');
});

router.get('/easter/fuckin/egg', (req, res) => {
    res.send('Node project structure');
});

export default router;