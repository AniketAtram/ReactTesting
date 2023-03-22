import { render, screen } from '@testing-library/react';
import Login from './Login'

// The Sign In text is rendered
test('Sign In text should be rendered', ()=>{
    render(<Login/>)
    const signInText = screen.getByRole('heading')
    expect(signInText).toHaveTextContent('Sign In')
})

// The lock icon is displayed after the sign in text
test('The lock icon should be displayed',()=>{
    render(<Login/>)
    const avatar = screen.getByTestId("LockOutlinedIcon")
    expect(avatar).toBeInTheDocument()
})

// There is a field for entering username
test('Username input field should be rendered',()=>{
    render(<Login/>)
    const userNameField = screen.getByPlaceholderText('Enter username');
    expect(userNameField).toBeInTheDocument()
})

// There is a field for entering password
test('Password input field should be rendered',()=>{
    render(<Login/>)
    const passwordField = screen.getByPlaceholderText('Enter password');
    expect(passwordField).toBeInTheDocument()
})

// There should be a check box above login button

test('Check box should be displayed above the Login button',()=>{
    render(<Login/>)
    const chkbx = screen.getByRole('checkbox')
    expect(chkbx).toBeInTheDocument()
})

// There is a button for login in
test('Login In button should be rendered',()=>{
    render(<Login/>)
    const loginBtn = screen.getByRole('button')
    expect(loginBtn).toBeInTheDocument()
})

// There should be two links present
test('There should be two links present in the login page',()=>{
    render(<Login/>)
    const links = screen.getAllByRole('link')
    expect(links.length).toEqual(2)
})