import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import ReactDom from 'react-dom';
import { addedProduct } from '../../../store/reducers/productsSlice';
import BrandSelector from '../BrandSelector';
import CategorySelector from '../CategorySelector';
import Info from '../Info';

const AddNewProduct = ({ show, onHide }) => {
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [file, setFile] = useState(null);
    const [info, setInfo] = useState([]);
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');

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
            <form className="modal" onSubmit={onProductSave}>
                <div className="modal__title">
                    <h3>Add new Product</h3>
                </div>
                <div className="modal__main">
                    <BrandSelector setBrand={setBrand} brand={brand} />
                    <CategorySelector setCategory={setCategory} category={category} />
                    <div className="modal__main__input">
                        <label>Product Name</label>
                        <input
                            value={name}
                            onChange={e => setName(e.target.value)}
                            placeholder="Enter name"
                            required />
                    </div>
                    <div className="modal__main__input">
                        <label>Product Price</label>
                        <input
                            value={price}
                            onChange={e => setPrice(Number(e.target.value) || 0)}
                            placeholder="Enter price"
                            required />
                    </div>
                    <div className="modal__main__file">
                        <label>Product Image</label>
                        <input required type="file" onChange={selectFile} />
                    </div>
                    <Info setInfo={setInfo} info={info} />
                </div>
                <div className="modal__buttons">
                    <button type="button" onClick={onHide}>Close</button>
                    <button type="submit">Save</button>
                </div>
            </form>
        </>,
        document.getElementById('portal')
    )
};

export default AddNewProduct;
