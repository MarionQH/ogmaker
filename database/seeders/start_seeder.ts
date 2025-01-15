import OpenGraph from '#models/open_graph'
import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method

    await User.createMany([
      {
        fullName: 'user1',
        email: 'user1@test.com',
        password: '12345678',
      },
      {
        fullName: 'user2',
        email: 'user2@test.com',
        password: '12345678',
      },
    ])

    await OpenGraph.createMany([
      {
        name: 'test1',
        ogUrl:
          'https://res.cloudinary.com/bdavidxyz-com/image/upload/c_scale,w_900,h_506,f_auto/w_1200%2Ch_630,q_100/l_text:Montserrat_80_bold:Simplest,co_rgb:000,c_fit,w_1400,h_240/fl_layer_apply,g_south_west,x_600,y_350/l_text:Montserrat_80_bold:Turbo%20Frame,co_rgb:0094E8,c_fit,w_1400,h_240/fl_layer_apply,g_south_west,x_600,y_260/l_text:Montserrat_80_bold:example,co_rgb:000,c_fit,w_1400,h_240/fl_layer_apply,g_south_west,x_600,y_150/v1723632861/alsohelp/alsohelp_default',
        prefixUrl: 'https://res.cloudinary.com/bdavidxyz-com/image/upload',
        userId: 1,
      },
      {
        name: 'test2',
        ogUrl:
          'https://res.cloudinary.com/bdavidxyz-com/image/upload/c_scale,w_900,h_506,f_auto/w_1200%2Ch_630,q_100/l_text:Montserrat_80_bold:Hatchbox,co_rgb:000,c_fit,w_1400,h_240/fl_layer_apply,g_south_west,x_600,y_350/l_text:Montserrat_80_bold:honest,co_rgb:0094E8,c_fit,w_1400,h_240/fl_layer_apply,g_south_west,x_600,y_260/l_text:Montserrat_80_bold:opinion,co_rgb:000,c_fit,w_1400,h_240/fl_layer_apply,g_south_west,x_600,y_150/v1723632861/alsohelp/alsohelp_default',
        prefixUrl: 'https://res.cloudinary.com/bdavidxyz-com/image/upload',
        userId: 1,
      },
      {
        name: 'test3',
        ogUrl:
          'https://res.cloudinary.com/bdavidxyz-com/image/upload/c_scale,w_900,h_506,f_auto/w_1200%2Ch_630,q_100/l_text:Montserrat_70_bold:How%20to,co_rgb:000,c_fit,w_1400,h_240/fl_layer_apply,g_south_west,x_600,y_350/l_text:Montserrat_70_bold:install%20laravel%2011,co_rgb:0094E8,c_fit,w_1400,h_240/fl_layer_apply,g_south_west,x_600,y_250/l_text:Montserrat_70_bold:on%20Linux,co_rgb:000,c_fit,w_1400,h_240/fl_layer_apply,g_south_west,x_600,y_150/v1723632861/alsohelp/alsohelp_default',
        prefixUrl: 'https://res.cloudinary.com/bdavidxyz-com/image/upload',
        userId: 1,
      },
      {
        name: 'test4',
        ogUrl:
          'https://res.cloudinary.com/bdavidxyz-com/image/upload/c_scale,w_900,h_506,f_auto/w_1200%2Ch_630,q_100/l_text:Montserrat_80_bold:How%20to,co_rgb:000,c_fit,w_1400,h_240/fl_layer_apply,g_south_west,x_600,y_350/l_text:Montserrat_80_bold:deploy%20Rails,co_rgb:0094E8,c_fit,w_1400,h_240/fl_layer_apply,g_south_west,x_600,y_240/l_text:Montserrat_80_bold:to%20Heroku,co_rgb:000,c_fit,w_1400,h_240/fl_layer_apply,g_south_west,x_600,y_150/v1723632861/alsohelp/alsohelp_default',
        prefixUrl: 'https://res.cloudinary.com/bdavidxyz-com/image/upload',
        userId: 1,
      },
      {
        name: 'test5',
        ogUrl:
          'https://res.cloudinary.com/bdavidxyz-com/image/upload/c_scale,w_900,h_506,f_auto/w_1200%2Ch_630,q_100/l_text:Montserrat_106_bold:Ruby,co_rgb:000,c_fit,w_1400,h_240/fl_layer_apply,g_south_west,x_600,y_350/l_text:Montserrat_106_bold:regex,co_rgb:0094E8,c_fit,w_1400,h_240/fl_layer_apply,g_south_west,x_600,y_260/l_text:Montserrat_106_bold:guide,co_rgb:000,c_fit,w_1400,h_240/fl_layer_apply,g_south_west,x_600,y_150/v1723632861/alsohelp/alsohelp_default',
        prefixUrl: 'https://res.cloudinary.com/bdavidxyz-com/image/upload',
        userId: 1,
      },
      {
        name: 'test6',
        ogUrl:
          'https://res.cloudinary.com/bdavidxyz-com/image/upload/c_scale,w_900,h_506,f_auto/w_1200%2Ch_630,q_100/l_text:Montserrat_106_bold:Rollup,co_rgb:000,c_fit,w_1400,h_240/fl_layer_apply,g_south_west,x_600,y_350/l_text:Montserrat_106_bold:vs,co_rgb:0094E8,c_fit,w_1400,h_240/fl_layer_apply,g_south_west,x_600,y_260/l_text:Montserrat_106_bold:esbuild,co_rgb:000,c_fit,w_1400,h_240/fl_layer_apply,g_south_west,x_600,y_150/v1723632861/alsohelp/alsohelp_default',
        prefixUrl: 'https://res.cloudinary.com/bdavidxyz-com/image/upload',
        userId: 1,
      },
    ])
  }
}
