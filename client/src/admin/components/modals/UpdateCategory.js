import React, { useState } from 'react';
import ReactDom from 'react-dom';
import { useDispatch } from 'react-redux';
import { updatedCategory } from '../../../store/reducers/categoriesSlice';

const UpdateCategory = ({ id, open, onClose }) => {
    const dispatch = useDispatch();

    const [newCategoryName, setNewCategoryName] = useState("")

    const updateCategory = async () => {
        try {
            let name = newCategoryName;
            await dispatch(updatedCategory({ id, name }));
            setNewCategoryName("");
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