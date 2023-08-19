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
                <a href="https://metamask.io">metamask.io</a>.
              </p>
              <p>
                <img
                  src="../assets/image/usdc-guide/image11.png"
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
                  src="../assets/image/usdc-guide/image10.png"
                  alt="New to MetaMask?"
                />
              </p>
              <p>
                Create a password for your wallet. This password is to be
                entered every time the browser is started and wants to use
                <b>MetaMask</b>.
              </p>

              <p>
                <img
                  src="../assets/image/usdc-guide/image1.png"
                  alt="Create password"
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
                  src="../assets/image/usdc-guide/image3.png"
                  alt="Secret backup phrase"
                />
              </p>

              <p>
                <img
                  src="../assets/image/usdc-guide/image9.png"
                  alt="Confirm backup phrase"
                />
              </p>

              <p>Please follow the tips mentioned.</p>

              <p>
                <img
                  src="../assets/image/usdc-guide/image5.png"
                  alt="Congratulations"
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
                  src="../assets/image/usdc-guide/image8.png"
                  alt="Add USDC"
                />
              </p>

							<!-- TODO: Please, fix it -->
              <p>You can read about how you can get USDC on the <router-link to="/fiat-in-out">Fiat in / out</router-link> page</p>
            </li>

            <li>
              <h3>How to convert USDC-Ethereum to USDC-Obyte?</h3>
              <p>Open <a href="https://counterstake.org">counterstake.org</a></p>
              <p>
                <b>Please use the browser where you have installed MetaMask</b>
              </p>
              <p>
                <img
                  src="../assets/image/usdc-guide/image7.png"
                  alt="MetaMask in browser"
                />
              </p>
              <p>
                Select the direction of transfer from “USDC on Ethereum” to
                “USDC on Obyte” and specify your <b>Obyte wallet address</b>
              </p>

              <p>
                <img
                  src="../assets/image/usdc-guide/image6.png"
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
                  src="../assets/image/usdc-guide/image4.png"
                  alt="Custom spending cap"
                />
              </p>

							<p>
								After the transfer, the corresponding <b>USDC</b> amount will be reflected in your <b>Obyte wallet</b>.
							</p>

							<p>
                <img
                  src="../assets/image/usdc-guide/image2.png"
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