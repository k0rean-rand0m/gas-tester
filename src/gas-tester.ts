interface Receipt {
    gasUsed: number
}

interface Tx {
    receipt: Receipt
}

class GasReturn {
    toCompare: number

    constructor(toCompare: number) {
        this.toCompare = toCompare;
    }

    lessThan(receipt: Tx): boolean {
        return this.toCompare < receipt.receipt.gasUsed;
    }
    moreThan(receipt: Tx): boolean {
        return this.toCompare > receipt.receipt.gasUsed;
    }
}

export function gas(receipt: Tx): GasReturn {
    return new GasReturn(receipt.receipt.gasUsed)
}