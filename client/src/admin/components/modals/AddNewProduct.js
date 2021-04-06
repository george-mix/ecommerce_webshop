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
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');



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

    const onProductSave = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('brandId', brand);
        formData.append('categoryId', category);
        formData.append('name', name);
        formData.append('price', `${price}`);
        if (!file) return null;
        formData.append('img', file);
        formData.append('info', JSON.stringify(info));

        await dispatch(addedProduct(formData));

        setName('');
        setPrice(0);
        setFile(null);
        setInfo([]);
        setBrand('');
        setCategory('');

        onHide();
    };

    if (!show) return null;

    return ReactDom.createPortal(
        <>
            <div className="overlay" onClick={onHide} />
            <form className="filtermodal" onSubmit={onProductSave}>
                <h2>Add new Product</h2>
                <div>
                    <label>Select Brand</label>
                    <select
                        value={brand}
                        onChange={e => setBrand(e.target.value)}
                        required>
                        <option value={""}>...</option>
                        {brands.map(brand => {
                            return <option key={brand.id} value={brand.id}>
                                {brand.name}
                            </option>
                        })}
                    </select>
                </div>
                <div>
                    <label>Select Category</label>
                    <select
                        value={category}
                        onChange={e => setCategory(e.target.value)}
                        required>
                        <option value={""}>...</option>
                        {categories.map(category => {
                            return <option key={category.id} value={category.id}>{category.name}
                            </option>
                        })}
                    </select>
                </div>
                <div>
                    <label>Product Name</label>
                    <input
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Enter name"
                        required />
                </div>
                <div>
                    <label>Product Price</label>
                    <input
                        value={price}
                        onChange={e => setPrice(Number(e.target.value) || 0)}
                        placeholder="Enter price"
                        required />
                </div>
                <div>
                    <label>Product Image</label>
                    <input required type="file" onChange={selectFile} />
                </div>
                <button type="button" onClick={addInfo}>Add Info</button>
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
                    <button type="button" onClick={onHide}>Close</button>
                    <button type="submit">Save</button>
                </div>
            </form>
        </>,
        document.getElementById('portal')
    )
};

export default AddNewProduct;
