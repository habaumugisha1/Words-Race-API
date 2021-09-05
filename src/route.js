import express from 'express';
import { newGame } from "./controllers/game";
import { randomWords } from "./controllers/generateWords";
import {  leaderBoards} from "./controllers/leaderboard";

const router = express.Router()
router.get('/', (req, res) => res.status(200).json({ status:200, message:'Welcome to Word Race Game'}));
router.post('/newgame', newGame);
router.get('/words', randomWords);
router.get('/leaderBoard', leaderBoards);

export default router;