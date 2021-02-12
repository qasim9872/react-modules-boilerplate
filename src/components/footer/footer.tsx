import React from 'react';

const Footer: React.FC<{ name: string; location: string; link: string }> = ({
  name,
  location,
  link,
}) => {
  return (
    <footer className="flex w-full bg-gray-600 divide-white divide-y-2 divide-y-2 justify-center items-center px-8 py-2 shadow-md">
      <span>
        Copyright © {`${new Date().getFullYear()} `}
        <a href={link} className="text-secondary-300 hover:underline">
          {name}
        </a>
        . Made with ❤️ in {location}.
      </span>
    </footer>
  );
};

export default Footer;
