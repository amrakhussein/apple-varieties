// Data used:: from
// -> https://pocketchangegourmet.com/the-definitive-guide-to-apples-and-their-uses/'

import appleInfo from './appleInfo.json';
import Footer from './components/Footer';
import Header from './components/Header';
import Logo from './components/Logo';
import Section from './components/Section';

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
      // console.log('apple JSON::', output);
      return output;
    };
    return appleJSON();
  };
  // let foo = appleInfoHero();
  // console.log('foo::', foo);
  return (
    <div className="bg-yellow-50 sm:bg-yellow-4f00 md:bg-yellow-60f0 lg:bg-yellow-80f0 f2xl:bg-slate-500 flex flex-col  ... scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-red-300 h-screen overflow-y-scroll">
      <Logo />
      <div className="shrink-0 h-14"></div>
      <Header />
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
        <Section />

        {/* *** */}
        {/* flex Column */}
        <div>
          {/* idx of map is used since it's static data: quick fix of unique elems keys */}
          {appleInfoHero().map((data, idx) => (
            <>
              <h3
                key={idx}
                className=" pb-2 d mt-10 text-3xl font-bold text-slate-700 ... sm:mt-10"
              >
                {data.title}
              </h3>
              <ul className="border-solid border-red-300 border-x-2 border-y-0 border-r-0 pl-2 ... ">
                {data.content.map((lists, idx) =>
                  lists.map((li, idx) => (
                    <li
                      key={idx}
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
      <Footer />
    </div>
  );
}

export default App;
