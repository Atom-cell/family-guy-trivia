import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type CharacterProps = {
	slug: string;
	avatar: string;
};

const Character = ({ slug, avatar }: CharacterProps) => {
	return (
		<Link href={`/characters/${slug}`}>
			<div className='rounded-full mx-auto'>
				<Image
					src={avatar}
					width={250}
					height={200}
					alt='Image'
					className='max-sm:h-60 max-sm:w-60 lg:h-44 lg:w-44 hover:rotate-2 hover:scale-110 ease-linear transition-transform duration-200'
				/>
			</div>
		</Link>
	);
};

export default Character;
