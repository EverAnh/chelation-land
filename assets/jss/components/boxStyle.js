const boxStyle = theme => ({
    box: {
        backgroundColor: "white",
        border: "2px solid #9379cc",
        borderRadius: "6px",
        width: "100%",
        position: "relative",
        display: "flex",
        alignItems: "center",
        minWidth: "0",
        wordWrap: "break-word",
        transition: "all 300ms linear",
        marginTop: "15px",
        [theme.breakpoints.down("sm")]: {
            marginTop: "5px",
            fontSize: "1rem",
            border: "1px solid #9379cc",
        }
    },
    callout: {
        flexDirection: "column",
        alignItems: "stretch"
    },
    calloutHeader: {
        backgroundImage: "linear-gradient(to right, #c380e2 0%, #fbdff1 50%, #f5ebdb 100%)",
        borderRadius: "6px 6px 0 0",
        color: "white",
        margin: "1px",
        padding: "6px",
        textShadow: "1px 1px 0px #9379cc, -1px -1px 0px #9379cc, -1px 1px 0px #9379cc, 1px -1px 0px #9379cc",
    },
    boxBody: {
        padding: "0.9375rem",
        flexGrow: "1",
        [theme.breakpoints.down("sm")]: {
            padding: "10px",
            //lineHeight: "1.25em"
        }
    },
    categImg: {
        padding: "0.9375rem",
    },
    categImg2: {
        float: "right",
        marginLeft: "0.9375rem",
        height: "100px",
        width: "100px",
        [theme.breakpoints.down("xs")]: {
            height: "50px",
            width: "50px"
        }
    }
});

export default boxStyle;
