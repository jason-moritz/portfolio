import { useScrollTrigger, Slide } from '@mui/material'

export default function HideOnScroll(props) {
  const { children } = props
  const trigger = useScrollTrigger()
  return (
    <Slide in={!trigger} appear={false} direction='down'>
      {children}
    </Slide>
  )
}
