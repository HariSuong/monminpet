import { NavLink } from 'react-router-dom'

const SeeAll = ({ to }: { to: string }) => {
  return (
    <NavLink
      to={to}
      className='hidden text-sm font-semibold hover:text-slate-400 sm:block'
    >
      Xem tất cả
      <span aria-hidden='true'> &rarr;</span>
    </NavLink>
  )
}

export default SeeAll
