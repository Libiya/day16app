import React from 'react';
import './table.css';
const TableHeader = () => {
    return (
        <thead className="Table-header">
            <tr>
                <th>Name</th>
                <th>Occupation</th>
            </tr>
        </thead>
    )
}

const TableBody = () => {
    return (
        <tbody className="Table-body">
            <tr>
                <td>Winston</td>
                <td>Policeman</td>
            </tr>
            <tr>
                <td>Merry</td>
                <td>Fashion Designer</td>
            </tr>
            <tr>
                <td>Nazeeb</td>
                <td>Engineer</td>
            </tr>
            <tr>
                <td>Saavi</td>
                <td>Doctor</td>
            </tr>
            <tr>
                <td>Ramnath</td>
                <td>Driver</td>
            </tr>
        </tbody>
    )
}

class Table  extends React.Component {
    render(){
        return(
            <table className="Table">
                <TableHeader/>
                <TableBody/>
            </table>
        )
    }
}

export default Table;