import React from "react";

function BookingsDetails({ name, dgree, fee, onCancel }) {
  return (
    <div className="bg-white p-6 rounded-xl mx-6 my-4">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-bold text-lg">{name}</h3>
          <p className="text-sm text-gray-600">
            {dgree} - General Medicine, DNB
          </p>
        </div>
        <p className="text-sm text-gray-600">Fee: {fee} Taka + VAT</p>
      </div>

      <button
        onClick={onCancel}
        className="w-full mt-4 py-2 border border-red-700 text-red-600 rounded-lg hover:bg-red-50"
      >
        Cancel Appointment
      </button>
    </div>
  );
}

export default BookingsDetails;
