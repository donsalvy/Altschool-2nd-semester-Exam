import React, {useState} from 'react'
import { FaSearch } from 'react-icons/fa'


// function SearchBox(){
//   const[ListItems, setListItems] = useState([]);
//   const[value, setValue] = useState('');
//   const btn = document.querySelector('.btn');
//   fetch(`https://api.github.com/users/donsalvy/repos?per_page=6&page=${value}`, {
    
//   })
//   .then((response) => {
//       if (!response.ok) {
//           throw new Error('Network response was not ok');
//       }
//       return response.json();
//   })
//   .then((data) => {
//       if(data.items.length < 4){
//           btn.style.display = 'none'
//       }
//       setListItems(data.items);
//       console.log(ListItems);
//       setValue('');
//   })
//   .catch(error => {
//       console.error('There was a problem with the fetch operation:', error);
//   })

 




// const handleSubmit = (e) => {
//   e.preventDefault();
//   SearchBox();
// }



// const fetchRepos = () => {
//   fetch(`https://api.github.com/users/donsalvy/repos?per_page=6&page=${value}`)
//   .then((response) => {
//       if (!response.ok) {
//           throw new Error('Network response was not ok');
//       }
//       return response.json();
//   })
//   .then((data) => {
//       if(data.items.length < 4){
//           btn.style.display = 'none'
//       }
//       setListItems(data.items);
//       console.log(ListItems);
//       setValue('');
//   })
//   .catch(error => {
//       console.error('There was a problem with the fetch operation:', error);
//   })
// }

// const handleReset = (e) => {
//   e.preventDefault();
//   fetchRepos();
//   btn.style.display = 'flex'
// }




// return (
//   <form onSubmit={handleSubmit} onReset={handleReset}>
//     <input type="text" placeholder="Search Repositories" value={value} onChange={(e) => setValue(e.target.value)}/>
//     <button type="submit" className="search-icon">
//       <FaSearch />
//     </button>
//     </form>
// )


// }
              
// function SearchBox({setResults}){
//     const [input, setInput] = useState('')
  
//     const fetchData = (value) => {
//     fetch(`https://api.github.com/users/donsalvy/repos?per_page=6&page=${value}
//     `)

//             .then(response => response.json())
//             .then((json) => {
//                 const results = json.filter((user) => {
//                     return (
//                         value &&
//                         user &&
//                         user.name &&
//                         user.name.toLowerCase().includes(value.toLowerCase())
//                     );
//                 });
//                 setResults(results);
//             })
        
//     }

//     const handleChange = (value) => {
//         setInput(value)
//         fetchData(value)
//     }
    
//   return (
//     <div className='input-wrapper'>
//       <FaSearch id='search-icon' /> 
//       <input type='text' placeholder='Search Github Username...' value={input}
//       onChange={(e) => handleChange(e.target.value)} /> 

//     </div>
//   )
// }

export default SearchBox