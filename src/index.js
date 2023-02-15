"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.set('view engine', 'ejs');
app.use(express_1.default.static('../public'));
app.listen(PORT);
app.get('/', (req, res) => res.render('index.ejs'));
app.get('/plans', (req, res) => res.render('pages/plans.ejs'));
app.get('/addons', (req, res) => res.render('pages/addons.ejs'));
app.get('/confirmation', (req, res) => res.render('pages/confirmation.ejs'));
