
const PageNotFoundPage = () => {

    return `
        <div style="
            display:flex; 
            height: 90vh;
            backgroundColor: red; 
            justify-content: center; 
            align-items: center"
        >
            <div class="text-center">
                <h1>404</h1>
                <p>
                    Page Not Found - 
                    <a href="/home">Go to home page >></a>
                </p>
            </div>
        </div>
    `
}

export default PageNotFoundPage