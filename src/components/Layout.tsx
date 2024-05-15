import React, { ReactNode } from 'react'

// Định nghĩa kiểu cho các prop của component `Layout`
interface LayoutProps {
  children: ReactNode // `children` có thể là bất kỳ nội dung React nào
}

// Component `Layout` với kiểu dữ liệu cho `children`
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className=''>
      {children} {/* Sử dụng `children` trong JSX */}
    </div>
  )
}

export default Layout
