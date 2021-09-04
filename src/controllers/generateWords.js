import { generateRandomWords } from "../helper/generateWords";

export const randomWords = (req,res) => {
    const numberOfWords = 3;
    const words = generateRandomWords(numberOfWords);// generate random words callback 
    return res.status(200).json({status:200, message:"The words generated successful", words})
}