var web3 = window.web3 || {};

var StdToken_abi = [ { "constant": true, "inputs": [], "name": "name", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "spender", "type": "address" }, { "name": "tokens", "type": "uint256" } ], "name": "approve", "outputs": [ { "name": "success", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [], "name": "totalSupply", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "from", "type": "address" }, { "name": "to", "type": "address" }, { "name": "tokens", "type": "uint256" } ], "name": "transferFrom", "outputs": [ { "name": "success", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "comments", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "tokenOwner", "type": "address" } ], "name": "balanceOf", "outputs": [ { "name": "balance", "type": "uint256" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [ { "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "to", "type": "address" }, { "name": "tokens", "type": "uint256" } ], "name": "transfer", "outputs": [ { "name": "success", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "spender", "type": "address" }, { "name": "tokens", "type": "uint256" }, { "name": "data", "type": "bytes" } ], "name": "approveAndCall", "outputs": [ { "name": "success", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "tokenOwner", "type": "address" }, { "name": "spender", "type": "address" } ], "name": "allowance", "outputs": [ { "name": "remaining", "type": "uint256" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_newOwner", "type": "address" } ], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "name": "initialSupply", "type": "uint256" }, { "name": "tokenName", "type": "string" }, { "name": "decimalUnits", "type": "uint8" }, { "name": "tokenSymbol", "type": "string" }, { "name": "tokenComments", "type": "string" } ], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "payable": true, "stateMutability": "payable", "type": "fallback" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "_from", "type": "address" }, { "indexed": true, "name": "_to", "type": "address" } ], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "tokens", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "tokenOwner", "type": "address" }, { "indexed": true, "name": "spender", "type": "address" }, { "indexed": false, "name": "tokens", "type": "uint256" } ], "name": "Approval", "type": "event" } ];
var BStdToken_abi = [ { "constant": true, "inputs": [], "name": "name", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "spender", "type": "address" }, { "name": "tokens", "type": "uint256" } ], "name": "approve", "outputs": [ { "name": "success", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "from", "type": "address" }, { "name": "to", "type": "address" }, { "name": "tokens", "type": "uint256" } ], "name": "transferFrom", "outputs": [ { "name": "success", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "tokenOwner", "type": "address" } ], "name": "balanceOf", "outputs": [ { "name": "balance", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [ { "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "account", "type": "address" }, { "name": "value", "type": "uint256" } ], "name": "burn", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "to", "type": "address" }, { "name": "tokens", "type": "uint256" } ], "name": "transfer", "outputs": [ { "name": "success", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "spender", "type": "address" }, { "name": "tokens", "type": "uint256" }, { "name": "data", "type": "bytes" } ], "name": "approveAndCall", "outputs": [ { "name": "success", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "tokenOwner", "type": "address" }, { "name": "spender", "type": "address" } ], "name": "allowance", "outputs": [ { "name": "remaining", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_newOwner", "type": "address" } ], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "name": "initialSupply", "type": "uint256" }, { "name": "tokenName", "type": "string" }, { "name": "decimalUnits", "type": "uint8" }, { "name": "tokenSymbol", "type": "string" } ], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "payable": true, "stateMutability": "payable", "type": "fallback" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "_from", "type": "address" }, { "indexed": true, "name": "_to", "type": "address" } ], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "tokens", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "tokenOwner", "type": "address" }, { "indexed": true, "name": "spender", "type": "address" }, { "indexed": false, "name": "tokens", "type": "uint256" } ], "name": "Approval", "type": "event" } ];
var MStdToken_abi = [ { "constant": true, "inputs": [], "name": "name", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "spender", "type": "address" }, { "name": "tokens", "type": "uint256" } ], "name": "approve", "outputs": [ { "name": "success", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "from", "type": "address" }, { "name": "to", "type": "address" }, { "name": "tokens", "type": "uint256" } ], "name": "transferFrom", "outputs": [ { "name": "success", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "account", "type": "address" }, { "name": "value", "type": "uint256" } ], "name": "mint", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "tokenOwner", "type": "address" } ], "name": "balanceOf", "outputs": [ { "name": "balance", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [ { "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "to", "type": "address" }, { "name": "tokens", "type": "uint256" } ], "name": "transfer", "outputs": [ { "name": "success", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "spender", "type": "address" }, { "name": "tokens", "type": "uint256" }, { "name": "data", "type": "bytes" } ], "name": "approveAndCall", "outputs": [ { "name": "success", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "tokenOwner", "type": "address" }, { "name": "spender", "type": "address" } ], "name": "allowance", "outputs": [ { "name": "remaining", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_newOwner", "type": "address" } ], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "name": "initialSupply", "type": "uint256" }, { "name": "tokenName", "type": "string" }, { "name": "decimalUnits", "type": "uint8" }, { "name": "tokenSymbol", "type": "string" } ], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "payable": true, "stateMutability": "payable", "type": "fallback" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "_from", "type": "address" }, { "indexed": true, "name": "_to", "type": "address" } ], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "tokens", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "tokenOwner", "type": "address" }, { "indexed": true, "name": "spender", "type": "address" }, { "indexed": false, "name": "tokens", "type": "uint256" } ], "name": "Approval", "type": "event" } ];
var BMStdToken_abi = [ { "constant": true, "inputs": [], "name": "name", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "spender", "type": "address" }, { "name": "tokens", "type": "uint256" } ], "name": "approve", "outputs": [ { "name": "success", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "from", "type": "address" }, { "name": "to", "type": "address" }, { "name": "tokens", "type": "uint256" } ], "name": "transferFrom", "outputs": [ { "name": "success", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "account", "type": "address" }, { "name": "value", "type": "uint256" } ], "name": "mint", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "tokenOwner", "type": "address" } ], "name": "balanceOf", "outputs": [ { "name": "balance", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [ { "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "account", "type": "address" }, { "name": "value", "type": "uint256" } ], "name": "burn", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "to", "type": "address" }, { "name": "tokens", "type": "uint256" } ], "name": "transfer", "outputs": [ { "name": "success", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "spender", "type": "address" }, { "name": "tokens", "type": "uint256" }, { "name": "data", "type": "bytes" } ], "name": "approveAndCall", "outputs": [ { "name": "success", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "tokenOwner", "type": "address" }, { "name": "spender", "type": "address" } ], "name": "allowance", "outputs": [ { "name": "remaining", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_newOwner", "type": "address" } ], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "name": "initialSupply", "type": "uint256" }, { "name": "tokenName", "type": "string" }, { "name": "decimalUnits", "type": "uint8" }, { "name": "tokenSymbol", "type": "string" } ], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "payable": true, "stateMutability": "payable", "type": "fallback" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "_from", "type": "address" }, { "indexed": true, "name": "_to", "type": "address" } ], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "tokens", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "tokenOwner", "type": "address" }, { "indexed": true, "name": "spender", "type": "address" }, { "indexed": false, "name": "tokens", "type": "uint256" } ], "name": "Approval", "type": "event" } ];

