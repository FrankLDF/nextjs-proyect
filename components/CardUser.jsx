
import Link from "next/link";

function CardUser({ user }) {
    return (
      <Link href={`/users/${user.id}`}>
        <div>
          <section>
            <img src={user.avatar} alt="foto" />
          </section>
          <h3>
            {user.first_name} {user.last_name}
          </h3>
          <p>{user.email}</p>
        </div>
      </Link>
    );
}

export default CardUser;
