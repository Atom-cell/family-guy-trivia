import React from 'react';
import Image from 'next/image';
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
	const data = await fetch(`http://localhost:3000/api/characters?name=${name}`, { cache: 'no-store' });
	const result = await data.json();
	console.log(result);
	return result;
};

const page = async ({ params }: { params: { name: string } }) => {
	const data: Character = await getCharacterInfo(params.name);
	return (
		<div>
			<p>{data.name}</p>
			{
        data.occupations?.map((occupation:string) => <p key={occupation}>{occupation}</p>)
      }
      <p>{data.description}</p>
      {
        data.images?.map((image:string) => <Image key={image} src={image} width={100} height={100} alt="image" />)
      }
      
      {
        data.skills?.map((skill:string) => <p key={skill}>{skill}</p>)
      }
      {
        data.quotes?.map((quote) => <p key={quote.character_id}>{quote.quote}</p>)
      }
		</div>
	);
};

export default page;
