import React, { Suspense } from 'react';
import Image from 'next/image';
import ImageLoader from '@/app/components/ImageLoader';
import endPoint from '../../utils/endPoint';

type Character = {
	id: number;
	name: string;
	slug: string;
	skills: string[];
	description: string;
	age: string;
	avatar: string;
	images: string[];
	occupations: string[];
	quotes: [{ character_id: number; quote: string }];
};
const getCharacterInfo = async (name: string): Promise<Character> => {
	// try {
	// } catch {}
	const data = await fetch(
		`${endPoint}/api/characters?name=${name}`,
		{ cache: 'no-store' }
	);
	const result = await data.json();
	console.log(result);
	return result;
};

const page = async ({ params }: { params: { name: string } }) => {
	const data: Character = await getCharacterInfo(params.name);
	return (
		<div className='max-w-screen-md mx-auto flex flex-col flex-wrap pt-6 px-2'>
			<h3 className='font-bold mb-2'>
				{data?.name
					.split(' ')
					.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
					.join(' ')}
			</h3>
			<div className='flex space-x-2'>
				{data.occupations?.map((occupation: string) => (
					<div
						key={occupation}
						className='bg-slate-800 text-slate-300 p-2 text-sm rounded-lg'
					>
						{occupation}
					</div>
				))}
			</div>
			<p className='mt-4 text-sm leading-6 my-3'>{data.description}</p>

			<div className='flex flex-wrap justify-start items-start '>
				<Suspense fallback={<ImageLoader />}>
					{data.images?.map((image: string) => (
						<div key={image} className='overflow-hidden rounded-lg m-1'>
							<Image
								src={image}
								width={300}
								height={300}
								alt='image'
								className='rounded-lg w-[360px] h-[224px] object-cover hover:rotate-2 hover:scale-105 ease-linear transition-transform duration-200'
							/>
						</div>
					))}
				</Suspense>
			</div>

			{data.skills?.length > 0 && (
				<div className='my-4'>
					<h3>Power and Skills</h3>
					<div className='flex flex-wrap justify-start items-start mt-3'>
						{data.skills?.map((skill: string) => (
							<p
								key={skill}
								className='w-auto h-auto m-1 rounded-full p-1 px-2 text-sm bg-amber-950 text-amber-500'
							>
								{skill}
							</p>
						))}
					</div>
				</div>
			)}

			{data.quotes.length > 0 && (
				<div className='my-3'>
					<h3>Famous Quotes</h3>
					{data.quotes?.map((quote) => (
						<div
							key={quote.quote}
							className='w-full py-3 pl-2 border-l-4 border-green-500 my-4 rounded-md text-slate-500 italic'
						>
							{quote.quote}
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default page;
