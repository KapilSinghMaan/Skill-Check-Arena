import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Subject = () => {

    const [form, setForm] = useState({
        name: '',
        description: '',
        status: ''
    })

    const handleDelete = async (id) => {

        if (confirm("Are You Sure?")) {

            const res = await axios.delete(`http://localhost:5000/api/subject/${id}`);
            if (res.data == 'Deleted Successfully') {
                alert("Deleted Successfully :>");
                handleFetch();
            }
        }
        else {
            return;
        }
    }

    const handleChange = (e) => {
        // console.log(e.target.value);
        setForm({ ...form, [e.target.name]: e.target.value });
    }
    // console.log(form);

    const [id, setId] = useState({
        id: ''
    });

    const [edit, setEdit] = useState(null)

    const submitChange = async (e) => {
        e.preventDefault();
        try {
            if (edit) {
                const res = await axios.put(`http://localhost:5000/api/subject/${id.id}`, form);
                alert("Updated Successfully");
                setEdit(null);
            }
            else {
                const res = await axios.post('http://localhost:5000/api/subject', form);
                console.log(res.data);
                alert("Submitted Successfully :>");
            }
            setForm({
                name: '',
                description: '',
                status: ''
            })
        }
        catch (err) {
            alert("Sorry! Server Down :(");
            console.log(err);
        }

        handleFetch();
    }

    // fetch data
    const [data, setData] = useState([])
    const handleFetch = async () => {
        const res = await axios.get('http://localhost:5000/api/subject');
        console.log(res.data);
        setData(res.data);
    }

    useEffect(() => {
        handleFetch();
    }, [])

    const handleEdit = (item) => {
        setForm({
            name: item.name,
            description: item.description,
            status: item.status
        })
        setId({ id: item._id });
        setEdit(true);
    }


    return (
        <>
            <div className="row m-0 px-2">
                <div className="container p-0">
                    <div className="row m-0 d-flex align-items-center justify-content-center">
                        <div className="col-sm-5 p-0 position-relative rounded-4 mt-3 outer">
                            <form className='position-absolute top-0 start-0 m-1 p-2 rounded-4 d-flex flex-column' method='post' onSubmit={submitChange}>
                                <h2 class="text-dark text-center fw-semibold ls-lg">Add Subject</h2>
                                <div className="inputBox position-relative mt-3">
                                    <input id='subject' type="text" placeholder=' ' required class=" w-100 p-2 border-0 shadow shadow-none text-dark fs-5" name='name' value={form.name} onChange={handleChange} />
                                    <label htmlFor='subject' class="position-absolute ms-3 fw-semibold">Subject Name</label>
                                </div>
                                <select name="status" id="" className='d-block w-100 mt-3 py-2 form-control border-dark fw-semibold' value={form.status} onChange={handleChange}>
                                    <option>--Select Status--</option>
                                    <option value="active">Active</option>
                                    <option value="inactive">Inactive</option>
                                    <option value="delete">Delete</option>
                                </select>
                                <div className="inputBox position-relative mt-3">
                                    <textarea id='description' type="text" placeholder=' ' required class=" w-100 p-2 border-0 shadow shadow-none text-dark fs-5" name='description' value={form.description} onChange={handleChange} ></textarea>
                                    <label htmlFor='description' class="position-absolute ms-3">Description</label>
                                </div>

                                <input type="submit" value="Submit" class="rounded-3 py-2 fs-5 btn btn-outline-dark fw-semibold mt-4"></input>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-sm-10 offset-1 bg-light rounded-4  my-5 py-4">
                    <h2 className='text-center fw-semibold mb-4'>Branch Details</h2>
                    <div className="table-responsive">
                        <table className='table-bordered w-100 my-2'>
                            <thead>
                                <tr className='fs-5 text-center'>
                                    <th className='py-2'>S No.</th>
                                    <th>Subject</th>
                                    <th>Description</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody className='text-center'>
                                {data.map((item, i) => (
                                    <tr key={item._id}>
                                        <td>{i + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.description}</td>
                                        <td>{item.createdAt}</td>
                                        <td>{item.status}</td>
                                        <td><button className='btn btn-outline-dark' onClick={() => { handleEdit(item) }}><i class="fa-solid fa-pen-to-square"></i></button>  <button className='btn btn-outline-dark' onClick={() => { handleDelete(item._id) }}><i class="fa-solid fa-trash"></i></button> </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Subject