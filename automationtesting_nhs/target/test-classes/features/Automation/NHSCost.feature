Feature: As a citizen of the UK
  I need to know what help I can get with my NHS costs
  So that I can get the treatment I need

  @NHSBSA @Regression
  Scenario Outline: User verifies the NHS Cost
    Given User click on the start now button in the home page
    And User selects ENGLAND as country
    And User clicks on Next button
    And User selects No for GP practice in Scotland or Walves
    And User clicks on Next button
    And User selects ENGLAND as country for dental practice
    And User clicks on Next button
    And User enters the birthdate <BirthDate>
    And User clicks on Next button
    And User selects <LiveWithPartner> for do you live with a partner
    And User clicks on Next button
    And User selects <TaxBenefits> for do you claim any benefits or tax credits
    And User clicks on Next button
    And User selects <Pregnant> for are you pregnant or have you given birth in the last 12 months
    And User clicks on Next button
    And User selects <Injury> for do you have an injury or illness caused by serving in the armed forces
    And User clicks on Next button
    And User selects <Diabetes> for do you have diabetes
    And User clicks on Next button
    And User selects <NHSCharges> for to check what help you can get with NHS charges
    And User clicks on Next button
    And User selects <Glaucoma> for do you have glaucoma
    And User clicks on Next button
    And User selects <CareHome> for do you live permanently in a care home
    And User clicks on Next button
    And User selects <Investements> for do you have more than £16000 in savings, investments or property
    And User clicks on Next button
    And User could get help to pay for your NHS costs

    Examples:
    |BirthDate          |LiveWithPartner|TaxBenefits|Pregnant|Injury|Diabetes|NHSCharges|Glaucoma|CareHome|Investements|
    |Inbetween 18 to 60 |NO             |NO         |NO      |NO    |NO      |NO        |NO      |NO      |NO          |

  @NHSBSA @Regression @DiabetesYes @BloodSugarYes
  Scenario Outline: User verifies the NHS Cost with blood sugar levels as Yes
    Given User click on the start now button in the home page
    And User selects ENGLAND as country
    And User clicks on Next button
    And User selects No for GP practice in Scotland or Walves
    And User clicks on Next button
    And User selects ENGLAND as country for dental practice
    And User clicks on Next button
    And User enters the birthdate <BirthDate>
    And User clicks on Next button
    And User selects <LiveWithPartner> for do you live with a partner
    And User clicks on Next button
    And User selects <TaxBenefits> for do you claim any benefits or tax credits
    And User clicks on Next button
    And User selects <Pregnant> for are you pregnant or have you given birth in the last 12 months
    And User clicks on Next button
    And User selects <Injury> for do you have an injury or illness caused by serving in the armed forces
    And User clicks on Next button
    And User selects <Diabetes> for do you have diabetes
    And User clicks on Next button
    And User selects <BloodSugar> for do you need to take medication to keep your blood sugar levels stable
    And User clicks on Next button
    And User selects <CareHome> for do you live permanently in a care home
    And User clicks on Next button
    And User selects <Investements> for do you have more than £16000 in savings, investments or property
    And User clicks on Next button
    And User could get help to pay for your NHS costs
    Examples:
      |BirthDate          |LiveWithPartner|TaxBenefits|Pregnant|Injury|Diabetes|BloodSugar|CareHome|Investements|
      |Inbetween 18 to 60 |Yes            |NO         |Yes     |Yes   |Yes     |Yes       |NO      |NO          |

  @NHSBSA @Regression @DiabetesYes @BloodSugarNo
  Scenario Outline: User verifies the NHS Cost with blood sugar levels as No
    Given User click on the start now button in the home page
    And User selects ENGLAND as country
    And User clicks on Next button
    And User selects No for GP practice in Scotland or Walves
    And User clicks on Next button
    And User selects ENGLAND as country for dental practice
    And User clicks on Next button
    And User enters the birthdate <BirthDate>
    And User clicks on Next button
    And User selects <LiveWithPartner> for do you live with a partner
    And User clicks on Next button
    And User selects <TaxBenefits> for do you claim any benefits or tax credits
    And User clicks on Next button
    And User selects <Pregnant> for are you pregnant or have you given birth in the last 12 months
    And User clicks on Next button
    And User selects <Injury> for do you have an injury or illness caused by serving in the armed forces
    And User clicks on Next button
    And User selects <Diabetes> for do you have diabetes
    And User clicks on Next button
    And User selects <BloodSugar> for do you need to take medication to keep your blood sugar levels stable
    And User clicks on Next button
    And User selects <NHSCharges> for to check what help you can get with NHS charges
    And User clicks on Next button
    And User selects <CareHome> for do you live permanently in a care home
    And User clicks on Next button
    And User selects <Investements> for do you have more than £16000 in savings, investments or property
    And User clicks on Next button
    And User could get help to pay for your NHS costs
    Examples:
      |BirthDate          |LiveWithPartner|TaxBenefits|Pregnant|Injury|Diabetes|BloodSugar|NHSCharges|CareHome|Investements|
      |Inbetween 18 to 60 |No             |NO         |Yes     |Yes   |Yes     |No        |NO        |NO      |NO          |
      |Inbetween 18 to 60 |No             |NO         |Yes     |Yes   |Yes     |No        |Yes       |NO      |NO          |

  @NHSBSA @Regression
  Scenario Outline: User verifies the NHS Cost with care home as Yes and local council as No
    Given User click on the start now button in the home page
    And User selects ENGLAND as country
    And User clicks on Next button
    And User selects No for GP practice in Scotland or Walves
    And User clicks on Next button
    And User selects ENGLAND as country for dental practice
    And User clicks on Next button
    And User enters the birthdate <BirthDate>
    And User clicks on Next button
    And User selects <LiveWithPartner> for do you live with a partner
    And User clicks on Next button
    And User selects <TaxBenefits> for do you claim any benefits or tax credits
    And User clicks on Next button
    And User selects <Pregnant> for are you pregnant or have you given birth in the last 12 months
    And User clicks on Next button
    And User selects <Injury> for do you have an injury or illness caused by serving in the armed forces
    And User clicks on Next button
    And User selects <Diabetes> for do you have diabetes
    And User clicks on Next button
    And User selects <CareHome> for do you live permanently in a care home
    And User clicks on Next button
    And User selects <LocalCouncil> for do you get help to pay for your care home from your local council
    And User clicks on Next button
    And User selects <Investements> for do you have more than £16000 in savings, investments or property
    And User clicks on Next button
    And User could get help to pay for your NHS costs

    Examples:
      |BirthDate          |LiveWithPartner|TaxBenefits|Pregnant|Injury|Diabetes|LocalCouncil|CareHome|Investements|
      |Inbetween 18 to 60 |NO             |NO         |NO      |NO    |NO      |NO          |NO      |NO          |


  @NHSBSA @Regression
  Scenario Outline: User verifies the NHS Cost with care home as Yes and local council as Yes
    Given User click on the start now button in the home page
    And User selects ENGLAND as country
    And User clicks on Next button
    And User selects No for GP practice in Scotland or Walves
    And User clicks on Next button
    And User selects ENGLAND as country for dental practice
    And User clicks on Next button
    And User enters the birthdate <BirthDate>
    And User clicks on Next button
    And User selects <LiveWithPartner> for do you live with a partner
    And User clicks on Next button
    And User selects <TaxBenefits> for do you claim any benefits or tax credits
    And User clicks on Next button
    And User selects <Pregnant> for are you pregnant or have you given birth in the last 12 months
    And User clicks on Next button
    And User selects <Injury> for do you have an injury or illness caused by serving in the armed forces
    And User clicks on Next button
    And User selects <Diabetes> for do you have diabetes
    And User clicks on Next button
    And User selects <CareHome> for do you live permanently in a care home
    And User clicks on Next button
    And User selects <LocalCouncil> for do you get help to pay for your care home from your local council
    And User clicks on Next button
    And User could get help to pay for your NHS costs

    Examples:
      |BirthDate          |LiveWithPartner|TaxBenefits|Pregnant|Injury|Diabetes|LocalCouncil|CareHome|
      |Inbetween 18 to 60 |NO             |NO         |NO      |NO    |NO      |NO          |NO      |


  ##########################   Live Without Partner ###########################################
  @NHSBSA @Regression
  Scenario Outline: User verifies the NHS Cost with live without partner as no, tax credit income as no
    Given User click on the start now button in the home page
    And User selects ENGLAND as country
    And User clicks on Next button
    And User selects No for GP practice in Scotland or Walves
    And User clicks on Next button
    And User selects ENGLAND as country for dental practice
    And User clicks on Next button
    And User enters the birthdate <BirthDate>
    And User clicks on Next button
    And User selects <LiveWithPartner> for do you live with a partner
    And User clicks on Next button
    And User selects <TaxBenefits> for do you claim any benefits or tax credits
    And User clicks on Next button
    And User selects <UniversalCredit> for do you get paid Universal Credit
    And User clicks on Next button
    And User clicks on Next button based on the <UniversalCredit>
    And User selects <Benefits> for do you get any of these benefits
    And User clicks on Next button
    And User selects <TaxCreditType> for which type of tax credit do you get
    And User clicks on Next button
    And User selects <Income> for is your household income £15276 or less
    And User clicks on Next button
    And User selects <Pregnant> for are you pregnant or have you given birth in the last 12 months
    And User clicks on Next button
    And User selects <Injury> for do you have an injury or illness caused by serving in the armed forces
    And User clicks on Next button
    And User selects <Diabetes> for do you have diabetes
    And User clicks on Next button
    And User selects <NHSCharges> for to check what help you can get with NHS charges
    And User clicks on Next button
    And User selects <Glaucoma> for do you have glaucoma
    And User clicks on Next button
    And User selects <CareHome> for do you live permanently in a care home
    And User clicks on Next button
    And User selects <Investements> for do you have more than £16000 in savings, investments or property
    And User clicks on Next button
    And User could get help to pay for your NHS costs

    Examples:
      |BirthDate          |LiveWithPartner|TaxBenefits|UniversalCredit|Benefits   |TaxCreditType                                                    |Income|Pregnant|Injury|Diabetes|NHSCharges|Glaucoma|CareHome|Investements|
      |Inbetween 18 to 60 |No             |Yes        |NOT YET        |Tax Credit |Working Tax Credit on its own, including a disability element    |No    |NO      |NO    |NO      |NO        |NO      |NO      |NO          |
      |Inbetween 18 to 60 |No             |Yes        |NOT YET        |Tax Credit |Working Tax Credit and Child Tax Credit together                 |NO    |NO      |NO    |NO      |NO        |NO      |NO      |NO          |
      |Inbetween 18 to 60 |No             |Yes        |NOT YET        |Tax Credit |Child Tax Credit on its own                                      |No    |NO      |NO    |NO      |NO        |NO      |NO      |NO          |
      |Inbetween 18 to 60 |No             |Yes        |NO             |Tax Credit |Working Tax Credit on its own, including a disability element    |No    |NO      |NO    |NO      |NO        |NO      |NO      |NO          |
      |Inbetween 18 to 60 |No             |Yes        |NO             |Tax Credit |Working Tax Credit and Child Tax Credit together                 |NO    |NO      |NO    |NO      |NO        |NO      |NO      |NO          |
      |Inbetween 18 to 60 |No             |Yes        |NO             |Tax Credit |Child Tax Credit on its own                                      |No    |NO      |NO    |NO      |NO        |NO      |NO      |NO          |


  @NHSBSA @Regression
  Scenario Outline: User verifies the NHS Cost with live without partner as no, tax credit income as yes
    Given User click on the start now button in the home page
    And User selects ENGLAND as country
    And User clicks on Next button
    And User selects No for GP practice in Scotland or Walves
    And User clicks on Next button
    And User selects ENGLAND as country for dental practice
    And User clicks on Next button
    And User enters the birthdate <BirthDate>
    And User clicks on Next button
    And User selects <LiveWithPartner> for do you live with a partner
    And User clicks on Next button
    And User selects <TaxBenefits> for do you claim any benefits or tax credits
    And User clicks on Next button
    And User selects <UniversalCredit> for do you get paid Universal Credit
    And User clicks on Next button
    And User clicks on Next button based on the <UniversalCredit>
    And User selects <Benefits> for do you get any of these benefits
    And User clicks on Next button
    And User selects <TaxCreditType> for which type of tax credit do you get
    And User clicks on Next button
    And User selects <Income> for is your household income £15276 or less
    And User clicks on Next button
    And User could get help to pay for your NHS costs

    Examples:
      |BirthDate          |LiveWithPartner|TaxBenefits|UniversalCredit|Benefits   |TaxCreditType                                                    |Income |
      |Inbetween 18 to 60 |NO             |Yes        |NOT YET        |Tax Credit |Working Tax Credit on its own, including a disability element    |YES    |
      |Inbetween 18 to 60 |NO             |Yes        |NOT YET        |Tax Credit |Working Tax Credit and Child Tax Credit together                 |YES    |
      |Inbetween 18 to 60 |NO             |Yes        |NOT YET        |Tax Credit |Child Tax Credit on its own                                      |YES    |
      |Inbetween 18 to 60 |NO             |Yes        |NO             |Tax Credit |Working Tax Credit on its own, including a disability element    |YES    |
      |Inbetween 18 to 60 |NO             |Yes        |NO             |Tax Credit |Working Tax Credit and Child Tax Credit together                 |YES    |
      |Inbetween 18 to 60 |NO             |Yes        |NO             |Tax Credit |Child Tax Credit on its own                                      |YES    |


  @NHSBSA @Regression
  Scenario Outline: User verifies the NHS Cost with live without partner as no, TaxCreditType as Working Tax Credit on its own
    Given User click on the start now button in the home page
    And User selects ENGLAND as country
    And User clicks on Next button
    And User selects No for GP practice in Scotland or Walves
    And User clicks on Next button
    And User selects ENGLAND as country for dental practice
    And User clicks on Next button
    And User enters the birthdate <BirthDate>
    And User clicks on Next button
    And User selects <LiveWithPartner> for do you live with a partner
    And User clicks on Next button
    And User selects <TaxBenefits> for do you claim any benefits or tax credits
    And User clicks on Next button
    And User selects <UniversalCredit> for do you get paid Universal Credit
    And User clicks on Next button
    And User clicks on Next button based on the <UniversalCredit>
    And User selects <Benefits> for do you get any of these benefits
    And User clicks on Next button
    And User selects <TaxCreditType> for which type of tax credit do you get
    And User clicks on Next button
    And User selects <Pregnant> for are you pregnant or have you given birth in the last 12 months
    And User clicks on Next button
    And User selects <Injury> for do you have an injury or illness caused by serving in the armed forces
    And User clicks on Next button
    And User selects <Diabetes> for do you have diabetes
    And User clicks on Next button
    And User selects <NHSCharges> for to check what help you can get with NHS charges
    And User clicks on Next button
    And User selects <Glaucoma> for do you have glaucoma
    And User clicks on Next button
    And User selects <CareHome> for do you live permanently in a care home
    And User clicks on Next button
    And User selects <Investements> for do you have more than £16000 in savings, investments or property
    And User clicks on Next button
    And User could get help to pay for your NHS costs

    Examples:
      |BirthDate          |LiveWithPartner|TaxBenefits|UniversalCredit|Benefits   |TaxCreditType                    |Pregnant|Injury|Diabetes|NHSCharges|Glaucoma|CareHome|Investements|
      |Inbetween 18 to 60 |NO             |Yes        |NOT YET        |Tax Credit |Working Tax Credit on its own    |NO      |NO    |NO      |NO        |NO      |NO      |NO          |
      |Inbetween 18 to 60 |NO             |Yes        |NO             |Tax Credit |Working Tax Credit on its own    |NO      |NO    |NO      |NO        |NO      |NO      |NO          |


  @NHSBSA @Regression
  Scenario Outline: User verifies the NHS Cost with live without partner as no,Tax Benefits as Income Support
    Given User click on the start now button in the home page
    And User selects ENGLAND as country
    And User clicks on Next button
    And User selects No for GP practice in Scotland or Walves
    And User clicks on Next button
    And User selects ENGLAND as country for dental practice
    And User clicks on Next button
    And User enters the birthdate <BirthDate>
    And User clicks on Next button
    And User selects <LiveWithPartner> for do you live with a partner
    And User clicks on Next button
    And User selects <TaxBenefits> for do you claim any benefits or tax credits
    And User clicks on Next button
    And User selects <UniversalCredit> for do you get paid Universal Credit
    And User clicks on Next button
    And User clicks on Next button based on the <UniversalCredit>
    And User selects <Benefits> for do you get any of these benefits
    And User clicks on Next button
    And User could get help to pay for your NHS costs

    Examples:
      |BirthDate          |LiveWithPartner|TaxBenefits|UniversalCredit|Benefits       |
      |Inbetween 18 to 60 |NO             |Yes        |NOT YET        |Income Support |
      |Inbetween 18 to 60 |NO             |Yes        |NO             |Income Support |


  @NHSBSA @Regression
  Scenario Outline: User verifies the NHS Cost with live without partner as no,ESA as Income Related ESA
    Given User click on the start now button in the home page
    And User selects ENGLAND as country
    And User clicks on Next button
    And User selects No for GP practice in Scotland or Walves
    And User clicks on Next button
    And User selects ENGLAND as country for dental practice
    And User clicks on Next button
    And User enters the birthdate <BirthDate>
    And User clicks on Next button
    And User selects <LiveWithPartner> for do you live with a partner
    And User clicks on Next button
    And User selects <TaxBenefits> for do you claim any benefits or tax credits
    And User clicks on Next button
    And User selects <UniversalCredit> for do you get paid Universal Credit
    And User clicks on Next button
    And User clicks on Next button based on the <UniversalCredit>
    And User selects <Benefits> for do you get any of these benefits
    And User clicks on Next button
    And User selects <ESA> for which type of Employment and Support Allowance ESA do you get
    And User clicks on Next button
    And User could get help to pay for your NHS costs

    Examples:
      |BirthDate          |LiveWithPartner|TaxBenefits|UniversalCredit|Benefits   |ESA                       |
      |Inbetween 18 to 60 |NO             |Yes        |NOT YET        |ESA        |Income Related ESA        |
      |Inbetween 18 to 60 |NO             |Yes        |NO             |ESA        |Income Related ESA        |


  @NHSBSA @Regression
  Scenario Outline: User verifies the NHS Cost with live without partner as Yes,ESA as Contribution Based ESA
    Given User click on the start now button in the home page
    And User selects ENGLAND as country
    And User clicks on Next button
    And User selects No for GP practice in Scotland or Walves
    And User clicks on Next button
    And User selects ENGLAND as country for dental practice
    And User clicks on Next button
    And User enters the birthdate <BirthDate>
    And User clicks on Next button
    And User selects <LiveWithPartner> for do you live with a partner
    And User clicks on Next button
    And User selects <TaxBenefits> for do you claim any benefits or tax credits
    And User clicks on Next button
    And User selects <UniversalCredit> for do you get paid Universal Credit
    And User clicks on Next button
    And User clicks on Next button based on the <UniversalCredit>
    And User selects <Benefits> for do you get any of these benefits
    And User clicks on Next button
    And User selects <ESA> for which type of Employment and Support Allowance ESA do you get
    And User clicks on Next button
    And User selects <Pregnant> for are you pregnant or have you given birth in the last 12 months
    And User clicks on Next button
    And User selects <Injury> for do you have an injury or illness caused by serving in the armed forces
    And User clicks on Next button
    And User selects <Diabetes> for do you have diabetes
    And User clicks on Next button
    And User selects <NHSCharges> for to check what help you can get with NHS charges
    And User clicks on Next button
    And User selects <Glaucoma> for do you have glaucoma
    And User clicks on Next button
    And User selects <CareHome> for do you live permanently in a care home
    And User clicks on Next button
    And User selects <Investements> for do you have more than £16000 in savings, investments or property
    And User clicks on Next button
    And User could get help to pay for your NHS costs

    Examples:
      |BirthDate          |LiveWithPartner|TaxBenefits|UniversalCredit|Benefits   |ESA                    |Pregnant|Injury|Diabetes|NHSCharges|Glaucoma|CareHome|Investements|
      |Inbetween 18 to 60 |NO             |Yes        |NOT YET        |ESA        |Contribution based ESA |NO      |NO    |NO      |NO        |NO      |NO      |NO          |
      |Inbetween 18 to 60 |NO             |Yes        |NO             |ESA        |Contribution based ESA |NO      |NO    |NO      |NO        |NO      |NO      |NO          |


  @NHSBSA @Regression
  Scenario Outline: User verifies the NHS Cost with live without partner as no, JSA as Income Related JSA
    Given User click on the start now button in the home page
    And User selects ENGLAND as country
    And User clicks on Next button
    And User selects No for GP practice in Scotland or Walves
    And User clicks on Next button
    And User selects ENGLAND as country for dental practice
    And User clicks on Next button
    And User enters the birthdate <BirthDate>
    And User clicks on Next button
    And User selects <LiveWithPartner> for do you live with a partner
    And User clicks on Next button
    And User selects <TaxBenefits> for do you claim any benefits or tax credits
    And User clicks on Next button
    And User selects <UniversalCredit> for do you get paid Universal Credit
    And User clicks on Next button
    And User clicks on Next button based on the <UniversalCredit>
    And User selects <Benefits> for do you get any of these benefits
    And User clicks on Next button
    And User selects <JSA> for which type of Jobseeker Allowance JSA do you get
    And User clicks on Next button
    And User could get help to pay for your NHS costs

    Examples:
      |BirthDate          |LiveWithPartner|TaxBenefits|UniversalCredit|Benefits   |JSA                       |
      |Inbetween 18 to 60 |NO             |Yes        |NOT YET        |JSA        |Income Related JSA        |
      |Inbetween 18 to 60 |NO             |Yes        |NO             |JSA        |Income Related JSA        |


  @NHSBSA @Regression
  Scenario Outline: User verifies the NHS Cost with live without partner as no, JSA as Contribution Based JSA
    Given User click on the start now button in the home page
    And User selects ENGLAND as country
    And User clicks on Next button
    And User selects No for GP practice in Scotland or Walves
    And User clicks on Next button
    And User selects ENGLAND as country for dental practice
    And User clicks on Next button
    And User enters the birthdate <BirthDate>
    And User clicks on Next button
    And User selects <LiveWithPartner> for do you live with a partner
    And User clicks on Next button
    And User selects <TaxBenefits> for do you claim any benefits or tax credits
    And User clicks on Next button
    And User selects <UniversalCredit> for do you get paid Universal Credit
    And User clicks on Next button
    And User clicks on Next button based on the <UniversalCredit>
    And User selects <Benefits> for do you get any of these benefits
    And User clicks on Next button
    And User selects <JSA> for which type of Jobseeker Allowance JSA do you get
    And User clicks on Next button
    And User selects <Pregnant> for are you pregnant or have you given birth in the last 12 months
    And User clicks on Next button
    And User selects <Injury> for do you have an injury or illness caused by serving in the armed forces
    And User clicks on Next button
    And User selects <Diabetes> for do you have diabetes
    And User clicks on Next button
    And User selects <NHSCharges> for to check what help you can get with NHS charges
    And User clicks on Next button
    And User selects <Glaucoma> for do you have glaucoma
    And User clicks on Next button
    And User selects <CareHome> for do you live permanently in a care home
    And User clicks on Next button
    And User selects <Investements> for do you have more than £16000 in savings, investments or property
    And User clicks on Next button
    And User could get help to pay for your NHS costs

    Examples:
      |BirthDate          |LiveWithPartner|TaxBenefits|UniversalCredit|Benefits   |JSA                    |Pregnant|Injury|Diabetes|NHSCharges|Glaucoma|CareHome|Investements|
      |Inbetween 18 to 60 |NO             |Yes        |NOT YET        |JSA        |Contribution based JSA |NO      |NO    |NO      |NO        |NO      |NO      |NO          |
      |Inbetween 18 to 60 |NO             |Yes        |NO             |JSA        |Contribution based JSA |NO      |NO    |NO      |NO        |NO      |NO      |NO          |


  @NHSBSA @Regression
  Scenario Outline: User verifies the NHS Cost with live without partner as no, PensionCredit as Credit Only
    Given User click on the start now button in the home page
    And User selects ENGLAND as country
    And User clicks on Next button
    And User selects No for GP practice in Scotland or Walves
    And User clicks on Next button
    And User selects ENGLAND as country for dental practice
    And User clicks on Next button
    And User enters the birthdate <BirthDate>
    And User clicks on Next button
    And User selects <LiveWithPartner> for do you live with a partner
    And User clicks on Next button
    And User selects <TaxBenefits> for do you claim any benefits or tax credits
    And User clicks on Next button
    And User selects <UniversalCredit> for do you get paid Universal Credit
    And User clicks on Next button
    And User clicks on Next button based on the <UniversalCredit>
    And User selects <Benefits> for do you get any of these benefits
    And User clicks on Next button
    And User selects <PensionCredit> for what type of Pension Credit do you get
    And User clicks on Next button
    And User could get help to pay for your NHS costs

    Examples:
      |BirthDate          |LiveWithPartner|TaxBenefits|UniversalCredit|Benefits              |PensionCredit                       |
      |Inbetween 18 to 60 |NO             |Yes        |NOT YET        |Pension Credit        |Guarantee Credit only               |
      |Inbetween 18 to 60 |NO             |Yes        |NOT YET         |Pension Credit        |Guarantee Credit with Savings Credit|
      |Inbetween 18 to 60 |NO             |Yes        |NO             |Pension Credit        |Guarantee Credit only               |
      |Inbetween 18 to 60 |NO             |Yes        |NO             |Pension Credit        |Guarantee Credit with Savings Credit|


  @NHSBSA @Regression
  Scenario Outline: User verifies the NHS Cost with live without partner as no, PensionCredit as Saving Only
    Given User click on the start now button in the home page
    And User selects ENGLAND as country
    And User clicks on Next button
    And User selects No for GP practice in Scotland or Walves
    And User clicks on Next button
    And User selects ENGLAND as country for dental practice
    And User clicks on Next button
    And User enters the birthdate <BirthDate>
    And User clicks on Next button
    And User selects <LiveWithPartner> for do you live with a partner
    And User clicks on Next button
    And User selects <TaxBenefits> for do you claim any benefits or tax credits
    And User clicks on Next button
    And User selects <UniversalCredit> for do you get paid Universal Credit
    And User clicks on Next button
    And User clicks on Next button based on the <UniversalCredit>
    And User selects <Benefits> for do you get any of these benefits
    And User clicks on Next button
    And User selects <PensionCredit> for what type of Pension Credit do you get
    And User clicks on Next button
    And User selects <Pregnant> for are you pregnant or have you given birth in the last 12 months
    And User clicks on Next button
    And User selects <Injury> for do you have an injury or illness caused by serving in the armed forces
    And User clicks on Next button
    And User selects <Diabetes> for do you have diabetes
    And User clicks on Next button
    And User selects <NHSCharges> for to check what help you can get with NHS charges
    And User clicks on Next button
    And User selects <Glaucoma> for do you have glaucoma
    And User clicks on Next button
    And User selects <CareHome> for do you live permanently in a care home
    And User clicks on Next button
    And User selects <Investements> for do you have more than £16000 in savings, investments or property
    And User clicks on Next button
    And User could get help to pay for your NHS costs

    Examples:
      |BirthDate          |LiveWithPartner|TaxBenefits|UniversalCredit|Benefits              |PensionCredit  |Pregnant|Injury|Diabetes|NHSCharges|Glaucoma|CareHome|Investements|
      |Inbetween 18 to 60 |NO             |Yes        |NOT YET        |Pension Credit        |Savings Credit |NO      |NO    |NO      |NO        |NO      |NO      |NO          |
      |Inbetween 18 to 60 |NO             |Yes        |NO             |Pension Credit        |Savings Credit |NO      |NO    |NO      |NO        |NO      |NO      |NO          |




  @NHSBSA @Regression
  Scenario Outline: User verifies the NHS Cost with live without partner as no, benefits as no
    Given User click on the start now button in the home page
    And User selects ENGLAND as country
    And User clicks on Next button
    And User selects No for GP practice in Scotland or Walves
    And User clicks on Next button
    And User selects ENGLAND as country for dental practice
    And User clicks on Next button
    And User enters the birthdate <BirthDate>
    And User clicks on Next button
    And User selects <LiveWithPartner> for do you live with a partner
    And User clicks on Next button
    And User selects <TaxBenefits> for do you claim any benefits or tax credits
    And User clicks on Next button
    And User selects <UniversalCredit> for do you get paid Universal Credit
    And User clicks on Next button
    And User clicks on Next button based on the <UniversalCredit>
    And User selects <Benefits> for do you get any of these benefits
    And User clicks on Next button
    And User selects <Pregnant> for are you pregnant or have you given birth in the last 12 months
    And User clicks on Next button
    And User selects <Injury> for do you have an injury or illness caused by serving in the armed forces
    And User clicks on Next button
    And User selects <Diabetes> for do you have diabetes
    And User clicks on Next button
    And User selects <NHSCharges> for to check what help you can get with NHS charges
    And User clicks on Next button
    And User selects <Glaucoma> for do you have glaucoma
    And User clicks on Next button
    And User selects <CareHome> for do you live permanently in a care home
    And User clicks on Next button
    And User selects <Investements> for do you have more than £16000 in savings, investments or property
    And User clicks on Next button
    And User could get help to pay for your NHS costs

    Examples:
      |BirthDate          |LiveWithPartner|TaxBenefits|UniversalCredit|Benefits  |Pregnant|Injury|Diabetes|NHSCharges|Glaucoma|CareHome|Investements|
      |Inbetween 18 to 60 |NO             |Yes        |NOT YET        |No        |NO      |NO    |NO      |NO        |NO      |NO      |NO          |
      |Inbetween 18 to 60 |NO             |Yes        |NO             |No        |NO      |NO    |NO      |NO        |NO      |NO      |NO          |


  @NHSBSA @Regression
  Scenario Outline: User verifies the NHS Cost with live without partner as no, take home as no
    Given User click on the start now button in the home page
    And User selects ENGLAND as country
    And User clicks on Next button
    And User selects No for GP practice in Scotland or Walves
    And User clicks on Next button
    And User selects ENGLAND as country for dental practice
    And User clicks on Next button
    And User enters the birthdate <BirthDate>
    And User clicks on Next button
    And User selects <LiveWithPartner> for do you live with a partner
    And User clicks on Next button
    And User selects <TaxBenefits> for do you claim any benefits or tax credits
    And User clicks on Next button
    And User selects <UniversalCredit> for do you get paid Universal Credit
    And User clicks on Next button
    And User selects <JointUniversal> for as part of your joint Universal Credit do you have any of these
    And User clicks on Next button
    And User selects <TakeHomeBool> for did you have a combined take-home pay of <TakeHomeValue> or less in your last Universal Credit period
    And User clicks on Next button
    And User selects <Pregnant> for are you pregnant or have you given birth in the last 12 months
    And User clicks on Next button
    And User selects <Injury> for do you have an injury or illness caused by serving in the armed forces
    And User clicks on Next button
    And User selects <Diabetes> for do you have diabetes
    And User clicks on Next button
    And User selects <NHSCharges> for to check what help you can get with NHS charges
    And User clicks on Next button
    And User selects <Glaucoma> for do you have glaucoma
    And User clicks on Next button
    And User selects <CareHome> for do you live permanently in a care home
    And User clicks on Next button
    And User selects <Investements> for do you have more than £16000 in savings, investments or property
    And User clicks on Next button
    And User could get help to pay for your NHS costs

    Examples:
      |BirthDate          |LiveWithPartner|TaxBenefits|UniversalCredit|JointUniversal  |TakeHomeBool    |TakeHomeValue |Pregnant|Injury|Diabetes|NHSCharges|Glaucoma|CareHome|Investements|
      |Inbetween 18 to 60 |NO             |Yes        |Yes            |Yes             |No              |$935          |NO      |NO    |NO      |NO        |NO      |NO      |NO          |
      |Inbetween 18 to 60 |NO             |Yes        |Yes            |No              |No              |$435          |NO      |NO    |NO      |NO        |NO      |NO      |NO          |


  @NHSBSA @Regression
  Scenario Outline: User verifies the NHS Cost with live without partner as no, take home as yes
    Given User click on the start now button in the home page
    And User selects ENGLAND as country
    And User clicks on Next button
    And User selects No for GP practice in Scotland or Walves
    And User clicks on Next button
    And User selects ENGLAND as country for dental practice
    And User clicks on Next button
    And User enters the birthdate <BirthDate>
    And User clicks on Next button
    And User selects <LiveWithPartner> for do you live with a partner
    And User clicks on Next button
    And User selects <TaxBenefits> for do you claim any benefits or tax credits
    And User clicks on Next button
    And User selects <UniversalCredit> for do you get paid Universal Credit
    And User clicks on Next button
    And User selects <JointUniversal> for as part of your joint Universal Credit do you have any of these
    And User clicks on Next button
    And User selects <TakeHomeBool> for did you have a combined take-home pay of <TakeHomeValue> or less in your last Universal Credit period
    And User clicks on Next button
    And User could get help to pay for your NHS costs

    Examples:
      |BirthDate          |LiveWithPartner|TaxBenefits|UniversalCredit|JointUniversal  |TakeHomeBool    |TakeHomeValue |Pregnant|Injury|Diabetes|NHSCharges|Glaucoma|CareHome|Investements|
      |Inbetween 18 to 60 |NO             |Yes        |Yes            |Yes             |Yes             |$935          |NO      |NO    |NO      |NO        |NO      |NO      |NO          |
      |Inbetween 18 to 60 |NO             |Yes        |Yes            |No              |Yes             |$435          |NO      |NO    |NO      |NO        |NO      |NO      |NO          |


    ##########################   Live With Partner ###########################################
  @NHSBSA @Regression
  Scenario Outline: User verifies the NHS Cost with live without partner as yes, tax credit income as no
    Given User click on the start now button in the home page
    And User selects ENGLAND as country
    And User clicks on Next button
    And User selects No for GP practice in Scotland or Walves
    And User clicks on Next button
    And User selects ENGLAND as country for dental practice
    And User clicks on Next button
    And User enters the birthdate <BirthDate>
    And User clicks on Next button
    And User selects <LiveWithPartner> for do you live with a partner
    And User clicks on Next button
    And User selects <TaxBenefits> for do you or your partner claim any benefits or tax credits
    And User clicks on Next button
    And User selects <UniversalCredit> for do you or your partner get paid Universal Credit
    And User clicks on Next button
    And User clicks on Next button based on the <UniversalCredit>
    And User selects <Benefits> for do you or your partner get any of these benefits
    And User clicks on Next button
    And User selects <TaxCreditType> for which type of tax credit do you or your partner gets
    And User clicks on Next button
    And User selects <Income> for is your household income £15276 or less
    And User clicks on Next button
    And User selects <Pregnant> for are you pregnant or have you given birth in the last 12 months
    And User clicks on Next button
    And User selects <Injury> for do you have an injury or illness caused by serving in the armed forces
    And User clicks on Next button
    And User selects <Diabetes> for do you have diabetes
    And User clicks on Next button
    And User selects <NHSCharges> for to check what help you can get with NHS charges
    And User clicks on Next button
    And User selects <Glaucoma> for do you have glaucoma
    And User clicks on Next button
    And User selects <CareHome> for do you live permanently in a care home
    And User clicks on Next button
    And User selects <Investements> for do you have more than £16000 in savings, investments or property
    And User clicks on Next button
    And User could get help to pay for your NHS costs

    Examples:
      |BirthDate          |LiveWithPartner|TaxBenefits|UniversalCredit|Benefits   |TaxCreditType                                                    |Income|Pregnant|Injury|Diabetes|NHSCharges|Glaucoma|CareHome|Investements|
      |Inbetween 18 to 60 |Yes            |Yes        |NOT YET        |Tax Credit |Working Tax Credit on its own, including a disability element    |No  |NO      |NO    |NO      |NO        |NO      |NO      |NO          |
      |Inbetween 18 to 60 |Yes            |Yes        |NOT YET        |Tax Credit |Working Tax Credit and Child Tax Credit together                 |NO    |NO      |NO    |NO      |NO        |NO      |NO      |NO          |
      |Inbetween 18 to 60 |Yes            |Yes        |NOT YET        |Tax Credit |Child Tax Credit on its own                                      |No   |NO      |NO    |NO      |NO        |NO      |NO      |NO          |
      |Inbetween 18 to 60 |Yes            |Yes        |NO             |Tax Credit |Working Tax Credit on its own, including a disability element    |No  |NO      |NO    |NO      |NO        |NO      |NO      |NO          |
      |Inbetween 18 to 60 |Yes            |Yes        |NO             |Tax Credit |Working Tax Credit and Child Tax Credit together                 |NO    |NO      |NO    |NO      |NO        |NO      |NO      |NO          |
      |Inbetween 18 to 60 |Yes            |Yes        |NO             |Tax Credit |Child Tax Credit on its own                                      |No   |NO      |NO    |NO      |NO        |NO      |NO      |NO          |


  @NHSBSA @Regression
  Scenario Outline: User verifies the NHS Cost with live without partner as yes, tax credit income as yes
    Given User click on the start now button in the home page
    And User selects ENGLAND as country
    And User clicks on Next button
    And User selects No for GP practice in Scotland or Walves
    And User clicks on Next button
    And User selects ENGLAND as country for dental practice
    And User clicks on Next button
    And User enters the birthdate <BirthDate>
    And User clicks on Next button
    And User selects <LiveWithPartner> for do you live with a partner
    And User clicks on Next button
    And User selects <TaxBenefits> for do you or your partner claim any benefits or tax credits
    And User clicks on Next button
    And User selects <UniversalCredit> for do you or your partner get paid Universal Credit
    And User clicks on Next button
    And User clicks on Next button based on the <UniversalCredit>
    And User selects <Benefits> for do you or your partner get any of these benefits
    And User clicks on Next button
    And User selects <TaxCreditType> for which type of tax credit do you or your partner gets
    And User clicks on Next button
    And User selects <Income> for is your household income £15276 or less
    And User clicks on Next button
    And User could get help to pay for your NHS costs

    Examples:
      |BirthDate          |LiveWithPartner|TaxBenefits|UniversalCredit|Benefits   |TaxCreditType                                                    |Income |
      |Inbetween 18 to 60 |Yes            |Yes        |NOT YET        |Tax Credit |Working Tax Credit on its own, including a disability element    |YES    |
      |Inbetween 18 to 60 |Yes            |Yes        |NOT YET        |Tax Credit |Working Tax Credit and Child Tax Credit together                 |YES    |
      |Inbetween 18 to 60 |Yes            |Yes        |NOT YET        |Tax Credit |Child Tax Credit on its own                                      |YeS    |
      |Inbetween 18 to 60 |Yes            |Yes        |NO             |Tax Credit |Working Tax Credit on its own, including a disability element    |YES    |
      |Inbetween 18 to 60 |Yes            |Yes        |NO             |Tax Credit |Working Tax Credit and Child Tax Credit together                 |YES    |
      |Inbetween 18 to 60 |Yes            |Yes        |NO             |Tax Credit |Child Tax Credit on its own                                      |YeS    |


  @NHSBSA @Regression
  Scenario Outline: User verifies the NHS Cost with live without partner as yes, TaxCreditType as Working Tax Credit on its own
    Given User click on the start now button in the home page
    And User selects ENGLAND as country
    And User clicks on Next button
    And User selects No for GP practice in Scotland or Walves
    And User clicks on Next button
    And User selects ENGLAND as country for dental practice
    And User clicks on Next button
    And User enters the birthdate <BirthDate>
    And User clicks on Next button
    And User selects <LiveWithPartner> for do you live with a partner
    And User clicks on Next button
    And User selects <TaxBenefits> for do you or your partner claim any benefits or tax credits
    And User clicks on Next button
    And User selects <UniversalCredit> for do you or your partner get paid Universal Credit
    And User clicks on Next button
    And User clicks on Next button based on the <UniversalCredit>
    And User selects <Benefits> for do you or your partner get any of these benefits
    And User clicks on Next button
    And User selects <TaxCreditType> for which type of tax credit do you or your partner gets
    And User clicks on Next button
    And User selects <Pregnant> for are you pregnant or have you given birth in the last 12 months
    And User clicks on Next button
    And User selects <Injury> for do you have an injury or illness caused by serving in the armed forces
    And User clicks on Next button
    And User selects <Diabetes> for do you have diabetes
    And User clicks on Next button
    And User selects <NHSCharges> for to check what help you can get with NHS charges
    And User clicks on Next button
    And User selects <Glaucoma> for do you have glaucoma
    And User clicks on Next button
    And User selects <CareHome> for do you live permanently in a care home
    And User clicks on Next button
    And User selects <Investements> for do you have more than £16000 in savings, investments or property
    And User clicks on Next button
    And User could get help to pay for your NHS costs

    Examples:
      |BirthDate          |LiveWithPartner|TaxBenefits|UniversalCredit|Benefits   |TaxCreditType                    |Pregnant|Injury|Diabetes|NHSCharges|Glaucoma|CareHome|Investements|
      |Inbetween 18 to 60 |Yes            |Yes        |NOT YET        |Tax Credit |Working Tax Credit on its own    |NO      |NO    |NO      |NO        |NO      |NO      |NO          |
      |Inbetween 18 to 60 |Yes            |Yes        |NO             |Tax Credit |Working Tax Credit on its own    |NO      |NO    |NO      |NO        |NO      |NO      |NO          |


  @NHSBSA @Regression
  Scenario Outline: User verifies the NHS Cost with live without partner as Yes,Tax Benefits as Income Support
    Given User click on the start now button in the home page
    And User selects ENGLAND as country
    And User clicks on Next button
    And User selects No for GP practice in Scotland or Walves
    And User clicks on Next button
    And User selects ENGLAND as country for dental practice
    And User clicks on Next button
    And User enters the birthdate <BirthDate>
    And User clicks on Next button
    And User selects <LiveWithPartner> for do you live with a partner
    And User clicks on Next button
    And User selects <TaxBenefits> for do you or your partner claim any benefits or tax credits
    And User clicks on Next button
    And User selects <UniversalCredit> for do you or your partner get paid Universal Credit
    And User clicks on Next button
    And User clicks on Next button based on the <UniversalCredit>
    And User selects <Benefits> for do you or your partner get any of these benefits
    And User clicks on Next button
    And User could get help to pay for your NHS costs

    Examples:
      |BirthDate          |LiveWithPartner|TaxBenefits|UniversalCredit|Benefits       |
      |Inbetween 18 to 60 |Yes            |Yes        |NOT YET        |Income Support |
      |Inbetween 18 to 60 |Yes            |Yes        |NO             |Income Support |


  @NHSBSA @Regression
  Scenario Outline: User verifies the NHS Cost with live without partner as yes,ESA as Income Related ESA
    Given User click on the start now button in the home page
    And User selects ENGLAND as country
    And User clicks on Next button
    And User selects No for GP practice in Scotland or Walves
    And User clicks on Next button
    And User selects ENGLAND as country for dental practice
    And User clicks on Next button
    And User enters the birthdate <BirthDate>
    And User clicks on Next button
    And User selects <LiveWithPartner> for do you live with a partner
    And User clicks on Next button
    And User selects <TaxBenefits> for do you or your partner claim any benefits or tax credits
    And User clicks on Next button
    And User selects <UniversalCredit> for do you or your partner get paid Universal Credit
    And User clicks on Next button
    And User clicks on Next button based on the <UniversalCredit>
    And User selects <Benefits> for do you or your partner get any of these benefits
    And User clicks on Next button
    And User selects <ESA> for which type of Employment and Support Allowance ESA do you or your partner get
    And User clicks on Next button
    And User could get help to pay for your NHS costs

    Examples:
      |BirthDate          |LiveWithPartner|TaxBenefits|UniversalCredit|Benefits   |ESA                       |
      |Inbetween 18 to 60 |Yes            |Yes        |NOT YET        |ESA        |Income Related ESA        |
      |Inbetween 18 to 60 |Yes            |Yes        |NO             |ESA        |Income Related ESA        |


  @NHSBSA @Regression
  Scenario Outline: User verifies the NHS Cost with live without partner as yes,ESA as Contribution Based ESA
    Given User click on the start now button in the home page
    And User selects ENGLAND as country
    And User clicks on Next button
    And User selects No for GP practice in Scotland or Walves
    And User clicks on Next button
    And User selects ENGLAND as country for dental practice
    And User clicks on Next button
    And User enters the birthdate <BirthDate>
    And User clicks on Next button
    And User selects <LiveWithPartner> for do you live with a partner
    And User clicks on Next button
    And User selects <TaxBenefits> for do you or your partner claim any benefits or tax credits
    And User clicks on Next button
    And User selects <UniversalCredit> for do you or your partner get paid Universal Credit
    And User clicks on Next button
    And User clicks on Next button based on the <UniversalCredit>
    And User selects <Benefits> for do you or your partner get any of these benefits
    And User clicks on Next button
    And User selects <ESA> for which type of Employment and Support Allowance ESA do you or your partner get
    And User clicks on Next button
    And User selects <Pregnant> for are you pregnant or have you given birth in the last 12 months
    And User clicks on Next button
    And User selects <Injury> for do you have an injury or illness caused by serving in the armed forces
    And User clicks on Next button
    And User selects <Diabetes> for do you have diabetes
    And User clicks on Next button
    And User selects <NHSCharges> for to check what help you can get with NHS charges
    And User clicks on Next button
    And User selects <Glaucoma> for do you have glaucoma
    And User clicks on Next button
    And User selects <CareHome> for do you live permanently in a care home
    And User clicks on Next button
    And User selects <Investements> for do you have more than £16000 in savings, investments or property
    And User clicks on Next button
    And User could get help to pay for your NHS costs

    Examples:
      |BirthDate          |LiveWithPartner|TaxBenefits|UniversalCredit|Benefits   |ESA                    |Pregnant|Injury|Diabetes|NHSCharges|Glaucoma|CareHome|Investements|
      |Inbetween 18 to 60 |Yes            |Yes        |NOT YET        |ESA        |Contribution based ESA |NO      |NO    |NO      |NO        |NO      |NO      |NO          |
      |Inbetween 18 to 60 |Yes            |Yes        |NO             |ESA        |Contribution based ESA |NO      |NO    |NO      |NO        |NO      |NO      |NO          |


  @NHSBSA @Regression
  Scenario Outline: User verifies the NHS Cost with live without partner as yes, JSA as Income Related JSA
    Given User click on the start now button in the home page
    And User selects ENGLAND as country
    And User clicks on Next button
    And User selects No for GP practice in Scotland or Walves
    And User clicks on Next button
    And User selects ENGLAND as country for dental practice
    And User clicks on Next button
    And User enters the birthdate <BirthDate>
    And User clicks on Next button
    And User selects <LiveWithPartner> for do you live with a partner
    And User clicks on Next button
    And User selects <TaxBenefits> for do you or your partner claim any benefits or tax credits
    And User clicks on Next button
    And User selects <UniversalCredit> for do you or your partner get paid Universal Credit
    And User clicks on Next button
    And User clicks on Next button based on the <UniversalCredit>
    And User selects <Benefits> for do you or your partner get any of these benefits
    And User clicks on Next button
    And User selects <JSA> for which type of Jobseeker Allowance JSA do you or your partner get
    And User clicks on Next button
    And User could get help to pay for your NHS costs

    Examples:
      |BirthDate          |LiveWithPartner|TaxBenefits|UniversalCredit|Benefits   |JSA                       |
      |Inbetween 18 to 60 |Yes            |Yes        |NOT YET        |JSA        |Income Related JSA        |
      |Inbetween 18 to 60 |Yes            |Yes        |NO             |JSA        |Income Related JSA        |


  @NHSBSA @Regression
  Scenario Outline: User verifies the NHS Cost with live without partner as yes, JSA as Contribution Based JSA
    Given User click on the start now button in the home page
    And User selects ENGLAND as country
    And User clicks on Next button
    And User selects No for GP practice in Scotland or Walves
    And User clicks on Next button
    And User selects ENGLAND as country for dental practice
    And User clicks on Next button
    And User enters the birthdate <BirthDate>
    And User clicks on Next button
    And User selects <LiveWithPartner> for do you live with a partner
    And User clicks on Next button
    And User selects <TaxBenefits> for do you or your partner claim any benefits or tax credits
    And User clicks on Next button
    And User selects <UniversalCredit> for do you or your partner get paid Universal Credit
    And User clicks on Next button
    And User clicks on Next button based on the <UniversalCredit>
    And User selects <Benefits> for do you or your partner get any of these benefits
    And User clicks on Next button
    And User selects <JSA> for which type of Jobseeker Allowance JSA do you or your partner get
    And User clicks on Next button
    And User selects <Pregnant> for are you pregnant or have you given birth in the last 12 months
    And User clicks on Next button
    And User selects <Injury> for do you have an injury or illness caused by serving in the armed forces
    And User clicks on Next button
    And User selects <Diabetes> for do you have diabetes
    And User clicks on Next button
    And User selects <NHSCharges> for to check what help you can get with NHS charges
    And User clicks on Next button
    And User selects <Glaucoma> for do you have glaucoma
    And User clicks on Next button
    And User selects <CareHome> for do you live permanently in a care home
    And User clicks on Next button
    And User selects <Investements> for do you have more than £16000 in savings, investments or property
    And User clicks on Next button
    And User could get help to pay for your NHS costs

    Examples:
      |BirthDate          |LiveWithPartner|TaxBenefits|UniversalCredit|Benefits   |JSA                    |Pregnant|Injury|Diabetes|NHSCharges|Glaucoma|CareHome|Investements|
      |Inbetween 18 to 60 |Yes            |Yes        |NOT YET        |JSA        |Contribution based JSA |NO      |NO    |NO      |NO        |NO      |NO      |NO          |
      |Inbetween 18 to 60 |Yes            |Yes        |NO             |JSA        |Contribution based JSA |NO      |NO    |NO      |NO        |NO      |NO      |NO          |


  @NHSBSA @Regression
  Scenario Outline: User verifies the NHS Cost with live without partner as yes, PensionCredit as Credit Only
    Given User click on the start now button in the home page
    And User selects ENGLAND as country
    And User clicks on Next button
    And User selects No for GP practice in Scotland or Walves
    And User clicks on Next button
    And User selects ENGLAND as country for dental practice
    And User clicks on Next button
    And User enters the birthdate <BirthDate>
    And User clicks on Next button
    And User selects <LiveWithPartner> for do you live with a partner
    And User clicks on Next button
    And User selects <TaxBenefits> for do you or your partner claim any benefits or tax credits
    And User clicks on Next button
    And User selects <UniversalCredit> for do you or your partner get paid Universal Credit
    And User clicks on Next button
    And User clicks on Next button based on the <UniversalCredit>
    And User selects <Benefits> for do you or your partner get any of these benefits
    And User clicks on Next button
    And User selects <PensionCredit> for what type of Pension Credit do you or your partner get
    And User clicks on Next button
    And User could get help to pay for your NHS costs

    Examples:
      |BirthDate          |LiveWithPartner|TaxBenefits|UniversalCredit|Benefits              |PensionCredit                       |
      |Inbetween 18 to 60 |Yes            |Yes        |NOT YET        |Pension Credit        |Guarantee Credit only               |
      |Inbetween 18 to 60 |Yes            |Yes        |NOT YET         |Pension Credit        |Guarantee Credit with Savings Credit|
      |Inbetween 18 to 60 |Yes            |Yes        |NO             |Pension Credit        |Guarantee Credit only               |
      |Inbetween 18 to 60 |Yes            |Yes        |NO             |Pension Credit        |Guarantee Credit with Savings Credit|


  @NHSBSA @Regression
  Scenario Outline: User verifies the NHS Cost with live without partner as yes, PensionCredit as Savings Only
    Given User click on the start now button in the home page
    And User selects ENGLAND as country
    And User clicks on Next button
    And User selects No for GP practice in Scotland or Walves
    And User clicks on Next button
    And User selects ENGLAND as country for dental practice
    And User clicks on Next button
    And User enters the birthdate <BirthDate>
    And User clicks on Next button
    And User selects <LiveWithPartner> for do you live with a partner
    And User clicks on Next button
    And User selects <TaxBenefits> for do you or your partner claim any benefits or tax credits
    And User clicks on Next button
    And User selects <UniversalCredit> for do you or your partner get paid Universal Credit
    And User clicks on Next button
    And User clicks on Next button based on the <UniversalCredit>
    And User selects <Benefits> for do you or your partner get any of these benefits
    And User clicks on Next button
    And User selects <PensionCredit> for what type of Pension Credit do you or your partner get
    And User clicks on Next button
    And User selects <Pregnant> for are you pregnant or have you given birth in the last 12 months
    And User clicks on Next button
    And User selects <Injury> for do you have an injury or illness caused by serving in the armed forces
    And User clicks on Next button
    And User selects <Diabetes> for do you have diabetes
    And User clicks on Next button
    And User selects <NHSCharges> for to check what help you can get with NHS charges
    And User clicks on Next button
    And User selects <Glaucoma> for do you have glaucoma
    And User clicks on Next button
    And User selects <CareHome> for do you live permanently in a care home
    And User clicks on Next button
    And User selects <Investements> for do you have more than £16000 in savings, investments or property
    And User clicks on Next button
    And User could get help to pay for your NHS costs

    Examples:
      |BirthDate          |LiveWithPartner|TaxBenefits|UniversalCredit|Benefits              |PensionCredit  |Pregnant|Injury|Diabetes|NHSCharges|Glaucoma|CareHome|Investements|
      |Inbetween 18 to 60 |Yes            |Yes        |NOT YET        |Pension Credit        |Savings Credit |NO      |NO    |NO      |NO        |NO      |NO      |NO          |
      |Inbetween 18 to 60 |Yes            |Yes        |NO             |Pension Credit        |Savings Credit |NO      |NO    |NO      |NO        |NO      |NO      |NO          |




  @NHSBSA @Regression
  Scenario Outline: User verifies the NHS Cost with live without partner as yes, benefits as no
    Given User click on the start now button in the home page
    And User selects ENGLAND as country
    And User clicks on Next button
    And User selects No for GP practice in Scotland or Walves
    And User clicks on Next button
    And User selects ENGLAND as country for dental practice
    And User clicks on Next button
    And User enters the birthdate <BirthDate>
    And User clicks on Next button
    And User selects <LiveWithPartner> for do you live with a partner
    And User clicks on Next button
    And User selects <TaxBenefits> for do you or your partner claim any benefits or tax credits
    And User clicks on Next button
    And User selects <UniversalCredit> for do you or your partner get paid Universal Credit
    And User clicks on Next button
    And User clicks on Next button based on the <UniversalCredit>
    And User selects <Benefits> for do you or your partner get any of these benefits
    And User clicks on Next button
    And User selects <Pregnant> for are you pregnant or have you given birth in the last 12 months
    And User clicks on Next button
    And User selects <Injury> for do you have an injury or illness caused by serving in the armed forces
    And User clicks on Next button
    And User selects <Diabetes> for do you have diabetes
    And User clicks on Next button
    And User selects <NHSCharges> for to check what help you can get with NHS charges
    And User clicks on Next button
    And User selects <Glaucoma> for do you have glaucoma
    And User clicks on Next button
    And User selects <CareHome> for do you live permanently in a care home
    And User clicks on Next button
    And User selects <Investements> for do you have more than £16000 in savings, investments or property
    And User clicks on Next button
    And User could get help to pay for your NHS costs

    Examples:
      |BirthDate          |LiveWithPartner|TaxBenefits|UniversalCredit|Benefits  |Pregnant|Injury|Diabetes|NHSCharges|Glaucoma|CareHome|Investements|
      |Inbetween 18 to 60 |Yes            |Yes        |NOT YET        |No        |NO      |NO    |NO      |NO        |NO      |NO      |NO          |
      |Inbetween 18 to 60 |Yes            |Yes        |NO             |No        |NO      |NO    |NO      |NO        |NO      |NO      |NO          |


  @NHSBSA @Regression
  Scenario Outline: User verifies the NHS Cost with live without partner as yes, take home as no
    Given User click on the start now button in the home page
    And User selects ENGLAND as country
    And User clicks on Next button
    And User selects No for GP practice in Scotland or Walves
    And User clicks on Next button
    And User selects ENGLAND as country for dental practice
    And User clicks on Next button
    And User enters the birthdate <BirthDate>
    And User clicks on Next button
    And User selects <LiveWithPartner> for do you live with a partner
    And User clicks on Next button
    And User selects <TaxBenefits> for do you or your partner claim any benefits or tax credits
    And User clicks on Next button
    And User selects <UniversalCredit> for do you or your partner get paid Universal Credit
    And User clicks on Next button
    And User selects <JointUniversal> for as part of your joint Universal Credit do you have any of these
    And User clicks on Next button
    And User selects <TakeHomeBool> for did you and your partner have a combined take-home pay of <TakeHomeValue> or less in your last Universal Credit period
    And User clicks on Next button
    And User selects <Pregnant> for are you pregnant or have you given birth in the last 12 months
    And User clicks on Next button
    And User selects <Injury> for do you have an injury or illness caused by serving in the armed forces
    And User clicks on Next button
    And User selects <Diabetes> for do you have diabetes
    And User clicks on Next button
    And User selects <NHSCharges> for to check what help you can get with NHS charges
    And User clicks on Next button
    And User selects <Glaucoma> for do you have glaucoma
    And User clicks on Next button
    And User selects <CareHome> for do you live permanently in a care home
    And User clicks on Next button
    And User selects <Investements> for do you have more than £16000 in savings, investments or property
    And User clicks on Next button
    And User could get help to pay for your NHS costs

    Examples:
      |BirthDate          |LiveWithPartner|TaxBenefits|UniversalCredit|JointUniversal  |TakeHomeBool    |TakeHomeValue |Pregnant|Injury|Diabetes|NHSCharges|Glaucoma|CareHome|Investements|
      |Inbetween 18 to 60 |Yes            |Yes        |Yes            |Yes             |No              |$935          |NO      |NO    |NO      |NO        |NO      |NO      |NO          |
      |Inbetween 18 to 60 |Yes            |Yes        |Yes            |No              |No              |$435          |NO      |NO    |NO      |NO        |NO      |NO      |NO          |


  @NHSBSA @Regression
  Scenario Outline: User verifies the NHS Cost with live without partner as yes, take home as yes
    Given User click on the start now button in the home page
    And User selects ENGLAND as country
    And User clicks on Next button
    And User selects No for GP practice in Scotland or Walves
    And User clicks on Next button
    And User selects ENGLAND as country for dental practice
    And User clicks on Next button
    And User enters the birthdate <BirthDate>
    And User clicks on Next button
    And User selects <LiveWithPartner> for do you live with a partner
    And User clicks on Next button
    And User selects <TaxBenefits> for do you or your partner claim any benefits or tax credits
    And User clicks on Next button
    And User selects <UniversalCredit> for do you or your partner get paid Universal Credit
    And User clicks on Next button
    And User selects <JointUniversal> for as part of your joint Universal Credit do you have any of these
    And User clicks on Next button
    And User selects <TakeHomeBool> for did you and your partner have a combined take-home pay of <TakeHomeValue> or less in your last Universal Credit period
    And User clicks on Next button
    And User could get help to pay for your NHS costs

    Examples:
      |BirthDate          |LiveWithPartner|TaxBenefits|UniversalCredit|JointUniversal  |TakeHomeBool    |TakeHomeValue |Pregnant|Injury|Diabetes|NHSCharges|Glaucoma|CareHome|Investements|
      |Inbetween 18 to 60 |Yes            |Yes        |Yes            |Yes             |Yes             |$935          |NO      |NO    |NO      |NO        |NO      |NO      |NO          |
      |Inbetween 18 to 60 |Yes            |Yes        |Yes            |No              |Yes             |$435          |NO      |NO    |NO      |NO        |NO      |NO      |NO          |
