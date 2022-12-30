import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { loadNotes } from "../../helpers/loadNotes";
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes } from "./journalSlice";

export const startNewNote =()=>{
    return async (dispatch, getState)=>{
        // uid
        dispatch(savingNewNote());
        const { uid }= getState().auth;

        console.log(uid)
        const newNote={
            tittle:'',
            body:'',
            date: new Date().getTime(),
        };
        
        const newDoc = doc( collection( FirebaseDB, `${uid}/journal/notes`) );
        await setDoc( newDoc, newNote);

        newNote.id = newDoc.id;

        dispatch(addNewEmptyNote( newNote ));
        dispatch(setActiveNote( newNote ));
    }
};

export const startLoadingNotes=()=>{
    return async(dispatch, getState)=>{
        const { uid } = getState().auth; 
        
        if (!uid) {
            throw new Error('El UID del usuario no existe');
        }
        const notes = await loadNotes( uid );
        dispatch( setNotes(notes))
    }
};
