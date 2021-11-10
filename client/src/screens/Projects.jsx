import { useState } from 'react'
import { Box, Modal, Button } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import JWS from '../assets/jws-thumbnail.png'
import PocketCaddie from '../assets/pocket-caddie-thumbnail.png'
import JayWalkin from '../assets/jaywalkin-thumbnail.png'
import Hubbub from '../assets/hubbub-thumbnail.png'
import { HashLink } from 'react-router-hash-link'
import './Projects.css'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

export default function Projects() {
  const [open, setOpen] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [open3, setOpen3] = useState(false)
  const [open4, setOpen4] = useState(false)

  const handleOpen = e => {
    const { name } = e.target
    if (name === 'hubbub-button') {
      setOpen(true)
    } else if (name === 'jaywalkin-button') {
      setOpen2(true)
    } else if (name === 'pocket-caddie-button') {
      setOpen3(true)
    } else if (name === 'jws-button') {
      setOpen4(true)
    }
  }
  const handleClose = () => {
    setOpen(false)
    setOpen2(false)
    setOpen3(false)
    setOpen4(false)
  }

  return (
    <section id='projects' className='projects'>
      <h1 className='title'>Projects</h1>
      <div className='projects-container'>
        <div className='project-card'>
          <div className='project-title'>Hubbub</div>
          <img src={Hubbub} className='project-img' alt='project-preview' />
          <div className='project-description'>This is a description</div>
          <Button variant='standard' name='hubbub-button' onClick={handleOpen}>
            Learn more
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby='hubbub-modal'
          >
            <Box sx={style}>
              <div className='project-stack'>
                <div className='tech-stack'>Tech Stack</div>
                <ul>
                  <li>Ruby on Rails</li>
                  <li>React JS</li>
                  <li>Styling - MUI</li>
                </ul>
              </div>
            </Box>
          </Modal>
        </div>
        <div className='project-card'>
          <div className='project-title'>Jay Walkin</div>
          <img src={JayWalkin} className='project-img' alt='project-preview' />
          <div className='project-description'>This is a description</div>
          <Button
            variant='standard'
            name='jaywalkin-button'
            onClick={handleOpen}
          >
            Learn more
          </Button>
          <Modal
            open={open2}
            onClose={handleClose}
            aria-labelledby='jaywalkin-modal'
          >
            <Box sx={style}>
              <div className='project-stack'>
                <div className='tech-stack'>Tech Stack</div>
                <ul>
                  <li>React JS</li>
                  <li>Express</li>
                  <li>Mongo DB</li>
                  <li>Node.js</li>
                  <li>Styling - MUI</li>
                </ul>
              </div>
            </Box>
          </Modal>
        </div>
        <div className='project-card'>
          <div className='project-title'>Pocket Caddie</div>
          <img
            src={PocketCaddie}
            className='project-img'
            alt='project-preview'
          />
          <div className='project-description'>This is a description</div>
          <Button
            variant='standard'
            name='pocket-caddie-button'
            onClick={handleOpen}
          >
            Learn more
          </Button>
          <Modal
            open={open3}
            onClose={handleClose}
            aria-labelledby='hubbub-modal'
          >
            <Box sx={style}>
              <div className='project-stack'>
                <div className='tech-stack'>Tech Stack</div>
                <ul>
                  <li>React JS</li>
                  <li>Airtable</li>
                  <li>Styling - Tailwind CSS</li>
                </ul>
              </div>
            </Box>
          </Modal>
        </div>
        <div className='project-card'>
          <div className='project-title'>JWS</div>
          <img src={JWS} className='project-img' alt='project-preview' />
          <div className='project-description'>This is a description</div>
          <Button variant='standard' name='jws-button' onClick={handleOpen}>
            Learn more
          </Button>
          <Modal
            open={open4}
            onClose={handleClose}
            aria-labelledby='hubbub-modal'
          >
            <Box sx={style}>
              <div className='project-stack'>
                <div className='tech-stack'>Tech Stack</div>
                <ul>
                  <li>JS</li>
                  <li>Styling - Vanilla CSS</li>
                </ul>
              </div>
            </Box>
          </Modal>
        </div>
      </div>
      <div className='about-bottom-link'>
        <HashLink smooth to='#contact'>
          Contact me!
          <div>
            <KeyboardArrowDownIcon />
          </div>
        </HashLink>
      </div>
    </section>
  )
}
