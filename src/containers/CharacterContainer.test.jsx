import React from 'react';
import { render, screen } from '@testing-library/react';
import CharacterContainer from './CharacterContainer';
import { MemoryRouter } from 'react-router-dom';

describe('CharacterContainer', () => {
  it('renders a list of characters from the hey arnold api', async () => {
    render(
      <MemoryRouter>
        <CharacterContainer/>
      </MemoryRouter>
    );

    screen.getByText('LOADING');

    const ul = await screen.findByRole('list', { name:'characters' });
    expect(ul).toMatchSnapshot();
        
  });
});
