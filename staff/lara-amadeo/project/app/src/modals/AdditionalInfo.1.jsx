import './AdditionalInfo.css'
import Context from "../Context.js"
import { useContext, useState } from "react"
import Button from '../library/components/Button.jsx'
import Logo from "../library/components/Logo.jsx"
import TextField from '../library/components/TextField.jsx'
import Link from '../library/components/Link.jsx'
import { registerUser } from '../logic/registerUser'
import TextArea from '../library/components/TextArea.jsx'
import DaySelector from '../library/components/DaySelector'
import Header from '../library/components/Header'
import Topbar from '../library/modules/Topbar'


export default function AdditionalInfo() {
    const { loaderOn, loaderOff } = useContext(Context)
    const [availabilityDays, setAvailabilityDays] = useState([])

    // const days = ['L', 'M', 'X', 'J', 'V', 'S', 'D']


    const onMondayClick = () => {
        if (availabilityDays && availabilityDays.includes('L')) {
            const index = availabilityDays.indexOf('L')
            const b = availabilityDays.splice(index, 1)
            setAvailabilityDays(availabilityDays)
        }
        setAvailabilityDays(availabilityDays.concat('L'))

    }

    const onTuesdayClick = () => {
        if (availabilityDays && availabilityDays.includes('M')) {
            const index = availabilityDays.indexOf('M')
            const b = availabilityDays.splice(index, 1)
            setAvailabilityDays(availabilityDays)
        }
        setAvailabilityDays(availabilityDays.concat('M'))

    }

    const onWednesdayClick = () => {
        if (availabilityDays && availabilityDays.includes('X')) {
            const index = availabilityDays.indexOf('X')
            const b = availabilityDays.splice(index, 1)
            setAvailabilityDays(availabilityDays)
        }
        setAvailabilityDays(availabilityDays.concat('X'))

    }

    const onThursdayClick = () => {
        if (availabilityDays && availabilityDays.includes('J')) {
            const index = availabilityDays.indexOf('J')
            const b = availabilityDays.splice(index, 1)
            setAvailabilityDays(availabilityDays)
        }
        setAvailabilityDays(availabilityDays.concat('J'))

    }

    const onFridayClick = () => {
        if (availabilityDays && availabilityDays.includes('V')) {
            const index = availabilityDays.indexOf('V')
            availabilityDays.splice(index, 1)
            console.log(availabilityDays)
            setAvailabilityDays(availabilityDays)
        }
        setAvailabilityDays(availabilityDays.concat('V'))
    }

    const onSaturdayClick = () => {
        if (availabilityDays && availabilityDays.includes('S')) {
            const index = availabilityDays.indexOf('S')
            const b = availabilityDays.splice(index, 1)
            setAvailabilityDays(availabilityDays)
        }
        setAvailabilityDays(availabilityDays.concat('S'))

    }

    const onSundayClick = () => {
        if (availabilityDays && availabilityDays.includes('D')) {
            const index = availabilityDays.indexOf('D')
            const b = availabilityDays.splice(index, 1)
            setAvailabilityDays(availabilityDays)
        }
        setAvailabilityDays(availabilityDays.concat('D'))
    }


    return <>
        <div className="page">
            <div className='additional-container'>
                <Topbar level={'second'} secondLevelLabel={'Profile'} close={true} />
                <Header text={'Profile details'} />
                <form className='additional-form' onSubmit={null}>
                    <TextArea name={'description'} label={'Description'} placeholder={'Start by writing a bit about yourself, this helps other users to get to know you.'} />
                    <TextField type={'text'} label={'Tags'} name={'tags'} placeholder={'Write some tags about your lifestyle. p.e. Healthy, Sporty, Diet...'} />
                    <TextField type={'text'} label={'Pick-up location'} name={'location'} />
                    <div className='availability-container'>
                        <p className='body-text grey-700'>Availability</p>
                        <div className='availability-dots-container'>
                            {/* {days.map(day => {
                                <DaySelector label={day} state={'default'} onClick={onDayClick} />
                            })} */}
                            <DaySelector label={'L'} state={`${availabilityDays && availabilityDays.includes('L') ? 'selected' : 'default'}`} onClick={onMondayClick} />
                            <DaySelector label={'M'} state={`${availabilityDays && availabilityDays.includes('M') ? 'selected' : 'default'}`} onClick={onTuesdayClick} />
                            <DaySelector label={'X'} state={`${availabilityDays && availabilityDays.includes('X') ? 'selected' : 'default'}`} onClick={onWednesdayClick} />
                            <DaySelector label={'J'} state={`${availabilityDays && availabilityDays.includes('J') ? 'selected' : 'default'}`} onClick={onThursdayClick} />
                            <DaySelector label={'V'} state={`${availabilityDays && availabilityDays.includes('V') ? 'selected' : 'default'}`} onClick={onFridayClick} />
                            <DaySelector label={'S'} state={`${availabilityDays && availabilityDays.includes('S') ? 'selected' : 'default'}`} onClick={onSaturdayClick} />
                            <DaySelector label={'D'} state={`${availabilityDays && availabilityDays.includes('D') ? 'selected' : 'default'}`} onClick={onSundayClick} />
                        </div>
                    </div>

                    {/* buttonbar */}
                </form>

            </div>
        </div>
    </>
}