from django.contrib import admin
from .models import ProdutoColetado  # Importa o nome exato do seu modelo

# Registra o modelo corrigido no painel de administração
admin.site.register(ProdutoColetado)