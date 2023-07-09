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

export default function AdditionalInfo() {
    const { loaderOn, loaderOff } = useContext(Context)
    const [monday, setMonday] = useState(false)
    const [tuesday, setTuesday] = useState(false)
    const [wednesday, setWednesday] = useState(false)
    const [thursday, setThursday] = useState(false)
    const [friday, setFriday] = useState(false)
    const [saturday, setSaturday] = useState(false)
    const [sunday, setSunday] = useState(false)

    const formRef = useRef(null);



    // const days = ['L', 'M', 'X', 'J', 'V', 'S', 'D']


    const onMondayClick = () => {
        if (monday === false) setMonday(true)

        else setMonday(false)
    }

    const onTuesdayClick = () => {
        if (tuesday === false) setTuesday(true)

        else setTuesday(false)

    }

    const onWednesdayClick = () => {
        if (wednesday === false) setWednesday(true)

        else setWednesday(false)
    }

    const onThursdayClick = () => {
        if (thursday === false) setThursday(true)

        else setThursday(false)

    }

    const onFridayClick = () => {
        if (friday === false) setFriday(true)

        else setFriday(false)
    }

    const onSaturdayClick = () => {
        if (saturday === false) setSaturday(true)

        else setSaturday(false)
    }

    const onSundayClick = () => {
        if (sunday === false) setSunday(true)

        else setSunday(false)
    }

    const handleAdditionalInfo = (event) => {
        event.preventDefault()

        const form = formRef.current

        const description = form.description.value
        const fullTags = form.tags.value
        const tags = fullTags.split(",")
        const location = form.location.value
        let availability = []


        if (monday === true) {
            const from = form.mondayFrom.value
            const to = form.mondayTo.value
            const a = { day: 'monday', time: `${from}-${to}` }
            availability.push(a)
        }
        if (tuesday === true) {
            const from = form.tuesdayFrom.value
            const to = form.tuesdayTo.value
            const a = { day: 'tuesday', time: `${from}-${to}` }
            availability.push(a)
        }
        if (wednesday === true) {
            const from = form.wednesdayFrom.value
            const to = form.wednesdayTo.value
            const a = { day: 'wednesday', time: `${from}-${to}` }
            availability.push(a)
        }
        if (thursday === true) {
            const from = form.thursdayFrom.value
            const to = form.thursdayTo.value
            const a = { day: 'thursday', time: `${from}-${to}` }
            availability.push(a)
        }
        if (friday === true) {
            const from = form.fridayFrom.value
            const to = form.fridayTo.value
            const a = { day: 'friday', time: `${from}-${to}` }
            availability.push(a)
        }
        if (saturday === true) {
            const from = form.saturdayFrom.value
            const to = form.saturdayTo.value
            const a = { day: 'saturday', time: `${from}-${to}` }
            availability.push(a)
        }
        if (sunday === true) {
            const from = form.sundayFrom.value
            const to = form.sundayTo.value
            const a = { day: 'sunday', time: `${from}-${to}` }
            availability.push(a)
        }

    }

    const handleSkipInfo = (event) => {
        event.preventDefault()
        console.log('link working!')
    }


    return <>
        <div className="page">
            <div className='additional-container'>
                <Topbar level={'second'} secondLevelLabel={'Profile'} close={true} />
                <Header text={'Profile details'} />
                <form className='additional-form' onSubmit={null} ref={formRef}>
                    <TextArea name={'description'} label={'Description'} placeholder={'Start by writing a bit about yourself, this helps other users to get to know you.'} />
                    <TextField type={'text'} label={'Tags'} description={'Please separate tags with a comma.'} name={'tags'} placeholder={'Healthy, Sporty, Diet...'} />
                    <TextField type={'text'} label={'Pick-up location'} name={'location'} />

                    <div className='availability-container'>
                        <p className='body-text grey-700'>Availability</p>
                        <div className='availability-dots-container'>
                            <DaySelector label={'L'} state={`${monday ? 'selected' : 'default'}`} onClick={onMondayClick} />
                            <DaySelector label={'M'} state={`${tuesday ? 'selected' : 'default'}`} onClick={onTuesdayClick} />
                            <DaySelector label={'X'} state={`${wednesday ? 'selected' : 'default'}`} onClick={onWednesdayClick} />
                            <DaySelector label={'J'} state={`${thursday ? 'selected' : 'default'}`} onClick={onThursdayClick} />
                            <DaySelector label={'V'} state={`${friday ? 'selected' : 'default'}`} onClick={onFridayClick} />
                            <DaySelector label={'S'} state={`${saturday ? 'selected' : 'default'}`} onClick={onSaturdayClick} />
                            <DaySelector label={'D'} state={`${sunday ? 'selected' : 'default'}`} onClick={onSundayClick} />
                        </div>
                    </div>
                    {monday && <TimeSelector dayLabel={'Monday'} firstLabel={'From'} secondLabel={'To'} firstName={'mondayFrom'} secondName={'mondayTo'} />}
                    {tuesday && <TimeSelector dayLabel={'Tuesday'} firstLabel={'From'} secondLabel={'To'} firstName={'tuesdayFrom'} secondName={'tuesdayTo'} />}
                    {wednesday && <TimeSelector dayLabel={'Wednesday'} firstLabel={'From'} secondLabel={'To'} firstName={'wednesdayFrom'} secondName={'wednesdayTo'} />}
                    {thursday && <TimeSelector dayLabel={'Thursday'} firstLabel={'From'} secondLabel={'To'} firstName={'thursdayFrom'} secondName={'thursdayTo'} />}
                    {friday && <TimeSelector dayLabel={'Friday'} firstLabel={'From'} secondLabel={'To'} firstName={'fridayFrom'} secondName={'fridayTo'} />}
                    {saturday && <TimeSelector dayLabel={'Saturday'} firstLabel={'From'} secondLabel={'To'} firstName={'saturdayFrom'} secondName={'saturdayTo'} />}
                    {sunday && <TimeSelector dayLabel={'Sunday'} firstLabel={'From'} secondLabel={'To'} firstName={'sundayFrom'} secondName={'sundayTo'} />}

                </form>

                {/* buttonbar */}
                <ButtonBar firstButton={true} link={true} firstButtonLabel={'Finish'} linkLabel={'Do it later'} onFirstButtonClick={handleAdditionalInfo} onLinkClick={handleSkipInfo} />
            </div >
        </div >
    </>
}