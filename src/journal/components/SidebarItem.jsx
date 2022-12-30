import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { TurnedInNot } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { setActiveNote } from '../../store/journal/journalSlice';
import { getNote } from '../helpers/getNote';


export const SidebarItem = ({ tittle, body, id, date, imagenUrls=[] }) => {

    const dispatch = useDispatch();

    const onClickNote =()=>{
        const nota = ({id, tittle, body, date, imagenUrls});
        dispatch( setActiveNote(nota))
    };





    return (
        <ListItem disablePadding onClick={ onClickNote }>
            <ListItemButton>
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                    <ListItemText primary={tittle} />
                    <ListItemText secondary={body} />
                </Grid>
            </ListItemButton>
        </ListItem>
    );
};
