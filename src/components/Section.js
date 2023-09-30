// import launch from "../img/launch.gif"
// import loading from "../img/loading.gif"
// import onboarding1 from "../img/onboarding-1.mp4"
// import onboarding2 from "../img/onboarding-2.mp4"
// import onboarding3 from "../img/onboarding-3.mp4"

export default function Section(props) {
    const mediaArray = props.item.media.map(media => {
        if (media.src.endsWith(".gif")) {
            return (
                <div className="media--caption">
                    <img className="gif" src={process.env.PUBLIC_URL + `/img/${media.src}`} />
                    <p>{media.caption}</p>
                </div>
            );
        } else if (media.src.endsWith(".mp4")) {
            return (
                <div className="media--caption">
                    <video autoPlay muted loop>
                        <source src={process.env.PUBLIC_URL + `/img/${media.src}`} type="video/mp4" />
                    </video>
                    <p>{media.caption}</p>
                </div>
            )
        }

        return null;
    });

    return (
        <div className="section">
            <div className="label">
                <h3>0{props.item.id}</h3>
                <h1>{props.item.label}</h1>
            </div>
            <div className="feature--description">{props.item.description}</div>
            <div className="media--container">
                {mediaArray}
            </div>


            {/* <div className="media--container">
                <div className="media--caption">
                    <img className="gif" src={launch} />
                    <p>Launch screen</p>
                </div>

                <div className="media--caption">
                    <img className="gif" src={loading} />
                    <p>Loading screen</p>
                </div>
            </div> */}
            {/* <div className="media--container">
                <div className="media--caption">
                    <video autoPlay muted loop>
                        <source src={onboarding1} type="video/mp4" />
                    </video>
                    <p>Launch screen</p>
                </div>
                <div className="media--caption">
                    <video autoPlay muted loop>
                        <source src={onboarding2} type="video/mp4" />
                    </video>
                    <p>Launch screen</p>
                </div>
                <div className="media--caption">
                    <video autoPlay muted loop>
                        <source src={onboarding3} type="video/mp4" />
                    </video>
                    <p>Launch screen</p>
                </div>
            </div> */}
        </div>
    );
}