/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'

const TextLinesController = () => import('#controllers/text_lines_controller')
const OpenGraphsController = () => import('#controllers/open_graphs_controller')
const LoginController = () => import('#controllers/auth/login_controller')
const LogoutController = () => import('#controllers/auth/logout_controller')
const RegisterController = () => import('#controllers/auth/register_controller')
const ForgotPasswordController = () => import('#controllers/auth/forgot_password_controller')
const ProfileController = () => import('#controllers/settings/profile_controller')
const AccountController = () => import('#controllers/settings/account_controller')
const HomeController = () => import('#controllers/home_controller')
const InfosController = () => import('#controllers/http/infos_controller')

// HOME
router.get('/', [HomeController, 'index']).as('home')

//INFOS
router.get('/qna', [InfosController, 'infos']).as('qna')

// OPENGRAPH
router
  .get('/opengraphs', [OpenGraphsController, 'index'])
  .as('openGraphs.index')
  .use(middleware.auth())
router
  .get('/opengraph/new', [OpenGraphsController, 'create'])
  .as('openGraphs.create')
  .use(middleware.auth())
router
  .post('/opengraph/new', [OpenGraphsController, 'store'])
  .as('openGraphs.store')
  .use(middleware.auth())
router
  .post('/opengraph/update', [OpenGraphsController, 'update'])
  .as('openGraph.update')
  .use(middleware.auth())
router
  .delete('/opengraph/delete/:id', [OpenGraphsController, 'destroy'])
  .as('openGraph.destroy')
  .use(middleware.auth())

// TEXTLINES
router
  .get('opengraph/textline/new/:id', [TextLinesController, 'show'])
  .as('textline.show')
  .use(middleware.auth())
router
  .post('opengraph/textline/new/:id', [TextLinesController, 'create'])
  .as('textline.create')
  .use(middleware.auth())
router
  .get('opengraph/textline/edit/:id', [TextLinesController, 'edit'])
  .as('textLine.edit')
  .use(middleware.auth())
router
  .post('opengraph/textline/update/:id', [TextLinesController, 'update'])
  .as('textLine.update')
  .use(middleware.auth())
router
  .delete('opengraph/textline/delete/:id', [TextLinesController, 'destroyTextLine'])
  .as('textLine.destroy')
  .use(middleware.auth())

router
  .delete('opengraph/:id/textlines/delete', [TextLinesController, 'destroyAllTextLines'])
  .as('alltextLine.destroy')
  .use(middleware.auth())

//* AUTH -> LOGIN, REGISTER, LOGOUT
router.get('/login', [LoginController, 'show']).as('auth.login.show').use(middleware.guest())
router.post('/login', [LoginController, 'store']).as('auth.login.store').use([middleware.guest()])
router
  .get('/register', [RegisterController, 'show'])
  .as('auth.register.show')
  .use(middleware.guest())
router
  .post('/register', [RegisterController, 'store'])
  .as('auth.register.store')
  .use([middleware.guest()])
router.post('/logout', [LogoutController, 'handle']).as('auth.logout').use(middleware.auth())

//* AUTH -> FORGOT PASSWORD
router
  .get('/forgot-password', [ForgotPasswordController, 'index'])
  .as('auth.password.index')
  .use([middleware.guest()])
router
  .post('/forgot-password', [ForgotPasswordController, 'send'])
  .as('auth.password.send')
  .use([middleware.guest()])
router
  .get('/forgot-password/reset/:value', [ForgotPasswordController, 'reset'])
  .as('auth.password.reset')
  .use([middleware.guest()])
router
  .post('/forgot-password/reset', [ForgotPasswordController, 'update'])
  .as('auth.password.update')
  .use([middleware.guest()])

//* SETTINGS -> ACCOUNT
router
  .get('/settings/account', [AccountController, 'index'])
  .as('settings.account')
  .use(middleware.auth())
router
  .put('/settings/account/email', [AccountController, 'updateEmail'])
  .as('settings.account.email')
  .use(middleware.auth())
router
  .delete('/settings/account', [AccountController, 'destroy'])
  .as('settings.account.destroy')
  .use(middleware.auth())

//* SETTINGS -> PROFILE
router
  .get('/settings/profile', [ProfileController, 'index'])
  .as('settings.profile')
  .use(middleware.auth())
router
  .put('/settings/profile', [ProfileController, 'update'])
  .as('settings.profile.update')
  .use(middleware.auth())

router.on('/jumpstart').render('pages/jumpstart').as('jumpstart')
