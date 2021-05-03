import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories, selectAllCategories } from '../store/reducers/categoriesSlice';

const Categories = ({ setCategoryFilter }) => {
    const categories = useSelector(selectAllCategories);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategories())
    }, [dispatch]);

    return (
        <div className="modal__main__selector">
            <label>Categories</label>
            <select
                defaultValue="all"
                onChange={e => setCategoryFilter(e.target.value)}>
                <option value="all">All</option>
                {categories.map(category => {
                    return <option key={category.id} value={category.id}>
                        {category.name}
                    </option>
                })}
            </select>
        </div>
    )
};

export default Categories;
