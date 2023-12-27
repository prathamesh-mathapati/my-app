import logo from './logo.svg'
import './App.css'
import React, { useState } from 'react'
import main from './main.json'
import { useDispatch, useSelector } from 'react-redux'
import { reduc_action } from './redux/redux_actions'
function App () {
  // }
  const [allData, setAlldata] = useState([])
  const [allFrined, setAllFrined] = useState([])
  const [selectFd, setselectFd] = useState('')

  const getdata = action => {
    // console.log(typeof main)
    if (action === 'data') {
      setAlldata(main)
    } else {
      setselectFd(action)
      allData.filter(item => {
        if (item.name === action) {
          setAllFrined(item.friends)
        }
      })
    }
  }
  const selecter = useSelector(state => state)
  const dispatch = useDispatch()
  return (
    <div className='App'>
      <header className='App-header'>
        {/* <div className='main-app'>
          <input
            type='text'
            onChange={e => {
              setName(e.target.value)
            }}
            placeholder='Enater name'
            value={name}
          />

          <input
            type='text'
            onChange={e => {
              setCity(e.target.value)
            }}
            placeholder='Enater City'
            value={city}
          />
          <input
            type='number'
            onChange={e => {
              setAge(e.target.value)
            }}
            placeholder='Enater age'
            value={age}
          />
          <button onClick={submitFunction}>submit</button>
        </div>
        <table class='main-table'>
          <tr>
            <th> Name</th>
            <th> age</th>
            <th>city</th>
          </tr>
          {alldata.length !== 0 &&
            alldata.map((item, index) => {
              return (
                <tr>
                  <td>
                    {item.name}
                  </td>
                  <td>
                    {item.age}
                  </td>
                  <td>
                    {item.city}
                  </td>
                </tr>
              )
            })}
        </table> */}

        <button className='button-1' onClick={() => [dispatch(reduc_action())]}>
          button {selecter.nam}
        </button>
        {/* <button className='button-2'>button2</button> */}

        {allData.length !== 0 &&
          <table className='main-table'>
            <th>name</th>
            <th>gender</th>
            <th>company</th>
            <th>email</th>
            <th>Action</th>

            {allData.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    {item.name}
                  </td>
                  <td>
                    {item.gender}
                  </td>
                  <td>
                    {item.company}
                  </td>
                  <td>
                    {item.email}
                  </td>
                  <td>
                    <button
                      className='button-2'
                      onClick={() => getdata(item.name)}
                    >
                      Get friends
                    </button>
                  </td>
                </tr>
              )
            })}
          </table>}

        {allFrined.length !== 0 &&
          <table className='main-table friends-main'>
            <th>
              {selectFd} Friends name
            </th>

            {allFrined.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    {item.name}
                  </td>
                </tr>
              )
            })}
          </table>}
      </header>
    </div>
  )
}

export default App
