const express = require("express");
const router = express.Router();
const clinicController = require("../controllers/clinicController");

router.post("/clinics", clinicController.addClinic);

router.get("/clinics", clinicController.getAllClinics);

router.get("/clinics/:id", clinicController.getClinicById);

router.put("/clinics/:id", clinicController.updateClinic);

module.exports = router;
