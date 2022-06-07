import react from 'react';
import ListSelect from "../UI/select/ListSelect";
import MyInput from "../UI/input/MyInput";


const ListFilter = ({filter, setFilter}) => {
    return (
        <div>
            <ListSelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultOption="Без сортування"
                options={[{value: 'title', name: 'Сортування по заголовку'},
                    {value: 'body', name: 'Сортування по опису'}]}
            />
            <MyInput
                placeholder='Пошук...'
                value={filter.params}
                onChange={e => setFilter({...filter, params: e.target.value})}
            />
        </div>
    );
};

export default ListFilter;