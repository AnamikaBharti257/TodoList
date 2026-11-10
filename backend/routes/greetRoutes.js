import express from "express";
const router = express.Router();

router.post("/", (req, res) => {
    const { name } = req.body;

    res.json({
        message: `hello ${name}! Welcome to our application`
    });
});

export default router;