from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name="home"),
    path('retorna_total_vendido', views.retorna_total_vendido, name="retorna_total_vendido"),
    path('relatorio_faturamento', views.relatorio_faturamento, name="relatorio_faturamento"),
    path('relatorio_produtos', views.relatorio_produtos, name="relatorio_produtos"),
    path('relatorio_funcionario', views.relatorio_funcionario, name="relatorio_funcionario"),
    path('despesas_total', views.despesas_total, name="despesas_total"),
    path('relatorio_despesas', views.relatorio_despesas, name="relatorio_despesas"),
    path('retorna_lucro', views.retorna_lucro, name="retorna_lucro"),

]