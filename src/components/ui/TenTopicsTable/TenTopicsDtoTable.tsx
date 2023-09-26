import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TopicDTO } from './topicInterface.types';
import './TenTopicsDtoTable.scss';
import TableComponent from '../../layouts/table/TableComponent';

const pruebasTopic: TopicDTO[] = [
    {
        topicId: 1,
        topicName: 'oa1',
        resourcesNumber: 5,
    },
    {
        topicId: 2,
        topicName: 'oa2',
        resourcesNumber: 3,
    },
    {
        topicId: 3,
        topicName: 'oa3',
        resourcesNumber: 8,
    },
];

const headers: string[] = ['topicId', 'topicName', 'resourcesNumber'];
const TOPIC_BASE_REST_API_URL =
    'http://localhost:8080/skill-statistics/api/v1/topics';

const TopicsTableMaterialUI: React.FC = () => {
    const [topics, setTopics] = useState<TopicDTO[]>([]);

    useEffect(() => {
        // Fetch the data from your API
        axios
            .get(TOPIC_BASE_REST_API_URL + '/getTenTopicsDTO')
            .then((response) => {
                setTopics(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    /**
     * METODOLOGIA BEM
     * bloques: padres/contenedores de una parte del codigo
     * elementos: son los hijos de los bloques, un bloque puede tener multiples elementos, pero no puede haber
     * un elemento dentro un elemento.
     * modificadores: clases que van a modificar de acuerdo a x comportamiento del codigo un color o logica del programa.
     */
    return (
        <TableComponent
            className="container"
            data={topics}
            headers={headers}
            loadingMessage={''}
        ></TableComponent>
    );
};

export default TopicsTableMaterialUI;
