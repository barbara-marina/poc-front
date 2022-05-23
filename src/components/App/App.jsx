import axios from "axios";
import { useState, useEffect } from "react";
import { Button, Form, Input } from "./style";

export default function App() {
    const [ name, setName] = useState("");

    useEffect(() => {
        console.log(document.cookie)

        const config = {Cookies: document.cookie}
        const request = axios.get("http://localhost:5000/sendName", config)
        request.then()
        request.catch(e => console.log(e));
    },[]);

    function updatePage() {
        console.log(document.cookie)

        const config = {Cookies: document.cookie}
        const request = axios.get("http://localhost:5000/sendName", config)
        request.catch(e => console.log(e));
    }

    function sendName(e){
        e.preventDefault();
        const request = axios.post("http://localhost:5000/sendName", {name})
        request.then(res => {setName("");
                            document.cookie = res.config.data;
                            updatePage();});
        request.catch(e => console.log(e));
    }

    return (
        <Form onSubmit={sendName}>
            <Input type="text" value={name} onChange={e => setName(e.target.value)}
            placeholder="Digite seu nome..." required />
            <Button type="subimit">ENVIAR</Button>
        </Form>
    );
}