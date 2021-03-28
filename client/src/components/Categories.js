import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories, selectAllCategories } from '../store/reducers/categoriesSlice';

const Categories = () => {
    const categories = useSelector(selectAllCategories);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategories())
    }, [dispatch]);

    return (
        <section>
            <h2>Categories</h2>
            {categories.map(category => {
                return (
                    <div key={category.id}>
                        <input type="checkbox" />
                        <h4 >{category.name}</h4>
                    </div>
                )
            })}
        </section>
    )
};

export default Categories;