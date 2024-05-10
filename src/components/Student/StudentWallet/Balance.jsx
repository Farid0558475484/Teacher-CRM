import { useUserBalanceQuery } from "./../../../api/walletApi";

function Balance() {
  let studentId = "658fa367742cd725b24b184a";
  const { data, error, isLoading } = useUserBalanceQuery(studentId);

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
