// Service.tsx
import { useParams } from 'react-router'
import Loading from '../components/Loading'
import { useService } from '../components/services/useService'
import QuyTrinh from '../assets/images/services/quytrinhlamviec.png'

const Service = () => {
  const { serviceId } = useParams<{ serviceId: string }>()
  const { data: service, error, isLoading } = useService(serviceId || '')

  console.log(service)
  console.log('id ', serviceId)
  if (isLoading) {
    return <Loading />
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  if (!service) {
    return (
      <>
        <div>Service not found</div>
        <img src={QuyTrinh} alt='Quy trình làm việc' className='w-full' />
      </>
    )
  }

  return (
    <div>
      {/* <Breadcrumb /> */}
      <h1>{service.title}</h1>
      <p>{service.content}</p>

      <img src={QuyTrinh} alt='Quy trình làm việc' className='w-full' />
    </div>
  )
}

export default Service
