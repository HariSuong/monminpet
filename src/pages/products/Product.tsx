import { useParams } from 'react-router'
import Breadcrumb from '../../components/Breadcrumb'
import ProductInfo from '../../components/products/ProductInfo'
import SliderThumb from '../../components/products/SliderThumb'
import ProductDetail from '../../components/products/ProductDetail'
import Accordion from '../../components/Accordion'
import { useProduct } from '../../components/products/useProduct'
import Loading from '../../components/Loading'

const Product = () => {
  const { productId } = useParams<{ productId: string }>()
  const id = productId ? parseInt(productId, 10) : 0
  const { data: product, error, isLoading } = useProduct(id)

  if (isLoading) {
    return <Loading />
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  if (!product) {
    return <div>Product not found</div>
  }
  console.log(product)

  return (
    <section className='text-gray-700 body-font overflow-hidden bg-white'>
      <div className='container px-5 py-24 mx-auto'>
        <Breadcrumb
          parentPage='Danh mục'
          parentLink={`/products/?catId=${product.menus.id}`}
          currentPage={product.name}
        />
        <div className='lg:w-4/5 mx-auto flex flex-wrap'>
          <SliderThumb images={product.imgs} />
          <ProductInfo />
          <ProductDetail />
          {/* <SliderThumb images={product.imgs} />
          <ProductInfo product={product} />
          <ProductDetail product={product} /> */}
          <Accordion />
        </div>
      </div>
    </section>
  )
}

export default Product
