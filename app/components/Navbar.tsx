import React from 'react';
import logo from '../assets/images/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { TbArrowBigRightFilled } from 'react-icons/tb';

const Navbar = () => {
	return (
		<div className='border-b border-gray-700'>
			<div className=' flex justify-between items-center max-w-screen-md mx-auto px-3 h-20 '>
				<Link href='/'>
					<Image src={logo} alt='family guy logo' width={70} height={60} />
				</Link>
				<Link href='/quiz'>
					<button className='bg-green-500 rounded-lg text-black px-6 py-3 font-semibold hover:bg-green-600/100 flex items-center space-x-1'>
						<TbArrowBigRightFilled className='text-lg'/>
						<h4 className=' font-semibold text-md'>Take Quiz</h4>
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
