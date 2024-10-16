import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ContactServices } from "../../services/contactservices";
import Spinner from "./spinner";

const ViewContact = () => {
    let { contactid } = useParams()
    const [state, setState] = useState({
        loading: false,
        contact: {}
    })

    useEffect(() => {
        const fetchdata = async () => {
            try {
                setState({
                    ...state,
                    loading: true
                })
                let showDetails = await ContactServices.getSingleContact(contactid);
                console.log(showDetails.data)
                setState({
                    ...state,
                    loading: false,
                    contact: showDetails.data
                })
            }
            catch (error) {
                console.log(error)
            }
        }
        fetchdata()
    }, [contactid])

    let { loading, contact } = state;

    return (
        <>
            <div className="container mt-1">
                <div className="row">
                    <div className="col">
                        <h3>View Contact</h3>
                        <p className="h5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, illo! Alias quasi incidunt reprehenderit vel officiis commodi error, nobis consectetur a ipsam quos, sapiente ullam, voluptate aperiam eos. Quod, ipsam.</p>
                        <Link className="btn btn-warning" to="/">Back to Home</Link>
                    </div>
                </div>
                {
                    loading ? <Spinner /> : <>
                        {
                            Object.keys(contact).length > 0 &&
                            <div className="container">
                                <div className="row m-auto w-50 ">
                                    <div className="col">
                                        <div className="card">
                                            <div className="card-header">
                                                <h2 className="display-5 text-center fw-bold">
                                                    <i className="fa fa-user"></i>Contact Information-{contact.id}
                                                </h2>
                                            </div>
                                            <div className="card-body mt-3 bg-body-secondary">
                                                <form className="form-group">
                                                    <div className="form-group">
                                                        <span className="form-control">Name : {contact.name}</span>
                                                    </div>
                                                    <div className="form-group mt-3">
                                                        <span className="form-control">username : {contact.username}</span>
                                                    </div>
                                                    <div className="form-group mt-3">
                                                        <span className="form-control">email : {contact.email}</span>
                                                    </div>
                                                    <div className="form-group mt-3">
                                                        <span className="form-control">phone : {contact.phone}</span>
                                                    </div>
                                                    <div className="form-group mt-3">
                                                        <span className="form-control">website : {contact.website}</span>
                                                    </div>
                                                    <div className="form-group mt-3">
                                                        <span className="form-control">User city : {contact.address.city}</span>
                                                    </div>
                                                    <div className="form-group mt-3">
                                                        <span className="form-control">Company Name : {contact.company.name}</span>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </>
                }
            </div>
        </>
    )
}
export default ViewContact;