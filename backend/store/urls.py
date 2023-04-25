from django.urls import path
from . import views

urlpatterns = [
    path('product-list/', views.ProdcutListView.as_view()),
    path('order/', views.OrderView.as_view()),
    path('order-create/', views.OrderViewCreate.as_view()),
    path('order-item-create/', views.OrderItemViewCreate.as_view()),
    path('cart/', views.CartView.as_view()),
]
