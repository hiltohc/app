import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { UsersList } from './UsersList';
import { deleteDoc } from './firebaseConnection'; 

// Mock para a função de edição
const handleEdit = jest.fn();

const mockData = {
  id: 't0TGfymkD9VDqqG9ZzFu',
  nome: 'Produto Teste',
  quantidade: 10,
  descricao: 'Descrição do produto teste',
};

describe('UsersList Component', () => {
  it('deleta o produto quando o botão de deletar é pressionado', async () => {
    const { getByText } = render(<UsersList data={mockData} handleEdit={handleEdit} />);

    // Pressiona o botão de deletar
    fireEvent.press(getByText('Deletar produto'));

    // Espera que o deleteDoc seja chamado corretamente com os parâmetros do documento
    await waitFor(() => {
      expect(deleteDoc).toHaveBeenCalled();
      expect(deleteDoc).toHaveBeenCalledWith({ id: '123' });
    });
  });

  it('chama a função de editar com os dados corretos', () => {
    const { getByText } = render(<UsersList data={mockData} handleEdit={handleEdit} />);

    // Pressiona o botão de editar
    fireEvent.press(getByText('Editar produto'));

    // Verifica se a função handleEdit foi chamada com os dados corretos
    expect(handleEdit).toHaveBeenCalledWith(mockData);
  });
});
