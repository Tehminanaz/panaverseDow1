
// import React, { useState } from 'react'
// import Image from 'next/image'
// import metaverse from "@/app/components/assetes/metaverse.webp"
// import ai from "@/app/components/assetes/ai.webp"
// import cloud from "@/app/components/assetes/cloud.webp"
// import ambient from "@/app/components/assetes/ambient.webp"
// import genomics from "@/app/components/assetes/genomics.webp"
// import network from "@/app/components/assetes/network.webp"


// const courseList = [
//   {
//     slug : "metaverse",
//     header: "Web 3.0 (Blockchain) and Metaverse Specialization",
//     discription: "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences...",
//     image: metaverse,
//     quaters: [
//       { header: "Quater 4", discription: "W3-351: Developing Smart Contracts...", number: 4 },
//       { header: "Quater 5", discription: "MV-361: Developing Planet-Scale Open Virtual..." }
//     ]
//   },
//   {
//     slug : "ai",
//     header: "Artificial Intelligence (AI) and Deep Learning Specialization",
//     discription: "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs...",
//     image: ai,
//     quaters: [
//       { header: "Quater 4", discription: "AI-351: Developing Planet-Scale Intelligent APIs...", number: 4 },
//       { header: "Quater 5", discription: "AI-361: Deep Learning and MLOps", number: 5 }
//     ]
//   },
//   {
//         slug : "cloud",
//         header : "Cloud-Native Computing Specialization",
//         discription : "The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes",
//         image : cloud,
//         quaters : [
//          {
//             header : "Quater 4",
//             discription : "CN-351: Certified Kubernetes Application Developer (CKAD)",
//             number : 4
//          },
//          {
//             header : "Quater 5",
//             discription : "CN-361: Developing Multi-Cloud Apps using CDK for Terraform",
//             number : 5
//          },
//         ]  
//       },
//       {
//             slug : "ambient",
//             header : "Ambient Computing and IoT Specialization",
//             discription : "The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices.",
//             image : ambient,
//             quaters : [
//              {
//                 header : "Quater 4",
//                 discription : "AC-351: Ambient Computing with Voice Assistants and Matter Devices",
//                 number : 4
//              },
//              {
//                 header : "Quater 5",
//                 discription : "AC-361: Embedded Programming using C and Rust",
//                 number : 5
//              },
//             ]  
//           },
//           {
//                 slug : "genpmic",
//                 header : "Genomics and Bioinformatics Specialization",
//                 discription : "Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications.",
//                 image : genomics,
//                 quaters : [
//                  {
//                     header : "Quater 4",
//                     discription : "Bio-351: Python for Biologists",
//                     number : 4
//                  },
//                  {
//                     header : "Quater 5",
//                     discription : "Bio-361: Bioinformatics with Python",
//                     number : 5
//                  },
//                 ]  
//               },
//               {
//                 slug : "network",
//                 header : "Network Programmability and Automation Specialization",
//                 discription : "More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.",
//                 image : network,
//                 quaters : [
//                  {
//                     header : "Quater 4",
//                     discription : "NPA-351: CCNA 200-301 Certification",
//                     number : 4
//                  },
//                  {
//                     header : "Quater 5",
//                     discription : "NPA-361: Network Programmability and Automation",
//                     number : 5
//                  },
//                 ]  
//               },
// ];



// const CourseData: React.FC = () => {
    
//     const [selectedItem, setSelectItem] = useState("metaverse");
  
//     const selectedItemData = courseList.filter((item) => item.slug === selectedItem )
  

//   return (
//     <div className='px-5 py-3 '>
//       {courseList.map((item, i) => (
//         <div onClick={() => setSelectItem(item.slug)} key={item.slug} className='flex items-center gap-4 mb-3 mt-1'>
//           {/* Image Container */}
//           <div className='w-25 h-12 rounded-md flex-shrink-0'>
//             <Image
//               src={item.image}
//               alt={item.header}
//               className='w-20 h-14 object-cover rounded-md'
//             />
//           </div>
          
//           {/* Text Container */}
//           <div className='flex flex-col'>
//             <h3 className='text-teal-500 text-xs'>Specialize Program</h3>
//             <h4 className='text-sm font-semibold text-black'>
//               {item.header}
//             </h4>
//             {/* <p className='text-sm text-gray-700'>
//               {item.discription}
//             </p> */}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CourseData;
