var StdToken_bytecode = '60806040523480156200001157600080fd5b5060405162000c4438038062000c44833981018060405260a08110156200003757600080fd5b8151602083018051919392830192916401000000008111156200005957600080fd5b820160208101848111156200006d57600080fd5b81516401000000008111828201871017156200008857600080fd5b50506020820151604090920180519194929391640100000000811115620000ae57600080fd5b82016020810184811115620000c257600080fd5b8151640100000000811182820187101715620000dd57600080fd5b50509291906020018051640100000000811115620000fa57600080fd5b820160208101848111156200010e57600080fd5b81516401000000008111828201871017156200012957600080fd5b5050600080546001600160a01b031916331790558451909350620001579250600191506020850190620001f9565b5083516200016d906002906020870190620001f9565b50805162000183906004906020840190620001f9565b5060ff83166003819055600a0a85026005819055600080546001600160a01b0390811682526006602090815260408084208590558354815195865290519216937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929081900390910190a350505050506200029e565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200023c57805160ff19168380011785556200026c565b828001600101855582156200026c579182015b828111156200026c5782518255916020019190600101906200024f565b506200027a9291506200027e565b5090565b6200029b91905b808211156200027a576000815560010162000285565b90565b61099680620002ae6000396000f3fe6080604052600436106100c25760003560e01c806370a082311161007f578063a9059cbb11610059578063a9059cbb146102ab578063cae9ca51146102e4578063dd62ed3e146103ac578063f2fde38b146103e7576100c2565b806370a08231146102325780638da5cb5b1461026557806395d89b4114610296576100c2565b806306fdde03146100c7578063095ea7b31461015157806318160ddd1461019e57806323b872dd146101c557806325c843b914610208578063313ce5671461021d575b600080fd5b3480156100d357600080fd5b506100dc61041c565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101165781810151838201526020016100fe565b50505050905090810190601f1680156101435780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561015d57600080fd5b5061018a6004803603604081101561017457600080fd5b506001600160a01b0381351690602001356104a7565b604080519115158252519081900360200190f35b3480156101aa57600080fd5b506101b361050e565b60408051918252519081900360200190f35b3480156101d157600080fd5b5061018a600480360360608110156101e857600080fd5b506001600160a01b03813581169160208101359091169060400135610514565b34801561021457600080fd5b506100dc61060d565b34801561022957600080fd5b506101b3610668565b34801561023e57600080fd5b506101b36004803603602081101561025557600080fd5b50356001600160a01b031661066e565b34801561027157600080fd5b5061027a610689565b604080516001600160a01b039092168252519081900360200190f35b3480156102a257600080fd5b506100dc610698565b3480156102b757600080fd5b5061018a600480360360408110156102ce57600080fd5b506001600160a01b0381351690602001356106f2565b3480156102f057600080fd5b5061018a6004803603606081101561030757600080fd5b6001600160a01b038235169160208101359181019060608101604082013564010000000081111561033757600080fd5b82018360208201111561034957600080fd5b8035906020019184600183028401116401000000008311171561036b57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610796945050505050565b3480156103b857600080fd5b506101b3600480360360408110156103cf57600080fd5b506001600160a01b03813581169160200135166108e1565b3480156103f357600080fd5b5061041a6004803603602081101561040a57600080fd5b50356001600160a01b031661090c565b005b6002805460408051602060018416156101000260001901909316849004601f8101849004840282018401909252818152929183018282801561049f5780601f106104745761010080835404028352916020019161049f565b820191906000526020600020905b81548152906001019060200180831161048257829003601f168201915b505050505081565b3360008181526007602090815260408083206001600160a01b038716808552908352818420869055815186815291519394909390927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925928290030190a35060015b92915050565b60055490565b6001600160a01b0383166000908152600660205260408120546105379083610945565b6001600160a01b038516600090815260066020908152604080832093909355600781528282203383529052205461056e9083610945565b6001600160a01b0380861660009081526007602090815260408083203384528252808320949094559186168152600690915220546105ac908361095a565b6001600160a01b0380851660008181526006602090815260409182902094909455805186815290519193928816927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a35060019392505050565b6004805460408051602060026001851615610100026000190190941693909304601f8101849004840282018401909252818152929183018282801561049f5780601f106104745761010080835404028352916020019161049f565b60035481565b6001600160a01b031660009081526006602052604090205490565b6000546001600160a01b031681565b60018054604080516020600284861615610100026000190190941693909304601f8101849004840282018401909252818152929183018282801561049f5780601f106104745761010080835404028352916020019161049f565b3360009081526006602052604081205461070c9083610945565b33600090815260066020526040808220929092556001600160a01b03851681522054610738908361095a565b6001600160a01b0384166000818152600660209081526040918290209390935580518581529051919233927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a350600192915050565b3360008181526007602090815260408083206001600160a01b038816808552908352818420879055815187815291519394909390927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925928290030190a3604051600160e01b638f4ffcb102815233600482018181526024830186905230604484018190526080606485019081528651608486015286516001600160a01b038a1695638f4ffcb195948a94938a939192909160a490910190602085019080838360005b83811015610870578181015183820152602001610858565b50505050905090810190601f16801561089d5780820380516001836020036101000a031916815260200191505b5095505050505050600060405180830381600087803b1580156108bf57600080fd5b505af11580156108d3573d6000803e3d6000fd5b506001979650505050505050565b6001600160a01b03918216600090815260076020908152604080832093909416825291909152205490565b6000546001600160a01b0316331461092357600080fd5b600080546001600160a01b0319166001600160a01b0392909216919091179055565b60008282111561095457600080fd5b50900390565b8181018281101561050857600080fdfea165627a7a72305820c5f38412366107463a530988de32a89924389933801afb5b62999697f15a61f30029';
var BStdToken_bytecode = '60806040523480156200001157600080fd5b50604051620014cb380380620014cb83398101806040528101908080519060200190929190805182019291906020018051906020019092919080518201929190505050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508060019080519060200190620000ac929190620001e1565b508260029080519060200190620000c5929190620001e1565b508160ff1660038190555083600481905550600354600a0a60045402600481905550600454600560008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef6004546040518082815260200191505060405180910390a35050505062000290565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200022457805160ff191683800117855562000255565b8280016001018555821562000255579182015b828111156200025457825182559160200191906001019062000237565b5b50905062000264919062000268565b5090565b6200028d91905b80821115620002895760008160009055506001016200026f565b5090565b90565b61122b80620002a06000396000f3006080604052600436106100c5576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde03146100ca578063095ea7b31461015a57806318160ddd146101bf57806323b872dd146101ea578063313ce5671461026f57806370a082311461029a5780638da5cb5b146102f157806395d89b41146103485780639dc29fac146103d8578063a9059cbb14610425578063cae9ca511461048a578063dd62ed3e14610535578063f2fde38b146105ac575b600080fd5b3480156100d657600080fd5b506100df6105ef565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561011f578082015181840152602081019050610104565b50505050905090810190601f16801561014c5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561016657600080fd5b506101a5600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061068d565b604051808215151515815260200191505060405180910390f35b3480156101cb57600080fd5b506101d461077f565b6040518082815260200191505060405180910390f35b3480156101f657600080fd5b50610255600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610789565b604051808215151515815260200191505060405180910390f35b34801561027b57600080fd5b50610284610a19565b6040518082815260200191505060405180910390f35b3480156102a657600080fd5b506102db600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610a1f565b6040518082815260200191505060405180910390f35b3480156102fd57600080fd5b50610306610a68565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561035457600080fd5b5061035d610a8d565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561039d578082015181840152602081019050610382565b50505050905090810190601f1680156103ca5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156103e457600080fd5b50610423600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610b2b565b005b34801561043157600080fd5b50610470600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610cca565b604051808215151515815260200191505060405180910390f35b34801561049657600080fd5b5061051b600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050610e53565b604051808215151515815260200191505060405180910390f35b34801561054157600080fd5b50610596600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506110a2565b6040518082815260200191505060405180910390f35b3480156105b857600080fd5b506105ed600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611129565b005b60028054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106855780601f1061065a57610100808354040283529160200191610685565b820191906000526020600020905b81548152906001019060200180831161066857829003601f168201915b505050505081565b600081600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b6000600454905090565b60006107d4600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054836111c7565b600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061089d600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054836111c7565b600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610966600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054836111e3565b600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190509392505050565b60035481565b6000600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610b235780601f10610af857610100808354040283529160200191610b23565b820191906000526020600020905b815481529060010190602001808311610b0657829003601f168201915b505050505081565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610b8657600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515610bc257600080fd5b610bce600454826111c7565b600481905550610c1d600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054826111c7565b600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b6000610d15600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054836111c7565b600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610da1600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054836111e3565b600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b600082600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925856040518082815260200191505060405180910390a38373ffffffffffffffffffffffffffffffffffffffff16638f4ffcb1338530866040518563ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360005b83811015611030578082015181840152602081019050611015565b50505050905090810190601f16801561105d5780820380516001836020036101000a031916815260200191505b5095505050505050600060405180830381600087803b15801561107f57600080fd5b505af1158015611093573d6000803e3d6000fd5b50505050600190509392505050565b6000600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561118457600080fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008282111515156111d857600080fd5b818303905092915050565b600081830190508281101515156111f957600080fd5b929150505600a165627a7a72305820fd1238e7f889653f35f1b93142925329c688ac9e1e0f7182571f82ff0a597c340029';
var MStdToken_bytecode = '60806040523480156200001157600080fd5b50604051620014cb380380620014cb83398101806040528101908080519060200190929190805182019291906020018051906020019092919080518201929190505050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508060019080519060200190620000ac929190620001e1565b508260029080519060200190620000c5929190620001e1565b508160ff1660038190555083600481905550600354600a0a60045402600481905550600454600560008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef6004546040518082815260200191505060405180910390a35050505062000290565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200022457805160ff191683800117855562000255565b8280016001018555821562000255579182015b828111156200025457825182559160200191906001019062000237565b5b50905062000264919062000268565b5090565b6200028d91905b80821115620002895760008160009055506001016200026f565b5090565b90565b61122b80620002a06000396000f3006080604052600436106100c5576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde03146100ca578063095ea7b31461015a57806318160ddd146101bf57806323b872dd146101ea578063313ce5671461026f57806340c10f191461029a57806370a08231146102e75780638da5cb5b1461033e57806395d89b4114610395578063a9059cbb14610425578063cae9ca511461048a578063dd62ed3e14610535578063f2fde38b146105ac575b600080fd5b3480156100d657600080fd5b506100df6105ef565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561011f578082015181840152602081019050610104565b50505050905090810190601f16801561014c5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561016657600080fd5b506101a5600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061068d565b604051808215151515815260200191505060405180910390f35b3480156101cb57600080fd5b506101d461077f565b6040518082815260200191505060405180910390f35b3480156101f657600080fd5b50610255600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610789565b604051808215151515815260200191505060405180910390f35b34801561027b57600080fd5b50610284610a19565b6040518082815260200191505060405180910390f35b3480156102a657600080fd5b506102e5600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610a1f565b005b3480156102f357600080fd5b50610328600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610bbe565b6040518082815260200191505060405180910390f35b34801561034a57600080fd5b50610353610c07565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156103a157600080fd5b506103aa610c2c565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156103ea5780820151818401526020810190506103cf565b50505050905090810190601f1680156104175780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561043157600080fd5b50610470600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610cca565b604051808215151515815260200191505060405180910390f35b34801561049657600080fd5b5061051b600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050610e53565b604051808215151515815260200191505060405180910390f35b34801561054157600080fd5b50610596600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506110a2565b6040518082815260200191505060405180910390f35b3480156105b857600080fd5b506105ed600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611129565b005b60028054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106855780601f1061065a57610100808354040283529160200191610685565b820191906000526020600020905b81548152906001019060200180831161066857829003601f168201915b505050505081565b600081600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b6000600454905090565b60006107d4600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054836111c7565b600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061089d600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054836111c7565b600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610966600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054836111e3565b600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190509392505050565b60035481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610a7a57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515610ab657600080fd5b610ac2600454826111e3565b600481905550610b11600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054826111e3565b600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b6000600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610cc25780601f10610c9757610100808354040283529160200191610cc2565b820191906000526020600020905b815481529060010190602001808311610ca557829003601f168201915b505050505081565b6000610d15600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054836111c7565b600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610da1600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054836111e3565b600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b600082600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925856040518082815260200191505060405180910390a38373ffffffffffffffffffffffffffffffffffffffff16638f4ffcb1338530866040518563ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360005b83811015611030578082015181840152602081019050611015565b50505050905090810190601f16801561105d5780820380516001836020036101000a031916815260200191505b5095505050505050600060405180830381600087803b15801561107f57600080fd5b505af1158015611093573d6000803e3d6000fd5b50505050600190509392505050565b6000600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561118457600080fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008282111515156111d857600080fd5b818303905092915050565b600081830190508281101515156111f957600080fd5b929150505600a165627a7a723058203405f35fc2520f6dab1ba4d7dc162b3cb9833038eee59e09a5a08e9a7033e7e40029';
var BMStdToken_bytecode = '60806040523480156200001157600080fd5b50604051620016c2380380620016c283398101806040528101908080519060200190929190805182019291906020018051906020019092919080518201929190505050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508060019080519060200190620000ac929190620001e1565b508260029080519060200190620000c5929190620001e1565b508160ff1660038190555083600481905550600354600a0a60045402600481905550600454600560008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef6004546040518082815260200191505060405180910390a35050505062000290565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200022457805160ff191683800117855562000255565b8280016001018555821562000255579182015b828111156200025457825182559160200191906001019062000237565b5b50905062000264919062000268565b5090565b6200028d91905b80821115620002895760008160009055506001016200026f565b5090565b90565b61142280620002a06000396000f3006080604052600436106100d0576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde03146100d5578063095ea7b31461016557806318160ddd146101ca57806323b872dd146101f5578063313ce5671461027a57806340c10f19146102a557806370a08231146102f25780638da5cb5b1461034957806395d89b41146103a05780639dc29fac14610430578063a9059cbb1461047d578063cae9ca51146104e2578063dd62ed3e1461058d578063f2fde38b14610604575b600080fd5b3480156100e157600080fd5b506100ea610647565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561012a57808201518184015260208101905061010f565b50505050905090810190601f1680156101575780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561017157600080fd5b506101b0600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506106e5565b604051808215151515815260200191505060405180910390f35b3480156101d657600080fd5b506101df6107d7565b6040518082815260200191505060405180910390f35b34801561020157600080fd5b50610260600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506107e1565b604051808215151515815260200191505060405180910390f35b34801561028657600080fd5b5061028f610a71565b6040518082815260200191505060405180910390f35b3480156102b157600080fd5b506102f0600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610a77565b005b3480156102fe57600080fd5b50610333600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610c16565b6040518082815260200191505060405180910390f35b34801561035557600080fd5b5061035e610c5f565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156103ac57600080fd5b506103b5610c84565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156103f55780820151818401526020810190506103da565b50505050905090810190601f1680156104225780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561043c57600080fd5b5061047b600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610d22565b005b34801561048957600080fd5b506104c8600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610ec1565b604051808215151515815260200191505060405180910390f35b3480156104ee57600080fd5b50610573600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919291929050505061104a565b604051808215151515815260200191505060405180910390f35b34801561059957600080fd5b506105ee600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611299565b6040518082815260200191505060405180910390f35b34801561061057600080fd5b50610645600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611320565b005b60028054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106dd5780601f106106b2576101008083540402835291602001916106dd565b820191906000526020600020905b8154815290600101906020018083116106c057829003601f168201915b505050505081565b600081600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b6000600454905090565b600061082c600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054836113be565b600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506108f5600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054836113be565b600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506109be600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054836113da565b600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190509392505050565b60035481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610ad257600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515610b0e57600080fd5b610b1a600454826113da565b600481905550610b69600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054826113da565b600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b6000600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610d1a5780601f10610cef57610100808354040283529160200191610d1a565b820191906000526020600020905b815481529060010190602001808311610cfd57829003601f168201915b505050505081565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610d7d57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515610db957600080fd5b610dc5600454826113be565b600481905550610e14600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054826113be565b600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b6000610f0c600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054836113be565b600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610f98600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054836113da565b600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b600082600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925856040518082815260200191505060405180910390a38373ffffffffffffffffffffffffffffffffffffffff16638f4ffcb1338530866040518563ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561122757808201518184015260208101905061120c565b50505050905090810190601f1680156112545780820380516001836020036101000a031916815260200191505b5095505050505050600060405180830381600087803b15801561127657600080fd5b505af115801561128a573d6000803e3d6000fd5b50505050600190509392505050565b6000600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561137b57600080fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008282111515156113cf57600080fd5b818303905092915050565b600081830190508281101515156113f057600080fd5b929150505600a165627a7a7230582026cb48b579874ad185bc27a2959925f0aad309d990c403fa085894d3cc04aa710029';

