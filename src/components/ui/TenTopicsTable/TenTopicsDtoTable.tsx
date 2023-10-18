import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TopicDTO } from './topicInterface.types';
import TableComponent from '../../layouts/table/TableComponent';
import { Header } from '../../layouts/table/TableComponent.types';
import { ApiUrls } from '../../../common/apiUrls';

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
const TopicsTableMaterialUI: React.FC = () => {
    const [topics, setTopics] = useState<TopicDTO[]>([]);

    useEffect(() => {
        axios
            .get(ApiUrls.GET_TEN_TOPICS)
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
