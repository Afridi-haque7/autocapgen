'use client';
import axios from 'axios';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function UploadForm() {

    const [isUploading, setIsUploading] = useState(false);
    const router = useRouter();


    async function upload(ev){
        ev.preventDefault();
        const files = ev.target.files;
        if(files.length > 0){
          const file = files[0];
          setIsUploading(true);
          const res = await axios.postForm('/api/upload', {
            file,
          });
          setIsUploading(false);
          const newName = res.data.newName;
          router.push('/'+newName);
        }
    }


    return (
        <>
        <div className="text-center mt-10">
        {isUploading && (
            <div className="bg-black/70 text-white flex inset-0 
            justify-center fixed items-center text-lg">
                Uploading...
            </div>
        )}
        <label className="bg-green-700 py-2 px-8 rounded-full shadow-md inline-flex
         cursor-pointer hover:bg-green-600 gap-2">
        <CloudUploadIcon/>
        <span>Choose File</span>
        <input onChange={upload} type="file" className="hidden"/>
        </label>
      </div>
        </>
    )
}