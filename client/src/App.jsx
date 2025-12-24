import { Route, Routes, useLocation } from "react-router-dom"
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Movies from './pages/Movies.jsx'
import MovieDetails from './pages/MovieDetails.jsx'
import SeatLayout from './pages/SeatLayout.jsx'
import MyBooking from './pages/MyBooking.jsx'
import Favorite from './pages/Favorite.jsx'
import { Toaster } from "react-hot-toast"
import Layout from "./pages/admin/Layouts.jsx"
import Dashboard from "./pages/admin/Dashboard.jsx"
import ListBooking from "./pages/admin/ListBooking.jsx"
import ListShows from "./pages/admin/ListShows.jsx"
import AddShows from "./pages/admin/AddShows.jsx"
import { useEffect } from "react"
import axios from 'axios'



function App() {

  const isAdminRoute = useLocation().pathname.startsWith('/admin')

  

  return (
    <>
      <Toaster />
      {!isAdminRoute && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/movies/:id/:date" element={<SeatLayout />} />
        <Route path="/my-booking" element={<MyBooking />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/admin/*" element={<Layout />} >
          <Route index  element={<Dashboard/>} />
          <Route path="add-shows" element={<AddShows />} />
          <Route path="list-shows" element={<ListShows />} />
          <Route path="list-booking" element={<ListBooking />} />
        </Route>
      </Routes>

      {!isAdminRoute  && <Footer />}
    </>
  )
}

export default App