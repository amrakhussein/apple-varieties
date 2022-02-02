import { useState } from 'react';
import logo from '../../images/logo.png'
import logo2 from '../../images/logo2.png'

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
            ? logo2
            : logo}
      />
    </figure>
  );
}
