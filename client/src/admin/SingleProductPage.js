import React, { useEffect, useState } from 'react';
import { Link, Redirect, useHistory, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ADMIN_PANEL_ROUTE } from '../helpers/consts';
import productAPI from '../http/productAPI';
import { deletedProduct } from '../store/reducers/productsSlice';
import UpdateForm from './components/UpdateForm';


const SinglePostPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [product, setProduct] = useState({ info: [] });

    const { postId } = useParams();

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await productAPI.fetchOneProduct(postId);
                setProduct(response);
            } catch (e) {
                console.log(e);
            }
        };
        fetchData();
    }, [postId]);

    const onDelete = () => {
        dispatch(deletedProduct(postId));
        history.push(ADMIN_PANEL_ROUTE);
    }

    if (!product) return <Redirect to={ADMIN_PANEL_ROUTE} />

    return (
        <div>
            <button><Link to={ADMIN_PANEL_ROUTE}>Back</Link></button>
            <button onClick={onDelete}>Delete</button>

            <UpdateForm product={product} />
        </div>
    )
};

export default SinglePostPage;