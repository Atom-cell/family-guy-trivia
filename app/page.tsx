import Character from './components/Character';
import endPoint from './utils/endPoint';

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
	const data = await fetch(`${endPoint}/characters`);
	const result = await data.json();
	return result.data;
};

export default async function Home() {

	if (!endPoint) {
		return null;
	}
	const characters: Character[] = await getCharacters();

	return (
		<main className='max-w-screen-md mx-auto flex justify-center items-center flex-wrap pt-6'>
			{characters.map((character: Character) => {
				return (
					<Character
						key={character.id}
						slug={character.slug}
						avatar={character.avatar}
					/>
				);
			})}
		</main>
	);
}
