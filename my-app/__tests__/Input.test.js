import React from 'react';
import { render } from '@testing-library/react-native';
import { Input } from '@/components/Input';

describe('Input Component', () => {
  it('renders correctly', () => {
    const { getByPlaceholderText } = render(
      <Input placeholder="Nome" value="Teste" onChangeText={() => {}} />
    );
    
    expect(getByPlaceholderText('Nome')).toBeTruthy();
  });
});
