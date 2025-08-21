import Image from "next/image";

export default function AboutMe() {
  return (
    <section className="mt-3 flex flex-col justify-center items-center" id="aboutme">
      <h2 className="text-4xl font-bold">About Me</h2>
      <div className="mt-3 flex flex-col md:flex-row items-center gap-6 p-6 rounded-lg max-w-4xl w-full">
        <div className="w-[125px] h-[125px] min-w-[125px] md:w-[175px] md:h-[175px] md:min-w-[175px] relative rounded-full overflow-hidden bg-gray-500 flex items-center justify-center">
          {/* Next.js Image with full size and rounded */}
          <Image
            src="https://www.gravatar.com/avatar/4a7d1ed414474e4033ac29ccb8653d9b?s=200&d=identicon"
            alt="Avatar"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
            priority
          />
        </div>
        <div className="max-md:text-center text-xl leading-relaxed">
          <p>Hi, I'm Kamil.</p>
          <p>I'm 19 years old. My goal is to help others, and in the future, I plan to revolutionize the world.</p>
          <p>I especially enjoy creating in frontend development (web apps), but sometimes backend work also brings me joy, mainly using Rust and Python.</p>
        </div>
      </div>
    </section>
  );
}
