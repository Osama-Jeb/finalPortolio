import { useParams } from "react-router-dom";

const SingleProject = () => {
    const { id } = useParams();

    return (
        <div className="text-red-500 bg-green-500">
            this is the single project with the id of {id}
        </div>
    );
}

export default SingleProject; 
