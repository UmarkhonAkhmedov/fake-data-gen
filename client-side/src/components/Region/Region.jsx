import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "../Main/Main.css";

function Region({ region, setRegion, fetchData }) {
  const handleChange = (event) => {
    setRegion(event.target.value);
  };

  return (
    <FormControl className="region__container">
      <InputLabel id="demo-simple-select-label">Select Region</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={region}
        label="Select Region"
        onChange={handleChange}
      >
        <MenuItem value="us">United States</MenuItem>
        <MenuItem value="gb">United Kindom</MenuItem>
        <MenuItem value="ca">Canada</MenuItem>
      </Select>
    </FormControl>
  );
}

export default Region;
