from django.db import models

class ProdutoColetado(models.Model):
    nome = models.CharField(max_length=255)
    preco_atual = models.DecimalField(max_digits=10, decimal_places=2)
    disponivel = models.BooleanField(default=True)
    data_coleta = models.DateTimeField(auto_now_add=True)
    alerta_baixa = models.BooleanField(default=False)

    def __str__(self):  
        
        return f"{self.nome} - R$ {self.preco_atual}"
