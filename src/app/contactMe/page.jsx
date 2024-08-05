import Image from "next/image";
export default function ContactMe () {
  return (
    <div className="flex flex-col ">
        <h1 className="text-center text-9xl mb-9 border-2 border-slate-300 border-solid rounded-md">CONTACT ME</h1>
        <Image
        src={"/me.png"}
        width={500}
        height={500}
        alt={"mayah"}
        className="mx-auto"
        
        />
        
       <p className="text-9xl my-5 capitalize"> Mohamed Mayah</p> 
       <p className="text-8xl mt-5">Egypt</p> 
       <p className="text-7xl underline mt-10 mb-7 p-9">mohamedmayah@gmail.com</p>

    </div>
  );
}