// // yaha  deko *****************************************************8
// // import React from 'react'
// // import metaverse from "@/app/components/assetes/metaverse.webp"
// // import ai from "@/app/components/assetes/ai.webp"
// // import cloud from "@/app/components//assetes/cloud.webp"
// // import ambient from "@/app/components/assetes/ambient.webp"
// // import genomics from "@/app/components/assetes/genomics.webp"
// // import network from "@/app/components/assetes/network.webp"

// // const courseList = () => {
// //  const data = [
// //   {
// //      header : "Web 3.0 (Blockchain) and Metaverse Speccialization",
// //      discription : "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
// //      image : metaverse,
// //      quaters : [
// //       {
// //          header : "Quater 4",
// //          discription : "W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
// //          number : 4
// //       },
// //       {
// //          header : "Quater 5",
// //          discription : "MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse experience "
// //       },
// //      ]

// //   },
// //   {
// //     header : "Artificial Intelligence (AI) and Deep Learning Specialization",
// //     discription : "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
// //     image : ai,
// //     quaters : [
// //      {
// //         header : "Quater 4",
// //         discription : "AI-351: Developing Planet-Scale Intelligent APIs and Python Programming",
// //         number : 4
// //      },
// //      {
// //         header : "Quater 5",
// //         discription : "AI-361: Deep Learning and MLOps",
// //         number : 5
// //      },
// //     ]
    
// //   },
// //   {
// //     header : "Cloud-Native Computing Specialization",
// //     discription : "The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes",
// //     image : cloud,
// //     quaters : [
// //      {
// //         header : "Quater 4",
// //         discription : "CN-351: Certified Kubernetes Application Developer (CKAD)",
// //         number : 4
// //      },
// //      {
// //         header : "Quater 5",
// //         discription : "CN-361: Developing Multi-Cloud Apps using CDK for Terraform",
// //         number : 5
// //      },
// //     ]  
// //   },
// //   {
// //     header : "Ambient Computing and IoT Specialization",
// //     discription : "The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices.",
// //     image : ambient,
// //     quaters : [
// //      {
// //         header : "Quater 4",
// //         discription : "AC-351: Ambient Computing with Voice Assistants and Matter Devices",
// //         number : 4
// //      },
// //      {
// //         header : "Quater 5",
// //         discription : "AC-361: Embedded Programming using C and Rust",
// //         number : 5
// //      },
// //     ]  
// //   },
// //   {
// //     header : "Genomics and Bioinformatics Specialization",
// //     discription : "Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications.",
// //     image : genomics,
// //     quaters : [
// //      {
// //         header : "Quater 4",
// //         discription : "Bio-351: Python for Biologists",
// //         number : 4
// //      },
// //      {
// //         header : "Quater 5",
// //         discription : "Bio-361: Bioinformatics with Python",
// //         number : 5
// //      },
// //     ]  
// //   },
// //   {
// //     header : "Network Programmability and Automation Specialization",
// //     discription : "More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.",
// //     image : network,
// //     quaters : [
// //      {
// //         header : "Quater 4",
// //         discription : "NPA-351: CCNA 200-301 Certification",
// //         number : 4
// //      },
// //      {
// //         header : "Quater 5",
// //         discription : "NPA-361: Network Programmability and Automation",
// //         number : 5
// //      },
// //     ]  
// //   },
// //  ]
// // }


// // const CourseData :React.FC = () => {
// //   return (
// //     {courseList.map((item, i) => (
// //       <div key={i} className='flex gap-2 cursor-pointer'>
// //       <div>
// //          <div className='w-24 h-16 bg-slate-300 rounded-md'></div>
// //        </div>
// //        <div>
// //          <h4 className='text-[8px] text-teal-800 font-bold whitespace-pre-line'>Specialized Track</h4>
// //          <h3 className='mt-0 text-[10px] text-left font-bold'>Web 3.0 (Blockchain) and Metaverse Specialization</h3>
// //        </div>
// //       </div>
// //     ) )

// //     }
// //   )
// // }

// // export default CourseData

