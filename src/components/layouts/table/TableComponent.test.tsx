import { test } from 'vitest';
import { render, screen } from '@testing-library/react';
import TableComponent from './TableComponent';

const testData = [
    { id: 1, name: 'Alexito' },
    { id: 2, name: 'Bob Marley' },
];

const testHeaders = [
    { label: 'ID', key: 'id' },
    { label: 'Name', key: 'name' },
];

test('renders loading message when isLoading is true', () => {
    render(
        <TableComponent
            isLoading={true}
            loadingMessage="Loading data..."
            data={testData}
            headers={testHeaders}
            className="test-table"
            emptyMessage="No data available"
        />
    );

    const loadingText = screen.getByText('Loading data...');
    expect(loadingText).not.toBeNull();
});

test('renders table with data when isLoading is false and data is provided', () => {
    render(
        <TableComponent
            isLoading={false}
            loadingMessage="Loading data..."
            data={testData}
            headers={testHeaders}
            className="test-table"
            emptyMessage="No data available"
        />
    );

    const idHeader = screen.getByText('ID');
    const nameHeader = screen.getByText('Name');
    const aliceName = screen.getByText('Alexito');
    const bobName = screen.getByText('Bob Marley');

    expect(idHeader).not.toBeNull();
    expect(nameHeader).not.toBeNull();
    expect(aliceName).not.toBeNull();
    expect(bobName).not.toBeNull();
});

test('renders empty message when isLoading is false and no data is provided', () => {
    render(
        <TableComponent
            isLoading={false}
            loadingMessage="Loading data..."
            data={[]}
            headers={testHeaders}
            className="test-table"
            emptyMessage="No data available"
        />
    );

    const emptyMessage = screen.getByText('No data available');
    expect(emptyMessage).not.toBeNull();
});
