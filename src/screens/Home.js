import React from "react";
import { TextField } from "@mui/material";
import { MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import Categories from "../Data/Categories";
import { Link } from "react-router-dom";

export default function Home({ fetchQuestions }) {
  const [category, setCategory] = React.useState("");
  const [difficulty, setDifficulty] = React.useState("");
  const [error, setError] = React.useState(false);

  const history = useNavigate();

  const handleSubmit = () => {
    if (!category || !difficulty) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions(category, difficulty);
      history.push("/quiz");
    }
  };

  return (
    <div className="center">
      <div className="container">
        <div className="settings">
          <span style={{ fontSize: 30 }}>Quiz Settings</span>

          <div className="settings_select">
            {error && <ErrorMessage>Please Fill all the fields</ErrorMessage>}

            <TextField
              select
              style={{ marginBottom: 30 }}
              label="Select Category"
              variant="outlined"
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            >
              {Categories.map((cat) => (
                <MenuItem key={cat.category} value={cat.value}>
                  {cat.category}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              select
              label="Select Difficulty"
              variant="outlined"
              style={{ marginBottom: 30 }}
              onChange={(e) => setDifficulty(e.target.value)}
              value={difficulty}
            >
              <MenuItem key="Easy" value="easy">
                Easy
              </MenuItem>
              <MenuItem key="Medium" value="medium">
                Medium
              </MenuItem>
              <MenuItem key="Hard" value="hard">
                Hard
              </MenuItem>
            </TextField>

            <button
              variant="contained"
              color="primary"
              size="large"
              onClick={handleSubmit}
            >
              <Link to="/quiz">Start Quiz</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
