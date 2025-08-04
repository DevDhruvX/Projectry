import React, { useState, useEffect } from "react";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [featuredProjects] = useState([
    {
      id: 1,
      title: "Mobile App for Course Management",
      description: "A mobile app to help students organize their courses, assignments, and deadlines.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop&crop=center",
      category: "Mobile Development",
      price: "$2,500"
    },
    {
      id: 2,
      title: "Web Dashboard for Project Tracking",
      description: "A web dashboard to track project progress, tasks, and team collaboration.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center",
      category: "Web Development",
      price: "$3,200"
    },
    {
      id: 3,
      title: "Data Analysis for Research Paper",
      description: "Data analysis and visualization for research paper on environmental science.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center",
      category: "Data Science",
      price: "$1,800"
    }
  ]);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  const handleHeroSearch = (e) => {
    e.preventDefault();
    console.log("Hero search:", searchQuery);
  };

  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#111a22] dark group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        {/* Header */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#233748] px-10 py-3">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-4 text-white">
              <div className="size-4">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                  <path
                    d="M39.5563 34.1455V13.8546C39.5563 15.708 36.8773 17.3437 32.7927 18.3189C30.2914 18.916 27.263 19.2655 24 19.2655C20.737 19.2655 17.7086 18.916 15.2073 18.3189C11.1227 17.3437 8.44365 15.708 8.44365 13.8546V34.1455C8.44365 35.9988 11.1227 37.6346 15.2073 38.6098C17.7086 39.2069 20.737 39.5564 24 39.5564C27.263 39.5564 30.2914 39.2069 32.7927 38.6098C36.8773 37.6346 39.5563 35.9988 39.5563 34.1455Z"
                    fill="currentColor"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.4485 13.8519C10.4749 13.9271 10.6203 14.246 11.379 14.7361C12.298 15.3298 13.7492 15.9145 15.6717 16.3735C18.0007 16.9296 20.8712 17.2655 24 17.2655C27.1288 17.2655 29.9993 16.9296 32.3283 16.3735C34.2508 15.9145 35.702 15.3298 36.621 14.7361C37.3796 14.246 37.5251 13.9271 37.5515 13.8519C37.5287 13.7876 37.4333 13.5973 37.0635 13.2931C36.5266 12.8516 35.6288 12.3647 34.343 11.9175C31.79 11.0295 28.1333 10.4437 24 10.4437C19.8667 10.4437 16.2099 11.0295 13.657 11.9175C12.3712 12.3647 11.4734 12.8516 10.9365 13.2931C10.5667 13.5973 10.4713 13.7876 10.4485 13.8519ZM37.5563 18.7877C36.3176 19.3925 34.8502 19.8839 33.2571 20.2642C30.5836 20.9025 27.3973 21.2655 24 21.2655C20.6027 21.2655 17.4164 20.9025 14.7429 20.2642C13.1498 19.8839 11.6824 19.3925 10.4436 18.7877V34.1275C10.4515 34.1545 10.5427 34.4867 11.379 35.027C12.298 35.6207 13.7492 36.2054 15.6717 36.6644C18.0007 37.2205 20.8712 37.5564 24 37.5564C27.1288 37.5564 29.9993 37.2205 32.3283 36.6644C34.2508 36.2054 35.702 35.6207 36.621 35.027C37.4573 34.4867 37.5485 34.1546 37.5563 34.1275V18.7877ZM41.5563 13.8546V34.1455C41.5563 36.1078 40.158 37.5042 38.7915 38.3869C37.3498 39.3182 35.4192 40.0389 33.2571 40.5551C30.5836 41.1934 27.3973 41.5564 24 41.5564C20.6027 41.5564 17.4164 41.1934 14.7429 40.5551C12.5808 40.0389 10.6502 39.3182 9.20848 38.3869C7.84205 37.5042 6.44365 36.1078 6.44365 34.1455L6.44365 13.8546C6.44365 12.2684 7.37223 11.0454 8.39581 10.2036C9.43325 9.3505 10.8137 8.67141 12.343 8.13948C15.4203 7.06909 19.5418 6.44366 24 6.44366C28.4582 6.44366 32.5797 7.06909 35.657 8.13948C37.1863 8.67141 38.5667 9.3505 39.6042 10.2036C40.6278 11.0454 41.5563 12.2684 41.5563 13.8546Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">ProjectForge</h2>
            </div>
            <div className="flex items-center gap-9">
              <a className="text-white text-sm font-medium leading-normal hover:text-[#0f7fdb] transition-colors cursor-pointer">Buy</a>
              <a className="text-white text-sm font-medium leading-normal hover:text-[#0f7fdb] transition-colors cursor-pointer">Sell</a>
              <a className="text-white text-sm font-medium leading-normal hover:text-[#0f7fdb] transition-colors cursor-pointer">Hire</a>
            </div>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <form onSubmit={handleSearch} className="flex">
              <label className="flex flex-col min-w-40 !h-10 max-w-64">
                <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                  <div className="text-[#91b0ca] flex border-none bg-[#233748] items-center justify-center pl-4 rounded-l-xl border-r-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
                    </svg>
                  </div>
                  <input
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#233748] focus:border-none h-full placeholder:text-[#91b0ca] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                  />
                </div>
              </label>
            </form>
            <div className="flex gap-2">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#0f7fdb] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#0d6bb8] transition-colors">
                <span className="truncate">Sign Up</span>
              </button>
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#233748] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#2a4258] transition-colors">
                <span className="truncate">Log In</span>
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1">
          {/* Hero Section */}
          <section className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
              <div className="@container">
                <div className="@[480px]:p-4">
                  <div
                    className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
                    style={{
                      backgroundImage:
                        'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=600&fit=crop&crop=center")'
                    }}
                  >
                    <div className="flex flex-col gap-2 text-center">
                      <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                        Your Academic Software Marketplace
                      </h1>
                      <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                        Find, sell, or hire developers for your academic software projects. ProjectForge connects students with the resources they need to succeed.
                      </h2>
                    </div>
                    <form onSubmit={handleHeroSearch} className="w-full max-w-[480px]">
                      <label className="flex flex-col min-w-40 h-14 w-full @[480px]:h-16">
                        <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                          <div className="text-[#91b0ca] flex border border-[#324f67] bg-[#192834] items-center justify-center pl-[15px] rounded-l-xl border-r-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                              <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
                            </svg>
                          </div>
                          <input
                            placeholder="Search for projects or developers"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border border-[#324f67] bg-[#192834] focus:border-[#324f67] h-full placeholder:text-[#91b0ca] px-[15px] rounded-r-none border-r-0 pr-2 rounded-l-none border-l-0 pl-2 text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal"
                          />
                          <div className="flex items-center justify-center rounded-r-xl border-l-0 border border-[#324f67] bg-[#192834] pr-[7px]">
                            <button
                              type="submit"
                              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#0f7fdb] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] hover:bg-[#0d6bb8] transition-colors"
                            >
                              <span className="truncate">Search</span>
                            </button>
                          </div>
                        </div>
                      </label>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Projects Section */}
          <section className="px-4 md:px-10 lg:px-40 py-12">
            <div className="max-w-[960px] mx-auto">
              <h2 className="text-white text-2xl font-bold mb-8">Featured Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredProjects.map((project) => (
                  <div key={project.id} className="bg-[#233748] rounded-lg overflow-hidden hover:bg-[#2a4258] transition-colors group cursor-pointer">
                    <div className="aspect-video bg-cover bg-center" style={{ backgroundImage: `url(${project.image})` }}></div>
                    <div className="p-4">
                      <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-[#0f7fdb] transition-colors">{project.title}</h3>
                      <p className="text-[#91b0ca] text-sm mb-3 line-clamp-2">{project.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-[#0f7fdb] text-xs font-medium">{project.category}</span>
                        <span className="text-white font-bold">{project.price}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* How ProjectForge Works Section */}
          <section className="px-4 md:px-10 lg:px-40 py-12 bg-[#0f1419]">
            <div className="max-w-[960px] mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-white text-3xl font-bold mb-4">How ProjectForge Works</h2>
                <h3 className="text-white text-xl mb-2">Get Started in Three Simple Steps</h3>
                <p className="text-[#91b0ca] text-base">ProjectForge makes it easy to find, sell, or hire developers for your academic software projects.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#233748] rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#0f7fdb" viewBox="0 0 256 256">
                      <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
                    </svg>
                  </div>
                  <h4 className="text-white text-lg font-semibold mb-2">Search for Projects or Developers</h4>
                  <p className="text-[#91b0ca] text-sm">Use our powerful search to find projects that match your skills or developers with the right skills.</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#233748] rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#0f7fdb" viewBox="0 0 256 256">
                      <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM40,56H216V88H40ZM40,200V104H216v96Z"/>
                      <circle cx="68" cy="68" r="8"/>
                      <circle cx="92" cy="68" r="8"/>
                      <circle cx="116" cy="68" r="8"/>
                    </svg>
                  </div>
                  <h4 className="text-white text-lg font-semibold mb-2">Connect and Collaborate</h4>
                  <p className="text-[#91b0ca] text-sm">Connect with sellers or buyers, discuss project requirements, and collaborate effectively.</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#233748] rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#0f7fdb" viewBox="0 0 256 256">
                      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm49.52,85.76-58.6,56a8,8,0,0,1-11.09-.21L77.24,134.82a8,8,0,0,1,11.52-11.64l25.34,26.6,53.26-50.84a8,8,0,0,1,11.16,11.82Z"/>
                    </svg>
                  </div>
                  <h4 className="text-white text-lg font-semibold mb-2">Complete Projects and Get Paid</h4>
                  <p className="text-[#91b0ca] text-sm">Complete projects successfully and get paid securely through our platform.</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="px-4 md:px-10 lg:px-40 py-16">
            <div className="max-w-[600px] mx-auto text-center">
              <h2 className="text-white text-3xl font-bold mb-4">Join ProjectForge Today</h2>
              <p className="text-[#91b0ca] text-base mb-8">Start buying, selling, or hiring developers for your academic software projects.</p>
              <button className="bg-[#0f7fdb] hover:bg-[#0d6bb8] text-white font-bold py-3 px-8 rounded-full text-lg transition-colors">
                Sign Up Now
              </button>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-[#233748] px-4 md:px-10 lg:px-40 py-8">
          <div className="max-w-[960px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white">
                    <path
                      d="M39.5563 34.1455V13.8546C39.5563 15.708 36.8773 17.3437 32.7927 18.3189C30.2914 18.916 27.263 19.2655 24 19.2655C20.737 19.2655 17.7086 18.916 15.2073 18.3189C11.1227 17.3437 8.44365 15.708 8.44365 13.8546V34.1455C8.44365 35.9988 11.1227 37.6346 15.2073 38.6098C17.7086 39.2069 20.737 39.5564 24 39.5564C27.263 39.5564 30.2914 39.2069 32.7927 38.6098C36.8773 37.6346 39.5563 35.9988 39.5563 34.1455Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="text-white font-bold text-lg">ProjectForge</span>
                </div>
                <p className="text-[#91b0ca] text-sm">Connecting students with academic software resources.</p>
              </div>
              
              <div>
                <h4 className="text-white font-semibold mb-3">About</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-[#91b0ca] text-sm hover:text-white transition-colors">About Us</a></li>
                  <li><a href="#" className="text-[#91b0ca] text-sm hover:text-white transition-colors">How It Works</a></li>
                  <li><a href="#" className="text-[#91b0ca] text-sm hover:text-white transition-colors">Success Stories</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-white font-semibold mb-3">Contact</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-[#91b0ca] text-sm hover:text-white transition-colors">Support</a></li>
                  <li><a href="#" className="text-[#91b0ca] text-sm hover:text-white transition-colors">Help Center</a></li>
                  <li><a href="#" className="text-[#91b0ca] text-sm hover:text-white transition-colors">Contact Us</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-white font-semibold mb-3">Legal</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-[#91b0ca] text-sm hover:text-white transition-colors">Terms of Service</a></li>
                  <li><a href="#" className="text-[#91b0ca] text-sm hover:text-white transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="text-[#91b0ca] text-sm hover:text-white transition-colors">FAQ</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-[#233748] pt-6 text-center">
              <p className="text-[#91b0ca] text-sm">© 2025 ProjectForge. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;