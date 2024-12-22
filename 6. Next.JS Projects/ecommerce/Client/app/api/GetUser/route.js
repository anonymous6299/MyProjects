'use server'
import User from '@/database/Schemas/User'
import { NextResponse } from 'next/server'
const jwt = require('jsonwebtoken');

export async function POST(request) {

  const token = await request.json();
  const user = jwt.verify(token,process.env.JWT_SEC);
  const resp = await User.findOne({user:user.id},"-password");
  return NextResponse.json({ message: resp }, { status: 200 });
}