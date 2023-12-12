import githubPic from '../../../public/images/github.svg';
import Link from 'next/link';
import PageInfo from './PageInfo';
import Image from 'next/image';
const Header = () => {
  return (
    <header className="bg-legored #DA291C py-4">
      <div className="container mx-auto flex items-center justify-between">
        <span className="font-white">
          LEGO
          <br />
          PROFILE MAKER
        </span>
        <div className="flex  items-center justify-evenly space-x-4">
          <Link href="https://github.com/thisisthewa2/LEGO-profile-maker">
            <Image src={githubPic} alt="Logo" width={24} height={24} />
          </Link>
          <div className="flex items-center">
            <PageInfo />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
