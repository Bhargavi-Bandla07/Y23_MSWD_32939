import React from 'react'
import klu from './KLU.png';

const Header = () => {
    return (
        <div className='header-container'>
            <div className='one'>
                <img src={klu} alt="KL University Logo" height={100} width={200} />
            </div>
            <div className="title" style={{ color: "red", flex: 1, display: 'flex', justifyContent: 'center', paddingRight: '100px' }}>
                <h1>KL UNIVERSITY</h1>
            </div>
        </div>
    );
}

export default Header;