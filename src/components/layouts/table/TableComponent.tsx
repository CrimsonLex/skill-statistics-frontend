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
    return (
        <TableContainer component={Paper} className={className}>
            {isLoading ? (
                <Typography variant="body1">{loadingMessage}</Typography>
            ) : (
                <Table className="table-container">
                    <TableHead>
                        <TableRow className={'table-container__header'}>
                            {headers.map((header, index) => (
                                <TableCell key={index}>
                                    {header.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data && data.length > 0 ? (
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
                                            {item[header.key]}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={headers.length}>
                                    <Typography variant="body1">
                                        {emptyMessage}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            )}
        </TableContainer>
    );
}
