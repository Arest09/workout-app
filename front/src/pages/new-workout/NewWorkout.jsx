import Select from 'react-select'

import { Button } from '../../components/ui/button/Button'
import { Input } from '../../components/ui/input/Input'
import { Alert } from '../../components/ui/message/Alert'

import style from './NewWorkout.module.scss'
import { useNewWorkout } from './useNewWorkout.js'

const inputStyle = {
  marginBottom: '20px',
  backgroundColor: '#511734',
  color: '#F1E8E8'
}

const styleBtn = {
  maxWidth: '146px',
  margin: '0 auto',
  backgroundColor: 'rgba(181, 52, 113, 0.4)'
}

export function NewWorkout() {
  const { isLoading, error, isSuccess, name, setName, hadnleSubmit, title, setUserChoice, options, userChoice } =
    useNewWorkout()

  const errorInfo = error?.response?.data?.message

  return (
    <>
      {/* <h1 className='title'>{title}</h1> */}
      <form onSubmit={hadnleSubmit} className={style.form}>
        <Input
          style={inputStyle}
          placeholder='name'
          onChange={e => {
            setName(e.target.value)
          }}
          value={name}
        />
        <Select
          classNamePrefix={'select'}
          placeholder='выберите упражнения'
          options={options}
          isMulti
          onChange={choice => setUserChoice(choice)}
          value={userChoice}
        />
        <Button disabled={isLoading} style={styleBtn}>
          Create
        </Button>
        {error && <Alert type='error'>{errorInfo}</Alert>}
        {isSuccess && <Alert>тренировка добавлена</Alert>}
      </form>
    </>
  )
}
