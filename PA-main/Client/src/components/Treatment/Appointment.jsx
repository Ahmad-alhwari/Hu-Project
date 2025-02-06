import React from "react";
import { Mail, MessageSquare, Calendar, Phone } from "lucide-react";

const Appointment = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white rounded-xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-rose-800 mb-8 text-center flex items-center justify-center">
          <Calendar className="w-8 h-8 mr-2" />
          Schedule a Treatment Session
        </h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg border border-rose-200 focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition-colors duration-200"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Pet's Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg border border-rose-200 focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition-colors duration-200"
                placeholder="Max"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-rose-200 focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition-colors duration-200"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <input
                  type="tel"
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-rose-200 focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition-colors duration-200"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Treatment Type
            </label>
            <select className="w-full px-4 py-2 rounded-lg border border-rose-200 focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition-colors duration-200">
              <option>Dog Behavioral Therapy</option>
              <option>Cat Stress Management</option>
              <option>Physical Rehabilitation</option>
              <option>Post-Surgery Care</option>
              <option>Senior Pet Care</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Special Notes
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <textarea
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-rose-200 focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition-colors duration-200"
                rows="4"
                placeholder="Tell us about your pet's specific needs..."
              ></textarea>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-rose-600 text-white py-3 px-6 rounded-lg hover:bg-rose-700 transform hover:scale-105 transition-all duration-200 flex items-center justify-center"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Schedule Treatment
          </button>
        </form>
      </div>
    </div>
  );
};

export default Appointment;
