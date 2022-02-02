import appleInfo from '../appleInfo.json';
import Hero from '../images/Hero.jpg'

export default function Section() {
  const entryParagraph = appleInfo.entryContent.split('. ');
  const appleLearnMore = appleInfo.appleCharacteristics.content.split('. ');

  return (
    <section>
      <div className="lg:flex-row lg:flex">
        <div className=" text-slate-700 leading-tight pt-5 text-lg  prose ... lg:pl-7 lg:pt-9  ... 2xl:pt-10">
          <p>{entryParagraph[0]}.</p>
          <p>{entryParagraph[1]}.</p>
          <p>
            {entryParagraph[2]}. <br></br> {entryParagraph[3]}.
          </p>

          <h2 className=" my-10 text-3xl font-bold text-slate-700 ... sm:mt-10 ... lg:text-4xl lg:ml-[-1.6rem] ">
            {appleInfo.appleCharacteristics.title}
          </h2>
          <p className="mt-[-1rem]">{appleLearnMore[0]}.</p>
          <p>
            {appleLearnMore[1]}. {appleLearnMore[2]}. <br></br>
            {appleLearnMore[3]}
          </p>
        </div>
        <figure className="w-full ... hidden lg:block lg:inset-0  ... 2xl:w-[48rem] 2xl:ml-20">
          <img
            className="my-8 ml-5 rounded-xl  border-solid border-red-400 h-[28rem] w-full  object-cover object-center ...  "
            src={Hero}
            alt="apples served on plate"
          />

          {/* Hero image for lg screen and above */}
          <figcaption>
            <p className="text-right text-slate-500 text-sm pr-3 lg:text-lg lg:mt-[-2rem]">
              Different apples' varieties and their uses
            </p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
