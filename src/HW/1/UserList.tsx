type UserListPropsType = {
    AAA: List[]
    // ПО МОЕМУ ЧЕГО-ТО НЕ ХВАТАЕТ...
};

type List = {

    id: number
    name: string
    age: number
    address: BBB
}

type BBB = {
    street: string
    city: string
}
export const UserList = (props: UserListPropsType) => {
    return (
        <div id={'hw01-users'}>
            <h2>User List:</h2>
            <ul>
                {props.AAA.map((el) => ( // ВСЕ ТОВАРЫ В СТРАНУ ПРИЕЗЖАЮТ В КОНТЕЙНЕРАХ, А В РЕАКТЕ...
                    <li key={el.id} id={`hw01-user-${el.id}`}>
                        <strong>{el.name}</strong> (Age: {el.age})<strong> Address:</strong>
                        {el.address.street}, {el.address.city}
                    </li>
                ))}
            </ul>
        </div>
    );
};
