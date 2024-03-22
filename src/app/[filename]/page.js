'use client';

import dynamic from "next/dynamic";
import { clearTranscriptionItems } from "@/libs/awsTranscriptionHelpers";
import axios from "axios";
import { useEffect, useState } from "react";


// import TranscriptionEditor from "@/components/TranscriptionEditor";
// import ResultVideo from "@/components/ResultVideo";

const TranscriptionEditor = dynamic(
  () => import("@/components/TranscriptionEditor"),
  { loading: () => <p>This is loading</p> }
);
const ResultVideo = dynamic(() => import("@/components/ResultVideo"), {
  loading: () => <p>This is loading</p>,
});


export default function FilePage({params}) {
    const filename = params.filename;
    const [isTranscribing, setIsTranscribing] = useState(false);
    const [isFetchingInfo, setIsFetchingInfo] = useState(false);
    const [awsTranscriptionItems, setAwsTranscriptionItems] = useState([]);

    useEffect(() => {
        getTranscription();
    }, [filename]);

    function getTranscription() {
        setIsFetchingInfo(true);
        axios.get('/api/transcribe?filename=' + filename).then(response => {
            setIsFetchingInfo(false);
            const status = response.data?.status;
            const transcription = response.data?.transcription;
            if(status === 'IN_PROGRESS'){
                setIsTranscribing(true);
                setTimeout(getTranscription, 3000);
            }else {
                setIsTranscribing(false);
            
                
                setAwsTranscriptionItems(
                    clearTranscriptionItems(transcription.results.items)
                );
            }
        });
    }

    if (isTranscribing) {
        return (
          <div className="min-h-screen text-lg text-center">Transcribing your video...</div>
        );
    }
    
    if (isFetchingInfo) {
        return (
          <div className="min-h-screen text-lg text-center">Fetching information...</div>
        );
    }

      

    return (
        <div>
          <div className="grid grid-cols-2 mt-10 md:grid-cols-1 gap-8 sm:gap-16 
          mb-10">
            <div className="px-10 sm:px-5">
              <h2 className="text-2xl text-center mb-4 text-white/70">Transcription</h2>
              <TranscriptionEditor
                awsTranscriptionItems={awsTranscriptionItems}
                setAwsTranscriptionItems={setAwsTranscriptionItems} />
            </div>
            <div className="px-10 sm:px-5">
              <h2 className="text-2xl mb-4 text-white/70 text-center">Result</h2>
              <ResultVideo
              filename={filename}
              transcriptionItems={awsTranscriptionItems} />
            
            </div>
          </div>
        </div>
      );
}