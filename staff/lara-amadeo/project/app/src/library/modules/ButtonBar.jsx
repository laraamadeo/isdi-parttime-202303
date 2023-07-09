import Button from '../components/Button'
import Link from '../components/Link'
import './ButtonBar.css'

export default function ButtonBar({ firstButton, firstButtonLabel, secondButtonlabel, secondButton, link, linkLabel, onLinkClick, onSecondButtonClick, onFirstButtonClick, ...props }) {

    return <>
        <div className='buttonbar-container'>
            <Button type={'primary'} size={'small'} label={'Finish'} onClick={onFirstButtonClick} />
            {secondButton && <Button type={'primary'} size={'small'} label={'Finish'} onClick={onSecondButtonClick} />}
            {link && <Link label={'Do it later'} state={'default'} onClick={onLinkClick} />}
        </div>

    </>
}