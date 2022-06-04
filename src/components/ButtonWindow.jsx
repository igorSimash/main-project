import React from 'react';

const ButtonWindow = () => {
    const showWindow = () => {
        const popup = document.querySelector('.popup')
        popup.style.width = '240px';
        popup.style.height = '350px';
        document.querySelector('.popup *').style.display = 'flex';
        popup.style.cursor = 'default';
    }
    const hideWindow = (ev) => {
        ev.stopPropagation();
        const popup = document.querySelector('.popup')
        popup.style.width = '20px';
        popup.style.height = '20px';
        document.querySelector('.popup *').style.display = 'none';
        popup.style.cursor = 'pointer';
    }

    return (
        <div>
            <div onClick={showWindow} className={'popup'}>
                <div className={'popupHeader'}>
                    <h2>Hello, User</h2>
                    <span onClick= {hideWindow}>&times;</span>
                </div>
                <br/>
                {/*<a href="/lists">Lists</a>*/}
            </div>
        </div>
    );
};

export default ButtonWindow;