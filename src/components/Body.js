import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import axios from 'axios';
import UploadForm from './UploadForm';

const Body = () => {
  return (
    <div className='py-10  md:py-5 sm:py-5'>
      <div className="text-center mt-12 sm:mt-0">
        <h1 className="text-3xl sm:text-2xl drop-shadow-lg">Add epic cations to your videos</h1>
        <h2 className="text-xl sm:text-sm text-white/70">Just upload, and let AI do the work.</h2>
      </div>
      <UploadForm />
      <div className="flex items-center justify-evenly mt-10 px-10 gap-5">
        <div className="bg-black/40 w-[300px] rounded-xl block overflow-hidden sm:hidden">
          <video src="https://autocap-afridi.s3.ap-south-1.amazonaws.com/nocap.MP4" 
          preload muted autoPlay loop></video>
        </div>
        <div className="block sm:hidden">
        <AutoFixHighIcon/>
        </div>
          
        <div className="bg-black/40 w-[300px] rounded-xl overflow-hidden sm:mb-10">
          <video src="https://autocap-afridi.s3.ap-south-1.amazonaws.com/withcap.mp4" 
          preload muted autoPlay loop></video>
        </div>
      </div>
    </div>
  )
}

export default Body
