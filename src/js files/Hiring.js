import { makeStyles } from "@mui/styles";
import hiring from "../images/hiring.jpeg";

const useStyles = makeStyles({
    main_top: {
        margin: "50px",
        borderRadius: "10px",
        minWidth: "800px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0F4371",
        color: "white",
        "& div:nth-child(2)": {
            width: "650px",
            height: "auto",
            padding: "50px",
            fontFamily: "cursive",
            "& h1": {
                fontSize: "xxx-large"
            }
        },
        "& div:nth-child(3)": {
            paddingButtom: "10px"
        },
        "@media screen and (max-width:1065px)": {
            display: "ruby-text"
        }
    },
    img_1: {
        width: "350px",
        // height: "370px",
        // borderRadius: "20px",
        "@media screen and (max-width:1065px)": {
            display: "none"
        }
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
        border: "1px white"
    },
});

function Jobs() {
    const classes = useStyles();

    return (
        <>
            <div className={classes.main_top}>
                <div>
                    <img src={hiring} className={classes.img_1} alt="Man working on computer" />
                </div>
                <div>
                    <h1>We Are Hiring top talents</h1>
                    <p>Explore the world's most robust and extensive talent study,
                        revealing job market transformation and more.Explore the world's most
                        robust and extensive talent study,revealing job market
                        transformation and more.</p>
                </div>
                <div>
                    <button className={classes.button}>UPLOAD CV</button>
                </div>
            </div >
        </>
    );
}

export default Jobs;
