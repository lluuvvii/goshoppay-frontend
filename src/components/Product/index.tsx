const Card = ({ title, content }:any) => {
  return (
    <div className='bg-white p-6 rounded-lg shadow-md'>
      <h2 className='text-xl font-bold mb-4'>{title}</h2>
      <p className='text-gray-700'>{content}</p>
    </div>
  )
}

const Product = () => {

  // upcoming update
  const cards = [
    { id: 1, title: 'Card 1', content: 'Lorem ipsum dolor sit amet.' },
    { id: 2, title: 'Card 2', content: 'Consectetur adipiscing elit.' },
    { id: 3, title: 'Card 3', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 4, title: 'Card 4', content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
    { id: 1, title: 'Card 1', content: 'Lorem ipsum dolor sit amet.' },
    { id: 2, title: 'Card 2', content: 'Consectetur adipiscing elit.' },
    { id: 3, title: 'Card 3', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 4, title: 'Card 4', content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
    { id: 1, title: 'Card 1', content: 'Lorem ipsum dolor sit amet.' },
    { id: 2, title: 'Card 2', content: 'Consectetur adipiscing elit.' },
    { id: 3, title: 'Card 3', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 4, title: 'Card 4', content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
  ]
  return (
    <div className='max-w-screen-sm p-4 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto my-8'>
      <h1 className='text-3xl font-bold mb-4'>Card Example</h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {cards.map(card => (
          <Card key={card.id} title={card.title} content={card.content} />
        ))}
      </div>
    </div>
  )
}

export default Product