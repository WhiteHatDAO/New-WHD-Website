import info from "../assets/images/dao/info.svg";
import governance from "../assets/images/dao/governance.png";

import Circle from "../components/Circle";

const responsibilities = [
  "Facilitate weekly meetings Facilitate work sessions",
  "Facilitate work sessions",
  "Take and facilitate meeting notes",
  "Ensure that members are up to speed with important project info",
  "Assist in the formulation of key deliverables",
  "Track and remind team of action items",
  "Organize and direct people to the right information",
  "Liaison with others to ensure that objectives are aligned",
  "Facilitate fair compensation to DAO members for their contribution",
  "Project management",
  "Team management",
  "Technical Development",
  "Payroll, Quotation & Bookkeeping  ( manage - A/C payable - A/C receivable )",
  "Client management ",
  "Advertising / Marketing",
  "Treasury management",
  "Community management",
  "Promote WHD and it's values ",
  "Maintain and moderating Community to create safe environment",
];

const dev_responsibilities = [
  "Research, design, develop, and test blockchain technologies",
  "Brainstorm and help evaluate applications for new tools and technologies as they continually evolve",
  "Maintain and extend current client- and server-side applications responsible for integration and business logic",
  "Payroll, Quotation & Bookkeeping  ( manage - A/C payable - A/C receivable )",
  "Be involved in the global blockchain community—work on implementing and integrating the latest improvement proposals",
  "Demonstrate and provide information about project products/services",
  "Document new solutions as well as maintaining that of existing ones",
];

const ambassadors = [
  "Promote WHD and it's values ",
  "Oversee development of social media plan/strategy",
  "Liaison with content promoter and coordinator to direct talents/influencers to projects",
  "Create a positive image for the project and encourage people to join",
  "Mention and direct to the DAO on social media platforms",
  "Mention and direct to the DAO on social media platforms",
  "Formulate strategies for growing users/followers",
  "Maintain and moderating Community to create safe environment ",
  "On-boarding newcomers into the DAO",
];

