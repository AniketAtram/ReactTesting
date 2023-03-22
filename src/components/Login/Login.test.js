import { render, screen } from '@testing-library/react';
import Login from './Login'

test('Sign In text should be rendered', ()=>{
    render(<Login/>)
    const signInText = screen.getByRole('heading')
    expect(signInText).toHaveTextContent('Sign In')
})

