import { useHistory, useLocation } from "react-router-dom";
import Input from "../Input/styled";
import searchQueryParamName from "../searchQueryParamName";
import { useQueryParameters, useReplaceQueryParameter } from "../queryParameters";

export default () => {

    const query = useQueryParameters(searchQueryParamName);
    const replaceQueryParameters = useReplaceQueryParameter();

    const onInputChange = ({ target }) => {
        replaceQueryParameters({
            key: searchQueryParamName,
            value: target.value,
        })
    };

    return (
        <Input
            placeholder="szukaj"
            value={query || ""}
            onChange={onInputChange}
        />
    )
};