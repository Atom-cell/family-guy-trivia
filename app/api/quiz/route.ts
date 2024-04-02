import { NextResponse } from 'next/server';
import quiz from '../../../data/quiz.json';

export async function GET(request: Request, response: Response) {
	
	const randomNumber = Math.floor(Math.random() * 16);

	return NextResponse.json(quiz.data[randomNumber]);
}
