import { createSlice } from '@reduxjs/toolkit';



export const journalSlice = createSlice({
  name: 'journal',
  initialState:{ 
    isSaving:false,
    messageSaved:'',
    notes:[],
    active:null,
    // active:{
    //     id:'',
    //     tittle:'',
    //     body:'',
    //     date: 123123,
    //     imagenUrls: [], //https://imagen1.jpg
    // },
  },
  reducers: {
    savingNewNote:(state)=>{
      state.isSaving = true;
    },
    addNewEmptyNote: (state, action) => {
      state.notes.push( action.payload );
      state.isSaving = false;
    },
    setActiveNote:(state, action)=>{
      state.active = action.payload;
    },
    setNotes:(state, action)=>{
      state.notes = action.payload;
    },
    setSaving:(state)=>{
      state.isSaving = true;
    },
    updateNote:(state, {payload})=>{
      state.isSaving = false;
      state.notes = state.notes.map( note =>{

        if (note.id === payload.id) {
          return payload;
        }

        return note;
      }) 
    },
    deleteNoteById:(state)=>{

    }
  }
});

// Action creators are generated for each case reducer function
export const { addNewEmptyNote, setActiveNote, setNotes, setSaving, updateNote, deleteNoteById, savingNewNote  } = journalSlice.actions;