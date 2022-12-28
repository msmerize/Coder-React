import { makeStyles } from '@mui/styles'
import { Link } from 'react-router-dom'
import {
    Typography,
    Grid,
    Popover,
    List,
    ListItem,
    ListItemText,
} from '@mui/material'

const links = {
    clothes: [
        'Camisas',
        'Remeras',
        'Pantalones',
        'Abrigos',
        'Calcetines',
        'Bermudas',
    ],
    footwear: ['Zapatillas', 'Zapatos', 'Ojotas'],
}

const useStyles = makeStyles(theme => ({
    list: {
        padding: theme.spacing(2),
    },
    link: {
        color: theme.palette.text.primary,
        textDecoration: 'none',
        '&:hover': {
            color: theme.palette.secondary.main,
        },
    },
}))

export const Menu = ({ isMenuOpen, anchorEl, onHandleClose }) => {
    const classes = useStyles()
    return (
        <Popover
            open={isMenuOpen}
            anchorEl={anchorEl}
            onClose={onHandleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            elevation={3}
            onClick={onHandleClose}>
            <Grid container>
                <Grid item>
                    <List className={classes.list} dense>
                        <ListItem>
                            <ListItemText
                                primary={
                                    <Typography variant='h6' color='secondary'>
                                        INDUMENTARIA
                                    </Typography>
                                }
                            />
                        </ListItem>
                        {links.clothes.map(clot => (
                            <Link
                                to={`/category/${clot.toLowerCase()}`}
                                className={classes.link}
                                key={clot}>
                                <ListItem>
                                    <ListItemText primary={`${clot}`} />
                                </ListItem>
                            </Link>
                        ))}
                    </List>
                </Grid>
                <Grid item>
                    <List className={classes.list} dense>
                        <ListItem>
                            <ListItemText
                                primary={
                                    <Typography variant='h6' color='secondary'>
                                        CALZADO
                                    </Typography>
                                }
                            />
                        </ListItem>
                        {links.footwear.map(foot => (
                            <Link
                                to={`/category/${foot.toLowerCase()}`}
                                className={classes.link}
                                key={foot}>
                                <ListItem>
                                    <ListItemText primary={`${foot}`} />
                                </ListItem>
                            </Link>
                        ))}
                    </List>
                </Grid>
            </Grid>
        </Popover>
    )
}
