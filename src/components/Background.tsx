import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Background: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    ref.current.appendChild(renderer.domElement);

    camera.position.set(0, 12, 35);

    // ===============================
    // LIGHT
    // ===============================
    scene.add(new THREE.AmbientLight(0x00f3ff, 0.35));

    // ===============================
    // GRID
    // ===============================
    const grid = new THREE.GridHelper(200, 40, 0x00f3ff, 0x003344);
    (grid.material as THREE.Material).opacity = 0.25;
    (grid.material as THREE.Material).transparent = true;
    scene.add(grid);

    // ===============================
    // BUILDING (CONSTRUCTION ANIMATION)
    // ===============================
    const material = new THREE.LineBasicMaterial({
      color: 0x33ffff,
      transparent: true,
      opacity: 0.4,
    });

    const building = new THREE.Group();
    scene.add(building);

    const floors = 12;
    const parts: THREE.LineSegments[] = [];

    for (let i = 0; i < floors; i++) {
      const geo = new THREE.EdgesGeometry(
        new THREE.BoxGeometry(8, 1, 8)
      );

      const floor = new THREE.LineSegments(geo, material);
      floor.position.y = i * 1.2;
      floor.scale.y = 0;

      building.add(floor);
      parts.push(floor);
    }

    // ===============================
    // ULTRA FLYOVER (REALISTIC)
    // ===============================
    const flyoverPoints = [];
    for (let i = -25; i <= 25; i++) {
      flyoverPoints.push(
        new THREE.Vector3(
          i,
          Math.sin(i * 0.15) * 2 + 3,
          -6
        )
      );
    }

    const flyoverGeometry = new THREE.BufferGeometry().setFromPoints(flyoverPoints);

    const flyover = new THREE.Line(
      flyoverGeometry,
      new THREE.LineBasicMaterial({
        color: 0x33ffff,
        transparent: true,
        opacity: 0.85,
      })
    );

    const flyoverGlow = new THREE.Line(
      flyoverGeometry,
      new THREE.LineBasicMaterial({
        color: 0x00f3ff,
        transparent: true,
        opacity: 0.25,
      })
    );

    flyoverGlow.scale.set(1.02, 1.02, 1.02);

    scene.add(flyover);
    scene.add(flyoverGlow);

    // ===============================
    // GUARD RAILS (DEPTH)
    // ===============================
    const railOffset = 0.6;

    const railPointsLeft = flyoverPoints.map(
      (p) => new THREE.Vector3(p.x, p.y + 0.2, p.z - railOffset)
    );

    const railPointsRight = flyoverPoints.map(
      (p) => new THREE.Vector3(p.x, p.y + 0.2, p.z + railOffset)
    );

    const railMaterial = new THREE.LineBasicMaterial({
      color: 0x00f3ff,
      transparent: true,
      opacity: 0.4,
    });

    scene.add(new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(railPointsLeft),
      railMaterial
    ));

    scene.add(new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(railPointsRight),
      railMaterial
    ));

    // ===============================
    // CARS WITH HEADLIGHTS
    // ===============================
    const cars: any[] = [];

    for (let i = 0; i < 6; i++) {
      const car = new THREE.Mesh(
        new THREE.BoxGeometry(0.8, 0.4, 1.6),
        new THREE.MeshBasicMaterial({
          color: 0xffffff,
          transparent: true,
          opacity: 0.9,
        })
      );

      const headlight = new THREE.PointLight(0xffffff, 1, 5);
      headlight.position.set(0, 0, 1);

      car.add(headlight);

      car.position.set(-25 + i * 8, 3, -6);
      scene.add(car);

      cars.push({
        mesh: car,
        speed: 0.08 + Math.random() * 0.04,
      });
    }

    // ===============================
    // PARTICLES
    // ===============================
    const count = 400;
    const posArr = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i++) {
      posArr[i] = (Math.random() - 0.5) * 100;
    }

    const particles = new THREE.Points(
      new THREE.BufferGeometry().setAttribute(
        'position',
        new THREE.BufferAttribute(posArr, 3)
      ),
      new THREE.PointsMaterial({
        size: 0.05,
        color: 0x00f3ff,
        opacity: 0.25,
        transparent: true,
      })
    );

    scene.add(particles);

    // ===============================
    // ANIMATION LOOP
    // ===============================
    let progress = 0;

    const animate = () => {
      requestAnimationFrame(animate);

      progress += 0.01;

      // Building rise
      parts.forEach((floor, i) => {
        const target = Math.min(1, progress - i * 0.2);
        floor.scale.y = Math.max(0, target);
      });

      // Cars movement (FIXED)
      cars.forEach((carObj) => {
        const car = carObj.mesh;

        car.position.x += carObj.speed;

        car.position.y = Math.sin(car.position.x * 0.15) * 2 + 3;

        if (car.position.x > 25) {
          car.position.x = -25;
        }
      });

      // Camera cinematic motion
      camera.position.x = Math.sin(progress * 0.2) * 3;
      camera.position.y = 12 + Math.sin(progress * 0.3);

      particles.rotation.y += 0.0005;

      camera.lookAt(0, 5, 0);

      renderer.render(scene, camera);
    };

    animate();

    // ===============================
    // RESIZE
    // ===============================
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={ref}
      className="fixed inset-0 z-0 pointer-events-none opacity-80"
    />
  );
};