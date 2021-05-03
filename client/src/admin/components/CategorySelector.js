import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllCategories } from '../../store/reducers/categoriesSlice';

const CategorySelector = ({ setCategory, category }) => {
    const categories = useSelector(selectAllCategories);

    return (
        <div className="modal__main__selector">
            <label>Select Category</label>
            <select
                value={category}
                onChange={e => setCategory(e.target.value)}
                required>
                <option value={""}>...</option>
                {categories.map(category => {
                    return <option key={category.id} value={category.id}>{category.name}
                    </option>
                })}
            </select>
        </div>
    )
}

export default CategorySelector;