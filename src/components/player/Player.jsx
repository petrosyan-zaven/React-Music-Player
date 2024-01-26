import React, { useState } from 'react';
import './player.css';
import Buttons from '../bootons/Buttons';
import { CaretDownOutlined, CaretRightOutlined, ColumnHeightOutlined, PauseOutlined, PlusOutlined } from '@ant-design/icons';

function Player() {
  const [play, setPlay] = useState(false);
  const addIcon = <PlusOutlined />;
  const playIcon = <CaretRightOutlined />;
  const pauseIcon = <PauseOutlined />;

  return (
    <div className='player'>
      <div className='player-box'>
        <div className='bt'>
          {Buttons(playIcon, "Play")}
          {Buttons(addIcon, "  Add")}
        </div>
        <div className='serch-box'>
          <button><i className="fa-solid fa-arrow-down-up-across-line"></i><span>Tack Number</span> <CaretDownOutlined /></button>
          <input type="search"  placeholder='Filter'/>
        </div>
      </div>
    </div>
  );
}

export default Player;
