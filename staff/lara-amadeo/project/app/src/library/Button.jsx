import "./Button.css"
export default function Button({ category, size, icon, label }) {

    return <>
        <div className={`
            ${size === "small" && "button-container-small"}
            ${size === "extrasmall" && "button-container-extrasmall"}
            ${size === "medium" && "button-container-medium"}
            ${category === "primary" && "primary"}
            ${category === "secondary" && "secondary"}
            ${category === "critical" && "critical"}`}>
            {icon && <p className="body-text-bold">i</p>}
            <p className={`body-text-bold ${category === "critical" ? "label-critical" : "label"}`}>{label}</p>
        </div>
    </>
}