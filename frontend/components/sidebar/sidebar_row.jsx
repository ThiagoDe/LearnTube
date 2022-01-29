import React from 'react';

const SideBarRow = ({selected, icon, title}) => {
    return (
        <div className={`sidebarrow ${selected ? 'selected': ''}`}>
            <img src={icon} className='sidebarrow__icon'/>
            {/* <Icon className='sidebarrow__icon'/> */}
            <h2 className='sidebarrow__title'>{title}</h2>
        </div>
    )
}

export default SideBarRow;