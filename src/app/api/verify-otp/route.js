import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '../../../../lib/mongodb';
import nodemailer from 'nodemailer';

export async function POST(request) {
 try {
   const { email, otp } = await request.json();
   const { db } = await connectToDatabase();

   const record = await db.collection('otps').findOne({ email });

   if (!record) {
     return NextResponse.json({ error: 'OTP not found' }, { status: 404 });
   }

   if (record.otp.toString() === otp.toString()) {
     // OTP verified, now remove it from the database
     await db.collection('otps').deleteOne({ email });

     const stats = await db.collection('downloadStats').findOne({ identifier: 'ebook_download_count' });
     
     if (stats) {
       await db.collection('downloadStats').updateOne(
         { identifier: 'ebook_download_count' },
         { $inc: { count: 1 } }
       );
     } else {
       await db.collection('downloadStats').insertOne({ identifier: 'ebook_download_count', count: 1 });
     }
         // Send eBook download email
    const transporter = nodemailer.createTransport({
      host: 'smtp.websupport.sk',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
      }
    });

      await transporter.sendMail({
        from: 'ebook@gchat.sk',
        to: email,
        subject: 'Download Your eBook',
        text: 'Thank you for verifying your email. You can download your eBook from the following link: [Download Link]',
        // Replace [Download Link] with the actual URL to download the eBook
      });
   

     return NextResponse.json({ message: 'OTP verified' });
   } else {
     return NextResponse.json({ error: 'Invalid OTP' }, { status: 400 });
   }
 } catch (error) {
  console.log(error)
   return NextResponse.json({ error: error.message }, { status: 500 });
 }
}
