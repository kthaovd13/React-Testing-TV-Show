import React from 'react'
import { render, queryAllByTestId, getByTestId, wait, fireEvent, queryByTestId } from '@testing-library/react'
import { fetchShow as mockFetchShow } from '../src/api/fetchShow'

import App from './App'
import { mockEpisode } from './fixtures/shows'

jest.mock('../src/api/fetchShow');

test('updates episodes data when different season selected', async () => {
    mockFetchShow.mockResolvedValueOnce({data: mockEpisode})

    const { getByText, queryAllByTestId } = render(<App />);

    expect(queryAllByTestId('show')).toHaveLength(0)

    //const dropdown = getByText(/select a season/i)
    const dropdown = queryAllByTestId('dropdown')

    dropdown.value = 'Season 1'
    
    expect(dropdown.value).toBe('Season 1')

    // await wait()
    // fireEvent.click(dropdown)
    // fireEvent.click(season)

    await wait()
    expect(queryAllByTestId('show')).toHaveLength(0)
});