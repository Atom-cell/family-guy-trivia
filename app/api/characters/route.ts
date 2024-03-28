import { NextResponse } from 'next/server';
import courses from '../../../data/characters.json';

export async function GET(request:Request, response:Response) {
  return NextResponse.json(courses);
}