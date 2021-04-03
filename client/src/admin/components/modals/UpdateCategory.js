import React, { useState } from 'react';
import ReactDom from 'react-dom';
import categoryAPI from '../../../http/categoryAPI';

const UpdateCategory = ({ id, open, onClose }) => {
    const [newCategoryName, setNewCategoryName] = useState("")

    let name = {
        name: newCategoryName
    };

    const updateCategory = async () => {
        try {
            await categoryAPI.updateCategory(id, name);
            setNewCategoryName("");

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
                    <h3>New Category Name</h3>
                </div>
                <div>
                    <input
                        name="brand"
                        value={newCategoryName}
                        onChange={e => setNewCategoryName(e.target.value)}
                        placeholder="new brand" />
                </div>
                <div>
                    <button onClick={onClose}>Close</button>
                    <button onClick={updateCategory}>Save</button>
                </div>
            </div>
        </>,
        document.getElementById('portal')
    )
};

export default UpdateCategory;