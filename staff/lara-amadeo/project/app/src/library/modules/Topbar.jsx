import IconButton from '../components/IconButton'
import { Bars3Icon, ChatBubbleLeftRightIcon, ArrowLeftIcon } from '../icons'
import './Topbar.css'

export default function Topbar({ level, secondLevelLabel }) {

    return <>
        <div className='topbar-container'>
            {level === 'first' && <>
                <IconButton icon={<Bars3Icon className='icon-xs grey-700' />} type={'secondary'} />
                <IconButton icon={<ChatBubbleLeftRightIcon className='icon-xs grey-700' />} type={'secondary'} />
            </>}
            {level === 'second' && <>
                <IconButton icon={<ArrowLeftIcon className='icon-xs grey-700' />} type={'secondary'} />
                <div className='topbar-label'><p className='small-text-bold grey-700'>{secondLevelLabel}</p></div>
            </>}
        </div>

    </>
}