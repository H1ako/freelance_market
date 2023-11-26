from django.db import models
from django.utils.translation import gettext_lazy as _

from core.models import TimeStampMixin


class Achievement(TimeStampMixin):
    title = models.CharField(_("Description"), max_length=70)
    description = models.TextField(_("Description"), null=True, blank=True)
    icon = models.ImageField(_("Icon"), upload_to="static/achievements/icons/")

    @property
    def icon_url(self):
        # TODO: This
        return ""
