import React from 'react'
import { render } from '@testing-library/react'
import Episodes from './Episodes'

test('renders component', () => {
    render(<Episodes episodes={[]}/>)
})