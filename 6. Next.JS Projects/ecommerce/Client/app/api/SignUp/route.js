'use server'
import User from '@/database/Schemas/User'
import { NextResponse } from 'next/server'
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

export async function POST(request) {
    const user = await request.json()
    if ((!user.username) || (!user.phone) || (!user.password)) {
        return NextResponse.json({ success: false, message: "Please give enough inputs to create an account" }, { status: 400 })
    }
    else {
        if (user.password.length < 5) {
            return NextResponse.json({ success: false, message: "Password should be atleast of 5 chars" }, { status: 400 })
        }
        else {
            try {
                const userExists = await User.findOne({ username: user.username });
                if (userExists) {
                    return NextResponse.json({ success: true, newUserCreated: false, AuthToken: "", message: `User with this username: ${user.username} already exists` }, { status: 400 });
                } else {
                    const salt = bcrypt.genSaltSync(10);
                    const SecPass = bcrypt.hashSync(user.password, salt);
                    user.password = SecPass;
                    const NewUser = User(user);
                    await NewUser.save();
                    const data = {
                        user: {
                            id: NewUser.id
                        }
                    };
                    const jwToken = jwt.sign(data, process.env.JWT_SEC);
                    return NextResponse.json({ success: true, newUserCreated: true, AuthToken: jwToken, message: `User ${user.username} created successfully` }, { status: 200 });
                }
            } catch (error) {
                return NextResponse.json({ success: false, message: "Internal Server Error" }, { status: 500 });
            }
        }

    }
}