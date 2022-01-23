/* eslint-disable no-use-before-define */
import React, { useState } from "react";
import { Chip, TextField, Autocomplete, ICONS } from "../shared";

export default function Tags({ options, labelKey, placeholder }) {
  const [val, setVal] = useState([]);

  const valHtml = val.map((option, index) => {
    // This is to handle new options added by the user (allowed by freeSolo prop).
    const label = option[labelKey] || option;
    return (
      <Chip
        key={label}
        label={label}
        deleteIcon={<ICONS.RemoveIcon />}
        onDelete={() => {
          setVal(val.filter((entry) => entry !== option));
        }}
      />
    );
  });

  return (
    <div style={{ width: 500 }}>
      <Autocomplete
        multiple
        id="tags-standard"
        freeSolo
        filterSelectedOptions
        options={options}
        onChange={(e, newValue) => setVal(newValue)}
        getOptionLabel={(option) => option[labelKey]}
        renderTags={() => {}}
        value={val}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder={placeholder}
            margin="normal"
            fullWidth
          />
        )}
      />
      <div className="selectedTags">{valHtml}</div>
    </div>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
