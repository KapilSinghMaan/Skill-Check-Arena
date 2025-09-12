import React from 'react'
import Header from '../../components/Header'
import { useEffect } from 'react'

const TeaReg = () => {

    useEffect(() => {
        document.querySelectorAll('.trigger-underline').forEach(select => {
            select.addEventListener('change', function () {
                if (this.value !== "") {
                    this.parentElement.classList.add('active');
                } else {
                    this.parentElement.classList.remove('active');
                }
            });
        });
    }, [])

    return (
        <>
            <Header/>
            <div className="container-fluid w-100 p-0 my-4">
                <div className="row m-0 p-0 stureg-outer mx-auto border border-3 ">
                    <h2 className='text-center mb-3 border-bottom border-2'>Registration Form</h2>
                    <form className='m-0 px-5 fs-5 text-primary'>
                        <div className="row stureg-inputbox w-100 my-3">
                            <div className="col-sm-4 px-3 m-0 p-0 stureg-inputbox-left"><label htmlFor="name" >Student Name</label></div>
                            <div className="col-sm-8 m-0 p-0 stureg-inputbox-right position-relative text-white"><input type="text" placeholder=' ' id='name' name='name' className='border-0 bg-transparent px-2' required />
                                <i></i></div>
                        </div>
                        <div className="row stureg-inputbox w-100 my-3">
                            <div className="col-sm-4 px-3 m-0 p-0 stureg-inputbox-left"><label htmlFor="fname" >Father's Name</label></div>
                            <div className="col-sm-8 m-0 p-0 stureg-inputbox-right position-relative"><input type="text" placeholder=' ' id='fname' name='fname' className='border-0 bg-transparent px-2' required />
                                <i></i></div>
                        </div>
                        <div className="row stureg-inputbox w-100 my-3">
                            <div className="col-sm-4 px-3 m-0 p-0 stureg-inputbox-left"><label htmlFor="mname" >Mother's Name</label></div>
                            <div className="col-sm-8 m-0 p-0 stureg-inputbox-right position-relative"><input type="text" placeholder=' ' id='mname' name='mname' className='border-0 bg-transparent px-2' required />
                                <i></i></div>
                        </div>
                        <div className="row stureg-inputbox w-100 my-3">
                            <div className="col-sm-4 px-3 m-0 p-0 stureg-inputbox-left"><label htmlFor="dob" >Date Of Birth</label></div>
                            <div className="col-sm-8 m-0 p-0 stureg-inputbox-right position-relative "><input type="date" placeholder=' ' id='dob' name='dob' className='text-white border-0 bg-transparent px-2' required/>
                                <i></i></div>
                        </div>
                        <div className="row stureg-inputbox w-100 my-3">
                            <div className="col-sm-4 px-3 m-0 p-0 stureg-inputbox-left"><label htmlFor="gender" >Gender</label></div>
                            <div className="col-sm-8 m-0 p-0 stureg-inputbox-right position-relative">
                                <select name="gender" id="gender" className='border-0 bg-transparent px-2 trigger-underline' required >
                                    <option value="">--Select Gender--</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                                <i></i></div>
                        </div>
                        <div className="row stureg-inputbox w-100 my-3">
                            <div className="col-sm-4 px-3 m-0 p-0 stureg-inputbox-left"><label htmlFor="email" >Email</label></div>
                            <div className="col-sm-8 m-0 p-0 stureg-inputbox-right position-relative"><input type="email" placeholder=' ' id='email' name='email' className='border-0 bg-transparent px-2' required />
                                <i></i></div>
                        </div>
                        <div className="row stureg-inputbox w-100 my-3">
                            <div className="col-sm-4 px-3 m-0 p-0 stureg-inputbox-left"><label htmlFor="password" >Password</label></div>
                            <div className="col-sm-8 m-0 p-0 stureg-inputbox-right position-relative"><input type="password" placeholder=' ' id='password' name='password' className='text-white border-0 bg-transparent px-2' required  />
                                <i></i></div>
                        </div>
                        <div className="row stureg-inputbox w-100 my-3">
                            <div className="col-sm-4 px-3 m-0 p-0 stureg-inputbox-left"><label htmlFor="mobile" >Mobile Number</label></div>
                            <div className="col-sm-8 m-0 p-0 stureg-inputbox-right position-relative"><input type="text" placeholder=' ' id='mobile' name='mobile' className='border-0 bg-transparent px-2' required  />
                                <i></i></div>
                        </div>
                        <div className="row stureg-inputbox w-100 my-3">
                            <div className="col-sm-4 px-3 m-0 p-0 stureg-inputbox-left"><label htmlFor="aadhar" >Aadhar Number</label></div>
                            <div className="col-sm-8 m-0 p-0 stureg-inputbox-right position-relative"><input type="text" placeholder=' ' id='aadhar' name='aadhar' className='border-0 bg-transparent px-2' required  />
                                <i></i></div>
                        </div>
                        <div className="row stureg-inputbox w-100 my-3">
                            <div className="col-sm-4 px-3 m-0 p-0 stureg-inputbox-left"><label htmlFor="department" >Department</label></div>
                            <div className="col-sm-8 m-0 p-0 stureg-inputbox-right position-relative">
                                <select name="department" id="department" className='border-0 bg-transparent px-2 trigger-underline' required >
                                    <option value="">--Select Department--</option>
                                    
                                </select>
                                <i></i></div>
                        </div>
                        <div className="row stureg-inputbox w-100 my-3">
                            <div className="col-sm-4 px-3 m-0 p-0 stureg-inputbox-left"><label htmlFor="course" >Programme / Course</label></div>
                            <div className="col-sm-8 m-0 p-0 stureg-inputbox-right position-relative">
                                <select name="course" id="course" className='border-0 bg-transparent px-2 trigger-underline' required >
                                    <option value="">--Select Programme/Course--</option>
                                    
                                </select>
                                <i></i></div>
                        </div>
                        <div className="row stureg-inputbox w-100 my-3">
                            <div className="col-sm-4 px-3 m-0 p-0 stureg-inputbox-left"><label htmlFor="branch" >Branch</label></div>
                            <div className="col-sm-8 m-0 p-0 stureg-inputbox-right position-relative">
                                <select name="branch" id="branch" className='border-0 bg-transparent px-2 trigger-underline' required >
                                    <option value="">--Select Branch--</option>
                                    
                                </select>
                                <i></i></div>
                        </div>
                        <div className="row stureg-inputbox w-100 my-3">
                            <div className="col-sm-4 px-3 m-0 p-0 stureg-inputbox-left"><label htmlFor="college" >College</label></div>
                            <div className="col-sm-8 m-0 p-0 stureg-inputbox-right position-relative">
                                <select name="college" id="college" className='border-0 bg-transparent px-2 trigger-underline' required >
                                    <option value="">--Select College--</option>
                                    
                                </select>
                                <i></i></div>
                        </div>
                        <div className="row stureg-inputbox w-100 my-3">
                            <div className="col-sm-4 px-3 m-0 p-0 stureg-inputbox-left"><label htmlFor="session" >Academic Session</label></div>
                            <div className="col-sm-8 m-0 p-0 stureg-inputbox-right position-relative">
                                <select name="session" id="session" className='border-0 bg-transparent px-2 trigger-underline' required>
                                    <option value="">--Select Academic Session--</option>
                                    
                                </select>
                                <i></i></div>
                        </div>
                        <input type="submit" className='border-0 bg-success text-light px-5 py-2 my-3 rounded-4 button' />
                    </form>
                </div>
            </div>
        </>
    )
}

export default TeaReg