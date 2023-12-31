
import GChat from './Components/GChat'



export default async function Home() {

  
  let downloadsCount = await fetch('https://gchat-ebook.vercel.app/api/get-downloads', { next: { revalidate: 15 } });
  downloadsCount = await downloadsCount.json()

  return (
    <>
      <GChat
        count={downloadsCount?.downloadCount}
      />
    </>
  )
}
