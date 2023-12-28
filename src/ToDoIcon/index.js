import { ReactComponent as CompleteSVG } from "./check.svg";
import { ReactComponent as DeleteSVG } from "./delete.svg";
import './ToDoIcon.css'

const types = {
    check: (color) => < CompleteSVG className="Icon-svg" fill={color}/>,
    delete: (color) => <DeleteSVG className="Icon-svg" fill={color}/>
}

function ToDoIcon({ type, color, onClick}){
    return(
        <span 
            className = {`Icon-container Icon-container-${type}`} 
            onClick = {onClick}
        >
            {types[type](color)}
        </span>
    );
}

export { ToDoIcon };