import React from 'react';

const platforms = [
  {
    name: 'LeetCode',
    logo: 'https://leetcode.com/static/images/LeetCode_logo_rvs.png',
    problems: '2400+',
    users: '2M+'
  },
  {
    name: 'CodeForces',
    logo: 'https://codeforces.org/s/0/images/codeforces-sponsored-by-ton.png',
    problems: '7000+',
    users: '1.5M+'
  },
  {
    name: 'GeeksForGeeks',
    logo: 'https://media.geeksforgeeks.org/wp-content/uploads/20210915115837/gfg3.png',
    problems: '5000+',
    users: '3M+'
  }
];

const Platforms = () => {
  return (
    <section id="platforms" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">Supported Platforms</h2>
          <p className="mt-4 text-xl text-slate-400">Track your progress across all major competitive programming platforms.</p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {platforms.map((platform) => (
            <div key={platform.name} className="bg-slate-900 rounded-xl p-8 hover:bg-slate-700 transition-colors">
              <img src={platform.logo} alt={platform.name} className="h-12 object-contain mx-auto" />
              <div className="mt-6 text-center">
                <h3 className="text-xl font-semibold text-white">{platform.name}</h3>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-2xl font-bold text-indigo-400">{platform.problems}</p>
                    <p className="text-sm text-slate-400">Problems</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-indigo-400">{platform.users}</p>
                    <p className="text-sm text-slate-400">Users</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Platforms;