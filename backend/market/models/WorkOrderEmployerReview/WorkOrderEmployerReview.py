from django.db import models
from django.utils.translation import gettext_lazy as _

from core.models import TimeStampMixin


class WorkOrderEmployerReview(TimeStampMixin):
    RATING_CHOICES = (
        (0, "1"),
        (1, "2"),
        (2, "3"),
        (3, "4"),
        (4, "5"),
    )

    work_order = models.OneToOneField(
        "market.WorkOrder",
        on_delete=models.SET_NULL,
        related_name="employer_review",
        verbose_name=_("Work Order"),
        null=True,
    )
    comment = models.TextField(_("Comment"))
    rating = models.PositiveSmallIntegerField(_("Rating"), choices=RATING_CHOICES)
