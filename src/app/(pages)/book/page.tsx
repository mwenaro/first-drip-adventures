"use client"
import { useForm } from "react-hook-form";


type BookingFormInputs = {
  name: string;
  email: string;
  package: string;
  date: string;
};

const Booking = () => {
  const { register, handleSubmit, reset } = useForm<BookingFormInputs>();

  const onSubmit = (data: BookingFormInputs) => {
    alert("Booking confirmed! " + JSON.stringify(data));
    reset();
  };

  return (
    <>
      
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-4">Book Your Safari</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto bg-white p-6 shadow-md rounded">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Name</label>
            <input type="text" {...register("name")} className="w-full border px-3 py-2 rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Email</label>
            <input type="email" {...register("email")} className="w-full border px-3 py-2 rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Choose Package</label>
            <select {...register("package")} className="w-full border px-3 py-2 rounded">
              <option value="maasai-mara">Maasai Mara Safari</option>
              <option value="serengeti">Serengeti Adventure</option>
              <option value="ngorongoro">Ngorongoro Exploration</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Preferred Date</label>
            <input type="date" {...register("date")} className="w-full border px-3 py-2 rounded" />
          </div>
          <button type="submit" className="bg-green-600 text-white px-6 py-3 rounded">Submit</button>
        </form>
      </div>
    
    </>
  );
};

export default Booking;
