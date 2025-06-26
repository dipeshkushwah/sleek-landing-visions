
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Copy, Check, Code, FileText, Folder } from 'lucide-react';

const NextJSCodeShowcase = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const codeExamples = [
    {
      title: "App Router Layout",
      file: "app/layout.tsx",
      code: `import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Modern Landing Page',
  description: 'Built with Next.js 14 & TypeScript',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}`,
      icon: Folder
    },
    {
      title: "Server Component",
      file: "app/page.tsx",
      code: `import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import ContactSection from '@/components/ContactSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <ContactSection />
    </main>
  )
}

// This runs on the server by default in App Router
export async function generateMetadata() {
  return {
    title: 'Home | Modern Landing Page',
    description: 'Transform your business with our solutions'
  }
}`,
      icon: FileText
    },
    {
      title: "API Route",
      file: "app/api/contact/route.ts",
      code: `import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Process form submission
    // Add your logic here (email, database, etc.)
    
    return NextResponse.json(
      { message: 'Form submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}`,
      icon: Code
    }
  ];

  const copyToClipboard = async (code: string, title: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(title);
      setTimeout(() => setCopiedCode(null), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='m0 40h40v-40h-40v40zm20-30c5.523 0 10 4.477 10 10s-4.477 10-10 10-10-4.477-10-10 4.477-10 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-sm font-medium mb-6">
            <Code className="w-4 h-4 mr-2" />
            Ready-to-Use Code
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Next.js Code
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Examples
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Copy and paste these code examples directly into your Next.js project. 
            All examples follow Next.js 14 best practices and App Router conventions.
          </p>
        </div>

        {/* Code Examples Grid */}
        <div className="grid gap-8">
          {codeExamples.map((example, index) => {
            const IconComponent = example.icon;
            return (
              <Card 
                key={index} 
                className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-bold text-white">
                          {example.title}
                        </CardTitle>
                        <p className="text-sm text-gray-400">{example.file}</p>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyToClipboard(example.code, example.title)}
                      className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      {copiedCode === example.title ? (
                        <>
                          <Check className="w-4 h-4 mr-2" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 mr-2" />
                          Copy
                        </>
                      )}
                    </Button>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-300 leading-relaxed">
                      <code>{example.code}</code>
                    </pre>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Setup Instructions */}
        <div className="mt-16 bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-3xl p-8 border border-blue-500/20">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Quick Setup Guide</h3>
            <p className="text-gray-300">Get started with Next.js in minutes</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4 text-blue-400">1. Create Project</h4>
              <div className="bg-gray-900 rounded-lg p-4">
                <code className="text-green-400">
                  npx create-next-app@latest my-landing-page --typescript --tailwind --app
                </code>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-4 text-purple-400">2. Install Dependencies</h4>
              <div className="bg-gray-900 rounded-lg p-4">
                <code className="text-green-400">
                  npm install lucide-react @radix-ui/react-*
                </code>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-4 text-pink-400">3. Copy Components</h4>
              <p className="text-gray-300">Copy the components from above into your project structure.</p>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-4 text-green-400">4. Deploy</h4>
              <div className="bg-gray-900 rounded-lg p-4">
                <code className="text-green-400">
                  vercel --prod
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextJSCodeShowcase;
