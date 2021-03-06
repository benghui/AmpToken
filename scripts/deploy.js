const hre = require("hardhat");

const main = async () => {
	const [deployer] = await hre.ethers.getSigners();
	const accountBalance = await deployer.getBalance();

	console.log('Deploying contracts with account: ', deployer.address);
	console.log('Account balance: ', accountBalance.toString());

	const Token = await hre.ethers.getContractFactory('AmpToken');
	const ampToken = await Token.deploy("AmpToken", "AMP");
	await ampToken.deployed();

	console.log('AmpToken address: ', ampToken.address);
};

const runMain = async () => {
	try {
		await main();
		process.exit(0);
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
};

runMain();
