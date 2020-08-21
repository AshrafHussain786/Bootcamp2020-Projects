import React from "react";
import { LauchProfileQuery } from "../../generated/graphql";
import "./style.css";

interface Props {
    data: LauchProfileQuery
}

const className = "LaunchDetails";

const LaunchDetails: React.FC<Props> = ({ data }) => {
    if (!data.launch) {
        return <h2> Launch unavailable </h2>
    }

    return (
        <div className={className}>
            <div className={`${className}__status`}>
                <span> Flight {data.launch.flight_number}</span>
                {data.launch.launch_success ? (
                    <span className={`${className}__success`}> Success</span>
                ) : <span className={`${className}__failed`}> Failed</span>}
            </div>
            <h1 className={`${className}__title`}>
                {data.launch.mission_name}  
                {data.launch.rocket && 
                `(${data.launch.rocket.rocket_name} | ${data.launch.rocket.rocket_type})`}
            </h1>
            <p className={`${className}__description`}>Launched from {data.launch.launch_site?.site_name} in {data.launch.launch_year}</p>
            <p>{data.launch.details}</p>
            {!!data.launch.links && !!data.launch.links.flickr_images && (
                <div className={`${className}__image-list`}>
                    {data.launch.links.flickr_images.map( image =>
                        image ? <img src={image} className={`${className}__image`} alt="Mission-Img" key={image} /> : null
                        )}
                </div>
            )}
        </div>
    )

}

export default LaunchDetails;