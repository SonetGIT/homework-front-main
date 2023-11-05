import styled from "styled-components";

type AddressType = {
  street: string; // ПОДПРАВЛЯЕМ any
  city: string; // ПОДПРАВЛЯЕМ any
};

type UserType = {
  id: number;
  name: string,
  age: number,
  address: AddressType
};  // ПРИДЕТСЯ САМОМУ)

type UserListPropsType = {
  users: UserType[]; // ПО МОЕМУ ЧЕГО-ТО НЕ ХВАТАЕТ...
};

export const UserList = (props: UserListPropsType) => {
  return (
    <div id={'hw01-users'}>
      <h2>User List:</h2>

      <StlUl>
       {props.users.map((u, index) =>{
          return (
            <ListItem key={u.id} 
                id={`hw01-user-${u.id}`}>
                <strong>{u.name}</strong> <br />
                <small>Age:{u.age}</small>
                <strong> Address:</strong>
                {u.address.street}, {u.address.city}
            </ListItem>
          )}
        )}
      </StlUl>

      {/*<ul>*/}
      {/*  {props.users.map((user) => ( // ВСЕ ТОВАРЫ В СТРАНУ ПРИЕЗЖАЮТ В КОНТЕЙНЕРАХ, А В РЕАКТЕ...*/}
      {/*    <li key={ЭЛЕМЕНТ МАССИВА.id} id={`hw01-user-${ЭЛЕМЕНТ МАССИВА.id}`}>*/}
      {/*      <strong>{ЭЛЕМЕНТ МАССИВА.name}</strong> (Age: {ЭЛЕМЕНТ МАССИВА.age})<strong> Address:</strong>*/}
      {/*      {ЭЛЕМЕНТ МАССИВА.address.street}, {ЭЛЕМЕНТ МАССИВА.address.city}*/}
      {/*    </li>*/}
      {/*  ))}*/}
      {/*</ul>*/}
    </div>
  );
};

const StlUl = styled.ul`
    margin: 30px 0;
    list-style-type: none;
`
const ListItem = styled.li`
      margin-bottom: 30px;
`
