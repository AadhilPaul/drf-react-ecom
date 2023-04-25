from django.shortcuts import render, get_object_or_404
from users.models import MyUser
from .models import Product, Order, OrderItem
from rest_framework import generics, permissions, status
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import OrderCreateSerializer, ProductSerializer, OrderSerializer, OrderItemCreateSerializer, OrderItemSerializer

# Create your views here.


class ProdcutListView(generics.ListAPIView):
    permission_classes = (permissions.IsAuthenticated, )
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class OrderView(generics.RetrieveAPIView):
    serializer_class = OrderSerializer
    permission_classes = (permissions.AllowAny, )

    def get(self, request, format=None, **kwargs):
        order = Order.objects.filter(customer=self.request.user).first()
        return Response(self.serializer_class(order).data, status=status.HTTP_200_OK)

class OrderViewCreate(APIView):
    serializer_class = OrderCreateSerializer
    permission_classes = (permissions.IsAuthenticated, )

    def post(self, request, format=None, **kwargs):
        serializer = OrderCreateSerializer(data=request.data)
        if serializer.is_valid():
            complete = serializer.data.get('complete')
            customer = request.user
            queryset = Order.objects.filter(customer=customer, complete=False)
            if queryset.exists():
                return Response({"Error": "You can't make another one until the other one is complete."})
            order = Order(customer=customer, complete=complete)
            order.save()
            return Response(OrderSerializer(order).data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            

class OrderItemViewCreate(APIView):
    serializer_class = OrderItemCreateSerializer
    permission_classes = (permissions.IsAuthenticated, )

    def post(self, request, format=None, **kwargs):
        serializer = OrderItemCreateSerializer(data=request.data)
        if serializer.is_valid():
            name = serializer.data.get('name')
            quantity = serializer.data.get('quantity')
            product = Product.objects.filter(name=name).first()
            order = Order.objects.filter(customer=request.user).first()
            queryset = OrderItem.objects.filter(product=product, order=order)
            if queryset.exists():
                order_item = queryset[0]
                order_item.quantity += 1
                order_item.save(update_fields=['quantity'])
                return Response(OrderItemSerializer(order_item).data, status=status.HTTP_201_CREATED)
            order_item = OrderItem(product=product, order=order, quantity=quantity)
            order_item.save()
            return Response(OrderItemSerializer(order_item).data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class CartView(generics.ListAPIView):
    serializer_class = OrderItemSerializer
    permission_classes = (permissions.IsAuthenticated, )

    def get_queryset(self):
        order = Order.objects.filter(customer=self.request.user).first()
        cart_items = OrderItem.objects.filter(order=order)
        return cart_items

