import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ContactServices } from "../../services/contactservices";
import Spinner from "./spinner";

const EditContact = () => {
    let navigate = useNavigate();
    let { contactid } = useParams();
    let [state, setState] = useState({
        loading: false,
        Contact: {
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

    useEffect(() => {
        const editdata = async () => {
            try {
                setState({
                    ...state,
                    loading: true
                })
                let showEditDetails = await ContactServices.getSingleContact(contactid);
                // console.log(showDetails.data)
                setState({
                    ...state,
                    loading: false,
                    Contact: showEditDetails.data
                })
            }
            catch (error) {
                console.log(error)
            }
        }
        editdata()
    }, [contactid])

    const getUsers = (event) => {
        setState((state) => ({
            ...state,
            Contact: {
                ...state.Contact,
                [event.target.name]: event.target.value,
            }
        }));
    };
    const getUsers01 = (event) => {
        setState((state) => ({
            ...state,
            Contact: {
                ...state.Contact,
                address: {
                    ...state.Contact.address,
                    [event.target.name]: event.target.value,
                }
            }
        }));
    };

    const getUsers02 = (event) => {
        setState((state) => ({
            ...state,
            Contact: {
                ...state.Contact,
                company: {
                    ...state.Contact.company,
                    [event.target.name]: event.target.value,
                }
            }
        }));
    };

    const submitContactDetail = async (event) => {
        event.preventDefault();
        try{
            const response = await ContactServices.editContact (Contact,contactid)
            console.log(response)
            navigate("/",{replace : true})
        }
        catch(error){
            console.log(error);
            navigate ("/users/editcontact", {replace : false})
        }
    }


    let { loading, Contact } = state;
    return (
        <>
            {
                loading ? <Spinner/>:<>
                <div className="container mt-3">
                <div className="row w-50 m-auto">
                    <div className="col">
                        <div className="card">
                            <div className="card-header text-center bg-primary text-white">
                                <h2>Update Here - {Contact.id}</h2>
                            </div>
                            {/* <pre>{JSON.stringify(Contact)}</pre> */}
                            <div className="card-body">
                                <form onSubmit={submitContactDetail} className="form-group">
                                    <div className="form-group">
                                        <input
                                            className="form-control"
                                            required={true}
                                            name="id"
                                            value={Contact.id}
                                            onChange={getUsers}
                                            type="text"
                                            placeholder="Enter Your ID"
                                        />
                                    </div>
                                    <div className="form-group mt-3">
                                        <input
                                            className="form-control"
                                            required={true}
                                            name="name"
                                            value={Contact.name}
                                            onChange={getUsers}
                                            type="text"
                                            placeholder="Enter Your Name"
                                        />
                                    </div>
                                    <div className="form-group mt-3">
                                        <input
                                            className="form-control"
                                            required={true}
                                            name="username"
                                            value={Contact.username}
                                            onChange={getUsers}
                                            type="text"
                                            placeholder="Enter Your UserName"
                                        />
                                    </div>
                                    <div className="form-group mt-3">
                                        <input
                                            className="form-control"
                                            required={true}
                                            name="email"
                                            value={Contact.email}
                                            onChange={getUsers}
                                            type="email"
                                            placeholder="Enter Your email"
                                        />
                                    </div>
                                    <div className="form-group mt-3">
                                        <input
                                            className="form-control"
                                            required={true}
                                            name="phone"
                                            value={Contact.phone}
                                            onChange={getUsers}
                                            type="text"
                                            placeholder="Enter Your phone number"
                                        />
                                    </div>
                                    <div className="form-group mt-3">
                                        <input
                                            className="form-control"
                                            required={true}
                                            name="website"
                                            value={Contact.website}
                                            onChange={getUsers}
                                            type="text"
                                            placeholder="Enter Your Website Name"
                                        />
                                    </div>
                                    <div className="form-group mt-3">
                                        <input
                                            className="form-control"
                                            required={true}
                                            name="city"
                                            value={Contact.address.city}
                                            onChange={getUsers01}
                                            type="text"
                                            placeholder="Enter Your city"
                                        />
                                    </div>
                                    <div className="form-group mt-3">
                                        <input
                                            className="form-control"
                                            required={true}
                                            name="name"
                                            value={Contact.company.name}
                                            onChange={getUsers02}
                                            type="text"
                                            placeholder="Enter Your company name"
                                        />
                                    </div>
                                    <div className="form-group mt-3">
                                        <button type="submit" className="btn btn-primary btn-sm">Update Here</button>
                                        <Link className="btn btn-dark ms-2 btn-sm" to="/">Cancel</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                </>
            }
        </>
    )
}
export default EditContact;