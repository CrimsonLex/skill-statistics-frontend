import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';

describe('TenTopicsDTOTable', () => {
    it('it should render the component ', () => {
        const { getByText } = render(
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
        );

        const titleTable = getByText('Login');

        expect(titleTable).toBeTruthy();
    });
});
