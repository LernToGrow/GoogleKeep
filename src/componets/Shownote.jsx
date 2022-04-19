import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
const Shownote =(props)=>{
    const deleteNote=()=>{
        props.deleteItem(props.id);
        console.log(props.id);
    }
   return(
       <>
        <div className="main-div">
        <div className="main_node_shownode">
            <h3 className="">{props.title}</h3>
            <p>{props.content}</p>
            <button onClick={deleteNote}>
                <DeleteIcon/>
            </button>              
        </div>
        </div>
       </>
   ) 
}
export default Shownote;