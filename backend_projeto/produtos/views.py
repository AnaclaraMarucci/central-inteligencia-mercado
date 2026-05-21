from rest_framework import viewsets
from .models import ProdutoColetado
from .serializers import ProdutoColetadoSerializer


class ProdutoColetadoViewSet(viewsets.ModelViewSet):
    queryset = ProdutoColetado.objects.all().order_by('-data_coleta')
    serializer_class = ProdutoColetadoSerializer
