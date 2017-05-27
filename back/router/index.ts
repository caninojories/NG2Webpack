import { Router, Request, Response } from 'express';

const router : Router = Router();
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/', (req, res) => {
  res.render('index.html');
});

export const indexRouter : Router = router;
