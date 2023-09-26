import {
    TableCell,
    TableRow,
    Table,
    TableBody,
    TableContainer,
    TableHead,
    Paper,
    Typography,
} from '@mui/material';
import { TableProps } from './TableComponent.types';
import './TableComponent.scss';

export default function TableComponent({
    data,
    headers,
    className,
    isLoading,
    loadingMessage,
    emptyMessage,
}: TableProps) {
    const formatTitle = (title) => {
        return title.replace(
            /(^[a-z])|([a-z])(?=[A-Z])/g,
            (match, firstLetter, otherLetters) => {
                return firstLetter
                    ? firstLetter.toUpperCase()
                    : otherLetters + ' ';
            }
        );
    };
    return (
        <TableContainer component={Paper} className="className">
            <Table className="table-container">
                <TableHead>
                    <TableRow className={'table-container__header'}>
                        {headers.map((header, index) => (
                            <TableCell key={index}>
                                {formatTitle(header)}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {!data || data.length === 0 ? ( // Check if there are no topics
                        <TableRow>
                            <TableCell>
                                <Typography variant="body1">
                                    No topics available.
                                </Typography>
                            </TableCell>
                        </TableRow>
                    ) : (
                        data.map((item, rowIndex) => (
                            <TableRow
                                key={rowIndex}
                                className={
                                    rowIndex % 2 == 0
                                        ? 'table-container__even-row'
                                        : 'table-container__odd-row'
                                }
                            >
                                {headers.map((header, colIndex) => (
                                    <TableCell key={colIndex}>
                                        {item[header]}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
