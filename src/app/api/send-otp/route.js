import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { connectToDatabase } from '../../../../lib/mongodb';

export async function POST(request) {
  const { email, name, phone, website } = await request.json();
  const otp = Math.floor(1000 + Math.random() * 9000); // Generate a 6-digit OTP

  const { db } = await connectToDatabase();

  const existingOtp = await db.collection('otps').findOne({ email });

  if (existingOtp) {
    // Update the existing OTP record
    await db.collection('otps').updateOne(
      { email },
      { $set: { otp, createdAt: new Date() } }
    );
  } else {
    // Insert a new OTP record
    await db.collection('otps').insertOne({
      email,
      otp,
      createdAt: new Date()
    });
  }

  // Set up Nodemailer
  const transporter = nodemailer.createTransport({
    host: 'smtp.websupport.sk',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD
    }
  });


  // Check if contact information already exists
  const existingContact = await db.collection('contacts').findOne({ email });

  if (existingContact) {
    // Update existing contact information
    await db.collection('contacts').updateOne(
      { email },
      { $set: {   name,
        email,
        phone,
        website, updatedAt: new Date() } }
    );
  } else {
    // Insert new contact information
    await db.collection('contacts').insertOne({
      name,
      email,
      phone,
      website,
      createdAt: new Date()
    });
  }

  // Send email
  try {
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: 'Your OTP',
      text: `Your OTP is: ${otp}`
    });
    return NextResponse.json({ message: 'OTP sent' });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}



