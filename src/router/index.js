import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ItineraryView from '../views/ItineraryView.vue'
import ItineraryDetailView from '../views/ItineraryDetailView.vue'
import VehicleAssignmentView from '../views/VehicleAssignmentView.vue'
import RoomAssignmentView from '../views/RoomAssignmentView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/itinerary',
      name: 'itinerary',
      component: ItineraryView,
    },
    {
      path: '/itinerary/:day',
      name: 'itinerary-detail',
      component: ItineraryDetailView,
    },
    {
      path: '/vehicles',
      name: 'vehicles',
      component: VehicleAssignmentView,
    },
    {
      path: '/rooms',
      name: 'rooms',
      component: RoomAssignmentView,
    },
  ],
})

export default router
