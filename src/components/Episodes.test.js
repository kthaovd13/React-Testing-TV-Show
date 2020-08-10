import React from 'react'
import { render } from '@testing-library/react'
import Episodes from './Episodes'

test('renders component', () => {
    render(<Episodes episodes={[]}/>)
})

test('component renders correct data', () => {
    const container = render(<Episodes episodes={[]} />)

    const episodeArray = container.queryAllByTestId("episode")
    
    expect(episodeArray).toHaveLength(0)
})