import React from 'react';
import { Container, FormWrap, FormContent, Form, FormInput, FormH1, FormLabel, FormButton, Text } from './Login.elements';
import GlobalStyle from '../../globalStyles';
import { Link } from 'react-router-dom'; 
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
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor='email'>Email</FormLabel>
              <FormInput type='email' id='email' required />
              <FormLabel htmlFor='password'>Password</FormLabel>
              <FormInput type='password' id='password' required />
              <FormButton type='submit'>Continue</FormButton>
              <Text>If you are new, click <Link to="/signup">here</Link> </Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignUp;
