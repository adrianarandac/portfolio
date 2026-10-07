import { useState } from "react";

const steps = [
  { name: "Extract", diagram: "MP4 → RGB PNG frames", description: "Read dimensions and frame rate with ffprobe, then decode the video into numbered RGB frames. Optional working dimensions preserve aspect ratio." },
  { name: "Preprocess", diagram: "Frames → optional denoise", description: "An optional hqdn3d pass reduces noise before inference. This is an FFmpeg preprocessing filter, separate from the neural model's restoration." },
  { name: "Infer", diagram: "Tiles → neural inference → enhanced frames", description: "NCNN loads the chosen model's graph and weights. Vulkan runs inference on the GPU; padded tiles are processed and stitched into the enlarged frame." },
  { name: "Rebuild", diagram: "Enhanced frames + audio → MP4", description: "FFmpeg encodes the enhanced frames with H.264 and yuv420p, using the planned frame rate. Original audio is extracted and muxed back in when present." },
];

const Frame = ({ output = false }: { output?: boolean }) => (
  <svg viewBox={output ? "1401 330 442 266" : "944 330 442 266"} preserveAspectRatio="xMidYMid slice">
    <image href="/real/upscaling-comparison.jpg" width="1844" height="870" />
  </svg>
);

const StageGraphic = ({ stage }: { stage: number }) => (
  <svg className="real-node-graphic" viewBox="0 0 160 110" aria-hidden="true">
    {stage === 0 && <>
      <rect x="18" y="8" width="124" height="65" fill="none" stroke="currentColor" />
      <svg x="21" y="11" width="118" height="59"><Frame /></svg>
      <path d="m73 29 19 12-19 12Z" fill="white" />
      {[25, 63, 101].map((x) => <g key={x}><rect x={x} y="83" width="34" height="22" fill="none" stroke="currentColor" /><svg x={x + 2} y="85" width="30" height="18"><Frame /></svg></g>)}
    </>}
    {stage === 1 && <>
      <svg x="10" y="27" width="57" height="43"><Frame /></svg>
      <svg x="93" y="27" width="57" height="43"><Frame /></svg>
      <path d="M72 48h15m-4-4 4 4-4 4" fill="none" stroke="currentColor" />
      {[19, 32, 47, 58, 26, 51].map((x, i) => <circle key={x} cx={x} cy={34 + (i % 3) * 12} r="1.7" fill="white" />)}
      <text x="39" y="90" textAnchor="middle">noise</text><text x="122" y="90" textAnchor="middle">denoise</text>
    </>}
    {stage === 2 && <>
      <svg x="13" y="16" width="134" height="78"><Frame /></svg>
      <path d="M13 16h134v78H13ZM46.5 16v78M80 16v78M113.5 16v78M13 55h134" fill="none" stroke="white" strokeOpacity=".7" />
      <rect className="real-active-tile" x="13" y="16" width="33.5" height="39" fill="currentColor" fillOpacity=".3" stroke="currentColor" strokeWidth="2" />
      <text x="80" y="107" textAnchor="middle">tile → infer → stitch</text>
    </>}
    {stage === 3 && <>
      <rect x="26" y="10" width="112" height="69" fill="none" stroke="currentColor" opacity=".35" />
      <rect x="22" y="14" width="112" height="69" fill="none" stroke="currentColor" opacity=".6" />
      <svg x="18" y="18" width="112" height="69"><Frame output /></svg>
      <path d="m66 39 19 12-19 12Z" fill="white" />
      <path d="M40 100h8l3-7 4 14 4-18 4 16 4-11 3 6h9l3-7 4 14 4-18 4 16 4-11 3 6h13" fill="none" stroke="currentColor" />
    </>}
  </svg>
);

const InferenceWalkthrough = () => {
  const [active, setActive] = useState(0);
  const step = steps[active];
  return (
    <div className="real-walkthrough">
      <div className="real-pipeline" aria-label="Video enhancement pipeline">
        {steps.map((item, index) => (
          <button className="real-pipeline-node" key={item.name} type="button" aria-pressed={index === active} aria-controls="real-stage" onClick={() => setActive(index)}>
            <StageGraphic stage={index} />
            <span className="real-node-title"><span>0{index + 1}</span> {item.name}</span>
            <span className="real-node-caption">{["Video → frames", "Optional cleanup", "GPU upscaling", "Frames + audio"][index]}</span>
          </button>
        ))}
      </div>
      <div id="real-stage" className="real-stage-detail" aria-live="polite">
        <h3 className="real-stage-title">{["Frame extraction", "Noise reduction", "GPU upscaling", "Video reconstruction"][active]}</h3>
        <p className="muted real-stage-description">{step.description}</p>
      </div>
    </div>
  );
};
export default InferenceWalkthrough;
