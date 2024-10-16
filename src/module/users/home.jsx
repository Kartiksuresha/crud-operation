import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ContactServices } from "../../services/contactservices";
import Spinner from "./spinner";

const Home = () => {
    const [query, setQuery] = useState({
        text : "",
    })
    const [state, setState] = useState({
        loading: false,
        contacts: [],
        filterContact : [],
        errormessage: '',
    });

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                setState({
                    ...state,
                    loading: true,
                })
                const response = await ContactServices.getContacts();
                // console.log(response)
                setState({
                    ...state,
                    loading: false,
                    contacts: response.data,
                    filterContact : response.data
                });
            }
            catch (error) {
                setState({
                    ...state,
                    loading: false,
                    errormessage: error.errormessage
                })
            }
        }
        fetchContacts();
    }, [])

    const deleteContact = async (id) => {
        try {
            const response = await ContactServices.deleteContact(id);
            return response.data
        }
        catch (error) {
            setState((state) => ({
                ...state,
                errormessage: error.errormessage
            }))
        }
    }

    const searchContact = (event) => {
        setQuery ({...query, text : event.target.value})
        let theContacts = state.contacts.filter(contact =>{
            return contact.name.toLowerCase().includes(event.target.value.toLowerCase())
        })
        // console.log(theContacts)
        setState({
            ...state,
            filterContact : theContacts,
        })
    }

    let { loading, contacts, errormessage, filterContact } = state;
    return (
        <>
            <div className="container mt-2">
                {/* <pre>{query.text}</pre> */}
                <div className="row">
                    <div className="col">
                        <h1>Users Data</h1>
                        <p className="h5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, illo! Alias quasi incidunt reprehenderit vel officiis commodi error, nobis consectetur a ipsam quos, sapiente ullam, voluptate aperiam eos. Quod, ipsam.</p>
                    </div>
                </div>
                <form className="d-flex" role="search" >
                    <input 
                    name="text"
                    value={query.text}
                    onChange={searchContact}
                    className="form-control m-2 w-25" 
                    type="search" 
                    placeholder="Search" 
                    aria-label="Search" />
                    <button className="btn btn-outline-success m-2" type="submit">Search</button>
                </form>
            </div>
            {
                loading ? <Spinner /> : <>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <table className="table table-hover table-bordered table-striped text-center mt-3">
                                    <thead>
                                        <tr>
                                            <th className="bg-dark text-white">SlNo</th>
                                            <th className="bg-dark text-white">Name</th>
                                            <th className="bg-dark text-white">Email</th>
                                            <th className="bg-dark text-white">Location</th>
                                            <th className="bg-dark text-white">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            filterContact.length > 0 && filterContact.map((user) => {
                                                return (
                                                    <tr key={user.id}>
                                                        <td>{user.id}</td>
                                                        <td>{user.name}</td>
                                                        <td>{user.email}</td>
                                                        <td>{user.address ? user.address.city : ""}</td>
                                                        <td><Link className="btn btn-primary btn-sm me-1" to={`/users/viewcontact/${user.id}`}>
                                                            <i className="fa fa-eye me-2"></i>View
                                                        </Link>
                                                            <Link className="btn btn-success btn-sm me-1" to={`/users/editcontact/${user.id}`}>
                                                                <i className="fa fa-pencil me-2"></i>Edit
                                                            </Link>
                                                            <button onClick={() => deleteContact(user.id)} className="btn btn-danger btn-sm">
                                                                <i className="fa fa-trash me-2"></i>Delete
                                                            </button>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </>
            }

        </>
    );
}

export default Home;