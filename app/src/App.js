// import { useAppleInfoListing } from './useAppleInfoListing';
import appleInfo from './appleInfo.json';

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
    <div className="bg-yellow-50 sm:bg-yellow-100 ">
      <div className="flex flex-col  max-w-...md mx-au...">
        {/* <div className='shrink-0 h-56'></div> */}

        {/* <heading className=" my-5 px-3  "> */}
        <h1 className="  mt-20 text-5xl leading-[3.3rem] font-bold text-slate-700">
          {appleInfo.mainTitle}
        </h1>
        {/* </heading> */}

        <figure>
          <figcaption>
            <img
              className="mt-10 border-8 border-red-400"
              src={`${process.env.PUBLIC_URL}images/Hero.jpg`}
              alt="apples served on plate"
            ></img>
            <p className="text-right text-slate-500 text-sm ">
              Different apples' varities and their uses
            </p>
          </figcaption>
        </figure>
        <main className="pl-2">
          <div className=" text-slate-800 text-lg leading-tight prose pt-5 ">
            <p>{entryParagraph[0]}.</p>
            <p>{entryParagraph[1]}.</p>
            <p>
              {entryParagraph[2]}. <br></br> {entryParagraph[3]}.
            </p>

            <h2 className=" mt-5  text-3xl font-bold text-slate-700">
              {appleInfo.appleCharacteristics.title}
            </h2>
            <p className="mt-[-1rem]">{appleLearnMore[0]}.</p>
            <p>
              {appleLearnMore[1]}. {appleLearnMore[2]}. {appleLearnMore[3]}
            </p>
          </div>
          <div>
            {appleInfoHero().map((data) => (
              <>
                <h3 className="pb-2 mt-5 text-3xl font-bold text-slate-700">
                  {data.title}
                </h3>
                <ul>
                  {data.content.map((lists) =>
                    lists.map((li) => (
                      <li className="list-inside pl-4">
                        {li.replace(/\./g, '')}
                      </li>
                    ))
                  )}
                </ul>
              </>
            ))}
          </div>
          <div className="pt-10"></div>
        </main>
      </div>
    </div>
  );
}

export default App;
