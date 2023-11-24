from django.db import models
from django.utils.translation import gettext_lazy as _

from core.models import TimeStampMixin


class PortfolioWorkImage(TimeStampMixin):
    portfolio_work = models.ForeignKey(
        "users.EmployeePortfolioWork",
        on_delete=models.CASCADE,
        related_name="images",
        verbose_name=_("Portfolio Work"),
    )
    src = models.ImageField(_("Source"), upload_to="media/users/portfolio_works/")
