import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const { message, conversationHistory } = await request.json()
    
    const systemPrompt = `You are a friendly AI assistant for Softech, an AI-powered data solutions company. 

About Softech:
- We deliver AI-powered data solutions for businesses
- Our tagline: "Data-Driven. AI-Powered."
- Services: AI Integration, Custom AI Solutions, AI Consulting
- We help businesses leverage intelligent insights, automation, and predictive analytics
- Mission: Make businesses smarter, faster, and future-ready

Your role:
- Be warm, professional, and helpful
- Answer questions about our services, pricing, and capabilities
- Help potential clients understand how AI can benefit their business
- Collect information about their needs (industry, problem, budget, timeline)
- Guide them toward booking a consultation
- Be conversational and human-like, not robotic

Pricing (if asked):
- Starter: $2,500 (AI Integration, Basic Chatbot, 2 Revisions, 1 Month Support)
- Professional: $7,500 (Custom AI Solutions, Advanced ML Models, Unlimited Revisions, 3 Months Support)
- Enterprise: Custom pricing (Everything + Dedicated Team, Priority Support)

Contact: hello@softech.com

Keep responses concise (2-3 sentences max) and ask follow-up questions to understand their needs better.`

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: 'mixtral-8x7b-32768',
        messages: [
          { role: 'system', content: systemPrompt },
          ...conversationHistory,
          { role: 'user', content: message }
        ],
        temperature: 0.7,
        max_tokens: 200,
        top_p: 1,
        stream: false
      })
    })

    if (!response.ok) {
      throw new Error('API request failed')
    }

    const data = await response.json()
    const botMessage = data.choices[0].message.content

    return NextResponse.json({ message: botMessage })
  } catch (error) {
    console.error('Chat API Error:', error)
    return NextResponse.json(
      { error: 'Failed to get response' },
      { status: 500 }
    )
  }
}
