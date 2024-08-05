// // export default function More() {
// //   return (
// //     <dev>more</dev>
// //   );
// // }

// "use client"
// import Image from "next/image";
// import { useState } from "react";
// import "../../../components/3-main/main.css";
// import { myProject } from "../../../components/3-main/myProjects";
// import Link from "next/link";



// function Main({params}) {
//     console.log(params);
    
//   const [currentactive, setcurrentactive] = useState("all");
//   const [arr, setArr] = useState(myProject);
  
  
//   const clickHandler = (project) => {
//     setcurrentactive(project);

//     const newArr = myProject.filter((item) => {
//       const smallArray = item.category.find((projectItem) => {
//         return projectItem === project;
//       });
//       return smallArray === project;
//     });
//     setArr(newArr);
//   };

//   return (
//     <main className="flex">
//       {/* left section */}
//       <section className=" left-section ">
//         <button
//           onClick={() => {
//             setcurrentactive("all");

//             const newArr = myProject.filter((item) => {
//               return item === item;
//             });
//             setArr(newArr);
//           }}
//           className={currentactive === "all" ? "active" : null}
//         >
//           All projects
//         </button>
//         <button
//           onClick={() => {
//             clickHandler("css");
//           }}
//           className={currentactive === "css" ? "active" : null}
//         >
//           HTML & CSS
//         </button>
//         <button
//           onClick={() => {
//             clickHandler("javascript");
//           }}
//           className={currentactive === "javascript" ? "active" : null}
//         >
//           JavaScript
//         </button>
//         <button
//           onClick={() => {
//             clickHandler("react");
//           }}
//           className={currentactive === "react" ? "active" : null}
//         >
//           React
//         </button>
//         <button
//           className={currentactive === "Express" ? "active" : null}
//           onClick={() => {
//             clickHandler("Express");
//           }}
//         >
//           Express
//         </button>
//         <button
//           onClick={() => {
//             clickHandler("Bootstrap");
//           }}
//           className={currentactive === "Bootstrap" ? "active" : null}
//         >
//           Bootstrap
//         </button>
//       </section>

//       {/* rigt section */}
//       <section className="right-section flex ">
//         {arr.map((item) => {
//           return (
//             <article key={item.id} className="card ">
//               {/* image */}
//               <Image
//                src={item.image}
//                 width={266} 
//                 height={266}
//                 alt="project image" 
//                 />

//               {/* box */}

//               <div style={{ width: "266px" }} className="box ">
//                 <h1 className="title">{item.projectTitle}</h1>
//                 <p className="subtitle">{item.projectSubTitle}</p>

//                 <div className="flex icons">
//                   <div style={{ gap: "11px" }} className="flex ">
//                     <div className="icon-link"></div>
//                     <div className="icon-github"></div>
//                   </div>
//                   <Link className="flex link" href={`/more/${item.id}`}>
//                     More <span className="icon-arrow-right"></span>
//                   </Link>
//                 </div>
//               </div>
//             </article>
//           );
//         })}
//       </section>
//     </main>
//   );
// }

// export default Main;

/////////////////////////////

// "use client"
import Image from "next/image";
import { myProject } from "../../../components/3-main/myProjects";
// import { useState } from "react";






export default  function More ({params}){
// const [projc,setProjc]=useState(myProject)
console.log(params.id);

    const newId = params.id
    console.log(newId);
    
   
    const proj = myProject.find((item)=>{

        return (item.id === newId)

        
        
    }   
    )
    console.log(proj);
    
    // setProjc(proj)
   
    
return(

    <div>
    <h1>project details</h1>


        <div >
<h1>{proj.id}</h1>

        <Image
        src={proj.image}
        width={500}
        height={500}
        alt="img"
        
        
        />
    </div>
    
    
    
      
    
     </div>
)

}