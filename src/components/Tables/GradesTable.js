import React from "react";
import styled from 'styled-components';
import {useTable} from "react-table";

const TableWrapper = styled.div`
    width: 40%;
    align-items: center;
    min-width: 300px;
    font-size: 20px;
    color: #464e51;
    font-family: Montserrat,serif;
`;
const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 0.5px solid #f4f4f4;
    border-radius: 10px;
    width: 100%;
    max-height: 500px;
  
    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 0.5px solid #dadada;
      border-right: 0.5px solid #dadada;

      :last-child {
        border-right: 0;
      }
    }
  }
`;

const GradesTable = ({data}) => {
    const columns = React.useMemo(
        () => [
            {
                Header: 'Oceny',
                columns: [
                    {
                        Header: 'Nazwa przedmiotu',
                        accessor: 'subject.subjectName'
                    },
                    {
                        Header: 'Ocena',
                        accessor: 'grade'
                    }
                ]
            }
        ],
        []
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data,
    });

    return (
        <TableWrapper>
            <Styles>
                <table {...getTableProps()}>
                    <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                    {rows.map((row, i) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </Styles>
        </TableWrapper>
    );
};

export default GradesTable;