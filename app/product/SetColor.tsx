// const SetColor= () => {
//   return (
//     <div className="flex gap-2">
//       <span className="text-lg font-semibold">COLOR:</span>
//       <div className="flex gap-2">
//         {images.map((img) => (
//           <div
//             key={img.color}
//             onClick={() => HandleColor(img)}
//             className={`w-8 h-8 rounded-full border-emerald-600 flex items-center justify-center ${
//               cartProduct.selectedImg.color === img.color
//                 ? "border-[2px]"
//                 : "border-none"
//             } `}
//           >
//             <div
//               className="w-6 h-6 rounded-full cursor-pointer"
//               style={{
//                 backgroundColor: img.colorCode,
//               }}
//             ></div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
// export default SetColor;
