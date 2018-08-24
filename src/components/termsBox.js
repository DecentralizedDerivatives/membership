import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import BoxLayout from './boxLayout.js'

const styles = theme => ({
  content: {
    fontSize: '18px'
  }
})

function TermsBox (props) {
  const { classes, action } = props
  const content = (
    <Typography className={classes.content} component='div'>
      <h2>Terms</h2>
      <p>
        Please read these Terms of Service (this “Agreement”) carefully. Your use or access of this or any DDA Service or application (as defined below) constitutes your consent to this Agreement.
      </p>
      <p>
        This Agreement is between you and the Decentralized Derivatives Association (“DDA” or “we” or “us”) concerning your use of (including any access to) DDA’s website, mobile applications, and web applications, together with any materials and services available therein, and successor website(s) or application(s) thereto (collectively, the “Service”). This Agreement hereby incorporates by this reference any additional terms and conditions with respect to the Service posted by Company to the Service, or otherwise made available to you by Company, including the Privacy Policy and the FAQ (each as defined below).
      </p>
      <p>
        By clicking or tapping any button or box marked “accept”, “agree”, or “OK” (or a similar term) in connection with this Agreement, or by accessing or using the Service, you agree to be bound by this Agreement and affirm that you are of legal age to enter into this Agreement where you live and have the legal capacity to enter into this Agreement.
        </p>
      <p>
If you are an individual accessing or using the Service on behalf of, or for the benefit of, any corporation, partnership or other entity with which you are associated (an “Organization”), then you are agreeing to this Agreement on behalf of yourself and such Organization, and you represent and warrant that you have the legal authority to bind such Organization to this Agreement. References to “you” and “your” in this Agreement will refer to both the individual using the Service and to any such Organization.
      </p>
      <p>
This Agreement contains a mandatory arbitration provision (unless you opt out as set forth in section 18 below) that requires the use of arbitration on an individual basis to resolve disputes, rather than jury trials or any other court proceedings, or class actions or class arbitrations of any kind.

      </p>
      <ol>
        <li>
          <strong>Changes. </strong> We may change this Agreement from time to time by notifying you of such changes by any reasonable means, including by posting a revised Agreement through the Service. Any such changes will not apply to any dispute between you and us arising prior to the date on which we posted the revised Agreement incorporating such changes or otherwise notified you of such changes. Your clicking or tapping any button or box marked “Accept”, “Agree”, or “OK” (or a similar term) in connection with this Agreement, or your access or use of the Service, in each case following any changes to this Agreement, will constitute your acceptance of such changes. The “Last Updated” legend above indicates when this Agreement was last changed. We may, at any time and without liability or prior notice, modify or discontinue all or part of the Service (including access to the Service via any third-party links); charge, modify, or waive any fees required to use the Service; or offer opportunities to some or all Service users. We reserve the right to introduce new features or functionality for which the payment of fees may be required. If you do not agree to the Terms in effect when you access or use the Service, you must stop using the Service.
          </li>
        <li>
          <strong>Information Submitted Through the Site.</strong> Your submission of information through the Service is governed by this Agreement and the Service’s Privacy Policy. You represent and warrant that any information you provide in connection with the Service is and will remain accurate and complete, and that you will maintain and update such information as needed.
        </li>
        <li>
          <strong>Jurisdictional Issues.</strong> The Service is controlled or operated (or both) from the United States and is not intended to subject the Company to any non-U.S. jurisdiction or law. The Service may not be appropriate or available for use in some non-U.S. jurisdictions. Any use of the Service is at your own risk, and you must comply with all applicable laws, rules, and regulations in doing so. We may limit the Service’s availability at any time, in whole or in part, to any person, geographic area or jurisdiction that we choose.
          </li>
        <li>
          <p><strong>Rules of Conduct.</strong> In connection with the Site, you must not:</p>
          <ul>
            <li>
              Post, transmit, or otherwise make available through or in connection with the Service any materials that are or may be: (a) threatening, harassing, degrading, hateful, or intimidating, or otherwise fail to respect the rights and dignity of others; (b) defamatory, libelous, fraudulent, or otherwise tortious; (c) obscene, indecent, pornographic, or otherwise objectionable; or (d) protected by copyright, trademark, trade secret, right of publicity or privacy, or any other proprietary right, without the express prior written consent of the applicable owner.
              </li>
            <li>
             Post, transmit or otherwise make available through or in connection with the Service any virus, worm, Trojan horse, Easter egg, time bomb, spyware, scareware, malware, or other computer code, file, or program that is or is potentially harmful or invasive or intended to damage or hijack the operation of, or to monitor the use of, any hardware, software, or equipment (each, a “Virus”).
             </li>
            <li>
              Use the Service for any commercial purpose, or for any purpose that is fraudulent or otherwise tortious or unlawful.
              </li>
            <li>
              Harvest or collect information about users of the Service.
            </li>
            <li>
             Use the Service to transmit through or in connection with the Service, any spam, chain letters, or other unsolicited communications.
            </li>
            <li>
              Interfere with or disrupt the operation of the Service or the servers or networks used to make the Service available, including by hacking or defacing any portion of the Service (including any content available thereby); or violate any requirement, procedure, or policy of such servers or networks.
            </li>
            <li>
              Restrict or inhibit any other person from using the Service.
            </li>
            <li>
             Reproduce, modify, adapt, translate, create derivative works of, sell, rent, lease, loan, timeshare, distribute, or otherwise exploit any portion of (or any use of) the Service except as expressly authorized herein, without Company’s express prior written consent.
            </li>
            <li>
              Frame or mirror any portion of the Service, or otherwise incorporate any portion of the Service into any product or service, without Company’s express prior written consent.
            </li>
            <li>
              Use any robot, spider, Service search/retrieval application, or other manual or automatic device to retrieve, index, “scrape,” “data mine,” or otherwise gather Service content (including Submissions) or reproduce or circumvent the navigational structure or presentation of the Service, without Company’s express prior written consent. Notwithstanding the foregoing, and subject to compliance with applicable law and any instructions posted in the robots.txt file located in the Service’s root directory, Company grants to the operators of public search engines permission to use spiders to copy materials from the Service for the sole purpose of (and solely to the extent necessary for) creating publicly available, searchable indices of such materials, but not caches or archives of such materials. Company reserves the right to revoke such permission either generally or in specific cases, at any time and without notice.
            </li>
          </ul>
          <p>
            You are responsible for obtaining, maintaining, and paying for all hardware and all telecommunications and other sites needed for you to use the Service (including any applicable device data transmission charges).
          </p>
        </li>
        <li>
          <p>
            <strong>Resources; Third Party Resources.</strong> The Service may make available information, data, materials, sites, functionality, or other resources (collectively, “Resources”), as well as references and links to such Resources. Resources may be made available by Company or by third parties, and may be made available for any purpose, including for general information purposes. We make no representations as to the accuracy, validity, timeliness, completeness, reliability, integrity, quality, legality, usefulness, or safety of any or all of the Resources and the Service, or any intellectual property rights therein. Resources are subject to change at any time without notice. To the fullest extent permitted under applicable law, we disclaim all liability and responsibility arising from any reliance placed on any Resources by you or any other user of the Service, or by anyone who may be informed of the content of any Resources. We neither control nor endorse, nor have any obligation to monitor Resources made available by third parties (“Third Party Resources”), and we may block or disable access to any Third-Party Resources (in whole or part) through the Service at any time. Certain Third-Party Resources may, among other things, be inaccurate, misleading, or deceptive. Nothing in this Agreement will be deemed to be a representation or warranty by Company with respect to any Third-Party Resources. In addition, the availability of any Third-Party Resources through the Service does not imply our endorsement of, or our affiliation with, any provider of such Third-Party Resources, nor does such availability create any legal relationship between you and any such provider.
          </p>
          <p>
            Your use of Third Party Resources is at your own risk and is subject to any additional terms, conditions, and policies applicable to such Third-Party Resources (such as terms of service or privacy policies of the providers of such Third-Party Resources).
          </p>
        </li>
        <li>
          <p>
            <strong>Transactions.</strong> Our Service assists you in sharing information with third parties regarding your interest in exchanging certain blockchain-based assets (“Tokens”) for other Tokens (such information, “Transaction Information”). By submitting Transaction Information through the Service, you grant to us the right to provide the Transaction Information to users of the Service and other third parties. We do not guarantee the identity of any provider or receiver of Transaction Information, or the accuracy, validity, timeliness, completeness, reliability, integrity, quality, legality, usefulness, or safety of Transaction Information or any Transaction. Further, by sharing Transaction Information through the Service, you represent and warrant that:
          </p>
          <ul>
            <li>
              The Tokens exchanged in a Transaction will be used only in a lawful manner.
            </li>
            <li>
              In connection with a Transaction, you will only sell legally-obtained Tokens that belong to you.
            </li>
            <li>
              You will not engage in, further, perform, undertake, aid, or abet any unlawful activity (including but not limited to illegal gambling, money laundering, fraud, blackmail, extortion, ransoming of data, financing of terrorism, intellectual property infringement, or violent or abusive activities) (“Prohibited Activity”) through the Transactions or use of the Service. We reserve the right to refuse to publish, post, or otherwise make available any Transaction Information if we suspect that the applicable Transactions relate to or have a high risk of relating to a Prohibited Activity, or if we believe the Transaction Information is erroneous.
            </li>
            <li>
              You will obey all applicable laws in connection with Transactions.
            </li>
            <li>
              You are not located in, under the control of, or a national or resident of any country to which the United States has embargoed goods or services. You are not and have not been placed on the “Specially Designated Nationals and Blocked Persons List” by the Office of Foreign Assets Control (OFAC) of the United States Department of the Treasury.
            </li>
            <li>
              You are not and have not been placed on the “Denied Persons List” by the Bureau of Industry and Security of the United States Department of Commerce.
            </li>
            <li>
              You will not use the Service if the laws of your country prohibit you from doing so in accordance with this Agreement.
            </li>
          </ul>
          <p>
            You agree to pay all Fees (as defined below) and other amounts incurred by you or on your behalf through the Service, at the prices in effect when such charges are incurred. In addition, you are responsible for any taxes applicable to your Transactions.
          </p>
          <p>
            You acknowledge and agree that we have no control over, or liability for, the delivery, quality, safety, legality, or other aspect of any Tokens that you may purchase or sell to or from a third party, and that we are not responsible for ensuring that a buyer or seller with whom you transact actually completes the Transaction or is authorized to do so. If you experience a problem with any Tokens purchased from or sold to a third party through a Transaction, you bear the entire risk.
          </p>
        </li>
        <li>
          <p>
            <strong>Fees.</strong> In connection with your use of the Service to facilitate Transactions, you agree to pay any fees associated with execution of applications. 
          </p>
        </li>
        <li>
          <p>
            <strong>Your Submissions and Feedback.</strong> Certain Service functionality may provide you with the ability to make available certain Resources through or in connection with the Service (each such Resource, “Your Submission”). If you choose to make any of your personally identifiable or other information publicly available through the Service, you do so at your own risk. You retain ownership of Your Submissions, but you grant to us an unrestricted and fully paid up license (with right to sublicense) to use and otherwise exploit Your Submissions, in any format or media now known or later developed, in connection with our business activities related to the Service (including promotional purposes, such as testimonials).
          </p>
          <p>
            In addition, if you provide to us any ideas, proposals, suggestions, or other materials (“Feedback”), whether related to the Service or otherwise, such Feedback will be deemed Your Submission, and you hereby acknowledge and agree that such Feedback is not confidential, and that your provision of such Feedback is gratuitous, unsolicited, and without restriction, and does not place Company under any fiduciary or other obligation.
          </p>
          <p>
            You represent and warrant that (a) you have all rights necessary to grant the licenses granted in this section; (b) Your Submissions are complete and accurate; and (c) Your Submissions and your provision thereof to us (whether through and in connection with the Service or otherwise) are not fraudulent, tortious, or otherwise in violation of any applicable law or any right of any third party (including any intellectual property, publicity, or privacy rights). You further irrevocably waive any “moral rights” or other rights with respect to attribution of authorship or integrity of materials regarding Your Submissions that you may have under any applicable law under any legal theory.
          </p>
        </li>
        <li>
          <p>
            <strong>Monitoring.</strong> We may (but have no obligation to) monitor, moderate, and/or analyze your use of the Service, and monitor, moderate, analyze, alter, and/or remove Resources before or after they appear on the Service. We may disclose information regarding your access to and use of the Service, and the circumstances surrounding such access and use, to anyone for any reason or purpose.
          </p>
        </li>
        <li>
          <p>
            <strong>Your Limited Rights.</strong> Subject to your compliance with this Agreement, and solely for so long as you are permitted by Company to use the Service, you may view and use any portion of the Service to which we provide you access under this Agreement, solely in accordance with the functionality that we make available to you, solely for your personal, non-commercial use.
          </p>
        </li>
        <li>
          <p>
            <strong>Company’s Proprietary Rights.</strong> As between you and us, we and our licensors own the Service, which is protected by proprietary rights and laws. All trade names, trademarks, service marks, logos, and copyrightable works available through the Service are the property of their respective owners and nothing contained on the Service should be construed as granting any right to use any trade names, trademarks, service marks, logos, or copyrightable works without the express prior written consent of the owner. Our trade names, trademarks, and service marks include “DECENTRALIZED DERIVATIVES ASSOCIATION” and any associated logos. You may not use our trade names, trademarks, service marks, or logos in connection with any product or service that is not ours, or in any manner that is likely to cause confusion.
          </p>
        </li>
        <li>
          <p>
            <strong>Risks.</strong> Use of the Service and participation in Transactions may carry financial risk. You acknowledge and agree that you are aware of such risks, including the following:
          </p>
          <p>
            <strong>Transactions are Final.</strong> All Transactions are final and there are no refunds. You acknowledge and agree that you will access and use the Service and participate in Transactions at your own risk. The risk of loss can be substantial. You should, therefore, carefully consider whether such activity is suitable for you in light of your circumstances and financial resources.
          </p>
          <p>
            <strong>Technical Knowledge is Required.</strong> 
            Any use or interaction with the Service requires a comprehensive understanding of applied cryptography and computer science in order to appreciate inherent risks.  You represent and warrant that you possess relevant knowledge and skills.
          </p>
          <p>
            <strong>Eligibility and Compliance.</strong> You agree that you are fully able and competent to enter into the terms, conditions, obligations, affirmations, representations and warranties set forth in these Terms and to abide by and comply with these Terms and that we are not responsible for determining whether or which laws may apply to your Transactions, including tax laws. You are solely responsible for reporting of any transactions and paying any taxes arising from your use of the Service and participation in any Transaction.

          You further represent that you are otherwise legally permitted to use the service in your jurisdiction including owning cryptographic tokens of value and interacting with the Service or Content in any way. You further represent you are responsible for ensuring compliance with the laws of your jurisdiction and acknowledge that DDA is not liable for your compliance with such laws. Finally, you represent and warrant that you will not use the Service for any illegal activity.

          </p>
          <p>
            <strong>You are aware of and accept the risk of operational challenges.</strong> The Service may experience sophisticated cyber-attacks, unexpected surges in activity, or other operational or technical difficulties that may cause interruptions to or delays on the Service. You agree to accept the risk of a Transaction failure resulting from unanticipated or heightened technical difficulties, including those resulting from sophisticated attacks, and you agree not to hold us accountable for any related losses. We will not bear any liability, whatsoever, for any damage or interruptions caused by any Viruses that may affect your computer or other equipment, or any phishing, spoofing, or other attack. We advise the regular use of a reputable and readily available Virus screening and prevention software.
          </p>
          <p>
          <strong> DDA Must Comply with Applicable Law</strong>We comply with all legal requests for information, and reserve the right to provide information, including Transaction Information, to law enforcement personnel and other third parties to answer inquiries, to respond to legal process, to respond to the order of a court of competent jurisdiction and those exercising the court’s authority, and to protect the Company and our users.
          </p>
        </li>
        <li>
          <p>
            <strong>Operation of Underlying Protocols.</strong> We do not own or control the underlying software protocols that govern the operation of the cryptocurrencies or Tokens referenced on the Service. In general, the underlying protocols are open source, and anyone can use, copy, modify, and distribute them. By accessing or using the Service, you acknowledge and agree (i) that we are not responsible for operation of the underlying protocols and that we make no guarantee of their functionality, security, or availability; and (ii) that the underlying protocols are subject to sudden changes in operating rules (a/k/a “forks”), and that such forks may materially affect the value, function, and/or even the name of the Token referenced on the Service. In the event of a fork, you agree that we may temporarily suspend our operations (with or without advance notice to you) and that we may, in our sole discretion, decide whether or not to support (or cease supporting) either branch of the forked protocol entirely. You acknowledge and agree that we assume absolutely no responsibility whatsoever in respect of an unsupported branch of a forked protocol.
          </p>
        </li>
        <li>
          <p>
            <strong>Disclaimer of Warranties.</strong> To the fullest extent permitted under applicable law: (a) the Service, Resources (including any Third Party Resources) and Transaction Information are made available to you on an “As Is”, “Where Is”, and “Where Available” basis, without any warranties and conditions of any kind, whether express, implied, or statutory; and (b) Company disclaims all warranties and conditions with respect to the Service, any Resources (including any Third Party Resources), and Transaction Information, including the warranties of merchantability, fitness for a particular purpose, non-infringement, and title. All disclaimers of any kind (including in this section and elsewhere in this Agreement) are made for the benefit of the Company, its affiliates, and the Company’s and affiliates’ respective owners, directors, officers, employees, agents, representatives, licensors, suppliers, and service providers, and their respective successors and assigns (each a “Company Party”; collectively, the “Company Parties”).
          </p>
          <p>
           We do not guarantee that the Service is or will remain updated, complete, correct, or secure, or that access to the Service will be uninterrupted. The Service may include inaccuracies, errors, and materials that violate or conflict with this Agreement. Additionally, third parties may make unauthorized alterations to the Service. Accordingly, you should verify all information on the Service before relying on it, and all decisions (including Transactions) based on information contained on the Service are your sole responsibility and we will have no liability for such decisions. If you become aware of any inaccuracies or unauthorized alterations to the Service, contact us at info@ddacoop.org with a description of such inaccuracy or alteration and its location on the Service.
          </p>
          <p>
            We will not be liable for: (x) any inaccuracy, error, or delay in, or omission of, (1) any information, including Transaction Information, or (2) the transmission or delivery of information, including Transaction Information; or (y) any loss or damage arising from any event beyond our reasonable control, including but not limited to: flood, extraordinary weather conditions, earthquake, other act of God, fire, war, insurrection, riot, labor dispute, accident, action of government, communications, power failure, or equipment or software malfunction.
          </p>
        </li>
        <li>
          <p>
            <strong>Limitation of Liability.</strong> To the fullest extent permitted under applicable law: (a) no Company Party will be liable for any direct, indirect, incidental, consequential, special, exemplary, or punitive damages of any kind arising out of or in connection with the Service or this Agreement, under any contract, tort (including negligence), strict liability, or other theory, including damages for diminution of value, loss of tokens, loss of profits, loss of revenue, loss of business, work stoppage, loss of use or data, loss of goodwill, loss of other intangibles, loss of security of Your Submissions (including unauthorized interception by third parties of any of Your Submissions), computer failure or malfunction, or other loss (collectively, “Losses”), even if advised in advance of the possibility of such losses; (b) without limiting the foregoing, no Company Party will be liable for damages of any kind resulting from your use of or inability to use the Service or from any Resources (including any Third Party Resources), including from any Virus that may be transmitted in connection therewith; (c) your sole and exclusive remedy for dissatisfaction with the Service or any Resources (including any Third Party Resources) is to stop using the Service; and (d) the maximum aggregate liability of all Company Parties, collectively, for all damages, losses, and causes of action, whether in contract, tort (including negligence), or otherwise, will be equal to the lesser of (i) the total amount, if any, paid by you in Fees to Company under this Agreement during the six (6)-month period immediately prior to the date of the event giving rise to the last cause of action to arise hereunder; and (ii) 17 U.S. dollars ($17). All limitations of liability of any kind (including in this section and elsewhere in this Agreement) are made for the benefit of both Company and the each of the other Company Parties.
          </p>
          <p>
            You hereby release the Company Parties from liability for any and all Losses arising out of or in connection with the Service or this Agreement. Further, if you have a dispute with one or more third parties in connection with a Transaction, you hereby release the Company Parties from liability for any and all Losses in connection with such disputes.
          </p>
          <p>
            Applicable law may not allow for limitations on certain implied warranties, or exclusions or limitations of certain damages; solely to the extent that such law applies to you, some or all of the above disclaimers, exclusions, or limitations may not apply to you, and you may have certain additional rights. For the avoidance of doubt, if you are a resident of the State of New Jersey, the immediately preceding sentence does not apply to you.
          </p>
        </li>
        <li>
          <p>
            <strong>Indemnity.</strong> To the fullest extent permitted under applicable law, you agree to defend, indemnify, and hold harmless each Company Party from and against all claims, liabilities, Losses, costs, expenses, and fees (including attorneys’ fees and expenses) arising out of or relating to (a) your use of, or activities in connection with, the Service (including Your Submissions); or (b) any breach or alleged breach of any of the provisions of this Agreement by you.
          </p>
        </li>
        <li>
          <p>
            <strong>Termination.</strong> This Agreement is effective until terminated. Company may terminate this Agreement or suspend your right to use the Service at any time and without prior notice, for any or no reason, including if Company believes that you have violated or acted inconsistently with the letter or spirit of this Agreement or have engaged in any Prohibited Activity. Upon any such termination or suspension, your right to use the Service will immediately cease, and Company may, without liability to you or any third party, immediately deactivate or delete Your Submissions and all associated materials, without any obligation to provide any further access to such materials. The preamble and Sections 2, 3, 5, 8-9, and 11-23 will survive any termination of this Agreement.
          </p>
        </li>
        <li>
          <p>
            <strong>Governing Law; Arbitration; Class Action Waiver.</strong> This Agreement, your use of (including any access to) the Service, and all related matters are governed solely by, and construed solely in accordance with, the laws of the United States (including federal arbitration law) and the State of Delaware, U.S.A., without regard to its principles of conflicts of law that would cause the application of the laws of any other jurisdiction, and regardless of your location. Except for disputes that qualify for small claims court, or to the extent this provision is expressly prohibited by law, all disputes arising out of or related to this Agreement, your use of (including any access to) the Service (including all Transactions) and all related matters, whether based in contract, tort, statute, fraud, misrepresentation, or any other legal theory, will be resolved through final and binding arbitration before a neutral arbitrator instead of in a court by a judge or jury and you agree that Company and you are each waiving the right to trial by a jury to the maximum extent permitted by applicable law. You agree that any arbitration under this Agreement will take place on an individual basis; class arbitrations and class actions are not permitted, and you are agreeing to give up the ability to participate in a class arbitration or class action. 
          </p>
        </li>
        <li>
          <p>
            <strong>Information or Complaints.</strong> If you have a question or complaint regarding the Service, please send an e-mail to info@ddacoop.org.
          </p>
        </li>
        <li>
          <p>
            <strong>Export Controls.</strong>You are responsible for complying with United States export controls and for any violation of such controls, including any United States embargoes or other federal rules and regulations restricting exports. You represent, warrant, and covenant that you are not (a) located in, or a resident or a national of, any country subject to a U.S. government embargo or other restriction, or that has been designated by the U.S. government as a “terrorist supporting” country; or (b) on any of the U.S. government lists of restricted end users.
          </p>
        </li>
        <li>
          <p>
            <strong>Miscellaneous.</strong> This Agreement does not, and will not be construed to, create any partnership, joint venture, employer-employee, agency, or franchisor-franchisee relationship between you and Company. If any provision or portion thereof of this Agreement is found to be unlawful, void, or for any reason unenforceable, that provision or portion thereof will be deemed severable from this Agreement and will not affect the validity and enforceability of any remaining provision. You may not assign, transfer, or sublicense any or all of your rights or obligations under this Agreement without our express prior written consent. We may assign, transfer, or sublicense any or all of our rights or obligations under this Agreement without consent or other restriction. No waiver by either party of any breach or default under this Agreement will be deemed to be a waiver of any preceding or subsequent breach or default. Any heading, caption, or section title contained herein is for convenience only, and in no way defines or explains any section or provision. All terms defined in the singular will have the same meanings when used in the plural, where appropriate and unless otherwise specified. Any use of the term “including” or variations thereof in this Agreement will be construed as if followed by the phrase “without limitation.” This Agreement, including any terms and conditions incorporated herein, is the entire agreement between you and Company relating to the subject matter hereof, and supersedes any and all prior or contemporaneous written or oral agreements or understandings between you and Company relating to such subject matter. Notices to you (including notices of changes to this Agreement) may be made via posting to the Service or by any other reasonable means.
          </p>
        </li>
      </ol>
      <h2>Privacy Policy</h2>
      <p>
        This Privacy Policy governs the way the Decentralized Derivatives Association collects, uses, maintains, and discloses information collected from members (“Member” or “User”) of the Decentralized Derivatives Association’s website and/or associated applications (herein “Service”).
      </p>
      <h4>Personal Information</h4>
      <p>
       “Personal Information” is information that identifies you as an individual or relates to an identifiable individual, such as name and email address. We may collect Personal Information from Users when they voluntarily provide it to us in a variety of ways, including, but not limited to, when Users visit our Service, subscribe to our newsletters, fill out a form, or in connection with other activities, services, features or resources we make available on our Service. Users may visit our Service without providing Personal Information. Users can always refuse to supply Personal Information; however, doing so may prevent them from membership to DDA or engaging in certain Service-related activities.
      </p>
      <h4>How We Use Personal Information</h4>
      <p>DDA may use Personal Information for the following purposes:</p>
      <ul>
        <li>To respond to a User’s inquiries or fulfill a User’s requests and provide related customer service.</li>
        <li>To send administrative information to a User, such as changes to our terms, conditions, and policies.</li>
        <li>To personalize the User’s experience on our Service..</li>
        <li>
          For our business purposes, such as data analysis, audits, fraud monitoring and prevention, developing new products and services, improving our Service, identifying usage trends, determining the effectiveness of our promotional campaigns, and operating and expanding our business activities.
        </li>
        <li>
          To send periodic newsletters, via email, if the User has opted in to receive our newsletters.
        </li>
      </ul>
      <h4>Disclosure of Personal Information</h4>
      <p>
        We may disclose Personal Information to our third-party service providers that provide services such as our identity verification service, KYC/AML service providers, website hosting, data analysis, information technology and related infrastructure provision, customer service, email delivery, auditing, and other services.
      </p>
      <p>
        We may also use and disclose your Personal Information as we believe to be necessary or appropriate: (a) to comply with applicable law, which may include laws outside your country of residence, to respond to requests from public and government authorities, which may include authorities outside your country of residence, to cooperate with law enforcement, or for other legal reasons; (b) to enforce our terms and conditions; and (c) to protect our rights, privacy, safety or property, and/or that of our affiliates, you, or others. In addition, we may use or disclose your Personal Information to a third party in the event of any reorganization, merger, sale, joint venture, assignment, transfer, or other disposition of all or any portion of our business, assets, or stock (including in connection with any bankruptcy or similar proceedings).
      </p>
      <h4>Other Information</h4>
      <p>
        “Other Information” is information that does not reveal a User’s specific identity or does not directly relate to an identifiable individual, such as:
      </p>
      <ul>
        <li>Browser and device information</li>
        <li>Information collected through cookies, pixel tags and other technologies</li>
        <li>Demographic information and other information provided by a User that does not reveal his or her specific identity</li>
        <li>Information that has been aggregated in a manner that does not reveal Users’ identities</li>
      </ul>
      <p>
       If we are required to treat Other Information as Personal Information under applicable law, then we may use and disclose it for the purposes for which we use and disclose Personal Information as detailed in this Privacy Policy.
      </p>
      <p>
        We may collect Other Information about Users whenever they interact with our Service. Other Information may include the browser name, the type of computer, and technical information about Users means of connection to our Service, such as the operating system and the Internet service providers utilized, and other similar information.
      </p>
      <p>
        We and our service providers may collect Other Information in a variety of ways, including:
      </p>
      <ul>
        <li>
          Through your browser or device: Certain information is collected by most browsers or automatically through your device, such as your Media Access Control (MAC) address, computer type (Windows or Macintosh), screen resolution, operating system name and version, device manufacturer and model, language, and Internet browser type and version. 
        </li>
        <li>
          Cookies: Cookies allow us to collect information such as browser type, time spent on the Service, pages visited, language preferences and other traffic data. We use the information for security purposes, to facilitate navigation, to display information more effectively, and to personalize a User’s experience. We also gather statistical information about use of the Service in order to continually improve its design and functionality, understand how it is used and assist us with resolving questions about it. We do not currently respond to browser do-not-track signals. If a User does not want information collected through cookies, most browsers allow a User to automatically decline cookies or be given the choice of declining or accepting a particular cookie (or cookies) from a particular website. If, however, a User does not accept cookies, he or she may experience some inconvenience in the use of the Service.
        </li>
        <li>
          Using pixel tags and other similar technologies: Pixel tags (also known as web beacons and clear GIFs) may be used to, among other things, track the actions of Service users and email recipients, measure the success of our marketing campaigns, and compile statistics about use of the Service and response rates.
        </li>
        <li>
          Analytics: We use Google Analytics, which uses cookies and similar technologies to collect and analyze information about use of the Service and report on activities and trends. This service may also collect information regarding the use of other websites, apps, and online resources. 
        </li>
        <li>
          IP Address: An IP address is automatically assigned to a User’s computer by his or her Internet Service Provider. An IP address may be identified and logged automatically in our server log files whenever a User accesses the Service, along with the time of the visit and the pages were visited. Collecting IP addresses is standard practice and is done automatically by many websites, applications, and other services. We use IP addresses for purposes such as calculating usage levels, diagnosing server problems, and administering the Service. We may also derive your approximate location from your IP address.
        </li>
      </ul>
      <p>
        We may use and disclose Other Information for any purpose, except where we are required to do otherwise under applicable law. In some instances, we may combine Other Information with Personal Information. If we do, we will treat the combined information as Personal Information as long as it is combined.
      </p>
      <h4>Third-Party Services</h4>
      <p>
        This Privacy Policy does not address, and we are not responsible for, the privacy, information, or other practices of any third parties, including any third party operating any website or service to which the Service links. 
      </p>
      <h4>How We Protect Your Personal Information</h4>
      <p>
        We seek to use appropriate data collection, storage, and processing practices and security measures designed to protect against unauthorized access, alteration, disclosure, or destruction of Personal Information within our organization. Unfortunately, no data transmission or storage system can be guaranteed to be 100% secure. If you have reason to believe that your interaction with us is no longer secure, please immediately notify us in accordance with the “Contacting Us” section below.
      </p>
      <p>
        The Service is controlled and operated by us from the United States and is not intended to subject us to the laws or jurisdiction of any state, country, or territory other than that of the United States. A User’s Personal Information may be stored and processed in any country where we have facilities or in which we engage service providers, and, by using the Service, a User consents to the transfer of information to countries outside of the User’s country of residence, including the United States, which may have data protection rules that are different from those of the User’s country. In certain circumstances, courts, law enforcement agencies, regulatory agencies, or security authorities in those other countries may be entitled to access a User’s Personal Information.
      </p>
      <h4>Changes to this Privacy Policy</h4>
      <p>
        DDA may update this Privacy Policy at any time. When we do, we will revise the updated date at the top of this document. You acknowledge and agree that it is your responsibility to review this Privacy Policy periodically and become aware of modifications. Your continued use of the Service following the posting of changes to this policy will be deemed your acceptance of those changes.
      </p>
      <h4>Your Acceptance of this Privacy Policy</h4>
      <p>
        By using our Service, you signify your acceptance of this Privacy Policy. If you do not agree to this policy, please do not use our Service.
      </p>
      <h4>Contacting Us</h4>
      <p>
        If you have any questions about this Privacy Policy, please contact us at:
        <a href={'mailto:info@ddacoop.org'}>info@ddacoop.org</a>
      </p>

    </Typography>
  )
  return (
    <BoxLayout
      headline='Terms and Privacy'
      content={content}
      buttonText='Agree'
      buttonAction={action} />
  )
}

export default withStyles(styles)(TermsBox)
