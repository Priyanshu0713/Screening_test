import { makeStyles } from "@mui/styles";
import blog from "../images/blog.png";
import blog_1 from "../images/blog_1.png";
import blog_2 from "../images/blog_2.png";
import blog_3 from "../images/blog_3.png";

const useStyles = makeStyles({
    main_top: {
        margin: "50px",
        // border: "2px solid #ccc",
        borderRadius: "10px",
        backgroundColor: "#FFFAED",
        minWidth: "800px"
    },
    top: {
        minWidth: "min-content"
    },
    main: {
        textAlign: "center",
        padding: "20px"
    },
    img_1: {
        width: "200px",
        height: "140px",
        borderRadius: "20px",
        padding: "10px"
    }, img_4: {
        width: "200px",
        height: "250px",
        borderRadius: "20px"
    },
    h3: {
        textAlign: "justify"
    },
    button: {
        backgroundColor: "#ed8c17",
        height: "50px",
        border: "1px solid white",
        color: "white",
        width: "140px",
        borderRadius: "5px",
        fontFamily: "none",
        fontStyle: "normal"
    },
    buttons: {
        textAlignLast: "center",
        margin: "inherit",
    },
    buttons_1: {
        backgroundColor: "#f2e5d0",
        color: "#FF5F49",
        margin: "5px",
        fontSize: "small",
        padding: "5px",
        fontWeight: "600"
    },
    main_div: {
        display: "flex",
        marginBottom: "20px",
        "@media screen and (max-width:1140px)": {
            display: "block",
        }
    },
    div_3: {
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        width: "fit-content"
    },
    div_3_1: {
        display: "flex",
        borderRadius: "10px",
        backgroundColor: "white",
        padding: "10px 10px 10px 10px",
        margin: "0px 60px 0px 60px",
        boxShadow: "10px 11px 20px #c9c0c0",
        "@media screen and (max-width:750px)": {
            display: "block"
        }
    },
    div_4: {
        backgroundColor: "white",
        padding: "10px 10px 10px 10px",
        margin: "0px 90px 0px 10px",
        width: "min-content",
        borderRadius: "10px",
        boxShadow: "10px 11px 20px #c9c0c0",
        "@media screen and (max-width:1140px)": {
            backgroundColor: "#FFFAED",
            boxShadow: "none",
            gap: "20px",
            width: "fit-content",
            display: "flex",
            flexDirection: "column",
            padding: "20px 0px 0px 0px",
            margin: "0px 0px 0px 0px"
        }
    },
    div_4_main: {
        "@media screen and (max-width:1140px)": {
            margin: "0px 60px 0px 60px",
            display: "flow",
            padding: "10px 10px 10px 10px",
            boxShadow: "10px 11px 20px #c9c0c0",
            borderRadius: "10px",
            backgroundColor: "white"
        }
    },
    div_4_1: {
        textAlign: "center"
    },
    div_4_2: {
        padding: "1px 10px 1px 10px"
    },
    img_4: {
        borderRadius: "10px"
    },
    read_more: {
        color: "#FF5F49",
    },
});

function Blog() {
    const classes = useStyles();

    return (
        <>
            <div className={classes.main_top}>
                <div className={classes.top}>
                    <div className={classes.main}>
                        <span>For You Latest</span>
                        <h1>Our Blogs</h1>
                    </div>
                </div>
                <div className={classes.main_div}>
                    <div className={classes.div_3}>
                        <div className={classes.div_3_1}>
                            <div>
                                <img src={blog_1} className={classes.img_1} />
                            </div>
                            <div>
                                <p>Jun 19 . 5 Min read<span className={classes.buttons_1}>WEATHER</span></p>
                                <h3>Talent Trends 2023: The Invisible Revolution</h3>
                                <p>
                                    Explore the world's most robust and extensive talent study,
                                    revealing job market transformation and more.
                                </p>
                            </div>
                        </div>
                        <div className={classes.div_3_1}>
                            <div>
                                <img src={blog_2} className={classes.img_1} />
                            </div>
                            <div>
                                <p>May 11 . 7 Min read<span className={classes.buttons_1}>APP</span></p>
                                <h3>India Salary Guide [2023 Update]</h3>
                                <p>
                                    Explore the world's most robust and extensive talent study, revealing job market transformation and more.Explore the world's most robust and extensive talent study, revealing job market transformation and more.
                                </p>
                            </div>
                        </div>
                        <div className={classes.div_3_1}>
                            <div>
                                <img src={blog_3} className={classes.img_1} />
                            </div>
                            <div>
                                <p>Fab 5 . 5 Min read<span className={classes.buttons_1}>VISUAL DESIGN</span></p>
                                <h3>India Salary Guide [2023 Update]</h3>
                                <p>
                                    Explore the world's most robust and extensive talent study,
                                    revealing job market transformation and more.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={classes.div_4}>
                        <div className={classes.div_4_main}>
                            <div className={classes.div_4_1}>
                                <img src={blog} className={classes.img_4} />
                            </div>
                            <div className={classes.div_4_2}>
                                <p>Dec 28.7 Min read<span className={classes.buttons_1}>LEADERSHIP</span></p>
                                <h3>India Salary Guide [2023 Update] </h3>
                                <p>
                                    Explore the world's most robust and extensive talent study, revealing job market transformation and more.Explore the world's most robust and extensive talent study, revealing job market transformation and more.Explore the world's most robust and extensive talent study, revealing job market transformation and more.Explore the world's most robust and extensive talent study, revealing job market transformation
                                </p>
                            </div>
                            <span className={classes.read_more}>Read More {'>'}</span>
                        </div>
                    </div>
                </div>
                <div className={classes.buttons}>
                    <button className={classes.button}>view more</button>
                </div>
            </div >
        </>
    );
}

export default Blog;
