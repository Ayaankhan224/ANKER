const fs = require("fs");
const path = require("path");
const candidateLoader = require("../services/candidateLoader");
const scoringService = require("../services/scoringService");
const csvGenerator = require("../services/csvGenerator");

exports.generateRanking = async (req, res) => {
  try {
    let candidates = [];
    if (req.files && req.files.length > 0) {
      candidates = await candidateLoader.loadCandidatesFromFiles(req.files);
    } else {
      candidates = await candidateLoader.loadCandidates();
    }

    if (candidates.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No candidates loaded or parsed. Please check if your files are valid."
      });
    }

    const { experience, limit } = req.body;
    const ranked = scoringService.rankCandidates(candidates, { experience, limit });
    const csvCount = await csvGenerator.createCSV(ranked);

    res.json({
      success: true,
      count: ranked.length,
      csvRecords: csvCount,
      candidates: ranked.map((c, index) => ({
        rank: index + 1,
        candidate_id: c.candidate_id,
        name: c.profile.anonymized_name,
        title: c.profile.current_title,
        experience: c.profile.years_of_experience,
        company: c.profile.current_company,
        score: Number(c.score.toFixed(2))
      }))
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: err.message
    });
  }
};

exports.downloadCSV = (req, res) => {
  const filePath = path.resolve("./output/submission.csv");
  if (fs.existsSync(filePath)) {
    res.download(filePath, "ranked_candidates.csv");
  } else {
    res.status(404).json({
      success: false,
      message: "No shortlist CSV has been generated yet. Please run ranking first."
    });
  }
};