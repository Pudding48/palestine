import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/index1_1.vue'
import Pal1_1 from '../components/pal1_1.vue'
import Isr1_1 from '../components/isr1_1.vue'
import Pal2 from '../components/pal2_1.vue'
import Isr2 from '../components/isr2_1.vue'
import Pal3 from '../components/pal3_1.vue'
import Isr3 from '../components/isr3_1.vue'
import Test from '../components/title.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pal1',
    name: 'Pal1',
    component: Pal1_1
  },
  {
    path: '/israel1',
    name: 'Isr1',
    component: Isr1_1
  },
  {
    path: '/pal2',
    name: 'Pal2',
    component: Pal2
  },
  {
    path: '/israel2',
    name: 'Isr2',
    component: Isr2
  },
  {
    path: '/pal3',
    name: 'Pal3',
    component: Pal3
  },
  {
    path: '/israel3',
    name: 'Isr3',
    component: Isr3
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  }
]

var scroll_pos
var fix

function scrollPos(){
  var bod = document.body;
  var par = bod.parentNode;
  console.log((bod.scrollTop || par.scrollTop));
  scroll_pos = (bod.scrollTop || par.scrollTop);
}

document.addEventListener("scroll", scrollPos)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    // } else if(to.name == "Home") {
    //   console.log(to);
    //   // return window.scrollTo(0,3000);
    //   return new Promise((resolve, reject) =>{
    //     setTimeout(() =>{
    //       console.log("timeout");
    //       resolve({x: 0, y: 5000}, 500)
    //     })
    //   })
    } else {
      console.log("out");
      return { x: 0, y: 0}
    }
  }
})

// router.beforeEach((to, from, next) =>{
//   if(from.name == "Home"){
//       fix = scroll_pos;
//       // console.log(fix);
//       next();
//   } else {
//     next();
//   }
// })

export default router
