import React, { useState } from 'react';
import ReactDom from 'react-dom';
import { useDispatch } from 'react-redux';
import { updatedBrand } from '../../../store/reducers/brandsSlice';

const UpdateBrand = ({ id, open, onClose }) => {
    const dispatch = useDispatch();

    const [newBrandName, setNewBrandName] = useState("")

    const updateBrand = async () => {
        try {
            let name = newBrandName;
            await dispatch(updatedBrand({ id, name }));
            setNewBrandName("");
            onClose();
        } catch (e) {
            console.log(e);
        }
    }

    if (!open) return null;

    return ReactDom.createPortal(
        <>
            <div className="overlay" onClick={onClose} />
            <div className="filtermodal">
                <div>
                    <h3>New Brand Name</h3>
                </div>
                <div>
                    <input
                        name="brand"
                        value={newBrandName}
                        onChange={e => setNewBrandName(e.target.value)}
                        placeholder="new brand" />
                </div>
                <div>
                    <button onClick={onClose}>Close</button>
                    <button onClick={updateBrand}>Save</button>
                </div>
            </div>
        </>,
        document.getElementById('portal')
    )
};

export default UpdateBrand;