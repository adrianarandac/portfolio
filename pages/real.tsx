import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/Navbar";
import UpscalingComparison from "../components/UpscalingComparison";
import InferenceWalkthrough from "../components/InferenceWalkthrough";

const Real: NextPage = () => (
  <>
    <Head>
      <title>VIDEN — Video Enhancer — Adrian Aranda</title>
      <meta name="description" content="A local video upscaling pipeline built with Python, FFmpeg, and Real-ESRGAN NCNN/Vulkan. Frame extraction, GPU inference, and audio preservation." />
      <link rel="canonical" href="https://www.adrianaranda.com/real" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar />
    <main className="layout real-page">
      <header>
        <h1>VIDEN</h1>
        <p className="real-subtitle">Video Enhancer</p>
        <p className="muted">A Python CLI that extracts video frames, enhances them with Real-ESRGAN through NCNN/Vulkan, and rebuilds the video with its original audio.</p>
      </header>
      <section aria-labelledby="real-comparison-title">
        <h2 id="real-comparison-title">Upscaling comparison</h2>
        <UpscalingComparison />
      </section>
      <section className="real-technical">
        <h2>Technologies</h2>
        <p className="real-stack">Python 3 / FFmpeg / ffprobe / NCNN / Vulkan</p>
        <h2>How it works</h2>
        <InferenceWalkthrough />
        <h2>What I built</h2>
        <dl className="real-details">
          <div><dt>GPU inference</dt><dd>A subprocess runs the NCNN backend with local <code>.param</code> and <code>.bin</code> model files. Model selection, scale, and tile size are passed explicitly.</dd></div>
          <div><dt>Memory control</dt><dd>Tiled processing limits GPU memory use. The CLI accepts 2× and 4× scaling; the selected model must support the requested scale.</dd></div>
          <div><dt>Video handling</dt><dd>ffprobe reads dimensions and frame rate. Working dimensions preserve aspect ratio and are rounded to even values for video encoding.</dd></div>
          <div><dt>Progress & cleanup</dt><dd>Progress counts completed PNG frames. Backend failures retain a log during processing; temporary working files are cleaned up when the run finishes.</dd></div>
          <div><dt>Audio</dt><dd>The pipeline extracts the original audio when present and muxes it back into the reconstructed video.</dd></div>
        </dl>
        <h2>Model &amp; quality tradeoffs</h2>
        <p className="muted real-footnote">The CLI loads different NCNN model files, with <code>RealESRGAN_General_WDN_x4_v3</code> as the current default. Scale compatibility depends on the selected model. Smaller tiles reduce memory pressure; denoising can smooth useful texture.</p>
        <p className="muted real-footnote">Frames are enhanced independently. Temporal consistency is not explicitly modeled, so video evaluation also needs to consider flicker and changing textures between frames.</p>
        <p className="muted real-footnote">My work is the orchestration and video workflow. The restoration model and NCNN/Vulkan runtime come from the upstream projects. Generated detail is an estimate of texture, not a guarantee of the original content.</p>
        <div className="real-links"><Link href="https://github.com/adrianarandac/viden" target="_blank" rel="noreferrer">VIDEN source ↗</Link><Link href="https://github.com/xinntao/Real-ESRGAN-ncnn-vulkan" target="_blank" rel="noreferrer">NCNN implementation ↗</Link><Link href="https://arxiv.org/abs/2107.10833" target="_blank" rel="noreferrer">Research paper ↗</Link></div>
      </section>
    </main>
  </>
);

export default Real;
