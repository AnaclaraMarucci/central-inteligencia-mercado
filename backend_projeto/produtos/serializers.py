from rest_framework import serializers
from .models import ProdutoColetado

class ProdutoColetadoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProdutoColetado
        fields = '__all__' 