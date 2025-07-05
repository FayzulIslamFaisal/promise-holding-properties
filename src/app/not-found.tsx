import Link from 'next/link'

const NotFound = () => {
  return (
    <div>
        <div className="">
            <h2>Not Found</h2>
            <p>Could not find requested resource</p>
            <Link href="/">Return Home</Link>
        </div>
      
    </div>
  )
}

export default NotFound;

 

