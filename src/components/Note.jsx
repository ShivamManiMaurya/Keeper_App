// import React from "react";


// function Note(props){

//     return <div className="note">
//         <h1>{props.title}</h1>
//         <p>{props.content}</p>
//     </div>

// }


// export default Note;


import React from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function Note(props) {

    function HandleClick () {
        // return (() => {
        //     props.GetIdValue(props.id);
        // })
        props.onDelete(props.id);
    }   


    
    return (
    <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={HandleClick}>
            <DeleteForeverIcon />
        </button>
    </div>
    );
}

export default Note;
