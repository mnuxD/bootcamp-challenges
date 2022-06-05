import { useQuery, useMutation } from "@apollo/client";
import { ADD_CLIENT, GET_CLIENTS } from "../../graphql/Queries";
import { client } from "../../graphql/ApolloClient";

const Clients = () => {
  const { loading, error, data } = useQuery(GET_CLIENTS);
  const [
    addClient,
    { loading: addingClient, error: errorAddClient, data: addedClient },
  ] = useMutation(ADD_CLIENT);

  const handleAddClient = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const phone = e.target[1].value;

    addClient({
      variables: { name, phone },
    });

    await client.refetchQueries({
      include: "active",
    });
  };

  if (error) return <div className="error"> Error!</div>;
  if (loading) return <div className="in-progress">Loading...</div>;
  return (
    <div>
      <div>
        <form onSubmit={handleAddClient}>
          Name: <input type="text" />
          Phone: <input type="number" />
          <button type="submit"> Add Client</button>
        </form>
      </div>
      {data.clients.map(({ name, phone, id }) => (
        <div key={id}>
          {name} - {phone}
        </div>
      ))}
    </div>
  );
};

export default Clients;
