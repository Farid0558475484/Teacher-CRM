import { useUserBalanceQuery } from "../../../api/walletApi";

function Balance() {
  const { data, error, isLoading } = useUserBalanceQuery(localStorage.getItem("studentId"));

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {isLoading ? <p>Loading...</p> : <p>My Balance: {data.creditsBalance}</p>}
    </div>
  );
}

export default Balance;
