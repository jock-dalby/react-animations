import React from 'react';

import './Modal.css';

const modal = (props) => {
    const cssClasses = [
        'Modal',
        props.show === 'entering'
        ? 'ModalOpen'
        : props.show === 'exiting'
        ? 'ModalClosed'
        : null
    ].join(' ');
    return (
        <div className={cssClasses}>
            <h1>A Modal</h1>
            <button className="Button" onClick={props.closed}>Dismiss</button>
        </div>)
};

export default modal;