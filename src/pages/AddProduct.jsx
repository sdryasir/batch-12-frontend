import React, {useState} from 'react'
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function AddProduct() {


    let [imagePreview, setImagePreview] = useState('');

    const {handleChange, handleSubmit, handleBlur, handleReset, values, touched, errors, setFieldValue} = useFormik({
        initialValues: {
            title:'',
            description:'',
            price:undefined,
            avatar:'',
            category:'',
        },
        validationSchema:Yup.object().shape({
            title: Yup.string().min(5, 'Please provice atleast 5 chars').max(20, "title too long").required('Title can not be empty'),
            description: Yup.string().required('Please provide description'),
            price:Yup.number().required('Please provide price'),
            avatar: Yup.string().required('Please select an image'),
            category: Yup.string().required('Please provide category'),
            
        }),
        onSubmit:(values)=>{
            console.log("Inside Submit");
            console.log(values);
        }
    })
    return (
        <div className='w-50 p-5'>
            <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-md-12">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" onChange={handleChange} onBlur={handleBlur} name='title' className="form-control" id="title" />
                    <div className="error" style={{color:'red'}}>{touched.title && errors.title ? errors.title:''}</div>
                </div>
                <div className="col-md-12">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea type="text" onChange={handleChange} onBlur={handleBlur} name="description" className="form-control" id="description" />
                    <div className="error" style={{color:'red'}}>{touched.description && errors.description ? errors.description:''}</div>
                </div>
                <div className="col-12">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input type="number" onChange={handleChange} onBlur={handleBlur} name='price' min='10' className="form-control" id="price" placeholder="price" />
                    <div className="error" style={{color:'red'}}>{touched.price && errors.price ? errors.price:''}</div>
                </div>
                {/* <div className="col-12">
                    <label htmlFor="password" className="form-label">password</label>
                    <input type="password" onChange={handleChange} onBlur={handleBlur} name='password' min='10' className="form-control" id="price" placeholder="password" />
                    <div className="error" style={{color:'red'}}>{touched.password && errors.password ? errors.password:''}</div>
                    <div className="error-box" style={{backgroundColor:'red', color:'#fff', padding:'24px', display:touched.password && errors.password?'block':'none'}}>
                        <ul>
                            <li>Ensure string has two uppercase letters.</li>
                            <li>Ensure string has one special case letter.</li>
                            <li>Ensure string has two digits.</li>
                            <li>Ensure string has three lowercase letters.</li>
                            <li>Ensure string is of length 8.</li>
                        </ul>
                    </div>
                </div> */}
                <div className="col-12">
                    <label htmlFor="image" className="form-label">Upload Image</label>
                    <input type="file" onChange={(event) => {
                            let reader = new FileReader();
                            reader.onloadend = () => {
                                if (reader.readyState === 2) {
                                    setFieldValue("avatar", reader.result);
                                    //setPreview(reader.result)
                                }
                            }
                            reader.readAsDataURL(event.currentTarget.files[0]);
                        }} className="form-control my-testClass" name="avatar" placeholder="image" />
                    <div className="error" style={{color:'red'}}>{touched.avatar && errors.avatar ? errors.avatar:''}</div>
                </div>
                <div className="col-md-6">
                </div>
                <div className="col-md-12">
                <div className="error" style={{color:'red'}}>{touched.category && errors.category ? errors.category:''}</div>
                    <label htmlFor="category" className="form-label">Category</label>
                    <select id="category" name="category" onChange={handleChange} onBlur={handleBlur} value={values.category} className="form-select">
                        <option selected>Choose Category</option>
                        <option value="Jewelry">Jewelry</option>
                    </select>

                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Save Product</button>
                </div>
            </form>
        </div>
    )
}

export default AddProduct