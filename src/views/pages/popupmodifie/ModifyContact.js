import React, { useState } from 'react';

import './popup.scss'

const Modifycontact = ({ row, isOpen }) => {
    //const divisions = [{ name: 'sokra', id: 1 }, { name: 'ariana', id: 2 }, { name: 'carthage', id: 3 }, { name: 'mnihla', id: 4 }]
    const [firstname, setFirstname] = useState(row.first_name);
    const [lastname, setLastname] = useState(row.last_name);
    const [email, setEmail] = useState(row.email);
    const [phone, setPhone] = useState(row.phone);
    //const [division, setDivision] = useState(row.division)


    const handelfirstname = (event) => {
        setFirstname(event.target.value)
    };
    const handelLastname = (event) => {
        setLastname(event.target.value)
    };
    const handelEmail = (event) => {
        setEmail(event.target.value)
    };
    const handelPhone = (event) => {
        setPhone(event.target.value)
    };
    // const handelDivision = (event) => {
    //     setDivision(event.target.value)
    // }

    // const [searchText, setSearchText] = useState('');
    // const [filteredDivisions, setFilteredDivisions] = useState([]);
  
    // useEffect(() => {
    //   const filteredDivisions = divisions.filter((divis) =>
    //     divis.name.toLowerCase().includes(searchText.toLowerCase())
    //   );
    //   setFilteredDivisions(filteredDivisions);
    // }, [divisions, searchText]);
  
    // const handleDivisionChange = (e) => {
    //   setDivision(e.target.value);
    // };
  
    // const handleSearchChange = (e) => {
    //   setSearchText(e.target.value);
    // };




    return (

        <div className="add" >
            <div className="modal">
                <button style={{ backgroundColor: 'red' }} className="close" onClick={() => { isOpen(false) }}>
                    X
                </button>
                <h1>Modify</h1>
                <form>
                    <div className="item">
                        <label htmlFor="name">First Name</label>
                        <input id="first_name" value={firstname} required onChange={handelfirstname} />
                    </div>
                    <div className="item">
                        <label htmlFor="name">Last Name</label>
                        <input id="first_name" value={lastname} required onChange={handelLastname} />
                    </div>
                    <div className="item">
                        <label htmlFor="name">Email</label>
                        <input id="first_name" value={email} required onChange={handelEmail} />
                    </div>
                    <div className="item">
                        <label htmlFor="name">Phone</label>
                        <input id="first_name" type='number' value={phone} required onChange={handelPhone} />
                    </div>
                    {/* <div className="item">
                        <label htmlFor="Division">Division</label>
                        <div className="custom-select">
                            <input
                             style={{marginBottom:'20'}}
                                type="text"
                                value={searchText}
                                onChange={handleSearchChange}
                                placeholder="Search division"
                            />
                            <select onChange={handleDivisionChange} value={division}>
                                {filteredDivisions.map((divis, i) => {
                                    return (
                                        <option key={i} value={divis.name}>
                                            {divis.name}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                    </div> */}
                    <button onClick={() => { isOpen(false) }}>Modify</button>
                </form>
            </div>
        </div>
    )

}
export default Modifycontact