import { render } from '@testing-library/react';
import Navbar from './Navbar';

describe('TenTopicsDTOTable', () => {
    it('it should render the component ', () => {
        const { getByText } = render(<Navbar />);

        const titleTable = getByText('Login');

        expect(titleTable).toBeTruthy();
    });
});
