import React from 'react';

const CardsPerPage = ({ setProductsPerPage }) => {
    const handleChange = (e) => {
        setProductsPerPage(e.target.value);
    };

    return (
        <div className="modal__main__selector">
            <label>Cards Per Page</label>
            <select defaultValue="10" onChange={handleChange} >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
            </select>
        </div>
    )
}

export default CardsPerPage;
