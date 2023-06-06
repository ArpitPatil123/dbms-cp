import { db } from "../db.js";

// check if user is already a volunteer of a ngo or not by ngo_id and user_id
// and if not then add the user as a volunteer of the ngo
export const joinNgo = (req, res) => {
  const { ngo_id, user_id } = req.params;
  const q = "SELECT * FROM volunteer WHERE ngo_id = ? AND user_id = ?";
  db.query(q, [ngo_id, user_id], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json("Internal server error");
    }

    if (result.length > 0) {
      return res.status(400).json("User is already a volunteer");
    }

    const q2 = "INSERT INTO volunteer (ngo_id, user_id) VALUES (?, ?)";
    db.query(q2, [ngo_id, user_id], (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json("Internal server error");
      }

      return res.status(200).json("Volunteer added");
    });
  });
};

// get all volunteers of a ngo by ngo_id and also get the user details using join
export const getNgoVolunteers = (req, res) => {
  const { ngo_id } = req.params;
  const q =
    "SELECT * FROM volunteer JOIN users ON volunteer.user_id = users.id WHERE ngo_id = ?";
  db.query(q, [ngo_id], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json("Internal server error");
    }

    return res.status(200).json(result);
  });
};
