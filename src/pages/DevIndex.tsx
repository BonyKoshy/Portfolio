import { Link } from "react-router-dom";

const pages = [
  { name: "Home V2", path: "/homev2", desc: "The new upcoming landing page" },
  { name: "Old Home", path: "/old-home", desc: "The previous landing page" },
  { name: "About", path: "/about", desc: "About me page" },
  { name: "Projects", path: "/projects", desc: "My projects portfolio" },
  { name: "Contact", path: "/contact", desc: "Get in touch" },
  { name: "Certificates", path: "/certificates", desc: "My certifications" },
  { name: "Privacy Policy", path: "/privacy", desc: "Privacy details" },
];

export default function DevIndex() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center p-6 font-sans py-20">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-4">
          Development Index
        </h1>
        <p className="text-gray-400 text-lg mb-10">
          Navigate to all existing and upcoming pages. The old architecture will be deprecated soon.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pages.map((page, index) => (
            <Link key={index} to={page.path} className="block group h-full cursor-target">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-500/50 cursor-pointer h-full flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-200 group-hover:text-blue-400 transition-colors">
                    {page.name}
                  </h2>
                  <p className="text-gray-500 mt-2 text-sm">{page.desc}</p>
                </div>
                <div className="mt-6 flex items-center text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-medium">Visit page</span>
                  <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
