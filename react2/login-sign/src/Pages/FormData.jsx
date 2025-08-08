import React, { useEffect, useState } from "react";

function FormData() {
  const [submittedData, setSubmittedData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("form-store");
    if (storedData) {
      setSubmittedData(JSON.parse(storedData));
    }
  }, []);

  // console.log("submitted data ==>",submittedData);

  function deleteHandler(index) {
    // console.log(index);
    let copyData = [...submittedData];
    copyData.splice(index, 1);
    setSubmittedData(copyData);
  }

  return (
    <>
      <div className="mt-5">
        <h3>Submitted Forms:</h3>
        <br />
        <table className="table">
          <thead>
            <tr>
              <th>No.</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>City</th>
              <th>Languages</th>
              <th>Phone</th>
              <th>Age</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {submittedData.map((data, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.firstName}</td>
                <td>{data.lastName}</td>
                <td>{data.email}</td>
                <td>{data.gender}</td>
                <td>{data.city}</td>
                <td>{data.languages.join(", ")}</td>
                <td>{data.phone}</td>
                <td>{data.age}</td>
                <td>
                  {/* onClick={() => deleteHandler(index)} */}
                  <button
                    className="btn btn-primary"
                    onClick={() => deleteHandler(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default FormData;

