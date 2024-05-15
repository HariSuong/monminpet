import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppLayout from './ui/AppLayout'
import Home from './pages/Home'
import Products from './pages/products/Products'
import Product from './pages/products/Product'
import Posts from './pages/Posts'
import Post from './pages/Post'
import Services from './pages/Services'
import AboutUs from './pages/AboutUs'
import Academy from './pages/Academy'
import ProductsHome from './pages/products/ProductsHome'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/aboutUs' element={<AboutUs />} />
          <Route path='/academy' element={<Academy />} />
          <Route path='/products/home' element={<ProductsHome />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:productId' element={<Product />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='/posts/:postId' element={<Post />} />
          <Route path='/services' element={<Services />} />
        </Route>
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
