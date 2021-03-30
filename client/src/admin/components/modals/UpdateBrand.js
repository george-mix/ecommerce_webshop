import React, { useState } from 'react';
import ReactDom from 'react-dom';
import brandAPI from '../../../http/brandAPI';

const UpdateBrand = ({ id, open, onClose }) => {
    const [newBrandName, setNewBrandName] = useState("")

    let name = {
        name: newBrandName
    };

    const updateBrand = async () => {
        try {
            await brandAPI.updateBrand(id, name);
            setNewBrandName("");

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