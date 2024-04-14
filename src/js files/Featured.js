import { makeStyles } from "@mui/styles";
import netdev from "../images/netdev.png";
import { AccountBalance, Description, School, CheckCircle } from "@mui/icons-material";

const useStyles = makeStyles({
    ul: {
        fontFamily: "cursive"
    },
    cards: {
        minWidth: "800px",
        display: "flex",
        textAlign: "center",
        justifyContent: "center",
        gap: "30px",
        padding: "0px 0px 30px 0px",
        margin: "20px 0px 0px 0px",
    },
    card: {
        backgroundColor: "#d2f1e5",
        borderRadius: "5px",
        color: "black",
        display: "flex",
        padding: "10px",
        fontFamily: "math",
    },
    img_netdev: {
        height: "90px",
        "& img": {
            height: "90px"
        }
    },
    img_card: {
        fontSize: "x-small",
        "& p": {
            color: "blue"
        }
    },
    container: {
        minWidth: "807px",
        margin: "0px 60px 0px 50px",
        backgroundColor: "#062F61",
        color: "white",
    },
    container_1: {
        textAlignLast: "center",
    },
    container_2: {
        textWrap: "nowrap",
        overflow: "overlay",
        "& ul": {
            listStyleType: "none",
            display: "flex",
            gap: "20px",
            placeContent: "center"
        },
        "& ul li": {
            backgroundColor: "#124179",
            borderRadius: "20px",
            padding: "5px 20px",
            color: "white",
            alignContent: "center",
        }
    },
    more: {
        textAlign: "center",
        "& button": {
            width: "100px",
            height: "40px",
            backgroundColor: "white",
            color: "black",
            fontFamily: "math"
        }
    }
});

function Jobs() {
    const classes = useStyles();

    return (
        <>
            <div className={classes.container}>
                <div className={classes.container_1}>
                    <p>
                        For your latest
                    </p>
                    <h3>
                        Featured Jobs
                    </h3>
                </div>
                <div className={classes.container_2}>
                    <ul>
                        <li>Project Manager</li>
                        <li>UI/UX Design</li>
                        <li>Web development</li>
                        <li>Sales Marketing</li>
                        <li>Accounting</li>
                        <li>Architect</li>
                        <li>Others</li>
                    </ul>
                </div>
                <div className={classes.cards}>
                    <div className={classes.card}>
                        <div className={classes.img_netdev}>
                            <img src={netdev} />
                        </div>
                        <div className={classes.img_card}>
                            <p>Reckstar game New York</p>
                            <h4>Senior UI/UX Designer</h4>
                            LAS vegas, NV 785.5t
                            <br />
                            2 Days ago
                        </div>
                    </div>
                    <div className={classes.card}>
                        <div className={classes.img_netdev}>
                            <img src={netdev} />
                        </div>
                        <div className={classes.img_card}>
                            <p>Reckstar game New York</p>
                            <h4>Senior UI/UX Designer</h4>
                            LAS vegas, NV 785.5t
                            <br />
                            2 Days ago
                        </div>
                    </div>
                    <div className={classes.card}>
                        <div className={classes.img_netdev}>
                            <img src={netdev} />
                        </div>
                        <div className={classes.img_card}>
                            <p>Reckstar game New York</p>
                            <h4>Senior UI/UX Designer</h4>
                            LAS vegas, NV 785.5t
                            <br />
                            2 Days ago
                        </div>
                    </div>
                </div>
                <div className={classes.cards}>
                    <div className={classes.card}>
                        <div className={classes.img_netdev}>
                            <img src={netdev} />
                        </div>
                        <div className={classes.img_card}>
                            <p>Reckstar game New York</p>
                            <h4>Senior UI/UX Designer</h4>
                            LAS vegas, NV 785.5t
                            <br />
                            2 Days ago
                        </div>
                    </div>
                    <div className={classes.card}>
                        <div className={classes.img_netdev}>
                            <img src={netdev} />
                        </div>
                        <div className={classes.img_card}>
                            <p>Reckstar game New York</p>
                            <h4>Senior UI/UX Designer</h4>
                            LAS vegas, NV 785.5t
                            <br />
                            2 Days ago
                        </div>
                    </div>
                    <div className={classes.card}>
                        <div className={classes.img_netdev}>
                            <img src={netdev} />
                        </div>
                        <div className={classes.img_card}>
                            <p>Reckstar game New York</p>
                            <h4>Senior UI/UX Designer</h4>
                            LAS vegas, NV 785.5t
                            <br />
                            2 Days ago
                        </div>
                    </div>
                </div>
                <div className={classes.cards}>
                    <div className={classes.card}>
                        <div className={classes.img_netdev}>
                            <img src={netdev} />
                        </div>
                        <div className={classes.img_card}>
                            <p>Reckstar game New York</p>
                            <h4>Senior UI/UX Designer</h4>
                            LAS vegas, NV 785.5t
                            <br />
                            2 Days ago
                        </div>
                    </div>
                    <div className={classes.card}>
                        <div className={classes.img_netdev}>
                            <img src={netdev} />
                        </div>
                        <div className={classes.img_card}>
                            <p>Reckstar game New York</p>
                            <h4>Senior UI/UX Designer</h4>
                            LAS vegas, NV 785.5t
                            <br />
                            2 Days ago
                        </div>
                    </div>
                    <div className={classes.card}>
                        <div className={classes.img_netdev}>
                            <img src={netdev} />
                        </div>
                        <div className={classes.img_card}>
                            <p>Reckstar game New York</p>
                            <h4>Senior UI/UX Designer</h4>
                            LAS vegas, NV 785.5t
                            <br />
                            2 Days ago
                        </div>
                    </div>
                </div>
                <div className={classes.more}>
                    <button>More Jobs {">"}</button>
                </div>
            </div>
        </>
    );
}

export default Jobs;

