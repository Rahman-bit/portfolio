import { Link } from 'react-router-dom';
import '../scss/app.scss';
import { FaFacebook, FaGithub, FaLinkedin  } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { MdMarkEmailRead } from "react-icons/md";

const SocialMediaLinks = () => {
  return (
    <>
        <div className="social-media-wraper sticky-div">
            <ul className='px-2'>
                <li><Link to={''} className='text-white'><MdMarkEmailRead /></Link></li>
                <li><Link to={''} className='text-white'><FaFacebook /></Link></li>
                <li><Link to={''} className='text-white'><BsInstagram /></Link></li>
                <li><Link to={''} className='text-white'><FaGithub /></Link></li>
                <li><Link to={''} className='text-white'><FaLinkedin /></Link></li>
            </ul>
        </div>
    </>
  )
}

export default SocialMediaLinks