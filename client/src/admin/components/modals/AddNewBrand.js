import React, { useState } from 'react';
import ReactDom from 'react-dom';
import { useDispatch } from 'react-redux';
import { addedBrand } from '../../../store/reducers/brandsSlice';

const AddNewBrand = ({ show, onHide }) => {
    const [newBrand, setNewBrand] = useState("");

    const dispatch = useDispatch();

    const addBrand = async () => {
        let param = {
            name: newBrand
        };
        await dispatch(addedBrand(param));
        setNewBrand("")
        onHide();
    }

    if (!show) return null;

    return ReactDom.createPortal(
        <>
            <div className="overlay" onClick={onHide} />
            <div className="modal">
                <div className="modal__title">
                    <h3>Add New Brand</h3>
                </div>
                <div className="modal__main">
                    <div className="modal__main__input">
                        <input
                            name="brand"
                            value={newBrand}
                            onChange={e => setNewBrand(e.target.value)}
                            placeholder="new brand" />
                    </div>
                </div>
                <div className="modal__buttons">
                    <button onClick={onHide}>Close</button>
                    <button onClick={addBrand}>Save</button>
                </div>
            </div>
        </>,
        document.getElementById('portal')
    )
};

export default AddNewBrand;