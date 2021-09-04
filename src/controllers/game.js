import Games from '../model/game';
import { saveGame } from "../helper/queries";

export const newGame = async (req,res)=>{
    const {score, level} = req.body;

    const game = new Games({
        score:score,
        level: level
    });

    try {
        const savedGame = await saveGame(game); // callback function
        return res.status(201).json({status:201, message:"game created successful!", game:savedGame});
    } catch (error) {
       return res.status(500).json({error:error.message});
    }
}