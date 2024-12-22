'use server'
import User from '@/database/Schemas/User'
import { NextResponse } from 'next/server'
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

export async function POST(request) {

  const user = await request.json();
  if ((!user.phone) || (!user.password)) {
    return NextResponse.json({ success: false, message: "Please give enough inputs to login into an account" }, { status: 400 })
  }
  else {
    if (user.password.length < 5) {
      return NextResponse.json({ success: false, message: "Password should be atleast of 5 chars" }, { status: 400 })
    }
    else {
      try {
        const userExists = await User.findOne({ phone: user.phone });
        if (userExists) {
          const passwordCompare = await bcrypt.compare(user.password,userExists.password)
          if (passwordCompare) {
            const data = {
              user: {
                id: userExists.id
              }
            };
            const jwToken = jwt.sign(data, process.env.JWT_SEC);
            return NextResponse.json({ success: true, userLoggedIn: true, AuthToken: jwToken, message: `Welcome ${userExists.username}!` }, { status: 200 });
          } else {
            return NextResponse.json({ success: true, userLoggedIn: false, AuthToken: "", message: "Invalid credentials given" }, { status: 200 });
          }

        } 

        else {
          
          return NextResponse.json({ success: true, userLoggedIn: false, AuthToken: "", message: `User with this phone: ${user.phone} doesn't exists` }, { status: 400 });

        }

      } catch (error) {
        return NextResponse.json({ success: false, message: "Internal Server Error" }, { status: 500 });
      }
    }

  }
}