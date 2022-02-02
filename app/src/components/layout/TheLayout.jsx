export default function Layout({ children }) {
  return (
    <div className="px-3 bg-yellow-50 sm:bg-yellow-4f00 md:bg-yellow-60f0 lg:bg-yellow-80f0 f2xl:bg-slate-500 flex flex-col  ... scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-red-300 h-screen overflow-y-scroll">
      {children}
    </div>
  );
}
