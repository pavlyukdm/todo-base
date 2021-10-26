import {Component} from "react";
import {Button, ButtonGroup} from "@mui/material";

class ItemStatusFilter extends Component{
    render() {
        return (
            <ButtonGroup variant="outlined">
                <Button variant="contained">All</Button>
                <Button>Active</Button>
                <Button>Done</Button>
            </ButtonGroup>
        )
    }
}

export default ItemStatusFilter;

