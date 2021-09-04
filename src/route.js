import express from 'express';
import { newGame } from "./controllers/game";
import { randomWords } from "./controllers/generateWords";
import {  leaderBoards} from "./controllers/leaderboard";

const router = express.Router()

router.post('/newgame', newGame);
router.get('/words', randomWords);
router.get('/leaderBoard', leaderBoards);

export default router;