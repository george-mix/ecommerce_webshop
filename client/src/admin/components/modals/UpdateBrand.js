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
            <div className="modal">
                <div className="modal__title">
                    <h3>Update Brand Name</h3>
                </div>
                <div className="modal__main">
                    <div className="modal__main__input">
                        <input
                            name="brand"
                            value={newBrandName}
                            onChange={e => setNewBrandName(e.target.value)}
                            placeholder="enter new name" />
                    </div>
                </div>
                <div className="modal__buttons">
                    <button onClick={onClose}>Close</button>
                    <button onClick={updateBrand}>Save</button>
                </div>
            </div>
        </>,
        document.getElementById('portal')
    )
};

export default UpdateBrand;