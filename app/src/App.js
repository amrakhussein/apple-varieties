// Data used:: from
// -> https://pocketchangegourmet.com/the-definitive-guide-to-apples-and-their-uses/'

import appleInfo from './appleInfo.json';
import Socials from './components/Socials';

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
    <div className="bg-yellow-50 sm:bg-yellow-4f00 md:bg-yellow-60f0 lg:bg-yellow-80f0 f2xl:bg-slate-500 flex flex-col  ... scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-red-300 h-screen overflow-y-scroll">
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
        <h1 className="  pl-3 pt-2 text-3xl font-bold text-gray-400 lg:pl-7 ... 2xl:pt-4">
          Get to know your <em className="text-red-600  ">apple varieties</em>
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
      <footer className="bg-orange-200 mt-20 bottom-0  border-solid border-x-0 border-4 border-b-0  border-red-700">
        {/* <div className="h-32"> */}

        {/* horizontal line red */}
        <div className=" flex flex-row  font-bold text-red-900 "></div>

        {/* credits Info */}
        <div className="pl-3 font-bold font-mono text-slate-700">
          <h3 className="py-5 text-xl ">Credits:</h3>
          <p>
            Data scraped from:{' '}
            <span className="font-mono text-red-900">
              {' '}
              <a href="https://pocketchangegourmet.com">
                pocketchangegourmet.com
              </a>
            </span>
          </p>
          <p>
            Check{' '}
            <a
              className="text-red-900"
              href="https://pocketchangegourmet.com/the-definitive-guide-to-apples-and-their-uses/"
              rel="noopener noreferrer"
              target="_blank"
            >
              their article
            </a>
            , it's awesome!
          </p>

          {/* apple logo credits */}
          <h4>
            Apple Logo made by Ecology from{' '}
            <span>
              <a
                href="https://flaticon.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                flaticon.com
              </a>
            </span>
          </h4>
        </div>

        <div className="  text-sm font-semibold font-mono pt-3 pl-3">
          <p className="pr-3 text-gray-900  ">Designed with love: </p>
          <span className="   text-slate-900">&copy; Amr Abdelkamel</span>
        </div>

        <div className="flex flex-row justify-end pr-6 py-3">
          <a
            className=" font-bold self-center text-slate-700"
            href="https://amromoorie.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            amromoorie.com
          </a>
          <div className="border-solid   border-r-0 border-x-2  border-gray-500 mx-5 "></div>
          <Socials />
        </div>

        {/* </div> */}
      </footer>
    </div>
  );
}

export default App;
