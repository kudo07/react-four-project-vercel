// import {Video,Thumb} from './components/Video'
import Video from "./components/Video";
import "./App.css";
import videos from "./data/data";
import PlayButton from "./components/PlayButton";
function App() {
  //props are defined in app level
  //prop
  // let obj = [
  //   {
  //     id: 1,
  //     title: "React js tut",
  //     views: "100K",
  //     channel: "HelloCoder",
  //     time: "1 year ago",
  //     verified: true,
  //   },
  //   {
  //     id: 2,
  //     title: "Node js tut",
  //     views: "100K",
  //     channel: "HelloCoder",
  //     time: "1 year ago",
  //     verified: true,
  //   },
  //   {
  //     id: 3,
  //     title: "veu js tut",
  //     views: "100K",
  //     channel: "HelloCoder",
  //     time: "1 year ago",
  //     verified: false,
  //   },
  // ];
  // component
  // always start the name of component in upper case
  // app
  //for browser component is invisible
  return (
    <div className="App">
      <div>Vidos</div>
      {
        //hof
        videos.map((video) => (
          <Video
            key={video.id}
            title={video.title}
            views={video.views}
            channel={video.channel}
            time={video.time}
            verified={video.verified}
            id={video.id}
          >
            <PlayButton
              message="let-chat-omeday"
              onPlay={() => console.log("playu", video.title)}
              onPause={() => console.log("pause", video.title)}
            >
              {video.title}
            </PlayButton>
          </Video>
        ))
      }

      {/*  props now they have been edited and are called props*/}

      {/* <Thumb></Thumb> */}
      <div style={{ clear: "both" }}>
        {/* <PlayButton
          message="let-chat-omeday"
          onPlay={() => console.log("playu")}
          onPause={() => console.log("pause")}
        >
          these are props
          plaay
        </PlayButton> */}
        {/* <PlayButton message="loloi" onSmash={() => alert("Start")}>
          pause
        </PlayButton> */}
      </div>
    </div>
  );
}
// we write function and use as tag
export default App;

// import './App.css';

// function App() {
//   // functional componenet
//   let name = 'react app';
//   let className='App-header';
//   console.log("app");
//   return (
//     <div className="">
//       {/*
//       app and app-header is an attribute
//       we can attach the expression above in */}
//       <div className={className}>
//         {/*
//         <div className="App-header">
//         */}
//         {name}
//         {/*
//         throught variable we can attach name this is called expression
//         */}
//       hello React dev
//       <Demo></Demo>
//       </div>

//     </div>
//   );
// }

// function Demo() {
//   // functional componenet
//   console.log("demo");

//   return (
//     <div className="App">
//       <div className="App-header">
//     Demo
//       <demo></demo>
//       </div>

//     </div>
//   )
//   }

// export default App;

//chPTER 3- CONDITIONAL RENDERING
