<template>
  <main class="mt-5 usdc">
    <div class="container mt-50 pb-5">
      <div class="f-52 ff-2b mb-2">
        How to get USDC into Obyte wallet to pay the contract
      </div>
      <div class="row mt-5">
        <div class="col-lg-10 f-18 color-2">
          <p>
            Smart contracts with arbitration are usually created in stablecoins,
            and USDC is one of the most popular stablecoins. To get
            USDC-on-Obyte you first need to acquire USDC-on-Ethereum, and to use
            USDC-on-Ethereum, you need an Ethereum wallet. MetaMask is a popular
            Ethereum wallet (more than 10 million downloads).
          </p>
          <ol>
            <li>
              <h3>How to Install and Use MetaMask on Google Chrome?</h3>
              <p>
                Please install the <b>MetaMask</b> wallet from its official site
                <a href="https://metamask.io" target="_blank" rel="noopener">metamask.io</a>.
              </p>
              <p>
                <img
                  src="../assets/image/usdc-guide/metamask-welcome.png"
                  alt="Welcome to MetaMask"
                />
              </p>

              <p>
                Once installation is complete this page will be displayed. Click
                on the <b>Get Started</b> button.
              </p>

              <p>
                This is the first time creating a wallet, so click the Create a
                Wallet button.
              </p>

              <p>
                <img
                  src="../assets/image/usdc-guide/metamask-setup.png"
                  alt="MetaMask setup?"
                />
              </p>
              <p>
                Create a password for your wallet. This password is to be
                entered every time the browser is started and wants to use
                <b>MetaMask</b>.
              </p>

              <p>
                <img
                  src="../assets/image/usdc-guide/metamask-create-password.png"
                  alt="MetaMask create password"
                />
              </p>

              <p>
                <b>
                  ! This is the most important step. Back up your secret phrase
                  properly. Do not store your secret phrase on your computer.
                  Please read everything on this screen until you understand it
                  completely before proceeding. The secret phrase is the only
                  way to access your wallet if you forget your password.
                </b>
              </p>
              <p>
                <img
                  src="../assets/image/usdc-guide/metamask-seed.png"
                  alt="MetaMask secret backup phrase"
                />
              </p>

              <p>
                <img
                  src="../assets/image/usdc-guide/metamask-confirm-seed.png"
                  alt="MetaMask confirm backup phrase"
                />
              </p>

              <p>Please follow the tips mentioned.</p>

              <p>
                <img
                  src="../assets/image/usdc-guide/metamask-security-tips.png"
                  alt="MetaMask security tips"
                />
              </p>
            </li>

            <li>
              <h3>How to add USDC to MetaMask?</h3>
              <p>
                Click on <b>import tokens</b>, search <b>usdc</b> and add
                <b>USDC Coin</b> in your wallet.
              </p>

              <p>
                <img
                  src="../assets/image/usdc-guide/metamask-import-usdc.png"
                  alt="Add USDC in MetaMask"
                />
              </p>
            </li>

            <li>
              <h3>How to get USDC into MetaMask?</h3>
              <p>Note the address of your MetaMask wallet, it is displayed at the top of the MetaMask popup.</p>
              <p>Buy USDC on any cryptocurrency exchange or from an OTC desk (as described on the <router-link to="/fiat-in-out">Fiat in/out page</router-link>) and withdraw the USDC to your MetaMask wallet address.</p>
              <p>Please also buy and withdraw to your MetaMask at least $50 worth of ETH, you'll need them for paying for transaction fees on Ethereum.</p>
            </li>

            <li>
              <h3>How to convert USDC-Ethereum to USDC-Obyte?</h3>
              <p>Open <a href="https://counterstake.org" target="_blank" rel="noopener">counterstake.org</a>.</p>
              <p>
                <b>Please use the browser where you have installed MetaMask.</b>
              </p>
              <p>
                <img
                  src="../assets/image/usdc-guide/metamask-icon-in-browser.png"
                  alt="MetaMask icon in browser"
                />
              </p>
              <p>
                Select the direction of transfer from “USDC on Ethereum” to
                “USDC on Obyte” and specify your <b>Obyte wallet address</b>.
              </p>

              <p>
                <img
                  src="../assets/image/usdc-guide/counterstake-usdc.png"
                  alt="Counterstake"
                />
              </p>

              <p>After filling in the fields, click <b>Transfer</b>.</p>

              <p>
                The <b>MetaMask</b> extension in your browser will automatically
                display popups where you need to approve spending your USDC
                (that’s an Ethereum thing) and confirm the proposed commission.
              </p>

							<p>
                <img
                  src="../assets/image/usdc-guide/metamask-approval.png"
                  alt="Custom spending cap approval"
                />
              </p>

							<p>
								After the transfer, the corresponding <b>USDC</b> amount will be reflected in your <b>Obyte wallet</b>.
							</p>

							<p>
                <img
                  src="../assets/image/usdc-guide/obyte-wallet-received.png"
                  alt="Obyte wallet"
                />
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </main>
</template>