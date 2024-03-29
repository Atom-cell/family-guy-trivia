import { NextResponse } from 'next/server';
import characters from '../../../data/characters.json';
import quotes from '../../../data/quotes.json';

export async function GET(request: Request, response: Response) {
	const { searchParams } = new URL(request.url);
	const name = searchParams.get('name');

	if (name) {
		console.log(name);
		const data = characters.data.filter((character) => character.slug === name);
		const userQuotes = quotes.data.filter((quote) => quote.character_id === data[0].id)
		const response = {...data[0], quotes:userQuotes};
		return NextResponse.json(response);
	} else {
		return NextResponse.json(characters);
	}
}
