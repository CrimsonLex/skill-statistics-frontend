import { render } from '@testing-library/react';
import TopicsTableMaterialUI from './TenTopicsDtoTable';

describe('TenTopicsDTOTable', () => {
    it('it should render the component ', async () => {
        const { getByText } = render(<TopicsTableMaterialUI />);

        const titleTable = getByText('Name');
        expect(titleTable).toBeTruthy();
    });
});
