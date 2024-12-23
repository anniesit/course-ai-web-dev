import Link from 'next/link';
import faqList from '@/data/faq-list';

export default function FAQ() {
  return (
    <>
      <header className="bg-amber-500">
        <div className="container mx-auto px-4 py-4">
          <h1>FAQ</h1>
          <p>This is the FAQ page.</p>
          <Link href="/" className="inline-block mt-2">Home</Link>
          <Link href="/about" className="inline-block mt-2 ml-4">About</Link>
        </div>
      </header>
      <section className="bg-gray-100 py-4">
        <main className="container mx-auto px-4 py-4 bg-gray-100">
            <div className="grid grid-cols-1 gap-2">
                {
                    faqList.map(faq => {
                        const { id, question, answer } = faq;
                        return (
                        <div key={id} className="p-6 rounded-lg shadow-md bg-white">
                            <h2>{question}</h2>
                            <p className="mt-2">{answer}</p>
                        </div>
                        )
                    })
                }
            </div>
        </main>
      </section>
    </>
  )
}