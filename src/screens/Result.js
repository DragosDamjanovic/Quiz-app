import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

export default function Result({ score }) {
  const history = useNavigate();

  useEffect(() => {
    if (!score) {
      history.push("/");
    }
  }, [score, history]);

  return (
    <div className="result">
      <span className="title">Final Score: {score}</span>
      <Button
        variant="contained"
        color="secondarry"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/"
      >
        Go To Homepage
      </Button>
    </div>
  );
}
