import axios from 'axios';
import { useEffect, useState } from 'react';

const Employee = () => {

  const [getemp, setGetemp] = useState([]);

  useEffect(() => {

    axios
      .get('http://localhost:4000/employees')
      .then((res) => setGetemp(res.data.employees))


      .catch((err) => console.log(err));
  }, [getemp]);



  const [userdata, setUserdata] = useState({
    name: '',
    email: '',
    mobilenumber: '',
    jobrole: '',
    experience: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserdata((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:4000/employee', userdata)
      .then((res) => {
        console.log(res.data);
        setGetemp(res.data);
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (index) => {
    axios
      .delete(`http://localhost:4000/employee/${index}`)
      .then((res) => {
        console.log(res.data);
        setGetemp(getemp.filter((employee, i) => i !== index));
      })
      .catch((err) => console.log(err));
  };
  

  return (

    <div className="emp-body">
      <div className="d-flex flex-wrap justify-content-center">
        <form style={{ width: '650px', marginTop: '3em' }}>
          <div className="input-group mb-3">

            
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              name="name"
              value={userdata.name}
              onChange={handleChange}
            />
            <input
              type="email"
              className="form-control"
              placeholder="email"
              aria-label="Username"
              aria-describedby="basic-addon1"
              name="email"
              value={userdata.email}
              onChange={handleChange}
              
            />
            <input
              type="number"
              className="form-control"
              placeholder="Mobile number"
              aria-label="Username"
              aria-describedby="basic-addon1"
              name="mobilenumber"
              value={userdata.mobilenumber}
              onChange={handleChange}
            />
            <input
              type="text"
              className="form-control"
              placeholder="job role"
              aria-label="Username"
              aria-describedby="basic-addon1"
              name="jobrole"
              value={userdata.jobrole}
              onChange={handleChange}
            />
            <input
              type="text"
              className="form-control"
              placeholder="experience"
              aria-label="Username"
              aria-describedby="basic-addon1"
              name="experience"
              value={userdata.experience}
              onChange={handleChange}
            />
          </div>
          <button className="btn btn-primary btn-lg" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>

      <div className="d-flex flex-wrap justify-content-center">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Mobile Number</th>
              <th scope="col">Job Role</th>
              <th scope="col">Experience</th>
            </tr>
          </thead>
          <tbody>
            {getemp.length >0 && getemp.map((employee, index) => (
                <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{employee.mobilenumber}</td>
                <td>{employee.jobrole}</td>
                <td>{employee.experience}</td>
                <button onClick={()=>{
                  handleDelete(index)
                }}
                className='btn btn-danger btn-sm'>X</button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Employee;