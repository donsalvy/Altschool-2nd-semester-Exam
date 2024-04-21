
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { FaSearch } from "react-icons/fa"
import { HiRefresh } from "react-icons/hi"

function Home() {   
  const [user, setUser] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [showViewMore, setShowViewMore] = useState("")
  const[value, setValue] = useState("")
  // const ShowviewMore = document.querySelector(".Showviewmore")

  
  

  const fetchRepos = () => {
    fetch(`https://api.github.com/users/donsalvy/repos?per_page=6&page=${currentPage}`)
    .then((response) => (response.json()))
    .then((data) => {
      if (data.length === 0) {
        setShowViewMore("End of Repos")
      }else {
        setUser([...user, ...data])
        setShowViewMore("View More")
      }
    })
  }

  useEffect(() => {
    fetchRepos()
  }, [currentPage]) 

const handleSubmit = (e) => {
e.preventDefault()
  handleSearch()


}

const handleReset = () => {

}

const handleSearch = () => {
  const username = 'donsalvy';
  const searchQuery = encodeURIComponent(value);
  fetch(`https://api.github.com/search/repositories?q=user:${username}+${searchQuery}&per_page=4`)
  .then((response) => {
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      return response.json();
  })
  .then((data) => {
//   if(data.items.length <= 6){
// ShowviewMore.style.display = "none"
//   }
      setUser(data.items);
      setValue('');
  })
  .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
  })
}

  const viewMore = () => {
    setCurrentPage(currentPage + 1)
  }

  const userElements = user.map((userElement) => {
    return (
      <div className="repo-card" key={userElement.id}>
        <Link to={`/repodetails/${userElement.name}`}><h2 className="repo-name">{userElement.name}</h2></Link>
        <p className="language">Langauge: {userElement.language === null ? "none" : userElement.language}</p>
        <p className="date">Start date & time: {userElement.created_at}</p>
        <p className="visibility">Visibility: {userElement.visibility}</p>
      </div>
    )
  })

  return (
    <>
    <form className="repo-search" onSubmit={handleSubmit}>
                <div className="search-box">
                    <input type="text" placeholder="Search Repositories" value={value} onChange={(e) => setValue(e.target.value)}/>
                    <button type="submit" className="search-icon">
                        <FaSearch />
                    </button>
                </div>
                <button onClick={handleReset}><HiRefresh className="reload-btn" /></button>
   </form>



      <section className="repo-container">
        {userElements}
      </section>
      <p className="view-more" onClick={viewMore}>{showViewMore}</p>
    </>
  )
}

export default Home