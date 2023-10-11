import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';
const Data = () => {
    const imgurl="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    const [person, setPerson] = useState([]);
    const [filteredperson, setFilteredPerson] = useState([]);
    async function fetchData() {
        try {
          const response = await fetch("https://jsonplaceholder.typicode.com/users");
          const data = await response.json();
          setPerson(data); 
          setFilteredPerson(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    
      useEffect(() => {
        fetchData();
      }, []);    
   
    return (
      <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
      </div>
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
        <Search persons={person}     setFilteredPerson={setFilteredPerson}
        />
        </div>
        <div className="text-center">
        <ul role="list" className="divide-y divide-gray-100">
      {filteredperson.map((person) => (
        
        <li key={person.email} className="flex justify-between gap-x-6 py-7">
          <Link to={"/data/"+person.id}>
          <div className="flex min-w-0 gap-x-4">
            <img className="h-20 w-20 flex-none rounded-full bg-gray-50" src={imgurl} alt="" />
            <div className="min-w-0 flex-auto">
              <p className="text-xl font-semibold leading-6 text-gray-900">{person.name}</p>
              <p className="mt-1 truncate text-xl leading-5 text-gray-500">{person.email}</p>
            </div>
          </div>
          </Link>
        </li>
      ))}
    </ul>
    </div>
        </div>
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%" }}></div>
      </div>
    </div>
        
    )
}

export default Data;