import React from 'react';

const dropdownContent = () => {
    return (
        <div className="dropdownContainer">
            <div className="navigation__container--userLogo">
                <div className="dropdownContent">
                    <div>
                        <div className="dropdownContent--user"></div>
                        <p className="dropdownContent--user-text">EVERYONE</p>
                    </div>
                    <div>
                        <div className="dropdownContent--user dropdownContent--user-2"></div>
                        <p className="dropdownContent--user-text">ADULTS</p>
                    </div>
                    <div>
                        <div className="dropdownContent--user dropdownContent--user-3"></div>
                        <p className="dropdownContent--user-text">KIDS</p>
                    </div>
                </div>
                <div className="dropdownContent dropdownContent--2">
                    <p className="dropdownContent-textOutside">Contact</p>
                    <p className="dropdownContent-textOutside">Help Center</p>
                </div>
            </div>
        </div>
    );
};

export default dropdownContent;