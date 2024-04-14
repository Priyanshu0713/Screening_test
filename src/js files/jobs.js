import { makeStyles } from "@mui/styles";
import img_1 from "../images/img_1.png";
import img_2 from "../images/img_2.png";
import img_3 from "../images/img_3.png";
import img_4 from "../images/img_4.png";
import img_5 from "../images/img_5.png";

const useStyles = makeStyles({
    top: {
        minWidth: "800px",
        margin: "0px 60px 0px 60px",
        backgroundColor: "#fcf2f2"
    },
    main: {
        textAlign: "center"
    },
    head: {
        display: "flex",
        gap: "10px",
        justifyContent: "center",
        "@media screen and (max-width:1140px)": {
            display: "block",
            textAlignLast: "center"
        }
    },
    img_big: {
        padding: "0px 0px 20px 0px"
    },
    img_1: {
        width: "500px",
        // height: "530px",
        borderRadius: "20px"
    }, img_2: {
        // width: "200px",
        height: "150px",
        borderRadius: "20px"
    }, img_3: {
        // width: "380px",
        height: "150px",
        borderRadius: "20px"
    }, img_4: {
        // width: "380px",
        height: "150px",
        borderRadius: "20px"
    }, img_5: {
        // width: "200px",
        height: "150px",
        borderRadius: "20px"
    },
    img_all: {
        display: "grid",
        gap: "20px",
        justifyItems: "center"
    },
    img_2_3: {
        display: "flex",
        gap: "inherit"
    },
    img_1_1: {

    }
});

function Jobs() {
    const classes = useStyles();

    return (
        <>
            <div className={classes.top}>
                <div className={classes.main}>
                    For Your Latest
                    <h1>Jobs By Location</h1>
                </div>
                <div className={classes.head}>
                    <div className={classes.img_big} >
                        <img src={img_1} className={classes.img_1} />
                        <div className={classes.img_1_1}>
                        </div>
                    </div>
                    <div className={classes.img_all}>
                        <div className={classes.img_2_3}>
                            <div>
                                <img src={img_2} className={classes.img_2} />
                            </div>
                            <div>
                                <img src={img_3} className={classes.img_3} />
                            </div>
                        </div>
                        <div className={classes.img_2_3}>
                            <div>
                                <img src={img_4} className={classes.img_4} />
                            </div>
                            <div>
                                <img src={img_5} className={classes.img_5} />
                            </div>
                        </div>
                    </div>
                </div></div></>
    );
}

export default Jobs;
