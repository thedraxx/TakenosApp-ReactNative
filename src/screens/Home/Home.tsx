import React from 'react';
import { Container } from './style';
import Actions from '../../components/actions/Actions';
import Movments from '../../components/movments/Movments';

const Home = () => {
    return (
        <Container>
            <Actions />
            <Movments />
        </Container>
    );
};

export default Home;
