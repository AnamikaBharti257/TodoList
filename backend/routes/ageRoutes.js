import express from "express";
const router = express.Router();

router.post("/", (req, res) => {
    const { name, age } = req.body;

    if (!name || !name.trim() || age === "" || age === undefined) {
        return res.status(400).json({
            message: `please provide both name and age`,
        });
    }


    const userage = Number(age);
    if (!Number.isInteger(userage) || age < 0) {
        return res.status(400).json({
            message: `please provide a valid age !`,
        });
    }


    if (age > 17) {
        res.json({
            eligible: true,
            message: `Hello ${name} !! You are eligible for Vote.`
        });
    }
    else {
        res.json({
            eligible: false,
            message: `Hello ${name}! Sorry you are not eligible for vote`
        });
    }

});
export default router;