var isMainNetwork, isRopsten, isRinkeby, isMetaMaskLocked, address;

var provider;
var abi;
var bytecode;
var fileName;

var noMetamask = $('#no-metamask');
var accountAddress = $('#current-address');
var currentNetwork = $('#current-network');
var metamaskLocked = $('#metamask-locked');
var metamaskUnlocked = $('#metamask-unlocked');

var assetForm = $('#asset-form');
var assetFormInput = $('#asset-form :input');
var previewButotn = $('#preview-btn');
var copyButton = $('#copycode-btn');

//hide all change able elements
noMetamask.hide();
accountAddress.hide();
currentNetwork.hide();
metamaskLocked.hide();
metamaskUnlocked.hide();

function web3Exists() {
    return Object.keys(web3).length > 0;
}

if (!web3Exists()) {
    noMetamask.show();
    //disable all form input fields
    assetFormInput.prop("disabled", true);
    console.log("web3 not exits");
} else console.log("web3Exists");

if (web3Exists())
    provider = web3.currentProvider;

function sendSync(params) {
    var defer = $.Deferred();
    if (web3Exists())
        provider.sendAsync(params, function (err, result) {
                if (err)
                    return defer.reject(err.json());
                if (result['error'])
                    return defer.reject(result['error']);
                defer.resolve(result)
            }
        );
    return defer.promise();
}

