const router = require('express').Router();

const db = require("../models/exercise");

// get req for all workouts
router.get("/api/workouts", (req, res) => {
    db.find()
        .then((dbData) => {
            res.json(dbData);
        }) .catch((err) => {
            res.json(err);
        })
});

router.get("/api/workouts/range", (req, res) => {
    db.find()
        .then((dbData) => {
        res.json(dbData);
    }) .catch((err) => {
        res.json(err);
    })
});

//post
router.post("/api/workouts", ({ body }, res) => {
    db.create(body)
        .then((dbData) => {
            res.json(dbData);
        }).catch((err) => {
            res.json(err);
        })
});

//put
router.put("/api/workouts/:id", ({ body, params }, res) => {
    db.findByIdAndUpdate(params.id, { $push: { exercises: body }})
        .then((dbData) => {
            res.json(dbData);
        }).catch((err) => {
            res.json(err);
        })
});
//export
module.exports = router;