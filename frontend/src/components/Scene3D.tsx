import { useEffect, useRef } from 'react';
import { Engine } from '@babylonjs/core/Engines/engine';
import { Scene } from '@babylonjs/core/scene';
import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';
import { Vector3, Matrix } from '@babylonjs/core/Maths/math.vector';
import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight';
import { PointLight } from '@babylonjs/core/Lights/pointLight';
import { DirectionalLight } from '@babylonjs/core/Lights/directionalLight';
import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder';
import { StandardMaterial } from '@babylonjs/core/Materials/standardMaterial';
import { Color3, Color4 } from '@babylonjs/core/Maths/math.color';

export default function Scene3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Engine initialization
    const engine = new Engine(canvasRef.current, true, { preserveDrawingBuffer: true, stencil: true });
    
    // Scene creation
    const scene = new Scene(engine);
    scene.clearColor = new Color4(0, 0, 0, 0); // Transparent

    // Camera setup (similar to THREE camera & OrbitControls)
    const camera = new ArcRotateCamera(
      "camera",
      -Math.PI / 2, // Alpha
      Math.PI / 2.1, // Beta
      8.5, // Radius
      Vector3.Zero(),
      scene
    );
    camera.attachControl(canvasRef.current, true);
    
    // Limit Orbit Controls drag range
    camera.lowerRadiusLimit = 7.5;
    camera.upperRadiusLimit = 9.5;
    camera.lowerBetaLimit = Math.PI / 2.5;
    camera.upperBetaLimit = Math.PI / 1.8;
    camera.lowerAlphaLimit = -Math.PI / 6 - Math.PI / 2;
    camera.upperAlphaLimit = Math.PI / 6 - Math.PI / 2;

    // Lights
    const ambient = new HemisphericLight("ambient", new Vector3(0, 1, 0), scene);
    ambient.intensity = 0.65;

    const pLight1 = new PointLight("pLight1", new Vector3(10, 10, 10), scene);
    pLight1.intensity = 1.2;
    pLight1.diffuse = new Color3(0.5, 0.55, 0.97); // Indigo/Blue light

    const pLight2 = new PointLight("pLight2", new Vector3(-10, -10, 10), scene);
    pLight2.intensity = 0.8;
    pLight2.diffuse = new Color3(0.9, 0.45, 0.9); // Violet/Pink light

    const dirLight = new DirectionalLight("dirLight", new Vector3(0, -1, 1), scene);
    dirLight.intensity = 1.0;

    // 1. Central Core Mesh (Nested Clay Core)
    const innerCore = MeshBuilder.CreateIcoSphere("innerCore", { radius: 1.0, subdivisions: 1 }, scene);
    const innerMat = new StandardMaterial("innerMat", scene);
    innerMat.diffuseColor = new Color3(0.98, 0.57, 0.23); // Soft clay orange/peach
    innerMat.specularColor = new Color3(0.15, 0.15, 0.15);
    innerMat.specularPower = 16;
    innerCore.material = innerMat;

    const outerCore = MeshBuilder.CreateIcoSphere("outerCore", { radius: 1.4, subdivisions: 1 }, scene);
    const outerMat = new StandardMaterial("outerMat", scene);
    outerMat.diffuseColor = new Color3(0.5, 0.55, 0.97); // Soft clay indigo/blue
    outerMat.wireframe = true;
    outerCore.material = outerMat;

    // Parent core groups
    innerCore.parent = outerCore;

    // 2. Floating Dashboard Screens
    const screensData = [
      { pos: new Vector3(-2, 1, 0.5), color: new Color3(0.5, 0.55, 0.97), size: { w: 1.1, h: 0.7 }, speed: 1.2, phase: 0 },
      { pos: new Vector3(2.2, -0.6, -0.2), color: new Color3(0.98, 0.57, 0.23), size: { w: 0.9, h: 0.6 }, speed: 0.9, phase: 2 },
      { pos: new Vector3(-1.8, -1.2, -0.5), color: new Color3(0.74, 0.45, 0.92), size: { w: 1.0, h: 0.65 }, speed: 1.5, phase: 4 }
    ];

    const screenMeshes = screensData.map((data, idx) => {
      // Create main screen plane/thin box representing screen
      const screen = MeshBuilder.CreateBox(`screen_${idx}`, { width: data.size.w, height: data.size.h, depth: 0.05 }, scene);
      screen.position.copyFrom(data.pos);

      const sMat = new StandardMaterial(`screenMat_${idx}`, scene);
      sMat.diffuseColor = new Color3(0.98, 0.98, 1); // Clay-white
      sMat.specularColor = new Color3(0.1, 0.1, 0.1);
      sMat.alpha = 0.93;
      screen.material = sMat;

      // Small header accent bar on top
      const header = MeshBuilder.CreateBox(`header_${idx}`, { width: data.size.w * 0.9, height: 0.08, depth: 0.06 }, scene);
      header.position.set(0, data.size.h * 0.4, 0.01);
      header.parent = screen;

      const hMat = new StandardMaterial(`headerMat_${idx}`, scene);
      hMat.diffuseColor = data.color;
      header.material = hMat;

      return { mesh: screen, basePos: data.pos.clone(), speed: data.speed, phase: data.phase };
    });

    // 3. Background Star Particles (Thin Instances of tiny boxes)
    const starCount = 180;
    const starMesh = MeshBuilder.CreateBox("star", { size: 0.045 }, scene);
    const matrices = new Float32Array(starCount * 16);
    
    // Distribute star matrices
    for (let i = 0; i < starCount; i++) {
      const matrix = Matrix.Translation(
        (Math.random() - 0.5) * 16,
        (Math.random() - 0.5) * 16,
        (Math.random() - 0.5) * 16
      );
      matrix.copyToArray(matrices, i * 16);
    }
    starMesh.thinInstanceSetBuffer("matrix", matrices, 16);

    const starMat = new StandardMaterial("starMat", scene);
    starMat.emissiveColor = new Color3(0.7, 0.75, 0.95);
    starMat.disableLighting = true;
    starMesh.material = starMat;

    let time = 0;

    // Render loop
    engine.runRenderLoop(() => {
      time += 0.005;

      // Rotate core
      outerCore.rotation.y = time * 1.5;
      outerCore.rotation.x = time * 0.8;
      outerCore.rotation.z = time * 0.4;

      // Animate screens (bobbing up and down + subtle rotation)
      screenMeshes.forEach((s) => {
        const bob = Math.sin(time * 3 * s.speed + s.phase) * 0.12;
        s.mesh.position.y = s.basePos.y + bob;
        
        // Subtle tilt
        s.mesh.rotation.y = Math.sin(time * s.speed + s.phase) * 0.08;
        s.mesh.rotation.x = Math.cos(time * s.speed + s.phase) * 0.04;
      });

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
    <div className="w-full h-full min-h-[500px] md:min-h-[650px] lg:h-[750px] relative">
      <canvas ref={canvasRef} className="w-full h-full bg-transparent outline-none z-10" />

      {/* Floating Interactive Badge overlay */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white/85 px-4 py-2 rounded-full border border-slate-200/60 flex items-center space-x-2 text-xs font-semibold text-slate-600 pointer-events-none select-none animate-pulse shadow-lg z-20">
        <span className="w-2 h-2 rounded-full bg-emerald-500 block"></span>
        <span>Drag to Orbit • Clay Engine Active</span>
      </div>
    </div>
  );
}
