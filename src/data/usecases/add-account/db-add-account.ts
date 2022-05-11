import {
  AddAccount, AddAccountModel, AccountModel, Encrypter, AddAccountRepository,
} from './db-add-account-protocols';

export default class DbAddAccount implements AddAccount {
  private readonly encrypter: Encrypter;

  private readonly addAccountRepository: AddAccountRepository;

  constructor(encrypter: Encrypter, addAccountRepository: AddAccountRepository) {
    this.encrypter = encrypter;
    this.addAccountRepository = addAccountRepository;
  }

  async add(accountData: AddAccountModel): Promise<AccountModel> {
    const hashedPassword = await this.encrypter.encrypt(accountData.password);
    await this.addAccountRepository.add({ ...accountData, password: hashedPassword });
    // eslint-disable-next-line no-promise-executor-return
    return new Promise((resolve) => resolve({
      id: 'string',
      name: 'string',
      email: 'string',
      password: 'string',
    }));
  }
}