function getEthNetworkId() {
    return sendSync({method: 'net_version', params: []})
        .then(function (result) {
            return result['result'];
        })
        .fail(function (err) {
            return err
        })
}

function getAccount() {
    return sendSync({method: 'eth_accounts', params: []})
        .then(function (result) {
            return result['result'];
        })
        .fail(function (err) {
            return err;
        })
}

function getBalance(address) {
    return sendSync({method: 'eth_getBalance', params: [address]})
        .then(function (result) {
            return web3.fromWei(result['result']);
        })
        .fail(function (err) {
            return err;
        })
}

function isLocked() {
    return getAccount()
        .then(function (accounts) {
            return accounts.length <= 0;
        })
        .fail(function (err) {
            return err
        });
}

getEthNetworkId()
    .then(function (networkId) {
        if (networkId === '1') {
            isMainNetwork = true;
            currentNetwork.text('You are currently at Mainnet').show();
        } else if (networkId === '3') {
            isRopsten = true;
            currentNetwork.text('Your are currently at Ropsten testnet.').show();
        } else if (networkId === '4') {
            isRinkeby = true;
            currentNetwork.text('Your are currently at Rinkeby testnet.').show();
        } else
            currentNetwork.text('Your current network id is ' + networkId).show();
    })
    .fail(function (err) {
        console.log(err)
    });

