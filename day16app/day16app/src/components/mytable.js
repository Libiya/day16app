import React from 'react';
import './mytable.css';
const TableHeader = () => {
    return (
      <thead className="table-header" > 
        <tr>
          <th>Name</th>
          <th>Job</th>
          <th>City</th>
        </tr>
      </thead>
    )
  }

  const TableBody = (props) => {
    const rows = props.characterData.map((row, index) => {
      return (
        <tr key={index}>
          <td>{row.name}</td>
          <td>{row.job}</td>
          <td>{row.city}</td>
        </tr>
      )
    })
  
    return <tbody className="table-body">{rows}</tbody>
  }

  class Table extends React.Component {
    
    render() {
      const {characterData} = this.props
      return (
        <table>
        <TableHeader />
        <TableBody characterData={characterData} />
      </table>
      )
    }
  }
  class Samp extends React.Component {
    render() {
      const characters = [
        {
          name: 'Krishna',
          job: 'Software Engineer',
          city:'Kannur'
        },
        {
          name: 'Mini',
          job: 'Artist',
          city:'Malappuram'
        },
        {
          name: 'Deba',
          job: 'HR',
          city:'Kollam'
        },
        {
          name: 'Abeer',
          job: 'Manager',
          city:'Thrissur'
        },
        {
          name: 'Surya',
          job: 'Analyst',
          city:'Erode'
        },
        {
          name: 'Chandra shekhar',
          job: 'System Engineer',
          city:'Cherthala'
        },
      ]
  
      return (
        <div className="container">
          <Table characterData={characters} />
        </div>
        )
    }
  }

  export default Samp;
