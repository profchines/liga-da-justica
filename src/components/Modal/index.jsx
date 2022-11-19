import './style.css'

export const Modal = (props) => {
    return(
        <div
            className='modal'
            style={{
                visibility: 'hidden'
            }}
        >
            <div
                className='modal_content'
            >
                <span className='modal_close'>
                    &times;
                </span>
                {props.children}
            </div>
        </div>
    )
}

export const ModalHeader = (props) => {
    return(
        <div className='modal_header'>
            {props.children}
        </div>
    )
}
export const ModalBody = (props) => {
    return(
        <div className='modal_body'>
            {props.children}
        </div>
    )
}