import { useFetch } from './useFetch';

function App() {
  // Simulate remote data fetch
  // for dev purposes, json file located in public dir evading error
  const { dataState, loading, error } = useFetch('./appleInfo.json');
  console.log('data', dataState);
  return (
    <>
      {/* <Hero /> */}
      <div className="bg-yellow-100 h-screen">
        <div className="flex flex-col ">
          {/* <div className='shrink-0 h-56'></div> */}

          <heading className=" my-5 px-3  ">
            <h2 className=" mt-20 text-7xl font-bold text-slate-700">
              {dataState.mainTitle}
            </h2>
            <figure>
              <figcaption>
                <img
                  src={`${process.env.PUBLIC_URL}images/Hero.jpg`}
                  alt="apples served on plate"
                ></img>
                <p className="text-right text-slate-500 text-xl ">
                  Different apples' varities and their uses
                </p>
              </figcaption>
            </figure>
            <p className=" text-slate-600 text-5xl prose pt-5  ">
              {dataState.entryContent}
            </p>
          </heading>
        </div>
      </div>
    </>
  );
}

export default App;
