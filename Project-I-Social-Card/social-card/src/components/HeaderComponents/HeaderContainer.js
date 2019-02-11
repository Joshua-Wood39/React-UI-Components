import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import ImageThumbnail from './ImageThumbnail';

function Header() {
    return (
        <div className="headContainer">
            <ImageThumbnail />
            <HeaderContent />
        </div>    
    );
}

export default Header;