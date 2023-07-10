import './AdditionalInfo.css'
import Context from "../Context.js"
import { useContext, useState, useRef } from "react"
import TextField from '../library/components/TextField.jsx'
import TextArea from '../library/components/TextArea.jsx'
import DaySelector from '../library/components/DaySelector'
import Header from '../library/components/Header'
import Topbar from '../library/modules/Topbar'
import TimeSelector from '../library/components/TimeSelector'
import ButtonBar from '../library/modules/ButtonBar'
import { registerAdditionalInfo } from '../logic/registerAdditionalInfo'
import { context } from '../ui'


export default function AdditionalInfo({ onSkipLink }) {
    const { loaderOn, loaderOff } = useContext(Context)
    const [availabilityDays, setAvailabilityDays] = useState([])
    const formRef = useRef(null)

    const days = ['L', 'M', 'X', 'J', 'V', 'S', 'D']

    const onDayClick = (day) => {
        if (availabilityDays && availabilityDays.includes(day)) {
            const updatedArray = availabilityDays.filter(item => item !== day)
            setAvailabilityDays(updatedArray)

        }
        else setAvailabilityDays(availabilityDays.concat(day))
    }

    const handleAdditionalInfo = (event) => {
        event.preventDefault()

        const form = formRef.current

        const description = form.description.value
        const fullTags = form.tags.value
        const tags = fullTags.split(",").map(item => item.trim())
        const location = form.location.value
        let availability = []


        if (availabilityDays.includes('L')) {
            const from = form.mondayFrom.value
            const to = form.mondayTo.value
            const a = { day: 'monday', time: `${from}-${to}` }
            availability.push(a)
        }
        if (availabilityDays.includes('M')) {
            const from = form.tuesdayFrom.value
            const to = form.tuesdayTo.value
            const a = { day: 'tuesday', time: `${from}-${to}` }
            availability.push(a)
        }
        if (availabilityDays.includes('X')) {
            const from = form.wednesdayFrom.value
            const to = form.wednesdayTo.value
            const a = { day: 'wednesday', time: `${from}-${to}` }
            availability.push(a)
        }
        if (availabilityDays.includes('J')) {
            const from = form.thursdayFrom.value
            const to = form.thursdayTo.value
            const a = { day: 'thursday', time: `${from}-${to}` }
            availability.push(a)
        }
        if (availabilityDays.includes('V')) {
            const from = form.fridayFrom.value
            const to = form.fridayTo.value
            const a = { day: 'friday', time: `${from}-${to}` }
            availability.push(a)
        }
        if (availabilityDays.includes('S')) {
            const from = form.saturdayFrom.value
            const to = form.saturdayTo.value
            const a = { day: 'saturday', time: `${from}-${to}` }
            availability.push(a)
        }
        if (availabilityDays.includes('D')) {
            const from = form.sundayFrom.value
            const to = form.sundayTo.value
            const a = { day: 'sunday', time: `${from}-${to}` }
            availability.push(a)
        }

        try {
            loaderOn()

            setTimeout(() => {
                registerAdditionalInfo(context.token, description, tags, location, availability)
                loaderOff()
                onSkipLink()
            }, 1000)

        } catch (error) {
            console.log(error.message)
        }

    }

    const handleSkipInfo = (event) => {
        event.preventDefault()
        try {
            loaderOn()

            setTimeout(() => {
                loaderOff()
                onSkipLink()
            }, 1000)

        } catch (error) {
            console.log(error.message)
        }
    }





    return <>
        <div className="page">
            <div className='additional-container'>
                <Topbar level={'second'} secondLevelLabel={'Profile'} close={true} />
                <Header text={'Profile details'} />

                <form className='additional-form' onSubmit={null} ref={formRef}>
                    <TextArea name={'description'} label={'Description'} placeholder={'Start by writing a bit about yourself, this helps other users to get to know you.'} />
                    <TextField type={'text'} label={'Tags'} name={'tags'} placeholder={'Write some tags about your lifestyle. p.e. Healthy, Sporty, Diet...'} />
                    <TextField type={'text'} label={'Pick-up location'} name={'location'} />

                    {/*Availability options*/}
                    <div className='availability-container'>
                        <p className='body-text grey-700'>Availability</p>
                        <div className='availability-dots-container'>
                            {days.map(day => {
                                const state = `${availabilityDays && availabilityDays.includes(day) ? 'selected' : 'default'}`
                                return <DaySelector key={day} label={day} state={state} onClick={() => onDayClick(day)} />
                            })}
                        </div>
                    </div>
                    {availabilityDays.map(day => {
                        const daylabel = `
                        ${day === 'L' ? 'Monday' : ''}
                        ${day === 'M' ? 'Tuesday' : ''}
                        ${day === 'X' ? 'Wednesday' : ''}
                        ${day === 'J' ? 'Thursday' : ''}
                        ${day === 'V' ? 'Friday' : ''}
                        ${day === 'S' ? 'Saturday' : ''}
                        ${day === 'D' ? 'Sunday' : ''}`
                        return <TimeSelector dayLabel={daylabel} firstLabel={'From'} secondLabel={'To'} firstName={`${daylabel.toLowerCase().trim("")}From`} secondName={`${daylabel.toLowerCase().trim("")}To`} />
                    })}
                </form>

                {/* buttonbar */}
                <ButtonBar firstButton={true} link={true} firstButtonLabel={'Finish'} linkLabel={'Do it later'} onFirstButtonClick={handleAdditionalInfo} onLinkClick={handleSkipInfo} />
            </div>
        </div>
    </>
}