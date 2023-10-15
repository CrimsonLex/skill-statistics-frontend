import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TopicDTO } from './topicInterface.types';
import './TenTopicsDtoTable.scss';
import TableComponent from '../../layouts/table/TableComponent';
import { Header } from '../../layouts/table/TableComponent.types';

const headersNew: Header[] = [
    {
        key: 'topicId',
        label: 'Topic Id',
    },
    {
        key: 'topicName',
        label: 'Name',
    },
    {
        key: 'resourcesNumber',
        label: 'Number of resources',
    },
];
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

    return (
        <TableComponent
            className="container"
            data={topics}
            headers={headersNew}
            loadingMessage={'Topics Loading'}
            emptyMessage={'No Topics yet'}
        ></TableComponent>
    );
};

export default TopicsTableMaterialUI;
