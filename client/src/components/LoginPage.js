import React from 'react';
import {StyleRoot} from 'radium';
import { Button, Form, FormGroup, Label, Input, FormText, Container} from 'reactstrap';

class LoginPage extends React.Component {

    render () {
        return (

    <Container>
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
        </FormGroup>    
        <Button>Submit</Button> 
        </Form>
        </Container>
           )
    }
}

export default LoginPage