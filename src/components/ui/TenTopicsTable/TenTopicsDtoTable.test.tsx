import { render, renderHook, waitFor } from '@testing-library/react';
import TopicsTableMaterialUI from './TenTopicsDtoTable';
import { vi } from 'vitest';
import { TopicDTO } from './TenTopicsTable/topicInterface.types';
import axios from 'axios';
import { act } from 'react-dom/test-utils';
import { useEffect } from 'react';

vi.mock('axios');
//
const topics: TopicDTO[] = [
    {
        topicId: 1,
        topicName: 'H2',
        resourcesNumber: 2,
    },
    {
        topicId: 2,
        topicName: 'Spring',
        resourcesNumber: 0,
    },
];

beforeEach(() => {
    vi.spyOn(axios, 'get').mockResolvedValue(topics);
});
afterEach(() => {
    vi.restoreAllMocks;
});

describe('TenTopicsDTOTable', () => {
    it('it should render the component ', async () => {
        const { getByText } = render(<TopicsTableMaterialUI />);

        const titleTable = getByText('Name');
        expect(titleTable).toBeTruthy();
    });

    it('API successfull', async () => {
        (axios.get as jest.Mock).mockResolvedValueOnce([{ data: topics }]);
        await act(async () => {
            renderHook(() =>
                useEffect(() => {
                    axios.get(
                        'http://localhost:8080/skill-statistics/api/v1/topics' +
                            '/getTenTopicsDTO'
                    );
                }, [])
            );
        });

        expect(axios.get).toHaveBeenCalledWith(
            'http://localhost:8080/skill-statistics/api/v1/topics' +
                '/getTenTopicsDTO'
        );
    });

    it('it should render the component with an empty list', async () => {
        vi.spyOn(axios, 'get').mockResolvedValue({ data: null });

        const { getByText } = render(<TopicsTableMaterialUI />);
        await waitFor(() => {
            expect(getByText('No topics available.')).toBeTruthy();
        });
    });

    it('should render the component with data', async () => {
        vi.spyOn(axios, 'get').mockResolvedValue({ data: topics });

        const { getByText } = render(<TopicsTableMaterialUI />);

        // Espera a que los datos se carguen (puedes ajustar esto según tu implementación real)
        await waitFor(() => {
            // Verifica que los datos se muestren correctamente en la tabla
            expect(getByText('H2')).toBeTruthy();
            expect(getByText('0')).toBeTruthy();
            expect(getByText('Spring')).toBeTruthy();
            expect(getByText('2')).toBeTruthy();
        });
    });
});
