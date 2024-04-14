import { makeStyles } from "@mui/styles";
import man from "../images/man.png";
import { AccountBalance, Description, School, CheckCircle } from "@mui/icons-material";

const useStyles = makeStyles({
    main_top: {
        margin: "50px",
        // border: "2px solid #ccc",
        borderRadius: "10px",
        minWidth: "800px"
    },
    top: {
        minWidth: "min-content"
    },
    down: {
        display: "flex",
        justifyContent: "center",
    },
    down_1: {
        width: "650px",
        height: "auto",
        padding: "50px ",
        fontFamily: "cursive"
    },
    main: {
        textAlign: "center",
        "& h1": {
            fontFamily: "none"
        }
    },
    img_1: {
        width: "350px",
        height: "370px",
        borderRadius: "20px",
        "@media screen and (max-width:870px)": {
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
        margin: "40px",
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
        margin: "40px",
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
        justifyContent: "center",
        "@media screen and (max-width:1024px)": {
            display: "block"
        }
    }
});

function Jobs() {
    const classes = useStyles();

    return (
        <>
            <div className={classes.main_top}>
                <div className={classes.top}>
                    <div className={classes.main}>
                        <h1>Why Choose Us</h1>
                    </div>
                </div>
                <div className={classes.down}>
                    <div className={classes.down_1}>
                        <h3>Search millions of jobs and get the inside scoop on
                            companies with  employee reviews, personalized salary
                            tools, and more
                        </h3>
                        <ul>
                            <li>
                                Access to millions of job seekers
                            </li>
                            <li>
                                Only pay for the candidates you want to contact
                            </li>
                            <li>
                                Post unlimited jobs for free—all from one place
                            </li>
                            <li>
                                Premium job placement on Hyratch, Indeed, & over 100 job sites
                            </li>
                            <li>
                                Hiring solutions & pricing that works with seasonal hiring changes
                            </li>
                        </ul>
                        <button className={classes.button}>KNOW MORE {">"}</button>
                    </div>
                    <div>
                        <img src={man} className={classes.img_1} />
                    </div>
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
            </div >
        </>
    );
}

export default Jobs;
