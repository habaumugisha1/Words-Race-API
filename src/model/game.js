import mongoose from 'mongoose';

const gameSchema = mongoose.Schema({
    score:{ type:Number},
    level:{ type:Number},
    created_at:{ type: Date, default: Date.now }
   
})

export default mongoose.model('Games', gameSchema)