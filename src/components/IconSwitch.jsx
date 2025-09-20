import React from 'react';

export default function IconSwitch({ icon, onSwitch }) {
    return (
        <div className="icon-switch">
      <span className="material-icons" onClick={onSwitch}>
        {icon}
      </span>
        </div>
    );
}
