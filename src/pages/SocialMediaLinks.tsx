
import { Link } from 'react-router-dom';
import '../scss/app.scss';
import { FaGithub, FaLinkedin  } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { MdMarkEmailRead } from "react-icons/md";
// import { Image } from 'react-bootstrap';

const SocialMediaLinks = () => {
  return (
    <>
        <div className="media-links">
          <ul className='m-0'>
            {/* <li><Link to={''} className='text-white' target="_blank">
                 <Image className="bannerImg" src={'src/assets/naukri.png'} fluid />
              </Link></li> */}
            <li><a href="mailto:rahmansayyed77k@gmail.com" className="text-white"><MdMarkEmailRead /></a></li>
            {/* <li><Link to={''} className='text-white' target="_blank"><FaFacebook /></Link></li> */}
            <li><Link to={'https://www.instagram.com/rahman_77k?utm_source=qr&igsh=MXZldnZkc3Vjc2swag=='} className='text-white' target="_blank"><BsInstagram /></Link></li>
            <li><Link to={'https://github.com/Rahman-bit/'} target="_blank" className='text-white'><FaGithub /></Link></li>
            <li><Link to={'https://www.linkedin.com/in/rahaman-sayyed/'} className='text-white' target="_blank"><FaLinkedin /></Link></li>
          </ul>
        </div>
    </>
  )
}

export default SocialMediaLinks