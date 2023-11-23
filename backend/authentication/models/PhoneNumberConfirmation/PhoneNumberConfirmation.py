from django.db import models
from django.utils.translation import gettext_lazy as _

from phonenumber_field.modelfields import PhoneNumberField

from authentication.models import ConfirmationMixin


class PhoneNumberConfirmation(ConfirmationMixin):
    auth_profile = models.ForeignKey(
        "users.UserAuthProfile",
        verbose_name=_("Auth Profile"),
        related_name="phone_number_confirmations",
        on_delete=models.CASCADE,
    )
    phone_number = PhoneNumberField(
        _("Phone Number"), null=False, blank=False, unique=True
    )
    code = models.CharField(_("Code"), max_length=50)
    number_of_attempts = models.PositiveSmallIntegerField(
        _("Number of attempts"), default=0
    )
    last_attempt_at = models.DateField(_("Last Attempt At"), blank=True, null=True)
