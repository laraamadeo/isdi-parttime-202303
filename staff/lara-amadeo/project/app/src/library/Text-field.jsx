import "./text-field.css"

export default function TextField({ label, description, disabled, placeholder }) {

    return <>
        <div className={`text-field-container ${disabled && "disabled"}`}>
            <div className="label-clarification">
                <p className='body-text grey-700'>{label}</p>
                {description && <p className='small-text grey-500'>{description}</p>}
            </div>
            <input type="text" name="input" placeholder={placeholder && placeholder} className="input-field"></input>
        </div>
    </>
}