import "./IconButton.css"

export default function IconButton({ icon, type, ...props }) {

    return <>
        <div className={`icon-button-container ${type === 'primary' && 'icn-button-primary'} ${type === 'secondary' && 'icn-button-secondary'} ${type === 'critical' && 'icn-button-critical'}`} {...props}>
            <p className={`tiny-text-bold icn-button-label ${type === 'critical' && 'icn-button-label-critical'}`}>W</p>
        </div>
    </>
}