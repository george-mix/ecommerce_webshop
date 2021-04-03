import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactDom from 'react-dom';
import { selectAllBrands } from '../../../store/reducers/brandsSlice';
import { selectAllCategories } from '../../../store/reducers/categoriesSlice';
import { addedProduct } from '../../../store/reducers/productsSlice';

const AddNewProduct = ({ show, onHide }) => {
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [file, setFile] = useState(null);
    const [info, setInfo] = useState([]);

    const brands = useSelector(selectAllBrands);
    const categories = useSelector(selectAllCategories);

    const addInfo = () => {
        setInfo([...info, { title: '', description: '', number: Date.now() }])
    };

    const deleteInfo = (num) => {
        setInfo(info.filter(i => i.number !== num))
    };


    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? { ...i, [key]: value } : i))
    };

    const selectFile = (e) => {
        setFile(e.target.files[0])
    };

    const onProductSave = async () => {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', `${price}`);
        formData.append('img', file);
        formData.append('info', JSON.stringify(info));
        for (var key of formData.entries()) {
            console.log(key[0] + ', ' + key[1]);
        };
        await dispatch(addedProduct(formData));
    };

    if (!show) return null;

    return ReactDom.createPortal(
        <>
            <div className="overlay" onClick={onHide} />
            <div className="filtermodal">
                <h2>Add new Product</h2>
                <div>
                    <label>Select Brand</label>
                    <select>
                        <option>...</option>
                        {brands.map(brand => {
                            return <option key={brand.id}>{brand.name}</option>
                        })}
                    </select>
                </div>
                <div>
                    <label>Select Category</label>
                    <select>
                        <option>...</option>
                        {categories.map(category => {
                            return <option key={category.id}>{category.name}</option>
                        })}
                    </select>
                </div>
                <div>
                    <label>Product Name</label>
                    <input
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Enter name" />
                </div>
                <div>
                    <label>Product Price</label>
                    <input
                        value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                        placeholder="Enter price" />
                </div>
                <div>
                    <label>Product Image</label>
                    <input type="file" onChange={selectFile} />
                </div>
                <button onClick={addInfo}>Add Info</button>
                <div>
                    {info.map(inf => {
                        return (
                            <div key={inf.number}>
                                <input
                                    value={inf.title}
                                    onChange={(e) => changeInfo('title', e.target.value, inf.number)}
                                    placeholder="name" />
                                <input
                                    value={inf.description}
                                    onChange={(e) => changeInfo('description', e.target.value, inf.number)}
                                    placeholder="description" />
                                <button onClick={() => deleteInfo(inf.number)}>Delete</button>
                            </div>)
                    }
                    )}
                </div>
                <div>
                    <button onClick={onHide}>Close</button>
                    <button onClick={onProductSave}>Save</button>
                </div>
            </div>
        </>,
        document.getElementById('portal')
    )
};

export default AddNewProduct;
