import React from "react";


//Table should have a col for: last name, first name, location, and picture
function Table(props) {

  return (

    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Last name</th>
          <th scope="col">First Name</th>
          <th scope="col">Location</th>
          <th scope="col">Picture</th>
          <th scope="col">Gender</th>
        </tr>
      </thead>
      <tbody>
        {props.randList.map((item, index) => (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{item.name.last}</td>
            <td>{item.name.first}</td>
            <td>{item.location.city}, {item.location.state}, {item.location.country}</td>
            <td><img src={item.picture.thumbnail} alt="thumbnail" /></td>
            <td>{item.gender}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table;