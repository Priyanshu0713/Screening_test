import { BsTextWrap } from "react-icons/bs";
import header from "../images/header.png";
import navbar_logo from "../images/navbar_logo.png";
import { makeStyles } from "@mui/styles";
import CircleNotificationsNoneIcon from '@mui/icons-material/CircleNotifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const useStyles = makeStyles({
    container: {
        minWidth: "800px",
        margin: "0px 60px 0px 60px",
    },
    header: {
        backgroundColor: "white",
        color: "black",
        overflow: "overlay",
        alignItems: "center",
        "& ul": {
            display: "flex",
            gap: "40px",
            textWrap: "nowrap",
            listStyleType: "none",
            margin: "20px 0px 20px 0px",
            alignItems: "center",
            "& li": {
                "& img": {
                    width: "100px"
                }
            },
        },
        "& ul li:nth-child(2), & ul li:nth-child(3), & ul li:nth-child(4), & ul li:nth-child(5), & ul li:nth-child(6), & ul li:nth-child(7)": {
            "@media screen and (max-width:1070px)": {
                display: "none"
            }
        },
        justifyContent: "space-between",
        display: "flex",
        "& ul li:nth-child(2), & ul li:nth-child(5), & ul li:nth-child(6)": {
            listStyleType: "none"
        },
        "& ul li:nth-child(3), & ul li:nth-child(4), & ul li:nth-child(7)": {
            listStyleType: "disclosure-open",
        },
        "& > div:nth-child(2)": {
            marginRight: "30px",
            gap: "2px",
            "& ul": {
                "& > li:nth-child(2)": {
                    backgroundColor: "red",
                    color: "white",
                    width: "110px",
                    border: "0px",
                    height: "35px",
                    margin: "0px 10px 5px 10px",
                    backgroundColor: "#e1a405",
                    textAlign: "center",
                    alignContent: "center",
                    display: "inherit",
                    alignItems: "center",
                    justifyContent: "center"
                }
            }
        }
    },
    header_1: {
        backgroundColor: "#062F61",
        color: "white",
        overflow: "overlay",
        "& ul": {
            display: "flex",
            gap: "40px",
            textWrap: "nowrap",
            listStyleType: "none",
            "& > li:nth-child(8)": {
                listStyleType: "disclosure-open"
            }
        },
    },
    center: {
        textAlign: "center",
        backgroundImage: `url(${header})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "multiply",
        backgroundColor: "#8ec0ff",
        height: "500px",
        "& > div:nth-child(2)": {
            padding: "20px",
            fontFamily: "fangsong",
            "& h2": {
                color: "white",
                fontSize: "xxx-large",
                "& span": {
                    backgroundColor: "cornsilk",
                    color: "#062F61",
                }
            },
            "& p": {
                color: "white",
                marginTop: "auto",
                fontSize: "x-large"
            }
        },
        "& span": {
            color: "white",
            margin: "0px 100px 0px 100px",
        },
        "& > div:nth-child(5)": {
            "& ul": {
                color: "white",
                display: "flex",
                gap: "20px",
                listStyleType: "none",
                justifyContent: "center",
                alignItems: "center"
            }
        },
        "& ul > li:first-child": {
            backgroundColor: "#062F61",
            padding: "10px"
        }
    },
    footer: {
        backgroundColor: "#062F61",
        color: "white",
        padding: "10px",
        "& h3": {
            textAlign: "center"
        },
        "& ul": {
            overflow: "overlay",
            display: "flex",
            gap: "40px",
            textWrap: "nowrap",
            listStyleType: "none",
            fontSize: "x-large",
            justifyContent: "center"
        }
    },
    search: {
        display: "ruby-text",
        marginTop: "30px",
        "& input": {
            height: "50px",
            width: "200px",
            textAlign: "center",
            border: "0px"
        },
        "& > div:nth-child(3)": {
            color: "white",
            border: "0px",
            height: "52px",
            backgroundColor: "#ffffff",
            alignContent: "center",
        },
        "& button": {
            color: "white",
            width: "110px",
            border: "0px",
            height: "35px",
            margin: "0px 10px 0px 10px",
            borderRadius: "5px",
            backgroundColor: "#e1a405",
        }
    }
});
function Header() {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <div>
                    <ul>
                        <li>
                            <img src={navbar_logo} alt="Header" />
                        </li>
                        <li>
                            Home
                        </li>
                        <li>
                            Find Jobs
                        </li>
                        <li>
                            Employers
                        </li>
                        <li>
                            Candidate
                        </li>
                        <li>
                            Blogs
                        </li>
                        <li>
                            Pages
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>
                            <CircleNotificationsNoneIcon />
                        </li>
                        <li>
                            <AccountCircleIcon />LogIn
                        </li>
                    </ul>
                </div>
            </div>
            <div className={classes.header_1}>
                <ul>
                    <li>Design & Creative</li>
                    <li>Digital Marketing</li>
                    <li>Finance & Accounting</li>
                    <li>Development & IT</li>
                    <li>Programming & Tech</li>
                    <li>Music & Audio</li>
                    <li>Video & Animation</li>
                    <li>More</li>
                </ul>
            </div>
            <div className={classes.center}>
                <div>
                </div>
                <div>
                    <div>
                        <p>#1 Online Market Place</p>
                    </div>
                    <h2>
                        It’s Easy To find Your<br />
                        <span>Dream Job</span>
                    </h2>
                </div>
                <span>
                    It has survived not only five centuries, but also the leap into electronic typesetting,<br />
                    remaining essentially unchanged.
                </span>
                <div className={classes.search}>
                    <div>
                        <input type="text" placeholder='JOB TITLE, COMPANY' />
                    </div>
                    <div>
                        <input type="text" placeholder='Location : ENTER CITY' />
                    </div>
                    <div>
                        <button>FIND JOBS</button>
                    </div>
                </div>
                <div>
                    <ul>
                        <li>POPULAR :</li>
                        <li>Designer</li>
                        <li>Developer</li>
                        <li>Project Manager</li>
                        <li>content Writer</li>
                    </ul>
                </div>
            </div>
            <div className={classes.footer}>
                <h3>Over 100,000 recruiters use Jobtex to modernize their hiring</h3>
                <ul>
                    <li>Vanfaba</li>
                    <li>LH. Tech</li>
                    <li>Tyaalpha</li>
                    <li>BRYCRY.TEC</li>
                    <li>PANADOXN</li>
                    <li>Shangxi</li>
                </ul>
            </div>
        </div>
    )
}
export default Header;