import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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


// The check box default behaviour should be unchecked
test('The checkbox should not be checked by default',()=>{
    render(<Login/>)
    const chkbx = screen.getByRole('checkbox')
    expect(chkbx).not.toBeChecked()
})
// After clicking the check box the checkbox should be checked
test('When the user clicks on checkbox, it should be marked as checked',async ()=>{
    render(<Login/>)
    const chkbx = screen.getByRole('checkbox')
    // Simulate the click event
    await waitFor(()=>{
        userEvent.click(chkbx)
        // Make sure once user clicks the checkbox is checked
        expect(chkbx).toBeChecked()
    })
})

// When user enters name, it should update username state
test('Username state is updated everytime user enters name in username field',()=>{
    render(<Login/>)
    // Test value
    const testValue = 'asdf'
    const userNameField = screen.getByPlaceholderText('Enter username')
    // Simalate the user entering the username in user name field
    fireEvent.change(userNameField, {target:{value:testValue}})
    expect(userNameField.value).toBe(testValue)
})

// When user enters password, it should update password state
test('Password state is updated everytime user enters password in password field',()=>{
    render(<Login/>)
    // Test value
    const testValue = 'asdf'
    const passwordField = screen.getByPlaceholderText('Enter password')
    // Simalate the user entering the pass in password field
    fireEvent.change(passwordField, {target:{value:testValue}})
    expect(passwordField.value).toBe(testValue)
})