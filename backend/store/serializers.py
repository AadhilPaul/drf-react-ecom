from rest_framework.serializers import ModelSerializer, Serializer
from rest_framework import serializers
from .models import Product, Order, OrderItem
from users.models import MyUser

class ProductSerializer(ModelSerializer):
    class Meta:
        model = Product
        fields = ('name', 'price', 'image', 'digital')

class Customer(ModelSerializer):
    class Meta:
        model = MyUser
        fields = ("id", "username", "email")

class OrderSerializer(ModelSerializer):
    customer = Customer()
    class Meta:
        model = Order
        fields = "__all__"


class OrderItemSerializer(ModelSerializer):
    product = ProductSerializer()
    class Meta:
        model = OrderItem
        fields = "__all__"


class OrderCreateSerializer(ModelSerializer):
    class Meta:
        model = Order
        fields = ('complete', )

class OrderItemCreateSerializer(Serializer):
    name = serializers.CharField(max_length=200)
    quantity = serializers.IntegerField()
