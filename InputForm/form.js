import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import NameIcon from "@material-ui/icons/SupervisorAccount";
import LockIcon from "@material-ui/icons/Lock";
import EmailIcon from "@material-ui/icons/Email";

//import PhoneInput from react-phone-number-input"
//import Picker from "./Picker";

export const Form = (props) => {
  const {
    values: { name, email, password, confirmPassword },
    errors,
    touched,
    handleSubmit,
    handleChange,
    isValid,
    setFieldTouched
  } = props;
  console.table(props);

  const change = (name, e) => {
    e.persist();
    handleChange(e);
    setFieldTouched(name, true, false);
  };
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        name="email"
        helperText={touched.email ? errors.email : ""}
        error={Boolean(errors.email)}
        label="Email"
        fullWidth
        value={email}
        onChange={handleChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailIcon />
            </InputAdornment>
          )
        }}
      />
      <div>{Boolean(errors.email) ? errors.email : ""}</div>
      <TextField
        name="password"
        helperText={touched.password ? errors.password : ""}
        error={Boolean(errors.password)}
        label="Password"
        fullWidth
        type="password"
        value={password}
        onChange={handleChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockIcon />
            </InputAdornment>
          )
        }}
      />
      <div>{errors.password}</div>
      <TextField
        name="confirmPassword"
        helperText={touched.confirmPassword ? errors.confirmPassword : ""}
        error={Boolean(errors.confirmPassword)}
        label="Confirm Password"
        fullWidth
        type="password"
        value={confirmPassword}
        onChange={handleChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockIcon />
            </InputAdornment>
          )
        }}
      />
      <div>{errors.confirmPassword}</div>
      <TextField
        name="phoneno"
        helperText={touched.phoneno ? errors.phoneno : ""}
        error={Boolean(errors.phoneno)}
        label="Phone Number"
        value={name}
        onChange={handleChange}
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <NameIcon />
            </InputAdornment>
          )
        }}
      />

      <TextField
        name="dob"
        helperText={touched.dob ? errors.dob : ""}
        error={Boolean(errors.dob)}
        label="Date of Birth"
        value={name}
        onChange={handleChange}
        format="DD/MM/YYYY"
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <NameIcon />
            </InputAdornment>
          )
        }}
      />
      <div>{Boolean(errors.phoneno) ? errors.phoneno : ""}</div>

      <Button
        type="submit"
        fullWidth
        variant="raised"
        color="primary"
        disabled={!isValid}
      >
        Submit
      </Button>
    </form>
  );
};