setInterval(function () {
    isLocked()
        .then(function (isLocked) {
            if (isLocked) {
                isMetaMaskLocked = true;
                metamaskUnlocked.hide();
                accountAddress.hide();
                metamaskLocked.show();
                assetFormInput.prop("disabled", true);
                throw Error("Metamask Locked");
            }
            metamaskUnlocked.show();
            metamaskLocked.hide();

            return getAccount()
        })
        .then(function (account) {
            if (account.length > 0) {
                if (isMetaMaskLocked) {
                    isMetaMaskLocked = false;
                    assetFormInput.prop("disabled", false);
                }
                address = account[0];
                return getBalance(account[0]);
            }
        })
        .then(function (balance) {
            accountAddress.html('<strong>Selected Account: ' + address + ' (' + balance + ' eth)</strong>').show();
        })
        .fail(function (err) {
            if (err.message !== "Metamask Locked")
                console.log(err)
        });
}, 1000);


function setContract(){

    console.log("yes it is doing");

    if((document.getElementById("burn").checked == false) && (document.getElementById("mint").checked == false)){
        console.log("This is Standard-Token");
        abi = StdToken_abi;
        fileName = 'StandardToken.sol';
        bytecode = StdToken_bytecode;
    }
    else if((document.getElementById("burn").checked == true) && (document.getElementById("mint").checked == false)){
        console.log("This is Burnable-Standard-Token");
        abi = BStdToken_abi;
        fileName = 'BurnableStandardToken.sol';
        bytecode = BStdToken_bytecode;
    }
    else if((document.getElementById("burn").checked == false) && (document.getElementById("mint").checked == true)){
        console.log("This is Mintable-Standard-Token");
        abi = MStdToken_abi;
        fileName = 'MintableStandardToken.sol';
        bytecode = MStdToken_bytecode;
    }
    else if((document.getElementById("burn").checked == true) && (document.getElementById("mint").checked == true)){
        console.log("This is Burnable-Mintable-Standard-Token");
        abi = BMStdToken_abi;
        fileName = 'BurnableMintableStandardToken.sol';
        bytecode = BMStdToken_bytecode;
    }
    //console.log(fileName);
}

