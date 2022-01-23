import React from "react";
import { useFormGroup } from "use-form-group";
import {
  Card,
  TextField,
  CardContent,
  Button,
  CardActions,
  CardHeader,
} from "../../components/shared";
import "./contactMe.scss";
export default function ContactMe() {
  const [contactForm, updateContactForm] = useFormGroup({
    name: {
      value: "",
      validation: {
        required: true,
        msgs: {
          required: "Name is required",
        },
      },
    },
    email: {
      value: "",
      validation: {
        required: true,
        msgs: {
          required: "Email is required",
        },
      },
    },
    message: {
      value: "",
      validation: {
        required: true,
        msgs: {
          required: "Message is required",
        },
      },
    },
  });

  const name = (
    <div className="name_input">
      <TextField
        id="name"
        value={contactForm.name.value}
        label="Name"
        onChange={updateContactForm}
      />
    </div>
  );

  const email = (
    <div className="email_input">
      <TextField
        id="email"
        value={contactForm.email.value}
        label="Email"
        onChange={updateContactForm}
      />
    </div>
  );

  const message = (
    <div className="message_input">
      <TextField
        id="message"
        value={contactForm.message.value}
        label="Leave a message"
        onChange={updateContactForm}
        minRows={5}
        multiline
      />
    </div>
  );

  return (
    <Card className="contact-me">
      <CardHeader title="Message me"></CardHeader>
      <CardContent>
        {name}
        {email}
        {message}
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary">
          Send
        </Button>
      </CardActions>
    </Card>
  );
}
