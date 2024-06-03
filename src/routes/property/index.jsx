import { useParams } from "react-router-dom";

export default function Property() {
    const params = useParams();

    return (
        <div>
            {params.id}
        </div>
    )
}