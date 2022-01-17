import Socials from './Socials';

export default function ConnectSocials() {
  return (
    <>
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
    </>
  );
}
