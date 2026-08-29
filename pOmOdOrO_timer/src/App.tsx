
import Dither from '@/components/Dither'

function App() {
  return (
    <div className="isolate min-h-svh overflow-hidden bg-[#050816]">
      <div className="fixed inset-0 z-0" aria-hidden="true">
        <Dither
          waveColor={[0.16, 0.28, 0.5]}
          waveSpeed={0.4}
          waveFrequency={2.5}
          waveAmplitude={0.35}
          colorNum={5}
          pixelSize={2}
        />
      </div>

      <main className="relative z-10 min-h-svh" />
    </div>
  )
}

export default App
