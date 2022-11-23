import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {
  Avatar,
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import { prepareServerlessUrl } from "next/dist/server/base-server";
import * as React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

import { selectFormState, setFormData } from "../store/formSlice";

interface IFieldValue {
  [x: string]: string;
}

const HomePage: React.FC = () => {
  // Global State
  const formData = useSelector(selectFormState);
  const [fieldValue, setValue] = useState<IFieldValue>(
    formData.reduce(
      (prev, cur) => ({ ...prev, [cur.fieldName]: cur.value }),
      {}
    )
  );
  const [result, setResult] = useState();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleGenderChange = (e: SelectChangeEvent<string>) => {
    setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    fetch("https://ulventech-react-exam.netlify.app/api/form", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...fieldValue }),
    })
      .then((response) => response.json())
      .then((res) => setResult(res));

    // const value = Object.fromEntries(data.entries());
    // const results = document.querySelector('.results');

    // results.innerText = JSON.stringify(value, null, 5);
    // console.log('adfa', results);
  };

  return (
    <Container component="main" maxWidth="md">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Full Stack Test
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 1, width: "100%" }}
        >
          {formData.map((item) => (
            <div key={item.fieldName}>
              {item.type === "select" ? (
                <FormControl fullWidth margin="normal">
                  <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={fieldValue[item.fieldName]}
                    name={item.fieldName}
                    onChange={handleGenderChange}
                    label={item.fieldName}
                  >
                    {item.options?.map((option) => (
                      <MenuItem value={option} key={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              ) : (
                <TextField
                  margin="normal"
                  multiline={item.type === "multiline" ? true : false}
                  rows={4}
                  fullWidth
                  value={fieldValue[item.fieldName]}
                  id={item.fieldName}
                  name={item.fieldName}
                  label={item.fieldName}
                  type={item.type}
                  onChange={handleChange}
                  autoComplete={item.fieldName}
                />
              )}
            </div>
          ))}

          <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
            Submit
          </Button>
        </Box>
      </Box>
      {result && (
        <>
          <Typography component="h1" variant="h6">
            Response
          </Typography>
          {JSON.stringify(result)}
        </>
      )}
    </Container>
  );
};

export default HomePage;
