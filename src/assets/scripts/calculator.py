#!/usr/bin/python3

import sys
import json

FILE = sys.argv[1]
#assets = None


def read_file(file: str) -> json:
    return json.load(open(file))


def calculate_total_per_assets(data: json, assets: json) -> None:   

    for asset in assets:
        total = 0
        total05 = 0
        total06 = 0
        total07 = 0
        total08 = 0
        total09 = 0

        for d in data:
            if "-05-" in d['trade_date']:
                if asset['symbol'] == d['asset']['symbol']:                
                    total05 += float(d['total'])
            elif "-06-" in d['trade_date']:
                if asset['symbol'] == d['asset']['symbol']:
                    total06 += float(d['total'])
            elif "-07-" in d['trade_date']:
                if asset['symbol'] == d['asset']['symbol']:
                    total07 += float(d['total'])
            elif "-08-" in d['trade_date']:
                if asset['symbol'] == d['asset']['symbol']:
                    total08 += float(d['total'])
            elif "-09-" in d['trade_date']:
                if asset['symbol'] == d['asset']['symbol']:
                    total09 += float(d['total'])

            total += float(d['total'])
        
        print(f"{asset['symbol']}/05: R$ {total05:.2f}")
        print(f"{asset['symbol']}/06: R$ {total06:.2f}")
        print(f"{asset['symbol']}/07: R$ {total07:.2f}")
        print(f"{asset['symbol']}/08: R$ {total08:.2f}")
        print(f"{asset['symbol']}/09: R$ {total09:.2f}")
        print()
    
    print(f"TOTAL: R$ {total:.2f}")


def main():
    assets = read_file("assets.json")
    data = read_file(FILE)['data']

    calculate_total_per_assets(data, assets)


if __name__ == "__main__":
    main()
