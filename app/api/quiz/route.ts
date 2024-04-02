import { NextResponse } from 'next/server';
import quiz from '../../../data/quiz.json';

export async function GET(request: Request, response: Response) {
	return NextResponse.json(quiz.data[0]);
}
