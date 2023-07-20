import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { Container, FormWrap, FormContent, Form, FormInput, FormH1, FormLabel, FormButton, Text } from './SignUp.elements';
import GlobalStyle from '../../globalStyles';
import ScrollToTop from '../../components/ScrollToTop';
import { Navbar } from '../../components';

const SignUp = () => {
  return (
    <>
      <Container>
        <GlobalStyle />
        <ScrollToTop />
        <Navbar />
        <FormWrap>
          <FormContent>
            <Form action='#'>
              <FormH1>Create your account today!</FormH1>
              <FormLabel htmlFor='email'>Email</FormLabel>
              <FormInput type='email' id='email' required />
              <FormLabel htmlFor='password'>Password</FormLabel>
              <FormInput type='password' id='password' required />
              <FormButton type='submit'>Continue</FormButton>
              <Text>If you already have an account, click <Link to="/login">here</Link> </Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignUp;
