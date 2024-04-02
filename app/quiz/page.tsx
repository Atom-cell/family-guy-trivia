import React from 'react';
import Wallpaper from '../assets/images/wallpaper.jpg';
import Image from 'next/image';
import Link from 'next/link';
import { TbArrowBigRightFilled } from 'react-icons/tb';

const page = () => {
	return (
		<div className='max-w-screen-md mx-auto flex flex-wrap pt-6 px-2'>
			<div className='w-3/6 max-sm:w-full flex flex-col justify-between'>
				<h3>Family Guy Quiz</h3>
				<p className='text-sm text-gray-300 mt-4 leading-6'>
					Take this quiz to find out how much you know about the hit animated
					sitcom Family Guy. Test your knowledge of the characters, the
					episodes, and the {"show's"} many pop culture references.
				</p>
				<Link href='/quiz/question'>
					<button className='hover:bg-amber-950 transition-all border-2 border-amber-600 text-amber-600 text-md w-full px-4 py-4 rounded-lg font-bold flex items-center justify-center'>
						<TbArrowBigRightFilled className='text-amber-600 text-md' /> Take a
						Quiz Now!
					</button>
				</Link>
			</div>
			<div className='relative w-3/6 max-sm:w-full'>
				<Image
					src={Wallpaper}
					alt='wallpaper'
					className='w-full h-full object-cover rounded-lg'
				/>
				<div className='absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent'></div>
			</div>
		</div>
	);
};

export default page;
