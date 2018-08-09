from django.core.management.base import BaseCommand
from products.models import Portfolio, Asset
from iexfinance import Stock


class Command(BaseCommand):
    def handle(self, *args, **kwargs):
        for portfolio in Portfolio.objects.all():
            for stock in portfolio.asset_set.all():
                stock.trading_value = Stock(stock.symbol).get_close()
                stock.stake = stock.trading_value*stock.amount
                stock.save()
