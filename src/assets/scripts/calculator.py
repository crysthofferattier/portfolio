#!/usr/bin/python3

import sys
import json

FILE = sys.argv[1]


def read_file(file: str) -> json:
    return json.load(open(file))


def calculate_total_per_month(transactions: json) -> None:
    months = ["-05-", "-06-", "-07-", "-08-", "-09-", "-10-", "-11-"]

    for month in months:
        total = 0.00
        bbas3 = 0.00
        itsa4 = 0.00
        petr4 = 0.00
        taee11 = 0.00
        sanb11 = 0.00
        bcff11 = 0.00
        cpts11 = 0.00
        hglg11 = 0.00
        kncr11 = 0.00
        xplg11 = 0.00

        for transaction in transactions:
            symbol = transaction['asset']['symbol']

            match symbol:
                case "BBAS3":
                    bbas3 += get_transaction_total(month, transaction)
                case "ITSA4":
                    itsa4 += get_transaction_total(month, transaction)
                case "PETR4":
                    petr4 += get_transaction_total(month, transaction)
                case "TAEE11":
                    taee11 += get_transaction_total(month, transaction)
                case "SANB11":
                    sanb11 += get_transaction_total(month, transaction)
                case "BCFF11":
                    bcff11 += get_transaction_total(month, transaction)
                case "CPTS11":
                    cpts11 += get_transaction_total(month, transaction)
                case "HGLG11":
                    hglg11 += get_transaction_total(month, transaction)
                case "KNCR11":
                    kncr11 += get_transaction_total(month, transaction)
                case "XPLG11":
                    xplg11 += get_transaction_total(month, transaction)

            total += float(transaction['total'])

        print(month)
        print(f"BBAS3:  R$ {bbas3:.2f}")
        print(f"ITSA4:  R$ {itsa4:.2f}")
        print(f"PETR4:  R$ {petr4:.2f}")
        print(f"TAEE11: R$ {taee11:.2f}")
        print(f"SANB11: R$ {sanb11:.2f}")
        print(f"BCFF11: R$ {bcff11:.2f}")
        print(f"CPTS11: R$ {cpts11:.2f}")
        print(f"HGLG11: R$ {hglg11:.2f}")
        print(f"KNCR11: R$ {kncr11:.2f}")
        print(f"XPLG11: R$ {xplg11:.2f}")
        print()

    print(f"TOTAL: R$ {total:.2f}")


def get_transaction_total(month, transaction) -> float:
    if month in transaction['trade_date']:
        return float(transaction['total'])
    else:
        return 0.00


def main() -> None:
    transactions = read_file(FILE)['data']

    calculate_total_per_month(transactions)


if __name__ == "__main__":
    main()
