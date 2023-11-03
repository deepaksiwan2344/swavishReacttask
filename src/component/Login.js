import React, { useState, useEffect } from "react";
import { Box, TextField, Typography, FormControl, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";

const useStyle = makeStyles({
  main_wrap: {
    marginTop: "4rem",
    justifyContent: "center",
    margin: "auto",
    width: "30%",
    "@media(max-width: 900px)": {
      width: "50%",
      "@media(max-width: 600px)": {
        width: "90%",
      },
    },
  },
  mainLeft: {},
  mainRight: {
    border: "1px solid black",
  },
  formbox: {
    padding: "2.5rem 2rem !important",
    backgroundColor: "blue",
    boxShadow: "inset 0px 7px 15px -4px #00000024",
    justifyContent: "center",
    border: "1px solid #7e8d7e",
    borderRadius: "10px",
  },
  logincont: {
    padding: "0rem 1.5rem 1.5rem 1.5rem",
    "@media(max-width : 900px)": {
      padding: "0rem 0rem 1.5rem 0rem",
      textAlign: "center",
    },
  },
  input: {
    backgroundColor: "white",
    width: "86%",
    padding: "5px 22px !important",
    border: "1px solid red !important",
    borderRadius: "3px !important",
  },
  btn: {
    backgroundColor: "#00adc9 !important",
    color: "#fff !important",
    border: "1px solid #00adc9 !important",
    marginTop: "2rem !important",
    textAlign: "center",
  },
  error: {
    color: "red",
    paddingTop: "10px",
    fontSize: "12px !important",
  },
});

const Login = () => {
  const classes = useStyle();
  const navigate = useNavigate();
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(formValues);
    if (Object.keys(errors).length === 0) {
      navigate("/Home");
    } else {
      setFormErrors(errors);
      setIsSubmit(true);
    }
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  return (
    <Box>
      <Box className={classes.main_wrap}>
        <Box className={classes.formbox}>
          <Box className={classes.logincont}>
            <Typography sx={{ color: "#fff" }}>Login Now</Typography>
          </Box>
          <form className={classes.formbox1} onSubmit={handleSubmit}>
            <FormControl fullWidth>
              <Box>
                <TextField
                  className={classes.input}
                  variant="standard"
                  name="username"
                  value={formValues.username}
                  onChange={handleChange}
                  placeholder="FirstName"
                  InputProps={{
                    disableUnderline: true,
                  }}
                />
                <Typography className={classes.error}>
                  {formErrors.username}
                </Typography>
              </Box>
              <Box style={{ marginTop: "1rem" }}>
                <TextField
                  className={classes.input}
                  variant="standard"
                  name="email"
                  placeholder="Email"
                  value={formValues.email}
                  onChange={handleChange}
                  InputProps={{
                    disableUnderline: true,
                  }}
                />
                <Typography className={classes.error}>
                  {formErrors.email}
                </Typography>
              </Box>
              <Box style={{ marginTop: "1rem" }}>
                <TextField
                  className={classes.input}
                  variant="standard"
                  name="password"
                  placeholder="Password"
                  value={formValues.password}
                  onChange={handleChange}
                  InputProps={{
                    disableUnderline: true,
                  }}
                />
                <Typography className={classes.error}>
                  {formErrors.password}
                </Typography>
              </Box>
              {Object.keys(formErrors).length === 0 && isSubmit ? (
                <Typography> succefully login</Typography>
              ) : (
                <Typography></Typography>
              )}
              <Button className={classes.btn} variant="outlined" type="submit">
                Login
              </Button>
            </FormControl>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
