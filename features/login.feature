Feature: Adding product and doing GuestUser Checkout

  @SKII
  Scenario Outline: Launching the URL and selecting the product
    Given Launching the URL
    When Navigate to ShopAll page
    Then validate the <product> text in ShopAll page
    Then Select the <product> in ShopAll page and adding to cart
    Then Click on checkout and proceed with GuestUser
    Then Entering Credit Card details like <creditcardNumber> <creditcardCVV> <creditcardName> <creditcardExpiry>

    Examples:
      | product               | creditcardNumber    | creditcardCVV | creditcardName | creditcardExpiry |
      | Facial Treatment Mask | 4111 1111 1111 1111 | 143           | Karthik        | 11/28            |
