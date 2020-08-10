import React from 'react'
import { render } from '@testing-library/react'
import Episodes from './Episodes'

test('renders component', () => {
    render(<Episodes episodes={[]}/>)
})

test('component renders data', () => {
    const container = render(<Episodes episodes={[]} />)

    const episodeArray = container.queryAllByTestId(/episode/i)
    
    expect(episodeArray).toHaveLength(0)
})