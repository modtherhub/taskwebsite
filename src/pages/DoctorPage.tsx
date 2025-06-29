import { useEffect } from "react";
import { useState } from "react";
import { Atom } from "react-loading-indicators";

function DoctorPage() {
  const [doctor, setDoctor] = useState<any>(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => { 
    fetch('/api/data-model/doctor') 
      .then(res => res.json()) 
      .then((data) => {
        setDoctor(data.Doctor); 
        setLoading(false);      
      })
      .catch(err => {
        console.error('Error:', err); 
        setLoading(false);            
      });
  }, []); 

  if (loading) return <div className="h-screen flex items-center justify-center"><Atom color="#000000" size="small" text="loading ..." textColor="" /></div>; 
  if (!doctor) return <p>No doctor data found</p>; 
  
  return ( 
    <div className="flex-row p-6 lg:px-14 ">
        {/* first secction */}
        <div className="p-12 lg:pl-48 lg:flex items-center gap-6 border-b border-gray-400 ">
                <img
                    className="h-30 border rounded-full p-1"
                    src={doctor.profilePicture.notes}
                    alt={doctor.name.notes}
                />
            <div className="pt-4 ">
                <h2 className="font-extrabold text-xl"> {doctor.name.notes}</h2>
                <p className="font-bold">Specialty: <span className="font-light">{(doctor.specialty.notes)}</span></p>
                <p className="font-bold">WhatsApp: <span className="font-light">{doctor.whatsappPhoneNumber.notes}</span></p>
                <p className="font-bold">Email: <span className="font-light">{doctor.email.notes}</span></p>
               
            </div>
        </div>
        {/* section 2 */}
        <div className="p-14  lg:pl-48 items-center border-b border-gray-400">
            <h2 className="font-extrabold text-xl text-amber-900">Qualifications</h2>
            <div className="border-b border-gray-300 p-4">
                <p className="font-bold text-sm">{doctor.education.notes}</p>
            </div>
        </div>

        {/* section 3 */}
        <div className="p-14 lg:pl-48 items-center border-b border-gray-400">
            <h2 className="font-extrabold text-xl text-amber-900">Information</h2>
            <div className="p-4">
                <p className="font-semibold text-gray-700 p-1">Accepted Insurance</p>
                <p className="text-gray-900">{doctor.acceptedInsurance.notes}</p>
            </div>
            <div className="p-4">
                <p className="font-semibold text-gray-700 p-1">Additional Notes</p>
                <p className="text-gray-900">{doctor.additionalNotes.notes}</p>
            </div>
            <div className="p-4">
                <p className="font-semibold text-gray-700 p-1">Waiting Time After Booking</p>
                <p className="text-gray-900">{doctor.waitingTimeAfterBooking.notes}</p>
            </div>
            <div className="p-4">
                
                <div className="flex justify-between">
                    <p className="font-semibold text-gray-700 p-1">Account Status</p>
                    <p className="text-gray-900">{doctor.accountStatus.values}</p>
                </div>
                <p className="text-gray-900">{doctor.accountStatus.description}</p>
            </div>

            <div className="flex justify-center pt-6">
                <a href="#_" className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                    <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                    <span className="relative text-white">Book Appointment</span>
                </a>
            </div>

        </div>

        
    </div>
  );
}

export default DoctorPage;