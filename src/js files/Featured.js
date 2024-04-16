import { makeStyles } from "@mui/styles";
import netdev from "../images/netdev.png";
import featured from "../images/featured.png";

const useStyles = makeStyles({
    ul: {
        fontFamily: "cursive"
    },
    cards: {
        minWidth: "800px",
        display: "flex",
        textAlign: "center",
        justifyContent: "center",
        gap: "20px",
        margin: "20px 0px 0px 0px",
        "@media screen and (max-width:1024px)": {
            display: "grid"
        }
    },
    card: {
        backgroundColor: "white",
        borderRadius: "5px",
        color: "black",
        padding: "10px",
        fontFamily: "math",
        width: "300px",
    },
    card_1: {
        display: "flex"
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
        backgroundImage: `url(${featured})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "multiply"
    },
    container_1: {
        textAlignLast: "center",
        padding: "20px 0px 0px 0px"
    },
    container_2: {
        textWrap: "nowrap",
        overflow: "overlay",
        "& ul": {
            listStyleType: "none",
            display: "flex",
            gap: "20px",
            placeContent: "center",
            minWidth: "fit-content"
        },
        "& ul li": {
            border: "0.5px solid white",
            backgroundColor: "#124179",
            borderRadius: "20px",
            padding: "5px 20px",
            color: "white",
            alignContent: "center",
            "&:hover": {
                backgroundColor: "white",
                color: "black"
            }
        }
    },
    more: {
        textAlign: "center",
        padding: "30px 0px 20px 0px",
        "& button": {
            width: "100px",
            height: "40px",
            backgroundColor: "white",
            color: "black",
            fontFamily: "math"
        }
    },
    lower: {
        "& span": {
            display: "flex",
            gap: "20px",
            "& p": {
                backgroundColor: "#e4e4e7",
                width: "70px",
                borderRadius: "20px",
                padding: "3px",
                fontSize: "xx-small"
            }
        },
        "& div": {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            "& h3": {
                fontSize: "smaller",
            },
            "& button": {
                backgroundColor: "#e1a405",
                color: "white",
                width: "110px",
                height: "30px",
                borderRadius: "5px",
                border: "0px"
            }
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
                        <div className={classes.card_1}>
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
                        <div className={classes.lower}>
                            <span>
                                <p>Full Time</p>
                                <p>Remote</p>
                            </span>
                            <div>
                                <h3>30-50K/year</h3>
                                <button>Apply Now</button>
                            </div>
                        </div>
                    </div>
                    <div className={classes.card}>
                        <div className={classes.card_1}>
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
                        <div className={classes.lower}>
                            <span>
                                <p>Full Time</p>
                                <p>Remote</p>
                            </span>
                            <div>
                                <h3>30-50K/year</h3>
                                <button>Apply Now</button>
                            </div>
                        </div>
                    </div>
                    <div className={classes.card}>
                        <div className={classes.card_1}>
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
                        <div className={classes.lower}>
                            <span>
                                <p>Full Time</p>
                                <p>Remote</p>
                            </span>
                            <div>
                                <h3>30-50K/year</h3>
                                <button>Apply Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.cards}>
                    <div className={classes.card}>
                        <div className={classes.card_1}>
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
                        <div className={classes.lower}>
                            <span>
                                <p>Full Time</p>
                                <p>Remote</p>
                            </span>
                            <div>
                                <h3>30-50K/year</h3>
                                <button>Apply Now</button>
                            </div>
                        </div>
                    </div>
                    <div className={classes.card}>
                        <div className={classes.card_1}>
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
                        <div className={classes.lower}>
                            <span>
                                <p>Full Time</p>
                                <p>Remote</p>
                            </span>
                            <div>
                                <h3>30-50K/year</h3>
                                <button>Apply Now</button>
                            </div>
                        </div>
                    </div>
                    <div className={classes.card}>
                        <div className={classes.card_1}>
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
                        <div className={classes.lower}>
                            <span>
                                <p>Full Time</p>
                                <p>Remote</p>
                            </span>
                            <div>
                                <h3>30-50K/year</h3>
                                <button>Apply Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.cards}>
                    <div className={classes.card}>
                        <div className={classes.card_1}>
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
                        <div className={classes.lower}>
                            <span>
                                <p>Full Time</p>
                                <p>Remote</p>
                            </span>
                            <div>
                                <h3>30-50K/year</h3>
                                <button>Apply Now</button>
                            </div>
                        </div>
                    </div>
                    <div className={classes.card}>
                        <div className={classes.card_1}>
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
                        <div className={classes.lower}>
                            <span>
                                <p>Full Time</p>
                                <p>Remote</p>
                            </span>
                            <div>
                                <h3>30-50K/year</h3>
                                <button>Apply Now</button>
                            </div>
                        </div>
                    </div>
                    <div className={classes.card}>
                        <div className={classes.card_1}>
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
                        <div className={classes.lower}>
                            <span>
                                <p>Full Time</p>
                                <p>Remote</p>
                            </span>
                            <div>
                                <h3>30-50K/year</h3>
                                <button>Apply Now</button>
                            </div>
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

