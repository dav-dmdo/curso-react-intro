import { createPortal } from "react-dom";
import './Modal.css'
function Modal ({ children }){
    const modal = document.getElementById('modal');
    return(
        createPortal( 
            <div className="ModalBackground">
                {children}
            </div>
            , modal)
    );
}

export { Modal };