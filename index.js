/*

- GET /meeting - Fogadó óra időpontok lekérdezése (összes)
- GET /meeting/:mid - Egy adott tanár fogadóórájának időpontja
- PUT /meeting - Új fogadó óra hozzáadása
- DELETE /meeting/:mid - Adott fogadóóra törlése
- PATCH /meeting/:mid - Adott fogadó órának valamelyik elemét módosítjuk
- POST /meeting/search - Fogadóóra keresése

*/

const meeting = [
    {
        "id" : "1",
        "tanar" : "Komoróczy Tamás",
        "datum" : "2022-03-18",
        "ora" : "16",
        "perc" : "00"
    },
    {
        "id" : "2",
        "tanar" : "Komoróczy János",
        "datum" : "2022-03-18",
        "ora" : "16",
        "perc" : "20"
    },
    {
        "id" : "3",
        "tanar" : "Bakti András",
        "datum" : "2022-03-18",
        "ora" : "16",
        "perc" : "40"
    },
    {
        "id" : "4",
        "tanar" : "Veress Tibor",
        "datum" : "2022-03-18",
        "ora" : "17",
        "perc" : "00"
    }
]

let maxId = 4;

const express = require('express');
const port = 4455;
const app = express();
const bodyParser = require('body-parser');
const req = require('express/lib/request');
app.use(bodyParser.json());

const getMeeting = (req, res, next) => {
    return res.json(meeting);
}

const getOneMeeting = (req, res, next) => {
    return next();
}

const addNewMeeting = (req, res, next) => {
    if (typeof req.body.tanar == 'undefined' || typeof req.body.datum == 'undefined' || typeof req.body.ora == 'undefined') {
        return res.status(400).json({ 'Error' : 'Missing datas'});
    }
    if ( req.body.perc != ('00' && '20' && '40') ) {
        return res.status(404).json({'error': `A megadott ${req.body.perc}.perc kezdés nem megfelelő! Az érték csak 00, 20 ,vagy 40 lehet!`});
    }
    maxId++;
    const newMeeting = {
        id: maxId,
        tanar: req.body.tanar,
        datum: req.body.datum,
        ora: req.body.ora,
        perc: req.body.perc
    }
    meeting.push(newMeeting);    
    return res.json(newMeeting);
}


const deleteMeeting = (req, res, next) => {
    return next();
}


const updateMeeting = (req, res, next) => {
    return next();
}


const searchMeeting = (req, res, next) => {
    return next();
}


app.get("/meeting", getMeeting);
app.get("/meeting/:mid", getOneMeeting);
app.put("/meeting", addNewMeeting);
app.delete("/meeting/:mid", deleteMeeting);
app.patch("/meeting/:mid", updateMeeting);
app.post("/meeting/search", searchMeeting);

app.listen(port, () => {
    console.log(`A szerver fut a ${port} porton`)
})