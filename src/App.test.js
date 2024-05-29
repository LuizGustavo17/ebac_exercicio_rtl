import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Para matchers adicionais como `toBeInTheDocument`
import App from './App';

describe('Testes para o componente principal', ()=>{
    test('Deve adicionar dois comentários na lista', ()=>{
        render(<App/>)
        fireEvent.change(screen.getByTestId('campo-comentario'), {
            target: {
                value: 'muito bonito!'
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentario'))
        expect(screen.getByText('muito bonito!')).toBeInTheDocument()
        fireEvent.change(screen.getByTestId('campo-comentario'), {
            target: {
                value: 'vou querer um desse!'
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentario'))
        expect(screen.getByText('muito bonito!')).toBeInTheDocument()
        expect(screen.getByText('vou querer um desse!')).toBeInTheDocument()
    })
    
})