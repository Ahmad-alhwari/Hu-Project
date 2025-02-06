import { Clock, MapPin, Phone } from "lucide-react";
import React from "react";

const TreatmentFooter = () => {
  return (
    <footer className="bg-rose-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <Clock className="w-5 h-5 mr-2" />
            Working Hours
          </h3>
          <p className="text-rose-200">
            Monday - Friday: 9:00 AM - 6:00 PM
            <br />
            Saturday: 10:00 AM - 4:00 PM
            <br />
            Sunday: Closed
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <MapPin className="w-5 h-5 mr-2" />
            Location
          </h3>
          <p className="text-rose-200">
            123 Pet Care Lane
            <br />
            Pawsome City, PC 12345
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <Phone className="w-5 h-5 mr-2" />
            Contact
          </h3>
          <p className="text-rose-200">
            Phone: (555) 123-4567
            <br />
            Email: care@purrrfectmatch.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default TreatmentFooter;
