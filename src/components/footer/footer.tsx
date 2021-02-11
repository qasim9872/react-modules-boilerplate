import React from 'react';

const Footer: React.FC<{ name: string; location: string }> = ({
  name,
  location,
}) => {
  return (
    <footer className="flex w-full bg-gray-600 divide-white divide-y-2 divide-y-2 justify-center items-center px-8 py-2 shadow-md">
      <span>
        Copyright © {`${new Date().getFullYear()} `}
        <span className="text-secondary-300">{name}</span>. Made with ❤️ in{' '}
        {location}.
      </span>
    </footer>
  );
};

export default Footer;
