import {getByText, render, screen} from '@testing-library/react'
import Signup from './Signup'

test('Should render text Signup',()=>{
    render(<Signup/>)
    const signupText = screen.getByText(/signup/i)
    expect(signupText).toBeInTheDocument()
})