import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event';
import Login from '../../../pages/auth/login';

describe('login page', () =>{

    it('login form has password and email input', async () =>{
        render(<Login />)
        const password = screen.getByLabelText('Password')
        const email = screen.getByLabelText('Email')

        expect(password).toBeTruthy()
        expect(email).toBeTruthy()
    })

    it('form login error', async () =>{
        render(<Login />)

        const button = screen.getByText('Send')
        await userEvent.click(button)

        expect(screen.getByText('Email is required')).toBeTruthy()
        expect(screen.getByText('Password is required')).toBeTruthy()
    })
    
    it('clear input', async () =>{

        render(<Login />)
        const password = screen.getByLabelText('Password') 
        const email = screen.getByLabelText('Email')

        await userEvent.type(email, 'example@sprint.com')
        await userEvent.type(password, 'helloworld')
        
        const clearButton = screen.getByText('Clear')
        await userEvent.click(clearButton)

        expect(password.innerHTML).toBe('')
        expect(email.innerHTML).toBe('')
    })
})