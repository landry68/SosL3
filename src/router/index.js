import { createRouter, createWebHistory } from "vue-router";

import Home from "../Views/home.vue";
import About from "../Views/about.vue";
import Services from "../Views/services.vue";

import Contact from "../Views/contact.vue";

import Photos from "../Views/photos.vue";
import Videos from "../Views/videos.vue";
import kigali from "../Views/kigali.vue";
import south from "../Views/south.vue";
import north from "../Views/north.vue";
import west from "../Views/west.vue";
import east from "../Views/east.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },

  {
    path: "/about",
    name: "About",
    component: About
  },

  {
    path: "/services",
    name: "Services",
    component: Services
  },


  {
    path: "/contact",
    name: "Contact",
    component: Contact
  },

  {
    path: "/photos",
    name: "Photos",
    component: Photos
  },

  {
    path: "/videos",
    name: "Videos",
    component: Videos
  },
{
  path:"/kigali",
  name:"kigali",
  component: kigali
},
{
 path:"/south",
  name:"south",
  component: south 
},
{
 path:"/north",
  name:"north",
  component: north 
},
{
 path:"/west",
  name:"west",
  component: west 
},
{
 path:"/east",
  name:"east",
  component: east 
}

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;