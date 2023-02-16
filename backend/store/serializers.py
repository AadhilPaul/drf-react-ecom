from rest_framework.serializers import ModelSerializer
from .models import Product, Order, OrderItem
from users.models import MyUser

class ProductSerializer(ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"

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