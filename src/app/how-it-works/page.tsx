// app/how-it-works/page.tsx

export default function HowItWorks() {
    return (
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-4">How It Works</h1>
        <p className="text-lg">
          Welcome to our marketplace! Here's how you can buy and sell parts easily.
        </p>
  
        <section className="mt-6">
          <h2 className="text-2xl font-semibold">For Buyers</h2>
          <ul className="list-disc ml-5 mt-2">
            <li>Browse available parts using our search engine and filters.</li>
            <li>View seller information and part details before purchasing.</li>
            <li>Contact the seller if you have any questions.</li>
            <li>Securely complete your purchase and arrange delivery.</li>
          </ul>
        </section>
  
        <section className="mt-6">
          <h2 className="text-2xl font-semibold">For Sellers</h2>
          <ul className="list-disc ml-5 mt-2">
            <li>Create an account and list your parts for sale.</li>
            <li>Provide clear descriptions and images for buyers.</li>
            <li>Respond to inquiries and negotiate pricing if needed.</li>
            <li>Complete transactions securely and ship items as agreed.</li>
          </ul>
        </section>
      </main>
    );
  }
  