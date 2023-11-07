const Contact = () => {
    return (
        <article className="container text-center">
            <article className="row" style={{ height: "50vh" }}>
                <section className="mt-5">
                    <h1><strong>Cantact Us</strong></h1>
                </section>
                <section className="col-4">
                    <section className="mb-4">
                        <h3>BY PHONE</h3>
                    </section>
                    <p>| Monday - Friday, 9am to 4pm |</p>
                    <p><strong>Denmark</strong>
                        <br />
                        +45 12 34 56 78</p>
                    <p><strong>International: </strong>
                        <br />
                        1-604-625-0869</p>

                </section>
                <section className="col-4">
                    <section className="mb-4">
                        <h3>MAIL TO US</h3>
                    </section>
                    <p>You can send us any infomation if you like.</p>
                    <p><strong>Blogsite@gmail.com</strong></p>
                    <button className="btn btn-outline-primary">Click Here</button>
                </section>
                <section className="col-4">
                    <section className="mb-4">
                        <h3>LIVE CHAT</h3>
                    </section>
                    <p>Live chat with our member or AI bot at anytime.</p>
                    <button className="btn btn-success mt-4">Start Chat</button>
                </section>
            </article>
        </article>
    );
};

export default Contact;