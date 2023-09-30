"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const calender_1 = require("../services/calender");
const calender_2 = require("../db/calender");
const validentry_1 = require("../middlewares/validentry");
const router = express_1.default.Router();
router.get('/', (_req, res) => {
    (0, calender_1.getAllEntries)()
        .then(data => {
        res.send(data);
    })
        .catch(_err => {
        res.sendStatus(500);
    });
});
router.get('/:id', (req, res) => {
    const id = Number(req.params.id);
    (0, calender_2.getOne)(id)
        .then(data => {
        res.send(data);
    })
        .catch(_err => {
        res.sendStatus(500);
    });
});
router.post('/', validentry_1.validEntry, (req, res) => {
    const { entry } = req.body;
    (0, calender_1.createEntry)(entry)
        .then(data => {
        res.send(data);
    })
        .catch(err => {
        console.log(err);
        res.sendStatus(500);
    });
});
router.patch('/:id', validentry_1.validEntry, (req, res) => {
    const id = Number(req.params.id);
    const { entry } = req.body;
    (0, calender_1.updateEntry)(id, entry)
        .then(data => {
        res.send(data);
    })
        .catch(err => {
        console.log(err);
        res.sendStatus(500);
    });
});
router.delete('/:id', (req, res) => {
    const id = Number(req.params.id);
    (0, calender_1.removeEntry)(id)
        .then(data => {
        res.send(data);
    })
        .catch(err => {
        console.log(err);
        res.sendStatus(500);
    });
});
exports.default = router;
