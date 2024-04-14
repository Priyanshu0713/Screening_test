import { makeStyles } from "@mui/styles";
import b_img from "../images/b_img.png";
import logo from "../images/logo.JPG";
import footer from "../images/footer.png";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import React from 'react';

const useStyles = makeStyles({
    main_top: {
        margin: "0px 60px 0px 50px",
        display: "flex",
        backgroundColor: "#062F61",
        minWidth: "800px",
        justifyContent: "space-around",
        "@media screen and (max-width:1024px)": {
            justifyContent: "left"
        }
    },
    top: {
        minWidth: "min-content"
    },
    main: {
        textAlign: "center",
        "& h1": {
            fontFamily: "none"
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
        fontFamily: "cursive",
        border: "1px white"
    },
    cards: {
        minWidth: "800px",
        display: "flex",
        textAlign: "center",
        margin: "0px 60px 0px 50px",
        backgroundImage: `url(${b_img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    },
    card: {
        minWidth: "50px",
        width: "500px",
        textAlign: "left",
        padding: "10px 0px 0px 20px",
        backgroundColor: "#051b36",
        height: "400px",
        mixBlendMode: "hard-light",
        color: "white",
        "& img": {
            width: "200px",
        },
        "& p": {
            width: "250px"
        },
        "& ul >li": {
            listStyleType: "none",
            padding: "5px",
            textWrap: "nowrap"
        }
    },
    main_img: {
        width: "400px",
        "@media screen and (max-width:1140px)": {
            display: "none"
        }
    },
    main_img_div: {
        padding: "10px 0px 5px 80px"
    },
    main_h1_p: {
        marginLeft: "inherit",
        marginBottom: "30px",
        "& h1": {
            width: "500px",
            color: "white"
        },
        "& p": {
            color: "white",
            width: "500px"
        }
    },
    main_btn: {
        backgroundColor: "white",
        width: "310px",
        borderRadius: "5px",
        "& button": {
            borderRadius: "inherit",
            backgroundColor: "#FFA826",
            height: "40px",
            width: "90px",
        },
        "& input": {
            padding: "10px",
            borderRadius: "5px",
            border: "10px solid white"
        }
    },
    footer_side: {
        backgroundColor: "#051b36",
        margin: "0px 60px 0px 50px",
        display: "flex",
        minWidth: "800px",
        textAlign: "center",
        justifyContent: "space-around",
        "& ul": {
            display: "flex",
            gap: "10px",
            listStyleType: "none",
            width: "900px"
        },
        "& ul >li": {
            color: "white",
            minWidth: "200px"
        }
    },
    footer_side_1: {
        height: "50px",
        backgroundColor: "#0F4371",
        margin: "0px 60px 0px 50px",
        display: "flex",
        minWidth: "800px",
        textAlign: "center",
        color: "white",
        alignItems: "center",
        justifyContent: "space-around",
        "& ul": {
            display: "flex",
            gap: "10px",
            listStyleType: "none",
            textWrap: "nowrap",
        },
        "& ul >li": {
            color: "white",
            placeContent: "center"
        }
    }
});

function Footer() {
    const classes = useStyles();

    return (
        <>
            <div className={classes.main_top}>
                <div className={classes.main_img_div}>
                    <img src={footer} className={classes.main_img} />
                </div>
                <div className={classes.main_h1_p}>
                    <h1>
                        Subscribe to our news letter
                        Get job Notifications
                    </h1>
                    <p>
                        when an unknown printer took a galley of type and scrambled it to make a
                        type specimen book. It has survived not only five centuries,
                    </p>
                    <div className={classes.main_btn}>
                        <input type="text" placeholder="Enter your email address" />
                        <button>Submit</button>
                    </div>
                </div>
            </div >
            <div className={classes.cards}>
                <div className={classes.card}>
                    <img src={logo} />
                    <h3>About Us</h3>
                    <p>Lorem Ipsum has been the industry's standard dummytext ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type spe
                        cimen book.</p>
                </div>
                <div className={classes.card}>
                    <h3>Jobs By Function</h3>
                    <ul>
                        <li>
                            Analytics
                        </li>
                        <li>
                            Banking & Financial Services
                        </li>
                        <li>
                            Consultancy, Strategy & Change
                        </li>
                        <li>
                            Engineering & Manufacturing
                        </li>
                        <li>
                            Finance & Accounting
                        </li>
                        <li>
                            Healthcare & Life Sciences
                        </li>
                        <li>
                            Human Resources
                        </li>
                    </ul>
                </div>
                <div className={classes.card}>
                    <h3>General</h3>
                    <ul>
                        <li>
                            Page Executive
                        </li>
                        <li>
                            Page Outsourcing
                        </li>
                        <li>
                            PageGroup corporate site
                        </li>
                        <li>
                            Investor site
                        </li>
                        <li>
                            Email disclaimer
                        </li>
                        <li>
                            Company compliance
                        </li>
                    </ul>
                </div>
                <div className={classes.card}>
                    <h3>Links</h3>
                    <ul>
                        <li>
                            Information Technology
                        </li>
                        <li>
                            Insurance
                        </li>
                        <li>
                            Legal Marketing
                        </li>
                        <li>
                            Procurement & Supply Chain
                        </li>
                        <li>
                            Retail
                        </li>
                        <li>
                            Sales
                        </li>
                    </ul>
                </div>
            </div>
            <div className={classes.footer_side}>
                <ul>
                    <li>
                        <FaMapMarkerAlt />101 E 129th St, East Chicago, IN 46312, US
                    </li>
                    <li>
                        <FaEnvelope />  hyratchconsultancypvtltd.com
                    </li>
                    <li>
                        <FaPhone />   Need help? 24/7 +91 5484 194 645
                    </li>
                </ul>
            </div>
            <div className={classes.footer_side_1}>
                <div>
                    @ 2023-24 Hyratch consultancy pvt ltd. All rights Reserved
                </div>
                <div>
                    <ul>
                        <li>
                            <p>Follow Us</p>
                        </li>
                        <li>
                            <FaFacebook />
                        </li>
                        <li>
                            <FaTwitter />
                        </li>
                        <li>
                            <FaInstagram />
                        </li>
                        <li>
                            Terms Of Services |
                        </li>
                        <li>
                            Privacy Policy  |
                        </li>
                        <li>
                            Cookie Policy
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Footer;
