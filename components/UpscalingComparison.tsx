import { useState } from "react";

const examples = [
  { name: "Coast", input: "944 330 442 266", output: "1401 330 442 266" },
  { name: "Architecture", input: "944 602 442 266", output: "1401 602 442 266" },
  { name: "Branches", input: "0 330 442 266", output: "456 330 442 266" },
];

const UpscalingComparison = () => {
  const [position, setPosition] = useState(50);
  const [selected, setSelected] = useState(0);
  const example = examples[selected];

  return (
    <figure className="real-comparison">
      <div className="real-examples" aria-label="Comparison examples">
        {examples.map((item, index) => (
          <button key={item.name} type="button" aria-pressed={selected === index} onClick={() => setSelected(index)}>{item.name}</button>
        ))}
      </div>
      <div className="real-image" role="group" aria-label={`${example.name}: bicubic input compared with Real-ESRGAN output`}>
        <svg viewBox={example.output} preserveAspectRatio="xMidYMid slice" aria-hidden="true"><image href="/real/upscaling-comparison.jpg" width="1844" height="870" /></svg>
        <svg className="real-input" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }} viewBox={example.input} preserveAspectRatio="xMidYMid slice" aria-hidden="true"><image href="/real/upscaling-comparison.jpg" width="1844" height="870" /></svg>
        <span className="real-image-label real-image-label--left">Input / bicubic</span>
        <span className="real-image-label real-image-label--right">Real-ESRGAN</span>
        <div className="real-image-divider" style={{ left: `${position}%` }} aria-hidden="true" />
        <input className="real-slider" id="real-comparison-range" aria-label="Compare input and Real-ESRGAN output" type="range" min={0} max={100} value={position} onChange={(event) => setPosition(Number(event.target.value))} aria-valuetext={`${position}% input visible`} />
      </div>
      <figcaption>Examples from the <a href="https://github.com/xinntao/Real-ESRGAN" target="_blank" rel="noreferrer">original Real-ESRGAN project</a>, rather than outputs from my video pipeline.</figcaption>
    </figure>
  );
};

export default UpscalingComparison;
