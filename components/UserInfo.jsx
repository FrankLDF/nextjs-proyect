import Link from "next/link"

function UserInfo({user}) {

  return (
    <div>
      <img src={user.avatar} alt={`foto de ${user.first_name}`} />
      <h1>{user.id}- {user.first_name} {user.last_name}</h1>
      <h3>{user.email}</h3>
      <Link href={'/users'}>Volver atras</Link>
    </div>
  )
}

export default UserInfo
