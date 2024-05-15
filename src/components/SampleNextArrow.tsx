import NextBtn from '../assets/images/next.png'

interface SampleArrowProps {
  className?: string
  style?: React.CSSProperties
  onClick?: () => void
}

const SampleNextArrow: React.FC<SampleArrowProps> = ({
  className,
  style,
  onClick
}) => {
  return (
    <img
      src={NextBtn}
      className={className}
      style={{ ...style, width: '50px', height: '50px' }}
      onClick={onClick}
      alt='Next'
    />
  )
}

export default SampleNextArrow
