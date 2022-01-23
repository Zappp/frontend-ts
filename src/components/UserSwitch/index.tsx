import { useState } from 'react'
import UserSubcategorySwitch from '../UserSubcategorySwitch'

const UserSwitch = () => {
  const [option, setOption] = useState('PRIVATE')
  const [value, setValue] = useState('')
  const UserCategorySwitch = (option: string) => {
    switch (option) {
      case 'BUSINESS':
        return <UserSubcategorySwitch value={value} setValue={setValue} />
      case 'ELSE':
        return (
          <label>
            <input
              type='text'
              onChange={event => setValue(event.target.value)}
            />
          </label>
        )

      case 'PRIVATE':
        return <span onChange={() => setValue('')}></span>
    }
  }
  return (
    <>
      <label>Wybierz kategorię użytkownika</label>
      <select value={option} onChange={event => setOption(event.target.value)}>
        <option value='PRIVATE'>Prywatna</option>
        <option value='BUSINESS'>Biznesowa</option>
        <option value='ELSE'>Inna</option>
      </select>
      {UserCategorySwitch(option) /*move to different module*/}
    </>
  )
}

export default UserSwitch