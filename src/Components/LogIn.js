import React, { useCallback, useContext, useState} from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { withRouter, Redirect } from 'react-router'
import app from './auth.components/base';
import { AuthContext } from './auth.components/Auth';

const centerElement = {
    textAlign: 'center'
}

const Login = ({ history }) => {

    const [signUp, setSignUp] = useState(false)

    const handleLogin = useCallback(
        async event => {
            event.preventDefault()
            const { email, password } = event.target.elements
            try {
                await app.auth().signInWithEmailAndPassword(email.value, password.value)
                history.push("/")
            } catch(error) {
                console.log(error)
                alert(error)
                if (error.code === "auth/wrong-password") {
                    console.log("error code found!")
                }
            }
        }, [history]
    )

    const { currentUser } = useContext(AuthContext)

    if (currentUser) {
        return <Redirect to="/" />
    }

    const handleSignUpClick = () => {
        setSignUp(true)
    }

    if (!signUp){
        return (
            <>
                <h2 style={{marginTop: '5em', marginBottom: '1em', textAlign:'center'}}>
                Please Log In
                </h2>
                <div style={{textAlign:'center', marginBottom:'10em'}}>
                    <Form onSubmit={handleLogin} style={{display:'inline-block', width:'250px'}}>
                        <FormGroup>
                            <Label for="email" hidden>Email</Label>
                            <Input type="email" id="email" placeholder="example@mail.com" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password" hidden>Password</Label>
                            <Input type="password" id="password" placeholder="password" />
                        </FormGroup>
                        <Button type="submit" color='primary' outline>Log In</Button>
                    </Form>
                </div>
                <div style={centerElement}>
                    <p>Don't have an account?</p>
                    <Button onClick={handleSignUpClick} color='success' outline>Sign Up</Button>
                </div>
            </>
        )
    }

    else {
        return (
            <Redirect to='/signup' />
        )
    }

}

export default withRouter(Login)