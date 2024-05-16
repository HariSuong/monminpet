// Product.tsx

import ProductInfo from '../../components/products/ProductInfo'
import SliderThumb from '../../components/products/SliderThumb'

const Product = () => {
  return (
    <section className='text-gray-700 body-font overflow-hidden bg-white'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='lg:w-4/5 mx-auto flex flex-wrap'>
          <SliderThumb />
          <ProductInfo />
        </div>
      </div>
    </section>
  )
}

export default Product
