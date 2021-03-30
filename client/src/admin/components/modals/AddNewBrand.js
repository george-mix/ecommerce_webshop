import React, { useState } from 'react';
import ReactDom from 'react-dom';
import brandAPI from '../../../http/brandAPI';

const AddNewBrand = ({ show, onHide }) => {
    const [newBrand, setNewBrand] = useState("")

    const addBrand = async () => {
        try {
            await brandAPI.createBrand({ name: newBrand });
            setNewBrand("");
            onHide();

        } catch (e) {
            console.log(e);
        }
    }

    if (!show) return null;

    return ReactDom.createPortal(
        <>
            <div className="overlay" onClick={onHide} />
            <div className="filtermodal">
                <div>
                    <h3>AddNewBrand</h3>
                </div>
                <div>
                    <input
                        name="brand"
                        value={newBrand}
                        onChange={e => setNewBrand(e.target.value)}
                        placeholder="new brand" />
                </div>
                <div>
                    <button onClick={onHide}>Close</button>
                    <button onClick={addBrand}>Save</button>
                </div>
            </div>
        </>,
        document.getElementById('portal')
    )
};

export default AddNewBrand;