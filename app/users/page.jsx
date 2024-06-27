import CardUser from "@/components/CardUser";

async function fetchUsers() {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  return data.data;
}

async function page() {
    const users = await fetchUsers()
    return (
        <>
            {users.map(user=>(<CardUser key={user.id} user={user}/>))}
        </>
  )
}

export default page;
