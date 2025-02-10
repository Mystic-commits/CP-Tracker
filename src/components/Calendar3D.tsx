import React from 'react';
import { Calendar, Bell } from 'lucide-react';

const Calendar3D = () => {
  return (
    <section id="calendar" className="py-20 bg-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">Never Miss a Contest</h2>
          <p className="mt-4 text-xl text-slate-400">Stay on top of your competitive programming schedule.</p>
        </div>
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-slate-800 p-6 rounded-xl">
              <div className="flex items-center gap-4">
                <Calendar className="h-6 w-6 text-indigo-400" />
                <h3 className="text-xl font-semibold text-white">Smart Calendar</h3>
              </div>
              <p className="mt-4 text-slate-400">
                Automatically syncs contests from all platforms and creates a unified schedule.
              </p>
            </div>
            <div className="bg-slate-800 p-6 rounded-xl">
              <div className="flex items-center gap-4">
                <Bell className="h-6 w-6 text-indigo-400" />
                <h3 className="text-xl font-semibold text-white">Custom Reminders</h3>
              </div>
              <p className="mt-4 text-slate-400">
                Set personalized reminders for contests, practice sessions, and study time.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-2xl transform rotate-3 transition-transform hover:rotate-6">
              <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm rounded-xl p-8">
                <div className="grid grid-cols-7 gap-2">
                  {Array.from({ length: 31 }, (_, i) => (
                    <div
                      key={i}
                      className={`aspect-square rounded-lg ${
                        [5, 12, 19, 26].includes(i)
                          ? 'bg-indigo-600 text-white'
                          : 'bg-slate-800 text-slate-400'
                      } flex items-center justify-center text-sm font-medium`}
                    >
                      {i + 1}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calendar3D;