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
				<Image src={avatar} width={250} height={200} alt='Image' className='max-sm:h-64 max-sm:w-64 sm:h-72 sm:w-72 md:h-64 md:w-64 lg:h-44 lg:w-44 ' />
			</div>
		</Link>
	);
};

export default Character;
