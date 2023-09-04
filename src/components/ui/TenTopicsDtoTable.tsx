import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
} from '@mui/material';
import { TopicDTO } from '../../models/topicInterface';

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
        <div>
            <TableContainer component={Paper}>
                <Table className="table-container">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Resource Count</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {!topics ? ( // Check if there are no topics
                            <TableRow>
                                <TableCell colSpan={2}>
                                    <Typography variant="body1">
                                        No topics available.
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        ) : (
                            topics.map((topic) => (
                                <TableRow key={topic.topicId}>
                                    <TableCell>{topic.topicName}</TableCell>
                                    <TableCell>
                                        {topic.resourcesNumber}
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default TopicsTableMaterialUI;
