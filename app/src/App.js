import { useFetch } from './useFetch';
import { useState } from 'react';
// import { useAppleInfoListing } from './useAppleInfoListing';
import  appleInfo from './example_1.json'

function App() {
  // Simulate remote data fetch
  // for dev purposes, json file located in public dir evading error
  const { dataState, loading, error } = useFetch(appleInfo);
  // const [appleInfo, setAppleInfo] = useState('')
  // setAppleInfo(dataState)
  // console.log('data', dataState);
  // const heading = 

  
  // const entryParagraph = dataState.entryContent.split('. ');
  // const appleLearnMore = dataState?.appleCharacteristics?.content?.split('. ');
  console.log('entryContent', dataState);
  // console.log('entryContent', error);
  return (
    <>
      {/* <Hero /> */}
      <div className="bg-yellow-100 h-screen">
        <div className="flex flex-col ">
          {/* <div className='shrink-0 h-56'></div> */}

          <heading className=" my-5 px-3  ">
            <h2 className=" mt-20 text-7xl font-bold text-slate-700">
              {/* {dataState.mainTitle} */}
            </h2>
            {
       appleInfo && appleInfo.length>0 && appleInfo.map((item)=><p>{item.appleInfo.mainTitle}</p>)
     }
            <useAppleInfoListing />
            <figure>
              <figcaption>
                <img
                  className='mt-10 border-8 border-red-400'
                  src={`${process.env.PUBLIC_URL}images/Hero.jpg`}
                  alt="apples served on plate"
                ></img>
                <p className="text-right text-slate-500 text-xl ">
                  Different apples' varities and their uses
                </p>
              </figcaption>
            </figure>
            <main>
              <div className=" text-slate-600 text-5xl leading-tight prose pt-5 ">
                {/* <p>{entryParagraph[0]}.</p> */}
                {/* <p>{entryParagraph[1]}.</p> */}
                <p>
                  {/* {/* {entryParagraph[2]}. <br></br> {entryParagraph[3]}.  */} 
                </p>

                <h2 className=" mt-20 text-7xl font-bold text-slate-700">
                  {/* {dataState.appleCharacteristics.title} */}
                </h2>
                {/* <p>{appleLearnMore[0]}.</p> */}
                {/* <p>{appleLearnMore[1]}.</p> */}
                {/* <p>{appleLearnMore[2]}.</p> */}
                {/* <p>{appleLearnMore[3]}</p> */}

              </div>
            </main>
          </heading>
        </div>
      </div>
    </>
  );
}

export default App;
