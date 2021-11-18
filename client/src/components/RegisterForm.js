import React, { useState } from "react";
import Axios from "axios";

function RegisterForm() {
  const [data, setData] = useState({
    name: "",
    age: "",
    date: "",
    batch: "",
  });
  

  function submit(e) {
    e.preventDefault();
    
    
    const errors={};
    
    console.log("on submit", data.batch);
    let isValid =true;

    if(data.name.trim()==='')
    {
      isValid = false;
     const nameInput=  document.querySelector("#name");
     nameInput.placeholder = "Name is required";
      }
     

    const formdata = {
      name: data.name,
      age: +data.age,
      register: data.date,
      batch: data.batch,
    };
    
    console.log(formdata);
    Axios.post("http://localhost:3300/yogatable/register", formdata).then(
      (res) => {
        console.log(res.data);
      }
    );
  }
  function handle(e) {
    // console.log("e",e)
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);

    console.log(newdata);
  }
 
  return (
    <form onSubmit={(e) => submit(e)}>
      <h1
        style={{
          backgroundColor: "#115d63",
        }}
      >
        Registration Form
      </h1>

      <div>
        <label>
          Name:{"  "}
          <input
            onChange={(e) => handle(e)}
            className="name"
            id="name"
            value={data.name}
            placeholder="name"
            type="text"
          />
        </label>
      </div>
      <div>
        <label>
          {" "}
          Age:{"  "}
          <input
            onChange={(e) => handle(e)}
            className="age"
            id="age"
            value={data.age}
            type="number"
            min="18"
            max="65"
          />
        </label>
      </div>
      <div>
        <label>
          {" "}
          Register Date:{" "}
          <input
            onChange={(e) => handle(e)}
            className="date"
            id="date"
            value={data.date}
            placeholder="date"
            type="date"
          />
        </label>
      </div>
      <div>
        <label>
          Select Batch:{"  "}
          <select
            className="batch"
            onChange={(e) => {
              data.batch = e.target.value;
            }}
            value={data.batch}
          >
            <option value="6-7Am">6-7Am</option>
            <option value="7-8Am">7-8Am</option>
            <option value="8-9Am">8-9Am</option>
            <option value="5-6Pm">5-6Pm</option>
          </select>
        </label>
      </div>
      <button>submit</button>
    </form>
  );
}

export default RegisterForm;
