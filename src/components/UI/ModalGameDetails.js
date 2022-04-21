import React from 'react'

import {ReactComponent as AddIcon} from "../../static/images/icon-add.svg";
import {ReactComponent as PlayIcon} from "../../static/images/icon-play.svg"

const GameDetails = ({
      game: {
          title,
          vote_average,
          overview,
      },
  }) => {
    return (
        <div className='modal__container'>
            <h1 className='modal__title'>{title}</h1>
            <p className='modal__info'>
                <span className='modal__rating'>Rating: {vote_average * 10}% </span>
            </p>
            <p className='modal__overview'>{overview}</p>
            <button className='modal__btn modal__btn--red'>
                <PlayIcon className='modal__btn--icon' />
                Play
            </button>
            <button className='modal__btn'>
                <AddIcon className='modal__btn--icon' />
                My List
            </button>
        </div>
    )
}

export default GameDetails