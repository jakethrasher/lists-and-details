import React from 'react'
import {findByRole, render, screen} from '@testing-library/react'
import CharacterContainer from './CharacterContainer'

describe('CharacterContainer', ()=>{
    it('renders a list of characters from the hey arnold api', async ()=>{
        render(<CharacterContainer/>)

        screen.getByText('Hey Arnold! Character List:');

        await screen.findByRole('list',{name:'characters'})
    })
})