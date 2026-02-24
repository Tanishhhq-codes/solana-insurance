use anchor_lang::prelude::*;

declare_id!("11111111111111111111111111111111");

#[program]
pub mod solana_insurance {
    use super::*;

    pub fn create_policy(
        ctx: Context<CreatePolicy>,
        location: String,
        rainfall_threshold: u64,
        premium: u64,
        payout: u64,
    ) -> Result<()> {

        let policy = &mut ctx.accounts.policy;

        policy.farmer = *ctx.accounts.farmer.key;
        policy.location = location;
        policy.rainfall_threshold = rainfall_threshold;
        policy.premium = premium;
        policy.payout = payout;
        policy.active = true;
        policy.paid_out = false;

        Ok(())
    }
}
#[account]
pub struct Policy {
    pub farmer: Pubkey,
    pub location: String,
    pub rainfall_threshold: u64,
    pub premium: u64,
    pub payout: u64,
    pub active: bool,
    pub paid_out: bool,
}
#[derive(Accounts)]
pub struct CreatePolicy<'info> {

    #[account(
        init,
        payer = farmer,
        space = 8 + 32 + 4 + 50 + 8 + 8 + 8 + 1 + 1
    )]
    pub policy: Account<'info, Policy>,

    #[account(mut)]
    pub farmer: Signer<'info>,

    pub system_program: Program<'info, System>,
}