import { useHistory, useLocation } from "react-router-dom";
import Input from "../Input";
import searchQueryParamName from "../searchQueryParamName";

export default () => {

    const location = useLocation();
    const history = useHistory();
    const query = (new URLSearchParams(location.search).get(searchQueryParamName));

    const onInputChange = ({ target }) => {
        const searchParams = new URLSearchParams(location.search);

        target.value.trim() === "" ? searchParams.delete(searchQueryParamName) : searchParams.set(searchQueryParamName, target.value);

        history.push(`${location.pathname}?${searchParams.toString()}`);
    };

    return (
        <Input
            placeholder="szukaj"
            value={query || ""}
            onChange={onInputChange}
        />
    )

};