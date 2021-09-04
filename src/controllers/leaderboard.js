import Games from "../model/game";
import { descendingOrder } from "../helper/sortScore";
export const leaderBoards = async (req, res) => {
    // initializing level, and score variables
    const level = [];
    const score = [];
    const size = 10;
    const topTenScore = [];

    const count = await Games.find().count();
    const allGames = await Games.find();

    // updating level and score variable of each game retrieved in database
    allGames.map(game => {
        level.push(game.level);
        score.push(game.score);
    })

    // total score used to find average of scores
    const totalScore = score.reduce((a,b) => a + b)
    const averageScore = (totalScore/count).toFixed(2);
    const sortedScore = descendingOrder(score)
    sortedScore.slice(0, size).map(singleScore => topTenScore.push(singleScore))

    const maxLevel = Math.max(...level);

    return res.status(200).json({status:200, message:"The history ofplayed games", count,topTenScore, maxLevel, averageScore})
}