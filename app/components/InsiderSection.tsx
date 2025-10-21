/**
 * InsiderSection Component
 * Lead generation section for becoming a WizKid Insider
 * 
 * Features:
 * - Benefits list with checkmarks
 * - Placeholder for Airtable form (will be replaced with Better-Auth later)
 * - Responsive two-column layout
 * - Clear value proposition
 */

export default function InsiderSection() {
  return (
    <section id="insider" className="py-20 bg-gray-200">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 lg:flex items-center gap-12">
          {/* Left Column: Benefits */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-anton text-wizards-navy">
              BECOME A WIZKID INSIDER
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              Want to prove you're the ultimate Wizards fan? Take our 5-question trivia challenge! 
              Submit your answers and email to see your score, get on our exclusive mailing list, 
              and be entered to win free merch.
            </p>

            {/* Benefits List */}
            <ul className="mt-6 space-y-3 text-gray-600">
              <li className="flex items-center">
                <span className="text-wizards-red mr-3 text-xl" aria-hidden="true">
                  ✔
                </span>
                Exclusive Content & Early Episode Drops
              </li>
              <li className="flex items-center">
                <span className="text-wizards-red mr-3 text-xl" aria-hidden="true">
                  ✔
                </span>
                Automatic Entry into Merch Giveaways
              </li>
              <li className="flex items-center">
                <span className="text-wizards-red mr-3 text-xl" aria-hidden="true">
                  ✔
                </span>
                Insider-Only Trade Rumors & Analysis
              </li>
            </ul>
          </div>

          {/* Right Column: Form Placeholder */}
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            {/* PLACEHOLDER: Airtable Embed Form */}
            {/* Replace this div with your Airtable iframe embed code */}
            <div
              className="bg-gray-100 p-6 rounded-lg h-96 flex items-center justify-center"
              id="airtable-form-placeholder"
            >
              <div className="text-center text-gray-500">
                <p className="font-semibold mb-2">🔧 Airtable Form Integration</p>
                <p className="text-sm">
                  Replace this placeholder div with your Airtable embed iframe code.
                </p>
                <p className="text-sm mt-2">
                  Example: &lt;iframe src="your-airtable-form-url"&gt;&lt;/iframe&gt;
                </p>
                <p className="text-sm mt-4 text-wizards-navy font-semibold">
                  OR add Better-Auth signup form in Phase 2
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

