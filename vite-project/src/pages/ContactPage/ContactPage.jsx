import React from 'react'

const ContactPage = () => {
    return (
        <div style={{textAlign: "center"}}>
            <h1>Contact Page</h1>
            <button onClick={() => Navigate("/")}>
                Volver a Home
            </button>
        </div>
    )
}

export default ContactPage