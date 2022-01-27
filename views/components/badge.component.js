const BadgeComponent = (label,color) => {

    const bgColor = color ? color : "bg-primary";
    
    return `<span class="badge ${bgColor}">${label}</span>`
}

export default BadgeComponent;