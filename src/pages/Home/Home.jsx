import React from 'react';
import Banner from '../../components/Header/Banner/Banner';
import Donates from '../../components/Donates/Donates';
import { useLoaderData } from 'react-router-dom';

const Home = () => {

    const donates = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <Donates donates = {donates}></Donates>
       </div>
    );
};

export default Home;