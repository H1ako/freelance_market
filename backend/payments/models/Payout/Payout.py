from django.db import models
from django.utils.translation import gettext_lazy as _

from core.models import TimeStampMixin


class Payout(TimeStampMixin):
    PROCESSING = 0
    SUCCESS = 1
    FAIL = 2

    PAYOUT_STATUSES = (
        (PROCESSING, "Processing"),
        (SUCCESS, "Success"),
        (FAIL, "Fail"),
    )

    amount = models.PositiveIntegerField(_("Amount"))
    user = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        related_name="payouts",
        verbose_name=_("User"),
    )
    status = models.CharField(_("Status"), max_length=60, choices=PAYOUT_STATUSES)
