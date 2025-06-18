module 0xSADC::SADC_CBDC {

    use std::signer;
    use std::vector;
    use std::string;
    use aptos_framework::coin;
    use aptos_framework::account;

    struct SADCZAR has store, drop {}

    public fun initialize(account: &signer) {
        coin::register<SADCZAR>(account);
        coin::initialize<SADCZAR>(
            account,
            b"CBDC ZAR",
            b"ZAR",
            2,
            false
        );
    }

    public fun issue_grant(admin: &signer, recipient: address, amount: u64) {
        assert!(signer::address_of(admin) == @0xSADC, 1);
        coin::mint<SADCZAR>(recipient, amount);
    }

    public fun transfer_with_tax(sender: &signer, recipient: address, amount: u64) {
        let tax = amount / 100 * 15;
        let send_amount = amount - tax;
        coin::transfer<SADCZAR>(sender, recipient, send_amount);
        coin::transfer<SADCZAR>(sender, @0xSADC, tax);
    }
}