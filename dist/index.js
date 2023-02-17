"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8000;
app.set('view engine', 'ejs');
app.set('views', path_1.default.join(__dirname, '/views'));
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
app.listen(PORT);
app.get('/', (req, res) => res.render('index'));
app.get('/plans', (req, res) => res.render('pages/plans'));
app.get('/addons', (req, res) => res.render('pages/addons'));
app.get('/confirmation', (req, res) => res.render('pages/confirmation'));
