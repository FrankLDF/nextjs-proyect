import UserInfo from "@/components/UserInfo";

async function getUser(id) {
  const response = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await response.json();
  return data.data;
}

async function UserPage({ params }) {
const user = await getUser(params.id)
  return (
    <UserInfo user={user}/>
  );
}

export default UserPage;
