import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ContactServices } from "../../services/contactservices";

const AddUsers = () => {
    let navigate = useNavigate();
    let [state, setState] = useState({
        loading : false,
        Contact : {
            id: "",
            name: "",
            username: "",
            email: "",
            address: {
                street: "",
                suite: "",
                city: "",
                zipcode: "",
                geo: {
                    lat: "",
                    lng: ""
                }
            },
            phone: "",
            website: "",
            company: {
                name: "",
                catchPhrase: "",
                bs: "",
            }
        }
    });

    const getUsers = (event) => {
        setState((state) => ({
            ...state,
            Contact : {
                ...state.Contact,
                [event.target.name]: event.target.value,
            }
        }));
    };
    const getUsers01 = (event) => {
        setState((state) => ({
            ...state,
            Contact : {
                ...state.Contact,
                address:{
                    ...state.Contact.address,
                    [event.target.name] : event.target.value,
                }
            }
        }));
    };

    const getUsers02 = (event) => {
        setState((state) => ({
            ...state,
            Contact : {
                ...state.Contact,
                company:{
                    ...state.Contact.company,
                    [event.target.name] : event.target.value,
                }
            }
        }));
    };
    

    let { name, username, email, phone, website, city, id} = state;

    const submitUsers = async (event) => {
        event.preventDefault();
        // console.log("Submitting user data:", state); // Log the data being submitted
        try {
            const response = await ContactServices.creatContacts(state.Contact);
            // console.log("Response from server:", response);
            navigate("/", {replace:true});
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <div className="container mt-3">
                <div className="row w-50 m-auto">
                    <div className="col">
                        <div className="card">
                            <div className="card-header text-center bg-primary text-white">
                                <h2>Add A user</h2>
                            </div>
                            <div className="card-body">
                                <form onSubmit={submitUsers} className="form-group">
                                <div className="form-group">
                                        <input
                                            className="form-control"
                                            required= {true}
                                            name="id"
                                            value={id}
                                            onChange={getUsers}
                                            type="text"
                                            placeholder="Enter Your ID"
                                        />
                                    </div>
                                    <div className="form-group mt-3">
                                        <input
                                            className="form-control"
                                            required= {true}
                                            name="name"
                                            value={name}
                                            onChange={getUsers}
                                            type="text"
                                            placeholder="Enter Your Name"
                                        />
                                    </div>
                                    <div className="form-group mt-3">
                                        <input
                                            className="form-control"
                                            required= {true}
                                            name="username"
                                            value={username}
                                            onChange={getUsers}
                                            type="text"
                                            placeholder="Enter Your UserName"
                                        />
                                    </div>
                                    <div className="form-group mt-3">
                                        <input
                                            className="form-control"
                                            required= {true}
                                            name="email"
                                            value={email}
                                            onChange={getUsers}
                                            type="email"
                                            placeholder="Enter Your email"
                                        />
                                    </div>
                                    <div className="form-group mt-3">
                                        <input
                                            className="form-control"
                                            required= {true}
                                            name="phone"
                                            value={phone}
                                            onChange={getUsers}
                                            type="number"
                                            placeholder="Enter Your phone number"
                                        />
                                    </div>
                                    <div className="form-group mt-3">
                                        <input
                                            className="form-control"
                                            name="website"
                                            value={website}
                                            onChange={getUsers}
                                            type="text"
                                            placeholder="Enter Your Website Name"
                                        />
                                    </div>
                                    <div className="form-group mt-3">
                                        <input
                                            className="form-control"
                                            required= {true}
                                            name="city"
                                            value={city}
                                            onChange={getUsers01}
                                            type="text"
                                            placeholder="Enter Your city"
                                        />
                                    </div>
                                    <div className="form-group mt-3">
                                        <input
                                            className="form-control"
                                            required= {true}
                                            name="name"
                                            value={name}
                                            onChange={getUsers02}
                                            type="text"
                                            placeholder="Enter Your company name"
                                        />
                                    </div>
                                    <div className="form-group mt-3">
                                        <button className="btn btn-primary btn-sm">Add User</button>
                                        <Link  className="btn btn-dark ms-2 btn-sm" to="/">Cancel</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddUsers;
