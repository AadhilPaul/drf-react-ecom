from django.shortcuts import render, get_object_or_404
from users.models import MyUser
from .models import Product, Order, OrderItem
from rest_framework import generics, permissions, status
from rest_framework.response import Response
from .serializers import ProductSerializer, OrderSerializer, OrderItemSerializer

# Create your views here.


class ProdcutListView(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class OrderView(generics.RetrieveAPIView):
    serializer_class = OrderSerializer
    permission_classes = (permissions.AllowAny, )

    def get(self, request, format=None, **kwargs):
        order = Order.objects.filter(customer=self.request.user).first()
        return Response(self.serializer_class(order).data, status=status.HTTP_200_OK)

class OrderItemView(generics.ListAPIView):
    serializer_class = OrderItemSerializer
    permission_classes = (permissions.AllowAny, )

    def get_queryset(self):
        order = Order.objects.filter(customer=self.request.user).first()
        return OrderItem.objects.filter(order=order)
