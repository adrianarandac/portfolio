import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/Navbar";
import UpscalingComparison from "../components/UpscalingComparison";
import InferenceWalkthrough from "../components/InferenceWalkthrough";

const Viden: NextPage = () => (
  <>
    <Head>
      <title>VIDEN — Video Enhancer — Adrian Aranda</title>
      <meta name="description" content="A local video upscaling pipeline built with Python, FFmpeg, and Real-ESRGAN NCNN/Vulkan. Frame extraction, GPU inference, and audio preservation." />
      <link rel="canonical" href="https://www.adrianaranda.com/viden" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar />
    <main className="layout engineering-page real-page viden-page">
      <section className="section-block viden-intro">
        <header className="viden-title">
          <h1>VIDEN</h1>
          <p className="real-subtitle">Video Enhancer <em className="muted">| Python 3 / FFmpeg / ffprobe / NCNN / Vulkan</em></p>
        </header>
        <div className="viden-intro-copy">
          <p className="muted">A <Link href="https://github.com/adrianarandac/viden" target="_blank" rel="noreferrer">local Python CLI</Link> for enhancing video with Real-ESRGAN. It extracts frames, optionally denoises them, upscales each frame on the GPU, then rebuilds the video and restores its original audio.</p>
          <p className="muted">Tile-based processing helps manage GPU memory, while ffprobe keeps the output dimensions and frame rate aligned with the source.</p>
        </div>
      </section>
      <section className="section-block stack">
        <h2>How it works</h2>
        <InferenceWalkthrough />
      </section>
      <section className="section-block stack viden-comparison">
        <h2 id="real-comparison-title">Upscaling comparison</h2>
        <UpscalingComparison />
      </section>
      <section className="section-block stack">
        <h2>Inside the pipeline</h2>
        <dl className="real-details">
          <div><dt>GPU inference</dt><dd>A subprocess runs the NCNN backend with local <code>.param</code> and <code>.bin</code> model files. Model selection, scale, and tile size are passed explicitly.</dd></div>
          <div><dt>Memory control</dt><dd>Tiled processing limits GPU memory use. The CLI accepts 2× and 4× scaling; the selected model must support the requested scale.</dd></div>
          <div><dt>Video handling</dt><dd>ffprobe reads dimensions and frame rate. Working dimensions preserve aspect ratio and are rounded to even values for video encoding.</dd></div>
          <div><dt>Progress & cleanup</dt><dd>Progress counts completed PNG frames. Backend failures retain a log during processing; temporary working files are cleaned up when the run finishes.</dd></div>
          <div><dt>Audio</dt><dd>The pipeline extracts the original audio when present and muxes it back into the reconstructed video.</dd></div>
        </dl>
      </section>
      <section className="section-block stack">
        <h2>Model &amp; quality tradeoffs</h2>
        <div className="quality-tradeoffs">
          <article><span className="quality-mark" aria-hidden="true">2× / 4×</span><h3>Model scale</h3><p>Scale depends on the selected NCNN model. The current default is <code>RealESRGAN_General_WDN_x4_v3</code>.</p></article>
          <article><span className="quality-mark" aria-hidden="true">GPU memory</span><h3>Tile size</h3><p>Smaller tiles use less GPU memory. Denoising can reduce noise, but may also smooth useful texture.</p></article>
          <article><span className="quality-mark" aria-hidden="true">Frame by frame</span><h3>Temporal detail</h3><p>Frames are enhanced independently, so flicker and changing textures should be checked across the finished video.</p></article>
        </div>
        <p className="muted real-footnote">VIDEN handles the orchestration and video workflow; the restoration model and NCNN/Vulkan runtime come from upstream projects. Generated detail is an estimate, not a guarantee of original content.</p>
        <div className="real-links"><Link href="https://github.com/adrianarandac/viden" target="_blank" rel="noreferrer">VIDEN source ↗</Link><Link href="https://github.com/xinntao/Real-ESRGAN-ncnn-vulkan" target="_blank" rel="noreferrer">NCNN implementation ↗</Link><Link href="https://arxiv.org/abs/2107.10833" target="_blank" rel="noreferrer">Research paper ↗</Link></div>
      </section>
    </main>
  </>
);

export default Viden;
