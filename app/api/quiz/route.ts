import { NextResponse } from 'next/server';
import quiz from '../../../data/quiz.json';

export async function GET(request: Request, response: Response) {
	
	const randomNumber = Math.floor(Math.random() * 16);

	response = NextResponse.json(quiz.data[randomNumber]);
	console.log(response, " ", randomNumber);
	response.headers.set('Cache-Control', 'no-store');
	return response;
}
