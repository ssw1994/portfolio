import React from "react";
import { useFormGroup, Validator } from "use-form-group";
import { TextField, Button, Card, Password } from "../../../components/shared";
import { useDispatch } from "react-redux";
import { signMeUp } from "../../../store/dispatchers/user.dispatch";
export default function Register() {
  const dispatch = useDispatch();
  const [registerForm, updateForm] = useFormGroup({
    username: {
      value: "",
      validation: {
        required: true,
        msgs: {
          required: "Username is required",
        },
      },
    },
    password: {
      value: "",
      validation: {
        required: true,
        msgs: {
          required: "Password is required",
        },
      },
    },

    confirmPassword: {
      value: "",
      validation: {
        required: true,
        msgs: {
          required: "Confirm password",
        },
      },
    },
  });

  const username = (
    <div className="username">
      <TextField
        id="username"
        value={registerForm.username.value}
        onChange={updateForm}
        label="Username"
        variant="outlined"
      />
    </div>
  );

  const password = (
    <div className="username">
      <Password
        id="password"
        value={registerForm.password.value}
        onChange={updateForm}
        label="Password"
        variant="outlined"
      />
    </div>
  );
  const confirmPassword = (
    <div className="username">
      <Password
        id="confirmPassword"
        value={registerForm.confirmPassword.value}
        onChange={updateForm}
        label="Confirm Password"
        variant="outlined"
      />
    </div>
  );

  const register = () => {
    const { username, password, confirmPassword } = registerForm;
    if (password.value !== confirmPassword.value) {
      alert("Password mistmatched");
      return;
    }
    const payload = {
      username: username.value,
      password: password.value,
    };

    dispatch(signMeUp(payload));
  };

  const isFormValid = Validator.isFormValid(registerForm);

  const signUpBtn = (
    <div className="signup-btn">
      <Button
        disabled={!isFormValid}
        onClick={register}
        variant="contained"
        color="primary"
      >
        Sign Up
      </Button>
    </div>
  );

  return (
    <Card>
      {username}
      {password}
      {confirmPassword}
      {signUpBtn}
    </Card>
  );
}
