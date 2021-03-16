// import React, { useState, useEffect } from 'react';
// import { fetchCategories } from '../../http/productAPI';

// const Categories = () => {
//     const [categoryList, setCategoryList] = useState([]);

//     useEffect(() => {
//         const fetchAPI = async () => {
//             try {
//                 const data = await fetchCategories();
//                 setCategoryList(data)
//             } catch (err) {

//             }
//         }
//         fetchAPI();
//     }, []);

//     const list = categoryList.map(category => {
//         return (
//             <h3 key={category.id}>{category.name}</h3>
//         )
//     });

//     return (
//         <section>
//             {list}
//         </section>
//     )
// };

// export default Categories;