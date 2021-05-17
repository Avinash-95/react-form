import React, { useState } from 'react';
import './style.css';
import { Container, Row } from 'reactstrap';

export default function App() {
  const [data, setData] = useState({ name: '', age: '' });
  const [tableData, setTableData] = useState({});

  const handleSubmit = e => {
    e.preventDefault();
    setTableData(data);
  };
  console.log(tableData);
  return (
    <>
      <Container>
        <Row>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label> Name</label>
                <input
                  name="name"
                  className="form-control"
                  value={data.name}
                  onChange={e => setData({ ...data, name: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label> Age</label>
                <input
                  name="age"
                  className="form-control"
                  value={data.age}
                  onChange={e => setData({ ...data, age: e.target.value })}
                />
              </div>
              <br />
              <button className="btn btn-primary w-100">Get value</button>
            </form>
          </div>
          <br />
        </Row>
        <table className="table mt-3">
          <thead>
            <tr>
              <th>Name</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {data ? (
              <tr>
                <td>{tableData.name}</td>
                <td>{tableData.age}</td>
              </tr>
            ) : (
              ''
            )}
          </tbody>
        </table>
      </Container>
    </>
  );
}
