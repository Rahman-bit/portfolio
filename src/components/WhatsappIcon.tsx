
import '../scss/app.scss';

const WhatsappIcon = () => {
  return (
    <>
        <div className="sticky-whatsapp">
            <div className='m-0'>
                <a href={"https://wa.me/9885266537"} target="_blank" className='text-white'>
                  <img src='assets/whatsapp.png' style={{width: '40px'}}/>
                </a>
            </div>
        </div>
    </>
  )
}

export default WhatsappIcon