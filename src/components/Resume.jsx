import React from 'react'
import { resume } from '../assets'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
const Resume = () => {
  return (
    <div className='bg-white text-black shadow-xl p-4 md:w-2/5 w-2/3 rounded-3xl flex justify-center items-center '>
     
<PictureAsPdfIcon/>

<a className='mx-2 happy-font font-bold my-2' href={resume} download="resume.pdf">Download Resume</a>

    </div>
  )
}

export default Resume
