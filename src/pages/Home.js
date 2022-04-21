import React, { useState } from 'react';

import MainContent from "../components/MainContent";
import Modal from "../components/UI/Modal";
import ModalGameDetails from "../components/UI/ModalGameDetails";

const Home = () => {
    const [toggleModal, setToggleModal] = useState(false)
    const [gameDetails, setGameDetails] = useState({})

    const selectGameHandler = async (game) => {
        setToggleModal(true)
        setGameDetails(game)
    }

    const closeModal = () => {
        setToggleModal(false)
    }

    return (
        <>
            <div className='main-content'>
                <MainContent selectGameHandler={selectGameHandler}/>
            </div>
            <Modal
                show={toggleModal}
                modalClosed={closeModal}
                backgroundImage={gameDetails.backdrop_path || gameDetails.poster_path}
            >
                <ModalGameDetails game={gameDetails} />
            </Modal>
        </>
    );
};

export default Home;