import React from "react";
import { TextField, Button, Card, Password } from "../../../components/shared";
import { useFormGroup, Validator } from "use-form-group";
import { useDispatch } from "react-redux";
import { signMeIn } from "../../../store/dispatchers/user.dispatch";
export default function Login() {
  const dispatch = useDispatch();
  const [userForm, updateForm] = useFormGroup({
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
  });

  const username = (
    <div className="username">
      <TextField
        id="username"
        value={userForm.username.value}
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
        value={userForm.password.value}
        onChange={updateForm}
        label="Password"
        variant="outlined"
      />
    </div>
  );

  const authenticate = () => {
    const payload = {
      username: userForm.username.value,
      password: userForm.password.value,
    };
    dispatch(signMeIn(payload));
  };

  const isFormValid = Validator.isFormValid(userForm);

  const signInBtn = (
    <div className="signin-btn">
      <Button
        disabled={!isFormValid}
        onClick={authenticate}
        variant="contained"
        color="primary"
      >
        Sign In
      </Button>
    </div>
  );

  return (
    <Card>
      {username}
      {password}
      {signInBtn}
    </Card>
  );
}
