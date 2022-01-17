import { useState } from 'react';

export default function Logo() {
  const [logoHover, setLogoHover] = useState(false);
  return (
    <figure className=" p-2">
      <img
        onMouseOver={() => setLogoHover(true)}
        onMouseOut={() => setLogoHover(false)}
        className="h-16 w-16 top-2 right-2 absolute hover:cursor-pointer ... md:h-19 md:w-19 md:top-3 md:right-3 ... lg:h-20 lg:w-20 "
        alt="apple-shaped logo"
        src={
          logoHover
            ? `${process.env.PUBLIC_URL}images/logo2.png`
            : `${process.env.PUBLIC_URL}images/logo.png`
        }
      />
    </figure>
  );
}
