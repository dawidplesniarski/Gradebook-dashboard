import React from "react";
import styled from 'styled-components';
import {useTable} from 'react-table';
import {Link} from "react-router-dom";

const StyledLinkWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const StyledLink = styled(Link)`
  color: #000;
  font-size: 15px;
  letter-spacing: 1px;
  text-decoration: none;
  text-align: center;
  &:hover {
    background-color: #0099ff;
    color: #fff;
    border-radius: 5px;
    padding: 1px;
    }
`;

const TableWrapper = styled.div`
    width: 100%;
    align-items: center;
    min-width: 300px;
    font-size: 20px;
    color: #464e51;
`;
const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 0.5px solid #f4f4f4;
    border-radius: 10px;
    width: 100%;
  
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

const CoursesTable = ({data}) => {
    const columns = React.useMemo(
        () => [
            {
                Header: 'Kierunki studiów',
                columns: [
                    {
                        Header: 'Nazwa kierunku',
                        accessor: 'courseName'
                    },
                    {
                        Header: 'Wybierz',
                        accessor: '_id',
                        Cell: ({row: {values}}) => (
                            <StyledLinkWrapper>
                                <StyledLink
                                    onClick={() => console.log(values.courseName)}>
                                    Przejdź
                                </StyledLink>
                            </StyledLinkWrapper>
                        )
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

export default CoursesTable;