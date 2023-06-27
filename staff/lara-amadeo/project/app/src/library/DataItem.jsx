import "./DataItem.css"

export default function DataItem({ label, description }) {

    return <>
        <div className="data-item-container">
            <p className="body-text data-item-label">{label}</p>
            <p className="body-text-bold data-item-description">{description}</p>
        </div>
    </>
}