import React, { useState } from 'react';
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
    return (
        <div>
            <div>
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
        </div>
    )
};

export default AddNewBrand;