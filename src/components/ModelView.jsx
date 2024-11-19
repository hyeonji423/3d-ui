import React from 'react'
import { OrbitControls, PerspectiveCamera, View } from '@react-three/drei'
import * as THREE from 'three'

const ModelView = ({index, groupRef, controlRef, setRotationSize, gsapType, size, item}) => {
  return (
    <div>
      <View>
        {/* ambientLight: https://velog.io/@9rganizedchaos/Three.js-journey-%EA%B0%95%EC%9D%98%EB%85%B8%ED%8A%B8-14 */}
        <ambientLight intensity={0.3} />

        {/* PerspectiveCamera: https://justmakeyourself.tistory.com/entry/camera-setting-threejs */}
        <PerspectiveCamera makeDefault position={[0, 0, 4]} />

        {/* OrbitControls: https://velog.io/@juunini/three.js-%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%B4%EB%B3%B4%EC%95%98%EB%8B%A4 */}
        <OrbitControls
          makeDefault
          ref={controlRef}
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.4}
          target={new THREE.Vector3(0, 0, 0)}
          onEnd={() => setRotationSize(controlRef.current.getAzimuthalAngle())}
        />
      </View>
    </div>
  )
}

export default ModelView