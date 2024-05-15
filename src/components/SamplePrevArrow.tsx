import PrevBtn from '../assets/images/prev.png'

interface SampleArrowProps {
  className?: string
  style?: React.CSSProperties
  onClick?: () => void
}

const SamplePrevArrow: React.FC<SampleArrowProps> = ({
  className,
  style,
  onClick
}) => {
  return (
    <img
      src={PrevBtn}
      className={`${className} -left-12`}
      style={{ ...style, width: '50px', height: '50px' }}
      onClick={onClick}
      alt='Next'
    />
  )
}

export default SamplePrevArrow
