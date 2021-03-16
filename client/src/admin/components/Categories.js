import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories, selectAllCategories } from '../../store/reducers/categoriesSlice';

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
                    <h4 key={category.id}>{category.name}</h4>
                )
            })}
        </section>
    )
};

export default Categories;