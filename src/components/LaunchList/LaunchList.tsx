import React from "react";
import { LauchListQuery } from "../../generated/graphql";
import "./style.css";

export interface OwnProps {
    handleIdChange: (newId: number) => void;
}

const className = "LaunchList";

interface Props extends OwnProps {
    data: LauchListQuery;
}

const Launch: React.FC<Props> = ({ data, handleIdChange }) => (
    <div className={className}>
        <h3>All Space X Launches </h3>
        <ol className={`${className}__list`}>
            {!!data.launches && data.launches.map(
                (launch, i) => !!launch && (
                    <li key={i} 
                        className={`${className}__item`}
                        onClick={() => handleIdChange(launch.flight_number!)}
                    >
                        {launch.mission_name} - {launch.launch_year}
                    </li>
                )
            )}
        </ol>
    </div>
);

export default Launch;