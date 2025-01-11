import Image from 'next/image'

const characters = [
  { id: 1, name: 'Scarlet Music Scene', image: '/assets/009.png' },
  { id: 2, name: 'Ballroom Scene', image: '/assets/0010.png' },
  { id: 3, name: 'Phoenix', image: '/assets/phoenix.jpg' },
]

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">My Designs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {characters.map((character) => (
          <div key={character.id} className="flex items-center justify-center overflow-hidden">
            <Image
              src={character.image}
              alt={character.name}
              width={300}
              height={300}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

