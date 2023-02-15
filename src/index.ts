import express, { Application, Request, Response } from 'express'

const app: Application = express()
const PORT = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.use(express.static('../public'))

app.listen(PORT)

app.get('/', (req: Request, res: Response): void => res.render('index.ejs'))
app.get('/plans', (req: Request, res: Response): void => res.render('pages/plans.ejs'))
app.get('/addons', (req: Request, res: Response): void => res.render('pages/addons.ejs'))
app.get('/confirmation', (req: Request, res: Response): void => res.render('pages/confirmation.ejs'))