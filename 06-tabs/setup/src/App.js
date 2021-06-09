import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {

  const [tabs, setTabs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentTab, setCurrentTab] = useState({}) // Stores info on the current active tab

  // Runs on initial page load, fetch from url, setTabs, setCurrentTab, setLoading
  useEffect(() => { 
    setIsLoading(true);
    fetch(url)
      .then((response) => {
        if(response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          setIsLoading(false);
          throw new Error (response.statusText);
        }
      })
      .then((data) => {
        setTabs(data);
        setCurrentTab(data[0]);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));

    return () => {
      // cleanup
    }
  }, [])

  // On Click function to change the current Tab
  const changeTabTo = (tabId) => {
    const newTab = tabs.find((tab) => tab.id === tabId);
    setCurrentTab(newTab);
  }

  if(isLoading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    )
  }

  // Mapping all tabs
  // Shows info on currentTab
  // Maps all duties inside currentTab
  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {
            tabs.map((tab) => {
              return (
                <button 
                  key={tab.id}
                  className={`job-btn ${tab.id === currentTab.id && 'active-btn'}`}
                  onClick={() => changeTabTo(tab.id)}>
                    {tab.company}
                </button>
              )
            })
          }
        </div>
        <article className="job-info">
          <h3>{currentTab.title}</h3>
          <h4>{currentTab.company}</h4>
          <p className="job-date">{currentTab.dates}</p>
          {
            currentTab.duties.map((duty, index) => {
              return (
                <div key={index} className="job-desc">
                  <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                  <p>{duty}</p>
                </div>
              )
            })
          }
        </article>
      </div>
      <button type="button" className="btn">
        more info
      </button>
    </section>
  )
}

export default App
