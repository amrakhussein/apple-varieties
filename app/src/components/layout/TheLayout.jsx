export default function Layout({ children }) {
  return (
    <div className="bg-yellow-50 flex flex-col  ... scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-red-300 h-screen overflow-y-scroll">
      {children}
    </div>
  );
}
