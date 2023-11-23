from django.db import models
from django.utils.translation import gettext_lazy as _

from core.models import TimeStampMixin


class ConfirmationMixin(TimeStampMixin):
    SENT = 0
    APPROVED = 1
    ERROR = 2
    EXPIRED = 3

    CONFIRMATION_STATUSES = (
        (SENT, "Sent"),
        (APPROVED, "Approved"),
        (ERROR, "Error"),
        (EXPIRED, "Expired"),
    )

    code = models.CharField(_("Code"), max_length=50)
    number_of_attempts = models.PositiveSmallIntegerField(
        _("Number of attempts"), default=0
    )
    status = models.CharField(_("Status"), max_length=50, choices=CONFIRMATION_STATUSES)
    last_attempt_at = models.DateField(_("Last Attempt At"), blank=True, null=True)

    class Meta:
        abstract = True