copyButton.click(function (e) {
  e.preventDefault();
  setContract();
  $.ajax({
    url: 'contracts/' + fileName,
    success: function (data){
      var popbox = new Popbox({
        blur:true,
      });
      //console.log(data);
      copyStringToClipboard(data);
    }
  });
});

previewButotn.click(function (e) {
  //prevent the form from actually submitting.
  e.preventDefault();
  setContract();

  var initialSupply = $('#total-supply').val();
  var tokenName = $('#name').val();
  var decimalUnits = $('#decimals').val();
  var tokenSymbol = $('#symbol').val();
  var tokenComments = $('#comments').val();

  if (tokenName === '') {
      alert('name can\'t be blank')
  } else if (tokenSymbol === '') {
      alert('symbol can\'t be blank')
  } else if (decimalUnits === '') {
      alert('decimals can\'t be blank')
  } else if (initialSupply === '') {
      alert('totalSupply can\'t be blank')
  } else if (tokenComments.length > 140) {
      alert('Comment must be below 140 characters')
  } else {

    //console.log(initialSupply);
    //console.log(tokenName);
    //console.log(decimalUnits);
    //console.log(tokenSymbol);
    //console.log(tokenComments);

    var contract = web3.eth.contract(abi);
    var contractData = contract.new.getData(initialSupply, tokenName, decimalUnits, tokenSymbol, tokenComments, { data: '' });
    $('.encodeabi').html(contractData)

    //console.log(contractData);
    //console.log(contractData);

    displayContract(fileName);

  };

});

