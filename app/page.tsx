import Copy from "./assets/components/Copy";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <Copy delay={0.5}>
        <div className="flex flex-col gap-5 items-center">
          <h1 className="text-6xl">Hello</h1>
          <p className="text-4xl">welcome to my website</p>
        </div>
      </Copy>
    </div>
  );
}
