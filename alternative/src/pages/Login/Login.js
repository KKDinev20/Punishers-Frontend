import React from "react";
import {
  Container,
  FormWrap,
  FormContent,
  Form,
  FormInput,
  FormH1,
  FormLabel,
  FormButton,
  Text,
} from "./Login.elements";
import GlobalStyle from "../../globalStyles";
import { Link } from "react-router-dom";
import ScrollToTop from "../../components/ScrollToTop";
import { Navbar } from "../../components";
import $ from "jquery";
class Login extends React.Component {
  handleSubmit = (event) => {
    console.log(event.target[0].value);
    console.log(event.target[1].value);

    var settings = {
      url: 'https://localhost:7148/auth/login',
      method: "POST",
      timeout: 0,
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify({
        username: event.target[0].value,
        password: event.target[1].value
      }),
    };
    
    $.ajax(settings).done(function (response) {
      console.log(response);
    });
  };
  render() {
    return (
      <Container>
        <GlobalStyle />
        <ScrollToTop />
        <Navbar />
        <FormWrap>
          <FormContent>
            <Form action="#" onSubmit={this.handleSubmit}>
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor="username">Username</FormLabel>
              <FormInput type="text" id="username" required />
              <FormLabel htmlFor="password">Password</FormLabel>
              <FormInput type="password" id="password" required />
              <FormButton type="submit">Continue</FormButton>
              <Text>
                If you are new, click <Link to="/signup">here</Link>{" "}
              </Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    );
  }
}

export default Login;
