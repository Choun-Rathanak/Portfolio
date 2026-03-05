import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Replace with your Telegram Bot Token and Chat ID
    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || '';
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID || '';

    // Enhanced logging for debugging
    console.log('Environment check:', {
      hasToken: !!TELEGRAM_BOT_TOKEN,
      tokenLength: TELEGRAM_BOT_TOKEN.length,
      hasChatId: !!TELEGRAM_CHAT_ID,
      chatIdLength: TELEGRAM_CHAT_ID.length,
      nodeEnv: process.env.NODE_ENV
    });

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      console.error('Missing credentials:', {
        missingToken: !TELEGRAM_BOT_TOKEN,
        missingChatId: !TELEGRAM_CHAT_ID
      });
      return NextResponse.json(
        { 
          success: false, 
          message: 'Telegram credentials not configured on server',
          details: 'Environment variables missing'
        },
        { status: 500 }
      );
    }

    // Format the message
    const telegramMessage = `
🔔 *New Contact Form Submission*

👤 *Name:* ${name}
📧 *Email:* ${email}

💬 *Message:*
${message}

---
_Sent from Portfolio Contact Form_
    `.trim();

    // Send to Telegram
    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: telegramMessage,
          parse_mode: 'Markdown',
        }),
      }
    );

    const responseData = await response.json();
    console.log('Telegram API Response:', responseData);

    if (!response.ok) {
      console.error('Telegram Error Details:', {
        status: response.status,
        statusText: response.statusText,
        error: responseData
      });
      return NextResponse.json(
        { 
          success: false, 
          message: `Failed to send message: ${responseData.description || 'Unknown error'}`,
          details: responseData
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending to Telegram:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to send message',
        error: errorMessage
      },
      { status: 500 }
    );
  }
}
