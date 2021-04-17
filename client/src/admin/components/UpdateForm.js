import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updatedProduct } from '../../store/reducers/productsSlice';
import BrandSelector from './BrandSelector';
import CategorySelector from './CategorySelector';
import Info from './Info';

const UpdateForm = ({ product }) => {
    const dispatch = useDispatch();
    let data = product;
    let id = data.id;

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
    const [info, setInfo] = useState([]);
    const [file, setFile] = useState(null);

    useEffect(() => {
        if (id) {
            setName(data.name);
            setPrice(data.price);
            setBrand(data.brandId);
            setCategory(data.categoryId);
            setInfo(data.info);
            setFile(data.img);
        }
    }, [data]);


    const onProductSave = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('brandId', brand);
        formData.append('categoryId', category);
        formData.append('name', name);
        formData.append('price', price);
        formData.append('info', JSON.stringify(info));

        await dispatch(updatedProduct({ id, formData }));
    };

    return (
        <div>
            <div>
                <label >Name:</label>
                <input
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </div>
            <div>
                <label>Price:</label>
                <input
                    value={price}
                    onChange={e => setPrice(Number(e.target.value) || 0)} />
            </div>
            <BrandSelector setBrand={setBrand} brand={brand} />
            <CategorySelector setCategory={setCategory} category={category} />
            <Info info={info} setInfo={setInfo} />
            <img
                width={300}
                height={300}
                alt={data.name}
                src={`${process.env.REACT_APP_API_URL}/${file}`} />
            <div>
                <button onClick={onProductSave}>Save</button>
            </div>
        </div>
    )
}

export default UpdateForm;
