import { useUserBalanceQuery } from "./../../../api/walletApi";

function Balance() {
  let studentId = "658fa367742cd725b24b184a";
  // let studentId = "66dabfb8495a64dbe75b9c17";
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