const Dao = () => {
  return (
    <div className="py-10 flex flex-col">
      <div className="bg-lightgray rounded-xl shadow-xl flex flex-col">
        <div className="bg-gray px-6 py-4 rounded-t-xl">
          <div className="pl-4 text-blue text-sz30 font-bold font-pilat text-center">
            White Hat DAO Governance Framework
          </div>
        </div>
        <div className="p-8 flex flex-col font-Manrope font-light space-y-4">
          <div className="rounded-md shadow-sm w-56 px-8 py-2 font-pilat font-bold text-pink text-sz24">
            Summary
          </div>
          <div className="text-sz22">
            White Hat DAO is a decentralized autonomous organization. Governed
            by a clear set of rules and executes actions automatically. Thus,
            effectively disregarding intermediaries. White Hat DAO controlled by
            Governance token holders. It does not have any employees. Any
            individuals, DAO members or development teams can propose any
            proposals draft via discord or community forum. Once submitted in
            Snapshot, the token holders will vote on whether to approve or
            reject these proposal.
          </div>
          <div className="p-6 rounded-md shadow-inner flex flex-row space-x-4">
            <img src={info} alt="info"></img>
            <div className="text-sz20 text-blue">
              White Hat DAO controlled by Governance token holders. It does not
              have any employees and will utilize the industry standard setup of
              Gnosis Safe, Snapshot, off-chain governance and multi-sig
              administrators in accordance with WHD members and the vision of
              Genesis team members.
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="font-pilat font-bold text-sz24 text-pink text-center">
              key Governance Design Choices
            </div>
            <div className="my-8 shadow-xl rounded-lg relative overflow-x-auto flex flex-col text-sz20 font-Manrope font-bold text-center">
              <div className="py-4 bg-gray text-blue grid grid-cols-2">
                <div>Component or Feature</div>
                <div>Phase 1 Design</div>
              </div>
              <div className="border-b border-gray bg-lightgray font-normal grid grid-cols-2">
                <div className="border-r border-gray py-2">
                  White Hat DAO Treasury
                </div>
                <div className="py-2">Gnosis Safe</div>
              </div>
              <div className="border-b border-gray bg-lightgray font-normal grid grid-cols-2">
                <div className="border-r border-gray py-2">Governance</div>
                <div className="py-2">Gnosis Snapshot</div>
              </div>
              <div className="border-b border-gray bg-lightgray font-normal grid grid-cols-2">
                <div className="border-r border-gray py-2">
                  Governance Token
                </div>
                <div className="py-2">White Hat DAO token</div>
              </div>
              <div className=" bg-lightgray font-normal grid grid-cols-2">
                <div className="border-r border-gray py-2">
                  Gnosis Safe Owner
                </div>
                <div className="py-2">Multi-sig</div>
              </div>
            </div>
            <div className="pt-8 z-10 cursor-pointer">
              <div className="shadow-sm text-2xl w-2/3 py-4 border rounded-xl gradient-box text-sz22 font-bold flex flex-col items-center">
                Join our Snapshot Space
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-10 bg-lightgray rounded-xl shadow-xl flex flex-col">
        <div className="bg-gray px-6 py-4 rounded-t-xl">
          <div className="pl-4 text-blue text-sz30 font-bold font-pilat text-center">
            Governance Policy & Constitution
          </div>
        </div>
        <div className="p-8 flex flex-col font-Manrope font-light space-y-4">
          <div className="text-sz22">
            White Hat DAO is a decentralized autonomous organization. Governed
            by a clear set of rules and executes actions automatically. Thus,
            effectively disregarding intermediaries. White Hat DAO controlled by
            Governance token holders. It does not have any employees. Any
            individuals, DAO members or development teams can propose any
            proposals draft via discord or community forum. Once submitted in
            Snapshot, the token holders will vote on whether to approve or
            reject these proposal.
          </div>
          <img src={governance} alt="governance"></img>
        </div>
      </div>
      <div className="bg-lightgray rounded-xl shadow-xl flex flex-col">
        <div className="bg-gray px-6 py-4 rounded-t-xl">
          <div className="pl-4 text-blue text-sz30 font-bold font-pilat text-center">
            Governance Strategies
          </div>
        </div>
        <div className="p-8 flex flex-col items-start font-Manrope font-light space-y-4">
          <div className="z-10 cursor-pointer">
            <div className="shadow-sm w-80 py-2 border rounded-xl gradient-box text-sz24 font-bold flex flex-col items-start">
              <div className="text-blue">Snapshot Strategy</div>
            </div>
          </div>
          <div className="text-sz22">
            Our initial settings for voting weight of each token would be ( 1
            WHD gov token = 1 vote ) weight of voting power. Future strategies
            may include: allocating vote weight to LP tokens to enable gov token
            holders who have staked, wrapped, or provided liquidity to retain
            voting power.
          </div>

          <div className="z-10 cursor-pointer">
            <div className="shadow-sm w-80 py-2 border rounded-xl gradient-box text-sz24 font-bold flex flex-col items-start">
              <div className="text-blue">Proposal Threshold</div>
            </div>
          </div>
          <div className="text-sz22">
            "Proposal Threshold" is typically defined as the number of votes
            required to create a proposal. In White Hat DAO Snapshot Space this
            is done through a visual filter, to only display proposals from
            users who have at least the threshold number of gov tokens in their
            address.
          </div>
          <div className="text-sz22">
            <span className="font-semibold">Snapshot Strategy</span> = 1 Gov
            Token = 1 Vote Weight <br />
            <span className="font-semibold">Proposal Threshold</span> = 5% of
            White Hat DAO Gov Tokens <br />
            <span className="font-semibold">Vote Duration</span> = Minimum 7
            days <br />
            <span className="font-semibold">
              Minimum Vote Weight Threshold
            </span>{" "}
            = ( 30% of total token supply ) to pass any proposal.
          </div>

          <div className="w-full p-6 rounded-md shadow-inner flex flex-row space-x-4">
            <img src={info} alt="info"></img>
            <div className="text-sz20 text-blue">
              If this minimum vote weight is not met on a proposal, the vote
              will be unsuccessful even if the majority of voters voted yes.
            </div>
          </div>

          <div className="w-full p-6 rounded-md shadow-inner flex flex-row space-x-4">
            <img src={info} alt="info"></img>
            <div className="text-sz20 text-blue">
              In Snapshot, the above parameters are policies and not enforced by
              code. White Hat DAO will not recognize any proposals that do not
              comply with the above settings.
            </div>
          </div>

          <div className="text-sz22">
            The above settings can be changed via community discussion and
            snapshot voting in accordance with the already existing rules and
            regulation.
          </div>
        </div>
      </div>
      <div className="bg-lightgray rounded-xl shadow-xl flex flex-col">
        <div className="bg-gray px-6 py-4 rounded-t-xl">
          <div className="pl-4 text-blue text-sz30 font-bold font-pilat text-center">
            Core value
          </div>
        </div>
        <div className="p-8 flex flex-col font-Manrope space-y-4 text-sz22 font-light">
          <div className="flex flex-row items-center space-x-2">
            <div className="px-2 py-1 rounded-full shadow-inner font-bold">
              Promoting Safety & Security
            </div>
            <div>
              -Our mission is to promote safety, security & best practices
              throughout the web3 communities.
            </div>
          </div>

          <div className="flex flex-row items-center space-x-2">
            <div className="px-2 py-1 rounded-full shadow-inner font-bold">
              Transparency
            </div>
            <div>
              -Everything we do is decentralized including governance and
              payroll
            </div>
          </div>

          <div className="flex flex-row items-center space-x-2">
            <div className="px-2 py-1 rounded-full shadow-inner font-bold">
              Self-Sovereignty
            </div>
            <div>-We enable individuals to decide what they work on</div>
          </div>

          <div className="flex flex-row items-center space-x-2">
            <div className="px-2 py-1 rounded-full shadow-inner font-bold">
              Fair Compensation
            </div>
            <div>
              -We create sustainable revenue streams that flow to contributors
            </div>
          </div>

          <div className="flex flex-row items-center space-x-2">
            <div className="px-2 py-1 rounded-full shadow-inner font-bold">
              Integrity
            </div>
            <div>
              -We protect each other, our brand identity, and our clients above
              all else
            </div>
          </div>

          <div className="flex flex-row items-center space-x-2">
            <div className="px-2 py-1 rounded-full shadow-inner font-bold">
              Honesty
            </div>
            <div>
              -We admit failure. We work through challenges. We hold each other
              accountable.
            </div>
          </div>

          <div className="flex flex-row items-center space-x-2">
            <div className="px-2 py-1 rounded-full shadow-inner font-bold">
              Curiosity
            </div>
            <div>
              -We facilitate contributors’ and clients’ interests in how Web3
              technology will change business forever
            </div>
          </div>
        </div>
      </div>
      <div className="my-10 bg-lightgray rounded-xl shadow-xl flex flex-col">
        <div className="bg-gray px-6 py-4 rounded-t-xl">
          <div className="pl-4 text-blue text-sz30 font-bold font-pilat text-center">
            Contributors Responsibilities
          </div>
        </div>
        <div className="p-8 flex flex-col items-start font-Manrope font-light space-y-4">
          <div className="z-10 cursor-pointer">
            <div className="shadow-sm w-80 py-2 border rounded-xl gradient-box text-sz24 font-bold flex flex-col items-start">
              <div>Overview</div>
            </div>
          </div>
          <div className="text-sz22">
            The nature and scope of this project is enormous. It will require a
            team of dedicated and highly committed individuals to keep things
            running. For the purposes of promoting accountability and enhancing
            commitments, the following roles are created. Dedicated project
            champions willing to stake time and put in the sweat to get the
            project running on a daily basis.
          </div>
          <div className="w-full grid grid-cols-2 space-x-10">
            <div className="flex flex-col space-y-10">
              <div className="my-10 bg-lightgray rounded-xl shadow-xl flex flex-col">
                <div className="bg-gray px-6 py-4 rounded-t-xl">
                  <div className="pl-4 text-blue text-sz22 font-bold font-pilat text-center">
                    Administration's Responsibilities
                  </div>
                </div>
                <div className="p-6 flex flex-col items-start font-Manrope font-light space-y-4">
                  {responsibilities.map((item) => (
                    <div className="w-full py-1 border-b border-gray flex flex-row items-center space-x-4">
                      <Circle></Circle>
                      <div className="font-Manrope text-sz20">{item}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="my-10 bg-lightgray rounded-xl shadow-xl flex flex-col">
                <div className="bg-gray px-6 py-4 rounded-t-xl">
                  <div className="pl-4 text-blue text-sz22 font-bold font-pilat text-center">
                    Who can apply for the ambassador role ?
                  </div>
                </div>
                <div className="p-6 flex flex-col items-start font-Manrope font-light space-y-4">
                  <div className="p-2 rounded-md bg-gray text-sz18">
                    Anyone can apply to become an ambassador, so long as they
                    can positively contribute to the project and share the same
                    values / principles. White Hat DAO will be accepting
                    applications from all content niches and industries.s will
                    be responsible for designing, implementing, and creating
                    smart contracts and integration them in the platform. And
                    maintain the protocol with up to date blockchain technology
                    in the market.
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-10 justify-between">
              <div className="my-10 bg-lightgray rounded-xl shadow-xl flex flex-col">
                <div className="bg-gray px-6 py-4 rounded-t-xl">
                  <div className="pl-4 text-blue text-sz22 font-bold font-pilat text-center">
                    Developers Responsibilities
                  </div>
                </div>
                <div className="p-6 flex flex-col items-start font-Manrope font-light space-y-4">
                  <div className="p-2 rounded-md bg-gray text-sz18">
                    Devs will be responsible for designing, implementing, and
                    creating smart contracts and integration them in the
                    platform. And maintain the protocol with up to date
                    blockchain technology in the market.
                  </div>
                  {dev_responsibilities.map((item) => (
                    <div className="w-full py-1 border-b border-gray flex flex-row items-center space-x-4">
                      <Circle></Circle>
                      <div className="font-Manrope text-sz20">{item}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="my-10 bg-lightgray rounded-xl shadow-xl flex flex-col">
                <div className="bg-gray px-6 py-4 rounded-t-xl">
                  <div className="pl-4 text-blue text-sz22 font-bold font-pilat text-center">
                    Community Ambassadors
                  </div>
                </div>
                <div className="p-6 flex flex-col items-start font-Manrope font-light space-y-4">
                  {ambassadors.map((item) => (
                    <div className="w-full py-1 border-b border-gray flex flex-row items-center space-x-4">
                      <Circle></Circle>
                      <div className="font-Manrope text-sz20">{item}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-10 bg-lightgray rounded-xl shadow-xl flex flex-col">
        <div className="bg-gray px-6 py-4 rounded-t-xl">
          <div className="pl-4 text-pink text-sz30 font-bold font-pilat text-center">
            A message from White Hat DAO
          </div>
        </div>
        <div className="p-6 flex flex-col items-start font-Manrope font-light text-sz22 space-y-4">
          Devs will be responsible for designing, implementing, and creating
          smart contracts and integration them in the platform. And maintain the
          protocol with up to date blockchain technology in the market.
        </div>
      </div>
    </div>
  );
};

export default Dao;
