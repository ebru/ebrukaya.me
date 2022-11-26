import { useMediaQuery } from '@mui/material'

import { config } from '../config'

const useResponsive = () => {
  const isLargerThanMd = useMediaQuery(`(min-width:${config.theme.breakpoints.md}px)`)

  return { isLargerThanMd }
}

export default useResponsive