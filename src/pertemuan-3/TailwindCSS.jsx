export default function TailwindCSS() {
  return (
    <>
     <FlexboxGrid/>
      <div>
         <h1 class="border m-4">Belajar Tailwind CSS 4</h1>
         <button className="bg-blue-900 text-white
                        px-4 py-2 mx-4 rounded
                        shadow-lg">Click Me</button>
    </div>
    
    <Spacing/>
    <Typography/>
    <BorderRadius/>
    <BackgroundColors/>
    <ShadowEffects/>
    </>
  )


function FlexboxGrid(){
    return (
        <nav className="flex justify-between bg-blue-900 p-4 text-white">
            <h1 className="text-lg font-bold">MyWebsite</h1>
            <ul className="flex space-x-4">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    )
}

}

function Spacing(){
    return (
        <div className="bg-blue-900 shadow-lg p-6 m-4 rounded-lg">
            <h2 className="text-lg font-semibold">Card Title</h2>
            <p className="mt-2 text-black-700">Ini adalah contoh penggunaan padding dan margin di Tailwind.</p>
        </div>
    )
}

function Typography(){
    return (
        <div className="m-4">
            <h1 className="text-3xl font-stretch-normal text-blue-900">Tailwind Typography</h1>
            <p className="text-gray-600 text-lg mt-2 ">Belajar Tailwind sangat menyenangkan dan cepat!</p>
        </div>
    )
}

function BorderRadius(){
    return (
        <button className="border-2 border-blue-900 text-blue-900 px-4 py-2 ml-4 rounded-lg"> Klik Saya </button>
    )
}

function BackgroundColors(){
    return(
        <div className="bg-orange-400 text-white p-6 m-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">Tailwind Colors</h3>
            <p className="mt-2">Belajar Tailwind itu seru dan fleksibel!</p>
        </div>
    )
}

function ShadowEffects(){
    return (
        <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold">Hover me!</h3>
            <p className="text-gray-600 mt-2">Lihat efek bayangan saat hover.</p>
        </div>
    )
}