displayContract = function(file){
  $.ajax({
    url: 'contracts/' + file,
    success: function (data){
      var popbox = new Popbox({
        blur:true,
      });
      //console.log(data);
      $('.popbox_container pre code').html(data);
      $('.popbox_container .contract_name span').html(file);
      popbox.open('mypopbox1');
      hljs.initLineNumbersOnLoad();
    }
  });
}

//call function on form submit
assetForm.submit(function (e) {

    //prevent the form from actually submitting.
    e.preventDefault();
    setContract();

    var initialSupply = $('#total-supply').val();
    var tokenName = $('#name').val();
    var decimalUnits = $('#decimals').val();
    var tokenSymbol = $('#symbol').val();
    var tokenComments = $('#comments').val();

    if (tokenName === '') {
        alert('name can\'t be blank')
    } else if (tokenSymbol === '') {
        alert('symbol can\'t be blank')
    } else if (decimalUnits === '') {
        alert('decimals can\'t be blank')
    } else if (initialSupply === '') {
        alert('totalSupply can\'t be blank')
    } else if (tokenComments.length > 140) {
        alert('Comment must be below 140 characters')
    } else {
        //disable all form input fields
        assetFormInput.prop("disabled", true);
        $('#preview-btn').prop("disabled", false);
        statusText.innerHTML = 'Waiting for contract to be deployed...';
        console.log(abi);
        var standardtokenContract = web3.eth.contract(abi);
        console.log(standardtokenContract);
        var standardtoken = standardtokenContract.new(
            initialSupply,
            tokenName,
            decimalUnits,
            tokenSymbol,
            tokenComments,
            {
                from: web3.eth.accounts[0],
                data: '0x' + bytecode
            }, function (error, result) {
                if (!error) {
                    if (!standardtoken.address) {
                        console.log(result);
                        if (isMainNetwork) {
                            statusText.innerHTML = '<p align="center">Contract deployment is in progress - please be patient. If nothing happens for a while check if there\'s any errors in the console (hit F12).<br> <strong>Transaction hash: </strong><br> <a href="https://etherscan.io/tx/' + result.transactionHash + '" target="_blank">' + result.transactionHash + '</a></p>'
                        } else if (isRopsten) {
                            statusText.innerHTML = '<p align="center">Contract deployment is in progress - please be patient. If nothing happens for a while check if there\'s any errors in the console (hit F12). <br> <strong>Transaction hash: </strong><br> <a href="https://ropsten.etherscan.io/tx/' + result.transactionHash + '" target="_blank">' + result.transactionHash + '</a></p>'
                        } else if (isRinkeby) {
                            statusText.innerHTML = '<p align="center">Contract deployment is in progress - please be patient. If nothing happens for a while check if there\'s any errors in the console (hit F12). <br> <strong> Transaction hash: </strong><br> <a href="https://rinkeby.etherscan.io/tx/' + result.transactionHash + '" target="_blank">' + result.transactionHash + '</a></p>'
                        } else
                            statusText.innerHTML = 'Contract deployment is in progress - please be patient. If nothing happens for a while check if there\'s any errors in the console (hit F12). Transaction hash: ' + result.transactionHash

                    } else {
                        console.log(result)
                        if (isMainNetwork) {
                            statusText.innerHTML = 'Transaction  mined! Contract address: <a href="https://etherscan.io/token/' + standardtoken.address + '" target="_blank">' + standardtoken.address + '</a>'
                        } else if (isRopsten) {
                            statusText.innerHTML = 'Transaction  mined! Contract address: <a href="https://ropsten.etherscan.io/token/' + standardtoken.address + '" target="_blank">' + standardtoken.address + '</a>'
                        } else if (isRinkeby) {
                            statusText.innerHTML = 'Transaction  mined! Contract address: <a href="https://rinkeby.etherscan.io/token/' + standardtoken.address + '" target="_blank">' + standardtoken.address + '</a>'
                        } else
                            statusText.innerHTML = 'Contract deployed at address <b>' + standardtoken.address + '</b> - keep a record of this.'
                    }
                }
                else {
                    console.error(error);
                    assetFormInput.prop("disabled", false);
                }
            })
    }
});

