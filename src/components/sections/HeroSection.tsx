'use client'
import { projects } from "@/utils/projects";
import { Blocks, Brain, Code2, FileText, PlayCircle, Rocket } from "lucide-react";
import { useState } from "react";

const HeroSection = () => {
    return (
        <section className="hero">
        <div className="hero-container">
            <div className="hero-content">
                <div className="hero-label">
                    <Brain/>
                    AI Developer
                </div>
                <div className="hero-label">
                    <Blocks/>
                    Blockchain Developer
                </div>
                <div className="hero-label">
                    <Code2/>
                    Web Application Developer
                </div>
                <h1>
                    Building the Future of<br/>
                    <span className="gradient-text">Decentralized Web</span>
                </h1>
                <p className="hero-description">
                    Full-stack blockchain developer specializing in NFTs, DAOs, DeFi platforms, and Web3 applications. 
                    Turning complex blockchain concepts into elegant, scalable solutions.
                </p>
                <div className="hero-buttons">
                    <a onClick={()=>console.log(projects)} href="#projects" className="btn btn-primary">
                        <Rocket/>
                        View My Work
                    </a>
                    <a href="/resume.pdf" target="_blank" className="btn btn-secondary">
                        <FileText/>
                        Download Resume
                    </a>
                </div>
            </div>
            <div className="hero-video">
                <div className="video-placeholder">
                    <VideoPreview
      thumbnail="/Portfolio-Image.png" 
    />
                    {/* <iframe src="/Full-Stack-Developer.mp4" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
                    <img src="/Portfolio-Image.png" style={{width:'100%',  objectFit:'cover', objectPosition:'top'}}/> */}
                    {/* <!-- Replace with your video embed -->
                    <!-- <iframe src="YOUR_VIDEO_URL" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> --> */}
                    {/* <div style={{textAlign: 'center'}}>
                        <PlayCircle style={{width: '64px', height: '64px', marginBottom: '1rem'}}/>
                        <p>Add your intro video here</p>
                    </div> */}
                    {/* <img src="/image.png" style={{width:'100%',  objectFit:'cover', objectPosition:'top'}}/> */}
                    {/* <img src="/Portfolio-Image.png" style={{width:'100%',  objectFit:'cover', objectPosition:'top'}}/> */}
                </div>
            </div>
        </div>
    </section>
    );
}

function VideoPreview({
  thumbnail = "/Portfolio-Image.png",
  videoId = "iTrysFtbzDc",
}) {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <div className="video-wrapper">
        {!showVideo && (
          <>
            <img
              src={thumbnail}
              alt="Portfolio Preview"
              className="thumbnail"
            />

            <button
              className="play-btn"
              onClick={() => setShowVideo(true)}
              aria-label="Play Video"
            >
              <svg width="36" height="36" style={{margin:'auto'}} viewBox="0 0 24 24" fill="white">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </>
        )}

        {showVideo && (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title="YouTube video"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="video"
          />
        )}
      </div>

      <style jsx>{`
        .video-wrapper {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          border-radius: 16px;
          background: #000;
        }

        .thumbnail {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: 10px -30px;
        }

        .play-btn {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 90px;
          height: 90px;
          border: none;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.55);
          backdrop-filter: blur(10px);
          cursor: pointer;
        }

        .video {
          width: 100%;
          height: 100%;
          border: none;
        }
      `}</style>
    </>
  );
}
// function VideoPreview({
//   thumbnail = "/Portfolio-Image.png",
//   video = "/Full-Stack-Developer.mp4",
// }) {
//   const [showVideo, setShowVideo] = useState(false);
//   const [loaded, setLoaded] = useState(false);

//   return (
//     <>
//       <div className="video-wrapper">
//         {!showVideo && (
//           <>
//             <img
//               src={thumbnail}
//               alt="Portfolio Preview"
//               className="thumbnail"
//             />

//             <button
//               className="play-btn"
//               onClick={() => setShowVideo(true)}
//               aria-label="Play Video"
//             >
//               <svg
//                 width="36"
//                 height="36"
//                 viewBox="0 0 24 24"
//                 fill="white"
//               >
//                 <path d="M8 5v14l11-7z" />
//               </svg>
//             </button>
//           </>
//         )}

//         {showVideo && (
//           <>
//             <video
//               src={video}
//               poster={thumbnail}
//               autoPlay
//               controls
//               playsInline
//               preload="auto"
//               onCanPlay={() => setLoaded(true)}
//               className={`video ${loaded ? "loaded" : ""}`}
//             />

//             {!loaded && (
//               <div className="loader-overlay">
//                 <div className="spinner"></div>
//               </div>
//             )}
//           </>
//         )}
//       </div>

//       <style jsx>{`
//         .video-wrapper {
//           position: relative;
//           width: 100%;
//           aspect-ratio: 16 / 9;
//           overflow: hidden;
//           border-radius: 16px;
//           background: #000;
//         }

//         .thumbnail {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           object-position: top center; /* Crops from bottom */
//           display: block;
//         }

//         .play-btn {
//           position: absolute;
//           top: 50%;
//           left: 50%;
//           transform: translate(-50%, -50%);
//           width: 90px;
//           height: 90px;
//           border: none;
//           border-radius: 50%;
//           background: rgba(0, 0, 0, 0.55);
//           backdrop-filter: blur(10px);
//           -webkit-backdrop-filter: blur(10px);
//           cursor: pointer;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           transition: all 0.25s ease;
//         }

//         .play-btn:hover {
//           transform: translate(-50%, -50%) scale(1.08);
//           background: rgba(0, 0, 0, 0.7);
//         }

//         .play-btn svg {
//           margin-left: 4px;
//         }

//         .video {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           opacity: 0;
//           transition: opacity 0.35s ease;
//         }

//         .video.loaded {
//           opacity: 1;
//         }

//         .loader-overlay {
//           position: absolute;
//           inset: 0;
//           background: #000;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }

//         .spinner {
//           width: 44px;
//           height: 44px;
//           border: 4px solid rgba(255, 255, 255, 0.2);
//           border-top: 4px solid #fff;
//           border-radius: 50%;
//           animation: spin 0.8s linear infinite;
//         }

//         @keyframes spin {
//           100% {
//             transform: rotate(360deg);
//           }
//         }
//       `}</style>
//     </>
//   );
// }
export default HeroSection;