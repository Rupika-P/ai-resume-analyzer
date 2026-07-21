const pdfParse = require("pdf-parse");
const analyzeResumeAI = require("../services/geminiService");

exports.analyzeResume = async (req, res) => {

    try {

        if (!req.file) {

            return res.status(400).json({
                success: false,
                message: "Upload a PDF."
            });

        }

        const pdf = await pdfParse(req.file.buffer);

        const analysis = await analyzeResumeAI(pdf.text);

        res.json({
            success: true,
            analysis
        });

    } catch (err) {

        console.error(err);

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};