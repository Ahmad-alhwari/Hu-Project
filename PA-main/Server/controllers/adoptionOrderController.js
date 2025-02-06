const { AdoptionOrder } = require("../models");

const createAdoptionOrder = async (req, res) => {
  try {
    const userId = req.userId;
    const { adoption_id, name, phone_number, email } = req.body;

    if (!adoption_id || !name || !phone_number || !email) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const newOrder = await AdoptionOrder.create({
      user_id: userId,
      adoption_id,
      name,
      phone_number,
      email,
    });

    return res.status(201).json({
      message: "Adoption order created successfully.",
      adoptionOrder: newOrder,
    });
  } catch (error) {
    console.error("Error creating adoption order:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  createAdoptionOrder,
};
