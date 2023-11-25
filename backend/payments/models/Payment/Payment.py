from django.db import models
from django.utils.translation import gettext_lazy as _

from core.models import TimeStampMixin


class Payment(TimeStampMixin):
    PROCESSING = 0
    SUCCESS = 1
    FAIL = 2

    PAYMENT_STATUSES = (
        (PROCESSING, "Processing"),
        (SUCCESS, "Success"),
        (FAIL, "Fail"),
    )

    amount = models.PositiveIntegerField(_("Amount"))
    from_user = models.ForeignKey(
        "users.User",
        on_delete=models.SET_NULL,
        related_name="sent_payments",
        verbose_name=_("From User"),
        null=True,
    )
    to_user = models.ForeignKey(
        "users.User",
        on_delete=models.SET_NULL,
        related_name="received_payments",
        verbose_name=_("To User"),
        null=True,
    )
    status = models.CharField(_("Status"), max_length=60, choices=PAYMENT_STATUSES)
