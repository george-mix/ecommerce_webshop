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

    const [name, setName] = useState({
        html: ``
    });
    const [price, setPrice] = useState({
        html: 0
    });
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
    const [info, setInfo] = useState([]);
    const [file, setFile] = useState(data.img);
    const [newFile, setNewFile] = useState(null)

    const handleFileChange = (e) => {
        setNewFile({ file: URL.createObjectURL(e.target.files[0]) });
        setFile(e.target.files[0])
    };

    useEffect(() => {
        setName({ html: `${data.name}` });
        setPrice({ html: `${data.price}` });
        setBrand(data.brandId);
        setCategory(data.categoryId);
        setInfo(data.info);
        setFile(data.img);
    }, [data]);

    const onProductSave = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('brandId', brand);
        formData.append('categoryId', category);
        formData.append('name', name);
        formData.append('price', `${price}`);

        await dispatch(updatedProduct({ id, formData }));

        setName('');
        setPrice(0);
        setBrand('');
        setCategory('');
    };

    return (
        <div>
            <div>
                <label >Name:</label>
                <input
                    value={name.html}
                    onChange={e => setName({ html: e.target.value })} />
            </div>
            <div>
                <label>Price:</label>
                <input
                    value={price.html}
                    onChange={e => setPrice({ html: Number(e.target.value) || 0 })} />
            </div>
            <BrandSelector setBrand={setBrand} brand={brand} />
            <CategorySelector setCategory={setCategory} category={category} />
            <Info info={info} setInfo={setInfo} />
            <img
                width={300}
                height={300}
                alt={data.name}
                src={newFile ? newFile.file : `${process.env.REACT_APP_API_URL}/${file}`} />
            <input type="file" onChange={handleFileChange} />
            <div>
                <button onClick={onProductSave}>Save</button>
            </div>
        </div>
    )
}

export default UpdateForm;
