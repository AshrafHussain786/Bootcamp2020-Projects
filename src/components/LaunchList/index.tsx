import React from "react";
import { useLauchListQuery } from "../../generated/graphql";
import LaunchList, { OwnProps } from "./LaunchList";

const LaunchListContainer = (props: OwnProps) => {
    const {data, error, loading } = useLauchListQuery();

    if (loading) {
        return <h2> Data is Loading .... </h2>
    }

    if (error || !data) {
        return <h2>There was an error .... </h2>
    }

    return <LaunchList data={data} {...props} />
}

export default LaunchListContainer;