import appleInfo from '../appleInfo.json';

export default function Header() {
  return (
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
  );
}
