import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const AppLayout = () => {
  return (
    <div className='relative'>
      <Header />
      <div className='overflow-auto'>
        <main className='mx-auto'>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AppLayout
