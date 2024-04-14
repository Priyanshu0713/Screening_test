import { makeStyles } from "@mui/styles";
import get from "../images/get.png";
import { AccountBalance, Description, School, CheckCircle } from "@mui/icons-material";

const useStyles = makeStyles({
    main_top: {
        margin: "50px 60px 10px 50px",
        borderRadius: "10px",
        display: "flex",
        backgroundColor: "#fcf2f2",
        minWidth: "800px",
        justifyContent: "space-around"
    },
    top: {
        minWidth: "800px",
        margin: "0px 0px 0px 400px"
    },
    down_1: {
        width: "650px",
        height: "auto",
        padding: "1px 0px 1px 50px ",
        fontFamily: "cursive",
        "& h1": {
            fontSize: "30px"
        }
    },
    main: {
        textAlign: "center",
        "& h1": {
            fontFamily: "none"
        }
    },
    img_1: {
        height: "400px",
        borderRadius: "20px",
        "@media screen and (max-width:1024px)": {
            display: "none"
        }
    },
    ul: {
        fontFamily: "cursive"
    },
    button: {
        backgroundColor: "#ed8c17",
        height: "40px",
        borderRadius: "5px",
        color: "white",
        display: "flex",
        alignItems: "center",
        gap: "5px",
        padding: "0px 10px 0px 35px",
        width: "170px",
        fontFamily: "cursive",
        border: "1px white"
    },
    buttons: {
        backgroundColor: "#d2f1e5",
        height: "50px",
        borderRadius: "5px",
        color: "black",
        display: "grid",
        placeItems: "center",
        gap: "5px",
        padding: "10px 10px",
        fontWeight: 600,
        textWrap: "nowrap",
    },
    buttons_1: {
        backgroundColor: "#f2e5d0",
        height: "50px",
        borderRadius: "5px",
        color: "black",
        display: "grid",
        placeItems: "center",
        gap: "5px",
        padding: "10px 10px",
        fontWeight: 600,
        textWrap: "nowrap"
    },
    icon: {
        display: "flex",
        color: "#FD725E",
    },
    btns: {
        display: "flex",
        gap: "30px",
        padding: "1px 0px 1px 60px",
        margin: "100px 0px 0px 1px",
        "@media screen and (max-width:1024px)": {
            margin: "0px",
            padding: "1px 0px 1px 60px",
        }
    },
    cards: {
        borderRadius: "10px",
        backgroundColor: "#e7c9c9",
        boxShadow: "0px 0px 200pc 0px",
        maxWidth: "1400px",
        minWidth: "800px",
        display: "flex",
        textAlign: "center",
        gap: "5px",
        margin: "0px 60px 0px 50px",
    },
    card: {
        maxWidth: "500px",
        backgroundColor: "#ebdfdf",
        borderRadius: "5px",
        color: "black",
        padding: "10px",
        fontFamily: "math"
    }
});

function Jobs() {
    const classes = useStyles();

    return (
        <>
            <div className={classes.main_top}>
                <div className={classes.down}>
                    <div className={classes.down_1}>
                        <p>For Your Latest</p>
                        <h1>Get the job<br />
                            that's right for you
                        </h1>
                    </div>
                    <div className={classes.btns}>
                        <div className={classes.buttons}>
                            <AccountBalance className={classes.icon} />
                            <span>Talent Aquisition</span>
                        </div>
                        <div className={classes.buttons_1}>
                            <Description className={classes.icon} />
                            <span>Resume Building</span>
                        </div>
                        <div className={classes.buttons}>
                            <School className={classes.icon} />
                            <span>Career Counselling</span>
                        </div>
                        <div className={classes.buttons_1}>
                            <CheckCircle className={classes.icon} />
                            <span>Vetting Process</span>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={get} className={classes.img_1} />
                </div>
            </div >
            <div className={classes.cards}>
                <div className={classes.card}>
                    <h3>Discover New Opportunities</h3>

                    Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took
                    unknown printer took.

                </div>
                <div className={classes.card}>
                    <h3>Get Invited To Apply To Jobs</h3>

                    Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took
                    unknown printer took.

                </div>
                <div className={classes.card}>
                    <h3>Save Time With 1-Click Apply</h3>

                    Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took
                    unknown printer took.

                </div>
            </div>
        </>
    );
}

export default Jobs;
