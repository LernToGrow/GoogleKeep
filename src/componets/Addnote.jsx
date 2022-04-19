import  React,{ useState } from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const Addnote =(props)=>{
    const [note,setNote] = useState({
        title:"",
        content:"",
    });
    const InputEvent = (event)=>{
        const {name ,value} =event.target;
        setNote((prevData)=>{
            return{
                ...prevData,
                [name]:value,
            }
        })
        // console.log(note);
    }
    const addEvent=()=>{
        props.passNote(note);
        setNote({
            title:"",
            content:""});
    }


   return(
       <>
        <div className="main_node">
            <form>
            <input type="text"  name="title" value={note.title} onChange={InputEvent} placeholder="Title" autoCompleate="off"/>
            <textarea rows="" cols="" name="content"  value={note.content} onChange={InputEvent}  placeholder="Write a note..."/>
            <br/>
            <Button onClick={addEvent}>
                <AddIcon/>
            </Button>
            </form>
        </div>
       </>
   ) 
}
export default Addnote;