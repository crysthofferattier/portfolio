#!/usr/bin/python3

import sys
import json

FILE = sys.argv[1]
# assets = None


def read_file(file: str) -> json:
    return json.load(open(file))


def calculate_total_per_assets(transactions: json, assets: json) -> None:

    for asset in assets:
        total = 0
        total05 = 0
        total06 = 0
        total07 = 0
        total08 = 0
        total09 = 0
        total10 = 0

        for transaction in transactions:
            if "-05-" in transaction['trade_date']:
                if asset['symbol'] == transaction['asset']['symbol']:
                    total05 += float(transaction['total'])
            elif "-06-" in transaction['trade_date']:
                if asset['symbol'] == transaction['asset']['symbol']:
                    total06 += float(transaction['total'])
            elif "-07-" in transaction['trade_date']:
                if asset['symbol'] == transaction['asset']['symbol']:
                    total07 += float(transaction['total'])
            elif "-08-" in transaction['trade_date']:
                if asset['symbol'] == transaction['asset']['symbol']:
                    total08 += float(transaction['total'])
            elif "-09-" in transaction['trade_date']:
                if asset['symbol'] == transaction['asset']['symbol']:
                    total09 += float(transaction['total'])
            elif "-10-" in transaction['trade_date']:
                if asset['symbol'] == transaction['asset']['symbol']:
                    total10 += float(transaction['total'])

            total += float(transaction['total'])

        print(f"{asset['symbol']}/05: R$ {total05:.2f}")
        print(f"{asset['symbol']}/06: R$ {total06:.2f}")
        print(f"{asset['symbol']}/07: R$ {total07:.2f}")
        print(f"{asset['symbol']}/08: R$ {total08:.2f}")
        print(f"{asset['symbol']}/09: R$ {total09:.2f}")
        print(f"{asset['symbol']}/10: R$ {total10:.2f}")
        print()

    print(f"TOTAL: R$ {total:.2f}")


def calculate_total_per_month(transactions: json, assets: json) -> None:
    months = ["-05-", "-06-", "-07-", "-08-", "-09-", "-10-"]

    for month in months:
        bbas3 = 0.00
        itsa4 = 0.00
        petr4 = 0.00
        taee11 = 0.00
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

        print(month)
        print(f"BBAS3:  R$ {bbas3:.2f}")
        print(f"ITSA4:  R$ {itsa4:.2f}")
        print(f"PETR4:  R$ {petr4:.2f}")
        print(f"TAEE11: R$ {taee11:.2f}")
        print(f"BCFF11: R$ {bcff11:.2f}")
        print(f"CPTS11: R$ {cpts11:.2f}")
        print(f"HGLG11: R$ {hglg11:.2f}")
        print(f"KNCR11: R$ {kncr11:.2f}")
        print(f"XPLG11: R$ {xplg11:.2f}")


def get_transaction_total(month, transaction) -> float:
    if month in transaction['trade_date']:
        return float(transaction['total'])
    else:
        return 0.00


def main():
    assets = read_file("assets.json")
    transactions1 = read_file(FILE)['data']

    # calculate_total_per_assets(transactions, assets)
    calculate_total_per_month(transactions1, assets)


if __name__ == "__main__":
    main()
