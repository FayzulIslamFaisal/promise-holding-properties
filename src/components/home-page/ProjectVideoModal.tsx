// "use client";

// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import ReactPlayer from "react-player";
// import { useRef, useState, useEffect } from "react";

// interface VideoModalProps {
//   open: boolean;
//   onOpenChange: (open: boolean) => void;
// }

// const ProjectVideoModal = ({ open, onOpenChange }: VideoModalProps) => {
//   const playerRef = useRef<InstanceType<typeof ReactPlayer> | null>(null);
//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   useEffect(() => {
//     if (!open && playerRef.current) {
//       playerRef.current.seekTo(0);
//     }
//   }, [open]);

//   return (
//     <Dialog open={open} onOpenChange={onOpenChange}>
//       <DialogTrigger>Open</DialogTrigger>
//       <DialogContent className="sm:max-w-[80vw]">
//         <DialogHeader>
//           <DialogTitle>Video Preview</DialogTitle>
//         </DialogHeader>

//         <div className="w-full aspect-video mt-4">
//           {isClient && (
//             <ReactPlayer
//               ref={playerRef}
//               url="https://www.youtube.com/embed/pPl3ZZdTP3g?si=l2WFKR34nQ1bXrKz"
//               width="100%"
//               height="100%"
//               controls
//               playing={open}
//               playsinline
//               config={{
//                 youtube: {
//                   playerVars: {
//                     autoplay: 1,
//                     modestbranding: 1,
//                     rel: 0,
//                   },
//                 },
//               }}
//             />
//           )}
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default ProjectVideoModal;
