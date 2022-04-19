import React,{useState} from "react";
import Header from "./componets/Header";
import Addnote from "./componets/Addnote";
import Shownote from "./componets/Shownote";
import Fotter from "./componets/Fotter";

const App =()=>{
    const [addItem , setAddItem] = useState([]);
    const addNote=(note)=>{
        //alert('i am comming');
        setAddItem((prevData)=>{
            return [...prevData, note];
        });
        //console.log(note);
    };

    const onDelete = (id) => {
        setAddItem((oldData)=>{
            oldData.filter((currData ,index) => {
                return index !== id;
            });
        });
    };

   return(
       <>
        <Header/>
        <Addnote passNote={addNote}/>
        {addItem.map((val,ind)=>{
            return(
            <Shownote
                key={ind}
                id={ind}
                title={val.title}
                content={val.content}
                deleteItem={onDelete}
            />
            );
        })
        }
        <Fotter/>
       </>
   ) 
}
export default App;