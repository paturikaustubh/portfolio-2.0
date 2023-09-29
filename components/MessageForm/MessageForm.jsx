"use client";

export default function MessageFunction() {
  return (
    <form
      className="border-2 rounded-md p-4 grid grid-cols-12 gap-3 bg-neutral-100 fade fade-translate"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <p className="text-4xl col-span-12 font-bold text-violet-600 fade">
        Message Me
      </p>
      <div className="col-span-12 text-lg max-w-[45ch] fade">
        {`Got something in your mind to share? Express yourself here!\nStart by introducing yourself`}
      </div>
      <input
        type="text"
        className="form-input col-span-6 fade"
        required
        placeholder="Full Name"
      />
      <input
        type="email"
        className="form-input col-span-6 fade"
        required
        placeholder="E-Mail"
      />
      <textarea
        required
        name="message"
        id="message"
        className="form-input col-span-12 fade"
        rows={3}
        placeholder="Enter your message"
      />
      <button
        type="submit"
        className="text-right text-accent-500 py-2 px-6 hover:text-white hover:bg-accent-500 duration-300 rounded-md ml-auto col-span-12 border-2 border-accent-500 cursor-pointer text-lg fade"
      >
        Submit
      </button>
    </form>
  );
}
