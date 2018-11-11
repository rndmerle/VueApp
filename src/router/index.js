import Vue from 'vue'
import Router from 'vue-router'
import Navbar from '@/components/Site/Navbar'
import Home from '@/components/Site/Home'
import About from '@/components/Site/About'
import School from '@/components/Site/School'
import Apps from '@/components/Site/Apps'

import CRUD from '@/components/Apps/CRUD'
import SQL from '@/components/School/SQL'
import Python from '@/components/School/Python'
import SQLBasics from '@/components/School/SQL_Basics'
import PythonBasics from '@/components/School/Python_Basics'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/Navbar', name: 'Navbar', component: Navbar },
    { path: '/About', name: 'About', component: About },
    { path: '/School', name: 'School', component: School },
    { path: '/Apps', name: 'Apps', component: Apps },

    { path: '/Apps/CRUD', name: 'CRUD', component: CRUD },

    { path: '/School/SQL', name: 'SQL', component: SQL },
    { path: '/School/Python', name: 'Python', component: Python },
    { path: '/School/SQL/SQL_Basics', name: 'SQL_Basics', component: SQLBasics },
    { path: '/School/Python/Python_Basics', name: 'Python_Basics', component: PythonBasics }
  ]
})
