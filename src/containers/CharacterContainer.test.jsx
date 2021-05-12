import React from 'react'
import {render, screen} from '@testing-library/react'
import CharacterContainer from './CharacterContainer'

describe('CharacterContainer', ()=>{
    it('renders a list of characters from the hey arnold api', async ()=>{
        render(<CharacterContainer/>)

        screen.getByText('hi')
    })
})