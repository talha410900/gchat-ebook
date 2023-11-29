
import GChat from './Components/GChat'

export default async function Home() {
  let downloadsCount = await fetch('api/get-downloads'); 
  downloadsCount = await downloadsCount.json()


  
  return (
    <>
      <GChat 
      count={downloadsCount}
       />
    </>
  )
}
