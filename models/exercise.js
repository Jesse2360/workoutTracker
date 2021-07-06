const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//new workout schema
const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now()
    },
    exercises: [
        {
            name: {
                type: String,
                trim: true,
                required: "Enter Exercise Name"
            },
            type: {
                type: String,
                trim: true,
                required: "Enter Exercise type"
            },
            distance: {
                type: Number
            },
            duration: {
                type: Number,
                required: "Enter Exercise duration"
            },
            weight: {
                type: Number
            },
            sets: {
                type: Number
            },
            reps: {
                type: Number
            }
        }
    ]
});

const Workout = mongoose.model("workout", WorkoutSchema);

module.exports = Workout;