import { NextResponse } from 'next/server';
import quiz from '../../../data/quiz.json';

export async function GET(request: Request, response: Response) {
	const { searchParams } = new URL(request.url);
	const id: string = searchParams.get('id') as string;
	const randomNumber: number = parseInt(id);
	console.log('random number ', randomNumber);

	response = NextResponse.json(quiz.data[randomNumber]);
	return response;

}
