// import { useAppleInfoListing } from './useAppleInfoListing';
import appleInfo from './appleInfo.json';

import { IconContext } from 'react-icons';

function App() {
  const appleInfoHero = () => {
    // cleanup lists for each title
    let lists = appleInfo.appleTypesDetail.map((i) =>
      i.content.map((li) => li.split('. '))
    );
    let titles = appleInfo.appleTypesDetail.map((i) => i.title);

    // generate json for UI mapping
    let appleJSON = () => {
      let output = titles.reduce((acc, curr, i) => {
        acc.push({ title: curr, content: lists[i] });
        return acc;
      }, []);
      console.log('apple JSON::', output);
      return output;
    };
    return appleJSON();
  };
  let foo = appleInfoHero();
  console.log('foo::', foo);

  const entryParagraph = appleInfo.entryContent.split('. ');
  const appleLearnMore = appleInfo.appleCharacteristics.content.split('. ');

  return (
    <IconContext.Provider
      value={{ color: 'brown', size: '1.3rem', title: 'Social Links' }}
    >
      <div className="bg-yellow-100 sm:bg-yellow-4f00 md:bg-yellow-60f0 lg:bg-yellow-80f0 f2xl:bg-slate-500 flex flex-col  ... scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-red-300 h-screen overflow-y-scroll">
        <header>
          <figure className=" p-2">
            <img
              className="h-16 w-16 top-2 right-2 absolute hover:cursor-pointer ... md:h-19 md:w-19 md:top-3 md:right-3 ... lg:h-20 lg:w-20 "
              alt="apple-shaped logo"
              src={`${process.env.PUBLIC_URL}images/logo.png`}
            />
          </figure>
          <div className="shrink-0 h-14"></div>

          <h1 className=" pl-2 mt-7 text-5xl leading-[3.3rem] font-bold text-slate-700">
            {appleInfo.mainTitle}
          </h1>
          <h1 className="  pl-3 pt-2 text-3xl font-bold text-slate-400 lg:pl-7 ... 2xl:pt-4">
            Get to know your apple varieties
          </h1>
        </header>

        <figure className="w-full ... lg:hidden ">
          <figcaption>
            <img
              className="mt-8 rounded-tl-xl rounded-br-xl border-x-0 border-solid border-red-400 h-[26rem] w-full  object-cover object-top ... sm:h-96 sm:w-full sm:object-cover sm:object-center  ... md:h-[30rem]"
              src={`${process.env.PUBLIC_URL}images/Hero.jpg`}
              alt="apples served on plate"
            />
            <p className="text-right text-slate-500 text-sm pr-3 ">
              Different apples' varieties and their uses
            </p>
          </figcaption>
        </figure>
        <main className="pl-2">
          {/* flex row starting from lg screen */}

          <section>
            <div className="lg:flex-row lg:flex">
              <div className=" text-slate-700 leading-tight pt-5 text-lg  prose ... lg:pl-7 lg:pt-9  ... 2xl:pt-10">
                <p>{entryParagraph[0]}.</p>
                <p>{entryParagraph[1]}.</p>
                <p>
                  {entryParagraph[2]}. <br></br> {entryParagraph[3]}.
                </p>

                <h2 className=" mt-10  text-3xl font-bold text-slate-700 ... sm:mt-10 ... lg:text-4xl lg:ml-[-1.6rem] ">
                  {appleInfo.appleCharacteristics.title}
                </h2>
                <p className="mt-[-1rem]">{appleLearnMore[0]}.</p>
                <p>
                  {appleLearnMore[1]}. {appleLearnMore[2]}. <br></br>
                  {appleLearnMore[3]}
                </p>
              </div>
              <figure className="w-full ... hidden lg:block lg:inset-0  ... 2xl:w-[48rem] 2xl:ml-20">
                <figcaption>
                  <img
                    className="my-8 ml-5 rounded-xl  border-solid border-red-400 h-[28rem] w-full  object-cover object-center ...  "
                    src={`${process.env.PUBLIC_URL}images/Hero.jpg`}
                    alt="apples served on plate"
                  />
                  <p className="text-right text-slate-500 text-sm pr-3 lg:text-lg lg:mt-[-2rem]">
                    Different apples' varieties and their uses
                  </p>
                </figcaption>
              </figure>
            </div>
          </section>
          {/* *** */}

          {/* flex Column */}
          <div>
            {appleInfoHero().map((data) => (
              <>
                <h3
                  key={data}
                  className=" pb-2 d mt-10 text-3xl font-bold text-slate-700 ... sm:mt-10"
                >
                  {data.title}
                </h3>
                <ul className="border-solid border-red-300 border-x-2 border-y-0 border-r-0 pl-2 ... ">
                  {data.content.map((lists) =>
                    lists.map((li) => (
                      <li
                        key={li}
                        className="list-inside pl-4 prose text-md ... sm:leading-normal sm:text-lg   "
                      >
                        {li.replace(/\./g, '')}
                      </li>
                    ))
                  )}
                </ul>
              </>
            ))}
          </div>
        </main>
      </div>
    </IconContext.Provider>
  );
}

export default App;
