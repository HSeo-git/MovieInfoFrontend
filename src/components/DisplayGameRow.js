import React, { Component } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { useViewport } from "../hooks/useViewport";

//install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

const DisplayGameRow = ({ title, isFps, games, selectGameHandler }) => {
    const [windowDimensions] = useViewport()
    const { width } = windowDimensions

    return (
        <>
            <h1 className='gameShowcase__heading'>{title}</h1>
            <Swiper
                className='gameShowcase__container'
                navigation={true}
                grabCursor={false}
                draggable={false}
                loop={true}
                loopAdditionalSlides={
                    width >= 1378 ? 4 : width >= 998 ? 3 : width >= 625 ? 2 : 2
                }
                breakpoints={{
                    1378: {
                        slidesPerView: 5,
                        slidesPerGroup: 5,
                    },
                    998: {
                        slidesPerView: 4,
                        slidesPerGroup: 4,
                    },
                    625: {
                        slidesPerView: 3,
                        slidesPerGroup: 3,
                    },
                    0: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                    },
                }}
                preventClicksPropagation={true}
                preventClicks={true}
                scrollbar={{ draggable: false, hide: true }}
                slideToClickedSlide={false}
                pagination={{ clickable: true }}
            >
                {games &&
                    games.map((game, idx) => {
                        let gameImageUrl = isFps
                            ? `https://image.tmdb.org/t/p/original/${game.poster_path}`
                            : `https://image.tmdb.org/t/p/w500/${game.backdrop_path}`
                        if (game.poster_path && game.backdrop_path !== null) {
                            return (
                                <SwiperSlide
                                    onClick={() => selectGameHandler(game)}
                                    key = {idx}
                                    className={
                                        'gameShowcase__container--game' +
                                        (isFps ? '__fps' : '')
                                    }
                                >
                                    <img
                                        src={gameImageUrl}
                                        className='gameShowcase__container--game-image'
                                    />
                                </SwiperSlide>
                            )
                                    }
                })}
                            </Swiper>
        </>
    );
};

export default DisplayGameRow;