function copyStringToClipboard (str) {
   // Create new element
   var el = document.createElement('textarea');
   // Set value (string to be copied)
   el.value = str;
   // Set non-editable to avoid focus and move outside of view
   el.setAttribute('readonly', '');
   el.style = {position: 'absolute', left: '-9999px'};
   document.body.appendChild(el);
   // Select text inside element
   el.select();
   // Copy text to clipboard
   document.execCommand('copy');
   // Remove temporary element
   document.body.removeChild(el);
   // Notify user of success
   alert('Code Copied');
}

function nthRoot(x, n) {
    if (x < 0 && n % 2 != 1) return NaN; // Not well defined
    return (x < 0 ? -1 : 1) * Math.pow(Math.abs(x), 1 / n);
}

$("#decimals").keypress(function (e) {
    //if the letter is not digit then display error and don't type anything
    if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
        //display error message
        $("#decimals-error-msg").html("Digits Only").show().fadeOut("slow");
        return false;
    }
});
$("#total-supply").keypress(function (e) {
    //if the letter is not digit then display error and don't type anything
    if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
        //display error message
        $("#total-supply-error-msg").html("Digits Only").show().fadeOut("slow");
        return false;
    } else {
        //TODO:show token total supply will be on bottom of total supply input
        // $("#total-supply").keyup(function (e) {
        //     if ($("#decimals").val() && $('#total-supply').val()) {
        //         console.log(Math.trunc($('#total-supply').val() / Math.pow(10, $("#decimals").val()))
        //     }
        // })
    }
});

