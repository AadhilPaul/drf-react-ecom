from django.urls import path
from . import views

urlpatterns = [
    path('product-list/', views.ProdcutListView.as_view()),
    path('order/', views.OrderView.as_view()),
    path('order-item/', views.OrderItemView.as_view())
]
