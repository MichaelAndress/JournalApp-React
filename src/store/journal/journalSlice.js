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

    },
    updateNotes:(state, action)=>{

    },
    deleteNoteById:(state)=>{

    }
  }
});

// Action creators are generated for each case reducer function
export const { addNewEmptyNote, setActiveNote, setNotes, setSaving, updateNotes, deleteNoteById, savingNewNote  } = journalSlice.actions;