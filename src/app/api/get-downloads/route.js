import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '../../../../lib/mongodb';

export async function GET(request) {
  try {
    const { db } = await connectToDatabase();
    const stats = await db.collection('downloadStats').findOne({ identifier: 'ebook_download_count' });

    if (!stats) {
      return NextResponse.json({ error: 'Download count not found' }, { status: 404 });
    }

    return NextResponse.json({ downloadCount: stats.count });
  } catch (error) {y
    console.log(error)
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
