import React from "react";
import { useLauchProfileQuery } from "../../generated/graphql";
import LaunchDetails from "./LaunchDetails";

interface OwnProps {
    id: number;
}
const LaunchDetailsContainer = ({ id }: OwnProps) => {
    // const {data, error, loading, refetch } = useLauchProfileQuery({
        const {data, error, loading } = useLauchProfileQuery({
        variables: {id: String(id)},
    });   

    // useEffect(() => {
    //     refetch();
    // }, [id]);

    if (loading) {
        return <h2> Data is Loading .... </h2>
    }

    if (error || !data) {
        return <h2>There was an error .... </h2>
    }

    if (!data) {
        return <h2> Please select a mission for its details </h2>
    }

    return <LaunchDetails data={data} />
};

export default LaunchDetailsContainer;

