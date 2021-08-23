import React from "react";

function Users({ datas }) {
    return (
      <div>
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Users</h6>
          </div>
          <div className="card-body">
            <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Email ID</th>
                  <th>Salary</th>
                </tr>
              </thead>
              <tbody>
              {datas.map((el) => {
                  return (
                    <tr>
                      <td>{el.id}</td>
                      <td>{el.name}</td>
                      <td>{el.position}</td>
                      <td>{el.mail}</td>
                      <td>{el.salary}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            </div>
        </div>
      </div>
    </div>
  );
}
export default Users;