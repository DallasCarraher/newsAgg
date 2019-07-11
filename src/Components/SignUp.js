import React, { useCallback, useState } from 'react'
import { withRouter, Redirect } from 'react-router'
import app from './auth.components/base'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

const centerElement = {
    textAlign: 'center'
}

const SignUp = ({ history }) => {
    
    const [signUp, setSignUp] = useState(true)

    const handleSignUp = useCallback(async event => {
        event.preventDefault()
        const { email, password } = event.target.elements
        try {
            await app.auth().createUserWithEmailAndPassword(email.value, password.value)
            history.push("/")
        } catch (error) {
            alert(error)
        }
    }, [history])

    const handleCancel = () => {
        setSignUp(false)
    }

    if (signUp) {
        return (
            <>
                 <h2 style={{marginTop: '5em', marginBottom: '1em', textAlign:'center'}}>
                    Sign Up
                </h2>
                <div style={centerElement}>
                    <Form onSubmit={handleSignUp} style={{display:'inline-block', width:'250px'}}>
                        <FormGroup>
                            <Label for="email" hidden>Email</Label>
                            <Input type="email" id="email" placeholder="example@mail.com" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password" hidden>Password</Label>
                            <Input type="password" id="password" placeholder="password" />
                        </FormGroup>
                        <Button type="submit" color="success" outline style={{marginRight:'1em'}}>Sign Up</Button>
                        <Button onClick={handleCancel} outline>Cancel</Button>
                    </Form>
                </div>
            </>
        )
    }
    else {
        return (
            <Redirect to="/login" />
        )
    }
}

export default withRouter(SignUp)