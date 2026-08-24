import { useEffect, useRef } from 'react';
import { Engine } from '@babylonjs/core/Engines/engine';
import { Scene } from '@babylonjs/core/scene';
import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';
import { Vector3 } from '@babylonjs/core/Maths/math.vector';
import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight';
import { PointLight } from '@babylonjs/core/Lights/pointLight';
import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder';
import { StandardMaterial } from '@babylonjs/core/Materials/standardMaterial';
import { Color3, Color4 } from '@babylonjs/core/Maths/math.color';

interface ContactScene3DProps {
  intensity: number;
}

export default function ContactScene3D({ intensity }: ContactScene3DProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const intensityRef = useRef(intensity);

  // Keep the ref updated with the latest intensity prop
  useEffect(() => {
    intensityRef.current = intensity;
  }, [intensity]);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Initialize Babylon.js engine
    const engine = new Engine(canvasRef.current, true, { preserveDrawingBuffer: true, stencil: true });
    
    // Create Scene
    const scene = new Scene(engine);
    scene.clearColor = new Color4(0, 0, 0, 0); // Transparent background

    // Create Camera
    const camera = new ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2, 5.5, Vector3.Zero(), scene);
    camera.attachControl(canvasRef.current, false);
    camera.inputs.clear(); // Disable user inputs/dragging for this background visual

    // Lights
    const hemiLight = new HemisphericLight("hemiLight", new Vector3(0, 1, 0), scene);
    hemiLight.intensity = 0.5;

    const pointLight1 = new PointLight("pointLight1", new Vector3(10, 10, 10), scene);
    pointLight1.intensity = 1.5;
    pointLight1.diffuse = new Color3(0.5, 0.55, 0.97); // Soft indigo/periwinkle

    const pointLight2 = new PointLight("pointLight2", new Vector3(-10, -10, 10), scene);
    pointLight2.intensity = 1.0;
    pointLight2.diffuse = new Color3(1.0, 0.5, 1.0); // Soft violet/pink

    // Create Torus Knot
    const torusKnot = MeshBuilder.CreateTorusKnot("torusKnot", {
      radius: 1.3,
      tube: 0.38,
      radialSegments: 120,
      tubularSegments: 16,
      p: 2,
      q: 3
    }, scene);

    // Create Material
    const material = new StandardMaterial("torusKnotMat", scene);
    material.wireframe = true;
    material.disableLighting = true; // Use self-emissive wireframe glow
    
    // Start color: indigo (#818cf8)
    const baseColor = new Color3(0.505, 0.55, 0.97);
    material.emissiveColor = baseColor;
    torusKnot.material = material;

    // Color definitions for transitions
    const idleColor = new Color3(0.505, 0.55, 0.97); // Indigo
    const activeColor = new Color3(0.74, 0.45, 0.92); // Violet/purple
    const maxColor = new Color3(0.985, 0.57, 0.235); // Brand orange

    let time = 0;

    // Render loop
    engine.runRenderLoop(() => {
      const currentIntensity = intensityRef.current;
      const speedMultiplier = 1.0 + currentIntensity * 0.4;
      time += 0.01 * speedMultiplier;

      // Rotations
      torusKnot.rotation.y = time * 0.25;
      torusKnot.rotation.x = time * 0.15;

      // Scale oscillation
      const scaleOsc = 1.0 + Math.sin(time * 2.0) * (0.05 + currentIntensity * 0.015);
      torusKnot.scaling.setAll(scaleOsc);

      // Color interpolation based on typing intensity
      let targetColor = idleColor;
      if (currentIntensity > 0 && currentIntensity <= 10) {
        const ratio = currentIntensity / 10;
        targetColor = Color3.Lerp(idleColor, activeColor, ratio);
      } else if (currentIntensity > 10) {
        const ratio = Math.min(1.0, (currentIntensity - 10) / 20);
        targetColor = Color3.Lerp(activeColor, maxColor, ratio);
      }

      // Smooth color transition
      material.emissiveColor = Color3.Lerp(material.emissiveColor, targetColor, 0.1);

      scene.render();
    });

    // Resize handler
    const handleResize = () => {
      engine.resize();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      engine.dispose();
    };
  }, []);

  return (
    <div className="w-full h-full min-h-[300px] md:h-[450px] relative">
      <canvas ref={canvasRef} className="w-full h-full bg-transparent outline-none" />
    </div>
  );
}
