import { db } from "../db.js";

export const addNgo = (req, res) => {
  // extract information from request body
  const { name, description } = req.body;
  const { id } = req.token;

  // Write query to insert into ngo table
  const q = "INSERT INTO ngo (name, description, admin_id) VALUES (?, ?, ?)";
  db.query(q, [name, description, id], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json("Internal server error");
    }

    return res.status(200).json("Ngo added successfully");
  });
};

export const getAllNgo = (req, res) => {
  const q = "SELECT * FROM ngo";
  db.query(q, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json("Internal server error");
    }

    return res.status(200).json(result);
  });
};

export const getNgoById = (req, res) => {
  const { id } = req.params;
  const q = "SELECT * FROM ngo WHERE id = ?";
  db.query(q, [id], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json("Internal server error");
    }

    return res.status(200).json(result);
  });
};

export const getNgoOfUser = (req, res) => {
  const { id } = req.token;
  const q = "SELECT * FROM ngo WHERE admin_id = ?";
  db.query(q, [id], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json("Internal server error");
    }

    return res.status(200).json(result);
  });
}
