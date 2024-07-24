import { useReadContract } from "wagmi";
import { abi } from "../abi/abi";
import { bsc } from "viem/chains";

const contractaddress = "0x18B2A687610328590Bc8F2e5fEdDe3b582A49cdA";

const ContractIntegration = () => {
  const config = {
    abi: abi,
    address: contractaddress,
    functionName: "currentEpoch",
    chainId: bsc.id,
  };
  const { data } = useReadContract(config);

  return <div>#{data?.toString()}</div>;
};

export default ContractIntegration;
