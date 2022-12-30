import { useSelector } from "react-redux"

export const getNote =(id)=>{
    const { notes } = useSelector(state =>state.journal)
    notes.filter(note => note.id === id);
    return notes;
}