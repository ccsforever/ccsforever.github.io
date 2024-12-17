import React from 'react';
import { useSearchParams, useParams } from 'react-router-dom';

import UnityContainer from '../components/UnityContainer';

const Product = () => {
    const path = "/product";
    const { id } = useParams();

    const [serchParams] = useSearchParams();
    const query = serchParams.get("search") as string;

    return (
        <div>
            <p>path {path}</p>
            <p>productId {id}</p>
            <p>query {query}</p>
            <UnityContainer path={`${path}/${id as string}/`} query={query} />
        </div >
    );
}

export default Product;