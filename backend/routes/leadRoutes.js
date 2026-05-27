const express = require("express");

const {
  getLeads,
  addLead,
  updateLeadStatus,
  deleteLead,
} = require("../controllers/leadController");

const router = express.Router();

router.get("/", getLeads);

router.post("/", addLead);

router.put("/:id", updateLeadStatus);

router.delete("/:id", deleteLead);

module.exports = router;