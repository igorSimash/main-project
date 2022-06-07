import react from 'react';
import ListSelect from "../UI/select/ListSelect";
import MyInput from "../UI/input/MyInput";


const ListFilter = ({filter, setFilter}) => {
    return (
        <div>
            <ListSelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultOption="Without sorting"
                options={[{value: 'title', name: 'Sort by title'},
                    {value: 'body', name: 'Sort by description'}]}
            />
            <MyInput
                placeholder='Search...'
                value={filter.params}
                onChange={e => setFilter({...filter, params: e.target.value})}
            />
        </div>
    );
};

export default ListFilter;