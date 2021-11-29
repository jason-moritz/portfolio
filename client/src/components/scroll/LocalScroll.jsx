import { HashLink } from 'react-router-hash-link'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import './LocalScroll.css'

export default function LocalScroll({ link, next }) {
  return (
    <div className='bottom-link'>
      <HashLink smooth to={`#${link}`} aria-label={link}>
        {next}
        <div>
          {link !== 'top' ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
        </div>
      </HashLink>
    </div>
  )
}
