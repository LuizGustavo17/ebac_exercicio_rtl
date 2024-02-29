import { fireEvent, render, screen } from '@testing-library/react';
import PostComments from './index'; // Importe o componente correto
import '@testing-library/jest-dom/extend-expect';


describe('Teste para o componente PostComments', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComments />);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve adicionar dois comentários corretamente', () => {
        render(<PostComments />);

        const commentInput = screen.getByTestId('comment-input');
        const commentSubmitButton = screen.getByTestId('comment-submit');

        fireEvent.change(commentInput, { target: { value: 'Primeiro comentário' } });
        fireEvent.click(commentSubmitButton);
        expect(screen.getByTestId('comment-0')).toBeInTheDocument();
        expect(screen.getByTestId('comment-0')).toHaveTextContent('Primeiro comentário');

        fireEvent.change(commentInput, { target: { value: 'Segundo comentário' } });
        fireEvent.click(commentSubmitButton);

        expect(screen.getByTestId('comment-1')).toBeInTheDocument();
        expect(screen.getByTestId('comment-1')).toHaveTextContent('Segundo comentário');
    });
});