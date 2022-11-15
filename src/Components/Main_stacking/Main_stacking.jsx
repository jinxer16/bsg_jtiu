import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { loadWeb3 } from '../../apis/api'
import Stack_d from '../Stack_d/Stack_d'
import Stack_income from '../Stack_income/Stack_income'
import Stack_level from '../Stack_level/Stack_level'
import Stack_p from '../Stack_p/Stack_p'
import Stack_re from '../Stack_re/Stack_re';
import RepetationComponent from '../My_team/RepetationComponent'
 import "./Main_stacking.css"
function Main_stacking({ account }) {


  return (
    <div className='main_stacking_bg'>
      {/* <Stack_income acc={account} /> */}
      <RepetationComponent />
      <Stack_p  />
      <Stack_d  />
      <Stack_level  />
      {/* <Stack_re acc={account} /> */}
    </div>
  )
}
export default Main_stacking
