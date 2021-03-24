import React, { useState } from 'react';
import brandAPI from '../../../http/brandAPI';

const UpdateBrand = ({ id }) => {
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

    return (
        <div>
            <div>
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
                    <button>Close</button>
                    <button onClick={updateBrand}>Save</button>
                </div>
            </div>
        </div>
    )
};

export default UpdateBrand;