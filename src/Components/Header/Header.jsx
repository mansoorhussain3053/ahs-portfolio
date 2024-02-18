import Image from 'next/image';
import Logo from '../../../public/Images/Logo.webp'

const Header = () => {
  const MenuLinks = [
    { Name: 'About', Link: '#' },
    { Name: 'Resume', Link: '#' },
    { Name: 'Portfolio', Link: '#' },
    { Name: 'Blog', Link: '#' },
    { Name: 'Contact', Link: '#' }
  ]

  return (

    <div className='p-10 w-full bg-transparent fixed'>
      <div className=' flex justify-between'>
        <div>
          <Image src={Logo} alt='Logo' width={110} />
        </div>

        <div>

          <ul className='flex gap-8'>

            {MenuLinks.map((data, i) => (

              <li key={i}><a href={data.Link} className="nav-links relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">{data.Name}</a></li>
            ))}

          </ul>

        </div>
      </div>
    </div>

  );
};

export default Header;
