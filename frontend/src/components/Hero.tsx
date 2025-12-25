

export default function Hero() {
    return (
        <section className="h-screen flex flex-col justify-center items-center text-center px-6">
            <h1 className="text-6xl font-extrabold mb-6">
                Mythology Atlas
            </h1>
            
            <p className="max-w-2xl text-lg text-gray-300 mb-8">
                The largest and ever-growing interactive mythology catalog,
                connecting gods, creatures, heroes and legends to the world map.
            </p>
            
            <button className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition">
                Explore the World
            </button>
        </section>
    )
}