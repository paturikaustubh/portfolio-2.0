"use client";

export default function KnowMore() {
  return (
    <p
      className="ml-auto mt-6 text-accent-500 py-2 px-6 hover:text-white hover:bg-accent-500 duration-300 rounded-r-full rounded-l-full border-2 border-accent-500 cursor-pointer"
      onClick={() => {
        var element = document.getElementById("about-me");
        var headerOffset = 250;
        var elementPosition = element.getBoundingClientRect().top;
        var offsetPosition = elementPosition + window.scrollY - headerOffset;
        console.log(elementPosition, offsetPosition, window.scrollY);

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }}
    >
      Know More
    </p>
  );
}
