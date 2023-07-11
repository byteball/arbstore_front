<template>
  <main class="mt-5">
    <div class="container pb-5 nobgMob bg-8">
      <h1 class="f-98 ff-2 mb-4">User guide for contracts with arbitration</h1>
      <div
        class="d-flex align-items-center justify-content-center d-lg-none mb-5"
      >
        <img class="w-50" src="../assets/image/bg-8.png" alt="bg-8" />
      </div>

      <div class="row">
        <div class="col-lg-7">
          <div class="color-2">
            Contracts with arbitration are conventional written contracts
            coupled with smart contracts that lock the full amount of the
            contract for its entire duration and guarantee that the funds can be
            unlocked only with mutual agreement of both parties, or according to
            the decision of a mutually agreed arbiter in case a dispute arises.
          </div>
        </div>
      </div>
    </div>

    <div class="container mt-100 pb-5 position-relative">
      <div class="noScrollArrow">
        <div class="row mb-4 mr-0 ml-0 radius-2">
          <div class="bgc-1 col-lg-8">
            <div
              class="pr-3 pl-3 pb-5 pr-lg-5 pl-lg-5 pb-lg-5 pt-50 position-relative h-100"
            >
              <div class="numberAbs big ff-2b">1</div>
              <div>
                <h3>Install the wallet</h3>
                <div>
                  Download the Obyte app for any device, from
                  <a target="_blank" rel="noopener" href="https://obyte.org/#download">obyte.org</a>. The
                  application offers a seamless experience across all supported
                  devices, catering to both Buyers and Sellers. After
                  installation, users can easily navigate through simple prompts
                  within the app. During setup, create a wallet name, such as
                  your company name, to facilitate identification by
                  counterparties during subsequent wallet pairing and
                  transaction closure. If needed, the wallet name can be
                  modified later on using the menu. When you start using the
                  wallet for the first time after its installation and launch, a
                  default account named “Small Expenses Account” is
                  automatically created. You can rename it later, or create new
                  ones.
                </div>
              </div>

              <div style="clear: both"></div>
            </div>
          </div>
          <div class="bgc-1 col-lg-4 text-center text-lg-right">
            <img
              class="w-lg-100"
              src="../assets/image/user-guide/1.png"
              alt="Install the wallet"
            />
          </div>
        </div>

        <div class="row mb-4 mr-0 ml-0 radius-2">
          <div class="bgc-1 col-lg-8">
            <div
              class="pr-3 pl-3 pb-5 pr-lg-5 pl-lg-5 pb-lg-5 pt-50 position-relative h-100"
            >
              <div class="numberAbs big ff-2b">2</div>
              <div>
                <h3>Fund your wallet</h3>
                <div>
                  To access your unique wallet address, click on the "Receive"
                  tab in the app. You can easily view and copy the address by
                  clicking on it. To ensure the smooth functioning of the
                  application, we advise you to deposit at least 100,000 bytes
                  (equivalent to about $0.001) into the wallet, along with USDC
                  worth $5 for the Seller and the anticipated transaction sum
                  for the Buyer. You can find more information on depositing and
                  withdrawing fiat currencies at
                  <router-link to="/fiat-in-out">fiat in out</router-link>.
                </div>
              </div>
              <div style="clear: both"></div>
            </div>
          </div>
          <div class="bgc-1 col-lg-4 text-center text-lg-right">
            <img
              class="w-lg-100"
              src="../assets/image/user-guide/2.png"
              alt="Fund your wallet"
            />
          </div>
        </div>

        <div class="row mb-4 mr-0 ml-0 radius-2">
          <div class="bgc-1 col-lg-8">
            <div
              class="pr-3 pl-3 pb-5 pr-lg-5 pl-lg-5 pb-lg-5 pt-50 position-relative h-100"
            >
              <div class="numberAbs big ff-2b">3</div>
              <div>
                <h3>Wallet backup</h3>
                <div>
                  As soon as the wallet has a nominal sum of a few dollars or
                  more in it, we strongly recommend that you immediately create
                  a backup copy in the main menu section of the application
                  "Settings" / Backup all wallet data
                </div>
              </div>
              <div style="clear: both"></div>
            </div>
          </div>
          <div class="bgc-1 col-lg-4 text-center text-lg-right">
            <img
              class="w-lg-100"
              src="../assets/image/user-guide/3.png"
              alt="Wallet backup"
            />
          </div>
        </div>

        <div class="row mb-4 mr-0 ml-0 radius-2">
          <div class="bgc-1 col-lg-8">
            <div
              class="pr-3 pl-3 pb-5 pr-lg-5 pl-lg-5 pb-lg-5 pt-50 position-relative h-100"
            >
              <div class="numberAbs big ff-2b">4</div>
              <h3>Pairing of Buyer and Seller wallets</h3>
              <div>
                Wallet pairing can be initiated by either the Buyer or the
                Seller. In this manual, we will outline the process from the
                Buyer's perspective. As the Buyer, you can start the pairing
                process by selecting the "Chat" tab, then "Add new device" and
                "Invite another device". To pair your wallet with the Seller’s
                wallet, simply copy the alphanumeric pairing code located under
                the QR code and send it to the Seller (Merchant). Once the
                Seller receives the code, they can paste it into the designated
                field by navigating to "Chat", "Add a new device", and "Accept
                an invitation from another device". The name of the paired
                device will then appear in the chat list within the Chat menu.
              </div>
              <div style="clear: both"></div>
            </div>
          </div>
          <div class="bgc-1 col-lg-4 text-center text-lg-right">
            <img
              class="w-lg-100"
              src="../assets/image/user-guide/4.png"
              alt="Pairing of Buyer and Seller wallets"
            />
          </div>
        </div>

        <div class="row mb-4 mr-0 ml-0 radius-2">
          <div class="bgc-1 col-lg-8">
            <div
              class="pr-3 pl-3 pb-5 pr-lg-5 pl-lg-5 pb-lg-5 pt-50 position-relative h-100"
            >
              <div class="numberAbs big ff-2b">4.1</div>
              <h3>Real name attestation (verification)</h3>
              <div>
                <p>
                  (OPTIONAL) You can attest your real name before creating a
                  contract, so it will appear in the contract and your
                  counterparty will see it when signing. The same applies to
                  your counterparty.
                </p>
                <p>
                  Real Name attestation can be done via a Real Name Attestation
                  bot found in the Bot Store (the second tab of your chat
                  window). Add this bot and follow its instructions.
                </p>
              </div>
              <div style="clear: both"></div>
            </div>
          </div>
          <div class="bgc-1 col-lg-4 text-center text-lg-right">
            <img
              class="w-lg-100"
              src="../assets/image/user-guide/4.1.png"
              alt="Real name attestation (verification)"
            />
          </div>
        </div>

        <div class="row mb-4 mr-0 ml-0 radius-2">
          <div class="bgc-1 col-lg-8">
            <div
              class="pr-3 pl-3 pb-5 pr-lg-5 pl-lg-5 pb-lg-5 pt-50 position-relative h-100"
            >
              <div class="numberAbs big ff-2b">4.2</div>
              <div>
                <h3>Reveal your verified real name to the counterparty</h3>
                <div>
                  (OPTIONAL) If you got attested, share your private profile
                  with your counterparty so they can see it on the contract.
                </div>
              </div>
              <div style="clear: both"></div>
            </div>
          </div>
          <div class="bgc-1 col-lg-4 text-center text-lg-right">
            <img
              class="w-lg-100"
              src="../assets/image/user-guide/4.2.png"
              alt="4"
            />
          </div>
        </div>

        <div class="row mb-4 mr-0 ml-0 radius-2">
          <div class="bgc-1 col-lg-8">
            <div
              class="pr-3 pl-3 pb-5 pr-lg-5 pl-lg-5 pb-lg-5 pt-50 position-relative h-100"
            >
              <div class="numberAbs big ff-2b">5</div>
              <div>
                <h3>Buyer shares their address with the Seller</h3>
                <div>
                  <p>
                    The following steps assume that it is the Seller who offers
                    the contract, however the Buyer can do so too, just by
                    swapping the roles in this guide.
                  </p>
                  <p>
                    To create a contract with arbitration, the Buyer first sends
                    their wallet address to the Seller in chat. The Buyer can
                    insert their wallet address into the chat by selecting
                    "Insert my address" from the three-dot menu.
                  </p>
                </div>
              </div>
              <div style="clear: both"></div>
            </div>
          </div>
          <div class="bgc-1 col-lg-4 text-center text-lg-right">
            <img
              class="w-lg-100"
              src="../assets/image/user-guide/5.png"
              alt="Buyer shares their address with the Seller"
            />
          </div>
        </div>

        <div class="row mb-4 mr-0 ml-0 radius-2">
          <div class="bgc-1 col-lg-8">
            <div
              class="pr-3 pl-3 pb-5 pr-lg-5 pl-lg-5 pb-lg-5 pt-50 position-relative h-100"
            >
              <div class="numberAbs big ff-2b">6</div>
              <div>
                <h3>Seller offers a contract</h3>
                <div>
                  The other party clicks the received address and chooses "Offer
                  contract with arbitration". This party will be the offerer
                  while the other party will be the acceptor.
                </div>
              </div>
              <div style="clear: both"></div>
            </div>
          </div>
          <div class="bgc-1 col-lg-4 text-center text-lg-right">
            <img
              class="w-lg-100"
              src="../assets/image/user-guide/6.png"
              alt="Seller offers a contract"
            />
          </div>
        </div>

        <div class="row mb-4 mr-0 ml-0 radius-2">
          <div class="bgc-1 col-lg-8">
            <div
              class="pr-3 pl-3 pb-5 pr-lg-5 pl-lg-5 pb-lg-5 pt-50 position-relative h-100"
            >
              <div class="numberAbs big ff-2b">7</div>
              <div>
                <h3>Filling in the contract (by the Seller)</h3>
                <div>
                  The Seller performs the following actions on the contract
                  offer screen:
                  <ul>
                    <li>
                      - Selects their role in the contract as Seller option
                      (active by default)
                    </li>
                    <li>
                      - Confirms the sum and currency of the contract (most
                      likely you’ll want to transact in USDC – a stablecoin)
                    </li>
                    <li>
                      - Selects an arbitrator from the proposed list by
                      inserting their address into the appropriate field from
                      <router-link to="/arbiters">the page with the list of arbitrators</router-link>.
                    </li>
                    <li>- Enters the title of the contract</li>
                    <li>
                      - Copies the text of a previously prepared contract (or
                      another document replacing it, such as an invoice) into
                      the "Text" field. Make sure that you mention the names and
                      the roles of both parties in the contract body, like in
                      real-world contracts. The contract text should be written
                      in 3rd person, avoid "I" and "you" as otherwise the
                      arbiter will have trouble identifying who is who if you
                      have a dispute and the contract lands on the arbiter’s
                      desk. The text should be rather long and spell out all the
                      terms and conditions, rights and obligations in your deal
                      with the other party.
                    </li>
                    <li>
                      - Indicates the duration of the waiting period for
                      acceptance of the proposed contract in hours
                    </li>
                    <li>
                      - Optionally indicates their additional contact details
                      (phone, email, etc) to facilitate communication with the
                      other party and with the arbiter
                    </li>
                    <li>
                      - Clicks the button "Offer contract with arbitration"
                    </li>
                  </ul>
                </div>
              </div>
              <div style="clear: both"></div>
            </div>
          </div>
          <div class="bgc-1 col-lg-4 text-center text-lg-right">
            <img
              class="w-lg-100"
              src="../assets/image/user-guide/7.png"
              alt="Filling in the contract (by the Seller)"
            />
          </div>
        </div>

        <div class="row mb-4 mr-0 ml-0 radius-2">
          <div class="bgc-1 col-lg-8">
            <div
              class="pr-3 pl-3 pb-5 pr-lg-5 pl-lg-5 pb-lg-5 pt-50 position-relative h-100"
            >
              <div class="numberAbs big ff-2b">7.1</div>
              <div>
                <h3>Arbiter’s selection</h3>
                <div>
                  The offerer (Seller) picks an arbiter from
                  <router-link to="/arbiters">ArbStore arbiter listing</router-link>. Arbiters can be filtered according to their
                  specializations, prices for their services, and recent stats.
                  Copy/paste the address of the chosen arbiter in the Arbiter
                  address field of the contract. Discuss the arbiter
                  candidate(s) with the other party (using the built-in chat or
                  any other means of communication) to make sure they are OK
                  with the suggested arbiter.
                </div>
              </div>
              <div style="clear: both"></div>
            </div>
          </div>
          <div class="bgc-1 col-lg-4 text-center text-lg-right">
            <img
              class="w-lg-100"
              src="../assets/image/user-guide/7.1.png"
              alt="Arbiter’s selection"
            />
          </div>
        </div>

        <div class="row mb-4 mr-0 ml-0 radius-2">
          <div class="bgc-1 col-lg-8">
            <div
              class="pr-3 pl-3 pb-5 pr-lg-5 pl-lg-5 pb-lg-5 pt-50 position-relative h-100"
            >
              <div class="numberAbs big ff-2b">8</div>
              <div>
                <h3>Buyer accepts the contract</h3>
                <div>
                  The Buyer receives the offered contract from the Seller in the
                  chat, including the address of the arbiter chosen by the
                  Seller. The Buyer carefully reviews all the contract details
                  including the sums involved, the currency, the suggested
                  arbiter, and any other contact conditions outlined in the
                  text. The Buyer can either accept the offered contract in its
                  entirety (including the choice of arbiter), or reject it if
                  they disagree with at least one detail. In the latter case,
                  the parties can discuss the terms again, then the Seller can
                  make a new offer or the Buyer can make their (counter)offer.
                </div>
              </div>
              <div style="clear: both"></div>
            </div>
          </div>
          <div class="bgc-1 col-lg-4 text-center text-lg-right">
            <img
              class="w-lg-100"
              src="../assets/image/user-guide/8.png"
              alt="Buyer accepts the contract"
            />
          </div>
        </div>

        <div class="row mb-4 mr-0 ml-0 radius-2">
          <div class="bgc-1 col-lg-8">
            <div
              class="pr-3 pl-3 pb-5 pr-lg-5 pl-lg-5 pb-lg-5 pt-50 position-relative h-100"
            >
              <div class="numberAbs big ff-2b">9</div>
              <div>
                <h3>Contract signing and posting into the DAG</h3>
                <div>
                  Once the contract with arbitration is accepted, both wallets
                  sign a hash of the contract text and post it to the DAG. While
                  signing, the wallets might request additional confirmations
                  from the parties if their wallets are password-protected or
                  are multi-signature wallets. This hash signed by both parties
                  serves as a confirmation of their agreement. From this point
                  on, the contract is officially concluded.
                </div>
              </div>
              <div style="clear: both"></div>
            </div>
          </div>
          <div class="bgc-1 col-lg-4 text-center text-lg-right">
            <img
              class="w-lg-100"
              src="../assets/image/user-guide/9.png"
              alt="Contract signing and posting into the DAG"
            />
          </div>
        </div>

        <div class="row mb-4 mr-0 ml-0 radius-2">
          <div class="bgc-1 col-lg-8">
            <div
              class="pr-3 pl-3 pb-5 pr-lg-5 pl-lg-5 pb-lg-5 pt-50 position-relative h-100"
            >
              <div class="numberAbs big ff-2b">10</div>
              <div>
                <h3>Buyer pays to escrow</h3>
                <div>
                  <p>
                    After the contract is posted to the DAG, the Buyer needs to
                    pay to the contract by opening it in their wallet and
                    clicking the Pay button. This locks the money on the smart
                    contract address associated with the contract (escrow).
                  </p>
                  <p>
                    At this point, it is strongly recommended that both parties
                    back up their wallets (burger menu -> Settings -> Backup all
                    wallet data) to make sure that the funds can always be
                    recovered from the smart contract. The smart contract, as
                    well as contract text, is stored only in the parties'
                    wallets and nowhere else. They cannot be recovered from any
                    earlier backups.
                  </p>
                </div>
              </div>
              <div style="clear: both"></div>
            </div>
          </div>
          <div class="bgc-1 col-lg-4 text-center text-lg-right">
            <img
              class="w-lg-100"
              src="../assets/image/user-guide/10.png"
              alt="Buyer pays to escrow"
            />
          </div>
        </div>

        <div class="row mb-4 mr-0 ml-0 radius-2">
          <div class="bgc-1 col-lg-8">
            <div
              class="pr-3 pl-3 pb-5 pr-lg-5 pl-lg-5 pb-lg-5 pt-50 position-relative h-100"
            >
              <div class="numberAbs big ff-2b">11</div>
              <div>
                <h3>Buyer releases the funds from escrow</h3>
                <div>
                  After the contract is paid, the Seller starts fulfilling their
                  obligations. After the work is completed and the Buyer is
                  satisfied with the results, they release the funds from the
                  contract to the Seller by clicking the "release funds" button
                  in the contract view. The contract is now completed.
                </div>
              </div>
              <div style="clear: both"></div>
            </div>
          </div>
          <div class="bgc-1 col-lg-4 text-center text-lg-right">
            <img
              class="w-lg-100"
              src="../assets/image/user-guide/11.png"
              alt="Buyer releases the funds from escrow"
            />
          </div>
        </div>

        <div class="row mb-4 mr-0 ml-0 radius-2">
          <div class="bgc-1 col-lg-8">
            <div
              class="pr-3 pl-3 pb-5 pr-lg-5 pl-lg-5 pb-lg-5 pt-50 position-relative h-100"
            >
              <div class="numberAbs big ff-2b">12</div>
              <div>
                <h3>Contract termination by Seller</h3>
                <div>
                  If the Seller is unable to fulfill their obligations, they can
                  cancel the contract at any time and return the funds back to
                  the Buyer by clicking the "Refund" button in their wallet.
                </div>
              </div>
              <div style="clear: both"></div>
            </div>
          </div>
          <div class="bgc-1 col-lg-4 text-center text-lg-right">
            <img
              class="w-lg-100"
              src="../assets/image/user-guide/12.png"
              alt="Contract termination by Seller"
            />
          </div>
        </div>

        <div class="row mb-4 mr-0 ml-0 radius-2">
          <div class="bgc-1 col-lg-8">
            <div
              class="pr-3 pl-3 pb-5 pr-lg-5 pl-lg-5 pb-lg-5 pt-50 position-relative h-100"
            >
              <div class="numberAbs big ff-2b">13</div>
              <div>
                <h3>Dispute initiation</h3>
                <div>
                  In case there is a disagreement about the contract’s
                  performance that the parties can’t resolve by themselves,
                  either party can start a dispute and invoke the arbiter by
                  clicking the open dispute link.
                </div>
              </div>
              <div style="clear: both"></div>
            </div>
          </div>
          <div class="bgc-1 col-lg-4 text-center text-lg-right">
            <img
              class="w-lg-100"
              src="../assets/image/user-guide/13.png"
              alt="Dispute initiation"
            />
          </div>
        </div>

        <div class="row mb-4 mr-0 ml-0 radius-2">
          <div class="bgc-1 col-lg-8">
            <div
              class="pr-3 pl-3 pb-5 pr-lg-5 pl-lg-5 pb-lg-5 pt-50 position-relative h-100"
            >
              <div class="numberAbs big ff-2b">14</div>
              <h3>Dispute resolution</h3>
              <div>
                <p>
                  After the "open dispute" link is clicked, the arbiter selected
                  in the contract will automatically receive the contract text,
                  briefly review it, and based on the contract’s complexity will
                  estimate the cost of their service and ask the plaintiff to
                  pay for it (the cost must be within the range indicated by the
                  arbiter in their profile for this type of the contract,
                  otherwise the plaintiff can complain to the ArbStore). The
                  payment is processed through the ArbStore this arbiter is
                  enrolled with, so the plaintiff will receive a payment request
                  from the ArbStore in chat. The payment will be held by the
                  ArbStore until the arbiter makes a decision.
                </p>
                <p>
                  After the payment is sent, the arbiter starts resolving the
                  dispute. They will contact both parties through Obyte wallet
                  chat or other means of communication indicated in the
                  contract, collect evidence from both parties, and make a
                  decision regarding the dispute.
                </p>
                <p>
                  The arbiter then posts a specially crafted unit into the DAG
                  which allows the winning party to claim the funds locked on
                  the contract.
                </p>
              </div>
              <div style="clear: both"></div>
            </div>
          </div>
          <div class="bgc-1 col-lg-4 text-center text-lg-right">
            <img
              class="w-lg-100"
              src="../assets/image/user-guide/14.png"
              alt="Dispute resolution"
            />
          </div>
        </div>

        <div class="row mb-4 mr-0 ml-0 radius-2">
          <div class="bgc-1 col-lg-8">
            <div
              class="pr-3 pl-3 pb-5 pr-lg-5 pl-lg-5 pb-lg-5 pt-50 position-relative h-100"
            >
              <div class="numberAbs big ff-2b">15</div>
              <div>
                <h3>Winner claims the funds</h3>
                <div>
                  If the arbiter decides the dispute in your favor, you will be
                  notified about it in the chat and can claim funds from the
                  contract by clicking the "Claim funds" button in the contract
                  view.
                </div>
              </div>
              <div style="clear: both"></div>
            </div>
          </div>
          <div class="bgc-1 col-lg-4 text-center text-lg-right">
            <img
              class="w-lg-100"
              src="../assets/image/user-guide/15.png"
              alt="Winner claims the funds"
            />
          </div>
        </div>

        <div class="row mb-4 mr-0 ml-0 radius-2">
          <div class="bgc-1 col-lg-8">
            <div
              class="pr-3 pl-3 pb-5 pr-lg-5 pl-lg-5 pb-lg-5 pt-50 position-relative h-100"
            >
              <div class="numberAbs big ff-2b">16</div>
              <div>
                <h3>Appellation to the ArbStore moderator</h3>
                <div>
                  If the losing party is not satisfied with the arbiter’s work,
                  they can appeal the arbiter’s decision through contract view.
                  This action will invoke an ArbStore moderator. Although the
                  moderator can’t reverse the arbiter decision, they can
                  (partially) compensate the appellant if they find that the
                  arbiter’s work was unsatisfactory. The moderator will take a
                  payment for their work from the appellant and look into the
                  arbiter’s decision. They can either agree with the arbiter and
                  close the appeal, or agree with the appellant and pay them a
                  fixed compensation out of the arbiter’s deposit with the
                  ArbStore.
                </div>
              </div>
              <div style="clear: both"></div>
            </div>
          </div>
          <div class="bgc-1 col-lg-4 text-center text-lg-right">
            <img
              class="w-lg-100"
              src="../assets/image/user-guide/16.png"
              alt="Appellation to the ArbStore moderator"
            />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
