import Image from 'next/image';

const Avatar = () => {
  return (
    <div className='hidden xl:flex xl:max-w-none'>
      <Image src='/profileImg.png' width={600} height={608} alt='' className='translate-z-0 h-full w-full' />
    </div>
  );
};

export default Avatar;
