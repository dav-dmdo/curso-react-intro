import { createPortal } from "react-dom";

function Modal ({ children }){
    const modal = document.getElementById('modal');
    return(
        createPortal( 
            <div className="ModalContainer">
                {children}
            </div>
            , modal)
    );
}

export { Modal };