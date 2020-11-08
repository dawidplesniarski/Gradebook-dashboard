import React from "react";
import styled from 'styled-components';
import {useTable} from 'react-table';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {getCurrentSubject} from "../../actions/subjectActions";

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
    min-width: 600px;
    font-size: 20px;
    color: #464e51;
    font-family: Montserrat,serif;
    @media (max-width: 768px) {
      min-width: 300px;
    }
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

const AllSubjectsTable = ({data, getCurrentSubject}) => {

    const columns = React.useMemo(
        () => [
            {
                Header: 'Przedmioty',
                columns: [
                    {
                        Header: 'Nazwa przedmiotu',
                        accessor: 'subjectName'
                    },
                    {
                        Header: 'Wybierz',
                        accessor: '_id',
                        Cell: ({row: {values}}) => (
                            <StyledLinkWrapper>
                                <StyledLink
                                    onClick={() => getCurrentSubject(values._id)}
                                    to={'/selectedSubject'}>
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
    })

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
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCurrentSubject: (id) => dispatch(getCurrentSubject(id))
    };
};

export default connect(null, mapDispatchToProps)(AllSubjectsTable);