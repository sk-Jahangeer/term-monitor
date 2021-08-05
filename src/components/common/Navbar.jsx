import { Avatar, Paper } from "@material-ui/core";
import { InputBase, Button } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="nav_conatainer">
                <div className="heading">keywords</div>
                <Paper
                    style={{ width: "300px", padding: "0" }}
                    className="flex"
                >
                    <InputBase />
                    <Button endIcon={<ArrowForwardIcon fontSize="inherit" />}>
                        Submit
                    </Button>
                </Paper>
                <Avatar className="profile_icon">A</Avatar>
            </div>
        </div>
    );
};

export default Navbar;
