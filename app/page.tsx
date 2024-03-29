import Character from './components/Character';

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
};

const getCharacters = async (): Promise<Character[]> => {
	// try {
	// } catch {}
	const data = await fetch('http://localhost:3000/api/characters');
	const result = await data.json();
	return result.data;
};

export default async function Home() {
	const characters: Character[] = await getCharacters();

	return (
		
			<main className='max-w-screen-md mx-auto flex justify-center items-center flex-wrap pt-6'>
				{characters.map((character: Character) => {
					return <Character key={character.id} slug={character.slug} avatar={character.avatar} />;
				})}
			</main>
	);
}
