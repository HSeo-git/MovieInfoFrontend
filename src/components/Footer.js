import React from 'react';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__copyright'>
                &copy; 2021 Made by
                <a
                    className='footer__copyright--link'
                    href='https://github.com/HSeo-git'
                >
                    {' '}
                    Hagom
                </a>
            </div>
        </footer>
    );
};

export default Footer;