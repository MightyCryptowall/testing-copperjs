const SpinnerComponent = () => {
    return `
    <div style="
        display:flex;
        flex-direction: column;
        align-items: center;
        margin-top: 1rem;
    ">
        <div class="spinner-border" role="status"></div>
        <p class="text-center mt-2">Loading ...</p>
    </div>
    `
}

export default SpinnerComponent