import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, selectAllCategories } from '../../store/reducers/categoriesSlice';
import Category from './Category';
import AddNewCategory from './modals/AddNewCategory';

const AdminBrands = () => {
    const [categoryVisible, setCategoryVisible] = useState(false);
    const categories = useSelector(selectAllCategories);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    const categoryList = categories.map(category => {
        return (
            <Category key={category.id} category={category} />
        )
    });

    return (
        <section className="admin__section">
            <div className="admin__section__title">
                <h3>Categories</h3>
                <div className="admin__section__title__button">
                    <button onClick={() => setCategoryVisible(true)}>New Category</button>
                </div>
            </div>
            {categoryList}
            <AddNewCategory show={categoryVisible} onHide={() => setCategoryVisible(false)} />
        </section>
    )
};

export default AdminBrands;