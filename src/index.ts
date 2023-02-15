import express, { Application, Request, Response } from 'express'
import path from 'path'

const app: Application = express()
const PORT = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))

app.use(express.static(path.join(__dirname, '../public')))

app.listen(PORT)

app.get('/', (req: Request, res: Response): void => res.render('index.ejs'))
app.get('/plans', (req: Request, res: Response): void => res.render('pages/plans.ejs'))
app.get('/addons', (req: Request, res: Response): void => res.render('pages/addons.ejs'))
app.get('/confirmation', (req: Request, res: Response): void => res.render('pages/confirmation.ejs'))