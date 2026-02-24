use anchor_lang::prelude::*;

declare_id!("EjbLLZGhdfSKfJa9R3kr5py7biz2oPrZVu9iPDmUA9NX");

#[program]
pub mod solana_insurance_program {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
