

export class AddBasicProductCommand {
  constructor(
    public readonly name: string,
    public readonly price: number,
    public readonly currency: string, 
    public readonly quantity: number,
    )
    {}
}
 
