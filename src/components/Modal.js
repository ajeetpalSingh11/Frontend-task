import React from 'react'

const Modal = ({handleItemClick}) => {

    const handleClick = (e)=>{
        handleItemClick(e.target.dataset.id);
        e.stopPropagation();
    }
  return (
    <div className='modal-container' onClick={handleClick}>
        <div className='modal-item' data-id="mark-as-unread">Mark as unread</div>
        <div className='modal-item' data-id="delete">Delete</div>
        <div className='modal-item' data-id="cancel">Cancel</div>
    </div>
  )
}

export default Modal
