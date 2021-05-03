import React, { useState } from 'react';
import ReactDom from 'react-dom';
import { useDispatch } from 'react-redux';
import { addedCategory } from '../../../store/reducers/categoriesSlice';

const AddNewCategory = ({ show, onHide }) => {
    const [newCategory, setNewCategory] = useState("");

    const dispatch = useDispatch();

    const addCategory = async () => {
        let param = {
            name: newCategory
        };
        await dispatch(addedCategory(param));
        setNewCategory("")
        onHide();
    }

    if (!show) return null;

    return ReactDom.createPortal(
        <>
            <div className="overlay" onClick={onHide} />
            <div className="modal">
                <div className="modal__title">
                    <h3>Add New Category</h3>
                </div>
                <div className="modal__main">
                    <div className="modal__main__input">
                        <input
                            name="brand"
                            value={newCategory}
                            onChange={e => setNewCategory(e.target.value)}
                            placeholder="new category" />
                    </div>
                </div>
                <div className="modal__buttons">
                    <button onClick={onHide}>Close</button>
                    <button onClick={addCategory}>Save</button>
                </div>
            </div>
        </>,
        document.getElementById('portal')
    )
};

export default AddNewCategory;