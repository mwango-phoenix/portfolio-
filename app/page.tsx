import Image from 'next/image'

const characters = [
  { id: 1, name: 'Character 1', image: '/placeholder.svg?height=300&width=300' },
  { id: 2, name: 'Character 2', image: '/placeholder.svg?height=300&width=300' },
  { id: 3, name: 'Character 3', image: '/placeholder.svg?height=300&width=300' },
  { id: 4, name: 'Character 4', image: '/placeholder.svg?height=300&width=300' },
  { id: 5, name: 'Character 5', image: '/placeholder.svg?height=300&width=300' },
  { id: 6, name: 'Character 6', image: '/placeholder.svg?height=300&width=300' },
]

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">My Character Designs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {characters.map((character) => (
          <div key={character.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src={character.image}
              alt={character.name}
              width={300}
              height={300}
              className="w-full h-auto"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{character.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

