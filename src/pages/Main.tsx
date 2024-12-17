import React from 'react';
import { useSearchParams } from 'react-router-dom';

import UnityContainer from '../components/UnityContainer';

const Main = () => {
    const path = "/";
    const [serchParams] = useSearchParams();
    const query = serchParams.get("search") as string;

    return (
        <div>
            <UnityContainer path={path} query={query} />
        </div >
    );
}

export default Main;
