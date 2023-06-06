import { db } from "../db.js";
import notify from "../utils/schedule.js";

export const addEvent = (req, res) => {
  const { name, description, date, time, location, ngo_id} = req.body;
  const q =
    "INSERT INTO events (`name`, `description`, `date`, `time`, `location`, `ngo_id`) VAlUES(?, ?, ?, ?, ?, ?)";
  db.query(
    q,
    [name, description, date, time, location, ngo_id],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json("Internal server error");
      }
      notify(date, time);
      return res.status(201).json("Event details registered successfully");
    }
  );
};

export const getNgoEvents = (req, res) => {
  const { ngo_id } = req.params;
  const q = "SELECT * FROM events WHERE ngo_id = ?";
  db.query(q, [ngo_id], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json("Internal server error");
    }

    return res.status(200).json(result);
  });
};

export const getEvent = (req, res) => {
  const { event_id } = req.params;
  const q = "SELECT * FROM events WHERE id = ?";
  db.query(q, [event_id], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json("Internal server error");
    }

    return res.status(200).json(result);
  });
};

export const registerForEvent = (req, res) => {
  const { event_id } = req.params;
  const { id } = req.token;
  // check if user is already registered for the event and if not register him
  const q = "SELECT * FROM eventParticipant WHERE event_id = ? AND user_id = ?";
  db.query(q, [event_id, id], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json("Internal server error");
    }

    if (result.length === 0) {
      const q =
        "INSERT INTO eventParticipant (`event_id`, `user_id`) VALUES(?, ?)";
      db.query(q, [event_id, id], (err, result) => {
        if (err) {
          console.log(err);
          return res.status(500).json("Internal server error");
        }

        return res
          .status(201)
          .json("You have successfully registered for the event");
      });
    } else {
      return res.status(400).json("You are already registered for this event");
    }
  });
};

// Get event volunteers details for an event and their details from the user table using a join
export const getEventVolunteers = (req, res) => {
  const { event_id } = req.params;
  const q =
    "SELECT * FROM eventParticipant JOIN users ON eventParticipant.user_id = users.id WHERE event_id = ?";
  db.query(q, [event_id], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json("Internal server error");
    }

    return res.status(200).json(result);
  });
};
