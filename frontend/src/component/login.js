import React, { useEffect, useState, useRef } from "react";
import Form from "react-bootstrap/Form";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));
let url = "https://sidestreamapp.ew.r.appspot.com/"
function Login() {
    const classes = useStyles();
    const [name, setName] = useState("");
    const [database, setDatabase] = useState(false);
    const [database1, setDatabase1] = useState(true);
    const [data, setData] = useState([]);
    const [data1, setData1] = useState([]);
    const [dataintersection, setDataintersection] = useState([]);
    const [i, setI] = useState(1);
    const [j, setJ] = useState(0);
    const [dataundo, setDataundo] = useState();
    function handleSubmit(event) {
        setDatabase(true);
        setDatabase1(Math.random());
        getData();
        getDataundo();
        console.warn(dataundo)
    }
    function handleChange(event) {
        setName(event.target.value)

    }
    function getData() {
        fetch(url).then((response) => response.json()).then((json) => {
            setData(json);
            console.warn("yes runs agan")
        });
    }
    function getDataundo() {
        fetch(url.concat("undo_all")).then((response) => response.json()).then((json) => {
            setDataundo(json);
            console.warn("yes runs agan")
        });
    }
    function getDataintersection() {
        fetch(url.concat("get_list_intersection_counts"),{
            method: "POST",
            cache: "no-cache",
            headers: {
                "content_type": "application/json",
            },
            body: JSON.stringify(data)
        }).then((response) => response.json()).then((json) => {
            setDataintersection(json);
            console.warn("yes runs agan")
        });
    }
    function renderHeader() {
        let headerElement = ["index", "Status", "code", "text", " Click to change Status"]
        return (headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        }));
    }
    function renderintersectionHeader() {
        let headerElement = ["resolved_backlog", "resolved_unresolved", "resolved_unresolved"]
        return (headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        }));
    }
    function renderBody() {
        return data && data.map(({ code, index, status, text }) => {
            return (<tr key={index}>
                <td>{index}</td>
                <td>{status}</td>
                <td>{code}</td>
                <td>{text}</td>
                <td className='opration'>
                    {status == "resolved" ? <button type="submit" onClick={(event) => changeStatus(event, index, status)} className="buttonundo"> UNRESOLVE </button> : status == "unresolved" ? <button onClick={(event) => changeStatus(event, index, status)} style={{ color: "green" }} className="buttonundo"> RESOLVE </button> : ""}
                </td>
            </tr>);
        })
    }
    function renderintersectionBody() {
        return dataintersection && dataintersection.map(({ resolved_backlog, resolved_unresolved, unresolved_backlog }) => {
            return (<tr>
                <td>{resolved_backlog}</td>
                <td>{resolved_unresolved}</td>
                <td>{unresolved_backlog}</td>
            </tr>);
        })
    }
    function changeStatus(event, index, status) {
        var index1 = index;
        data.map((key, index) => {
            if (key.index == index1) {
                console.warn("hi")
                console.warn(data[index1].status)
                if (status == "resolved") {
                    data[index1].status = "unresolved"
                    data[index1].text = "Error ABC occured, that is `unresolved`"
                }
                else {
                    data[index1].status = "resolved"
                    data[index1].text = "Error ABC occured, that is `resolved`"
                }
                setData(data)
                setData1(Math.random())
                setI(index)
                setJ(j + 1)
                console.warn(data)
            }
        })
    }
    function handleClick() {
        if (data[i].status == "resolved") {
            data[i].status = "unresolved"
            data[i].text = "Error ABC occured, that is `unresolved`"
        }
        else {
            data[i].status = "resolved"
            data[i].text = "Error ABC occured, that is `resolved`"
        }
        setData(data)
        setData1(Math.random())
    }
    function handleClick1() {
        getDataintersection();
        setDatabase("intersection")
        setData1(Math.random())
        console.log(database)
    }
    function handleClick2() {
        setDatabase(true)
    }
    function handleClickundo() {
        setData(dataundo)
    }
    // useEffect(()=>{setDataundo(data)},[])
    return (
        <div>{database == true ?
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                        </Typography>
                        <Button onClick={handleClick1} color="inherit">Intersection</Button>
                        <Button onClick={handleClick} color="inherit">Undo</Button>
                        <Button color="inherit" onClick={() => window.location.reload()}>Logout</Button>
                    </Toolbar>
                </AppBar>
                <h1 style={{ marginTop: "50px" }}>Welcome {name}</h1>
                <h3 style={{ marginTop: "60px" }}> Requests = {j} </h3>
                <table style={{ marginTop: "5px" }} id="data">
                    <thead>
                        <tr>{renderHeader()}</tr>
                    </thead>
                    <tbody>
                        {renderBody()}
                    </tbody>
                </table>
            </div> : database == "intersection" ?
                <div>
                    <AppBar position="static">
                        <Toolbar>
                            <Typography variant="h6" className={classes.title}>

                            </Typography>
                            <Button color="inherit" onClick={handleClick2}>Home</Button>
                            <Button color="inherit" onClick={() => window.location.reload()}>Logout</Button>
                        </Toolbar>
                    </AppBar>
                    <h1 style={{ marginTop: "50px" }}>Welcome {name}</h1>
                    <table style={{ marginTop: "5px" }} id="data">
                        <thead>
                            <tr>{renderintersectionHeader()}</tr>
                        </thead>
                        <tbody>
                            {renderintersectionBody()}
                        </tbody>
                    </table>
                </div>
                : <div><h1 style={{ marginTop: "30px" }}>Sidestream Coding Challenge</h1><div className="gh-signin" >
                    <div>
                        <Form onSubmit={handleSubmit}>
                            <Form.Control tabindex="3" type="text" placeholder="Operators name" className="gh-input" value={name} onChange={(event) => handleChange(event)}></Form.Control>
                            <Button variant="contained" color="primary" type="submit" className="btn">
                                Login
                        </Button>
                        </Form>
                    </div>
                </div></div>}
        </div>
    );
}
export default Login;
